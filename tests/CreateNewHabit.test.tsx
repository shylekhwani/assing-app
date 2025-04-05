import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { CreateNewHabit } from '@/app/components/Habits/CreateNewHabit';
import '@testing-library/jest-dom';
import { useRouter } from 'next/navigation';
import { useCreateHabitsStore } from '@/app/store';

jest.mock('next/navigation', () => ({
    useRouter: jest.fn(),
  }));
  
  jest.mock('@/app/store', () => ({
    useCreateHabitsStore: jest.fn(),
  }));
  
  describe('CreateNewHabit Component', () => {
    const mockPush = jest.fn();
    const mockAddHabits = jest.fn();
    const mockSetGoal = jest.fn();
    const mockSetHabit = jest.fn();
  
    beforeEach(() => {
      (useCreateHabitsStore as unknown as jest.Mock).mockReturnValue({
        goal: '',
        habit: '',
        habitType: '',
        period: '',
        habits: [],
        checkedHabits: {},
        setGoal: mockSetGoal,
        setHabit: mockSetHabit,
        setHabitType: jest.fn(),
        setPeriod: jest.fn(),
        addHabits: mockAddHabits,
        toggleHabitCheck: jest.fn(),
        getAllHabits: jest.fn(),
      });
  
      (useRouter as jest.Mock).mockReturnValue({
        push: mockPush,
      });
  
      render(<CreateNewHabit />);
  
      // Wait until modal is in the DOM and then mock showModal
      const modal = document.getElementById('my_modal_3') as HTMLDialogElement;
  
      if (modal) {
        // 👇 Mock showModal before test uses it
        modal.showModal = jest.fn();
        modal.close = jest.fn();
      }
    });
  
    it('should call addHabits and reset values on submit', async () => {
        const addBtn = screen.getByRole('button', { name: '+' });
        fireEvent.click(addBtn);
      
        // manually make the modal visible
        const modal = document.getElementById('my_modal_3') as HTMLDialogElement;
        if (modal) {
          Object.defineProperty(modal, 'open', { value: true, configurable: true });
        }
      
        const goalInput = screen.getAllByPlaceholderText('Enter Your Goal')[0];
        const habitInput = screen.getAllByPlaceholderText('Enter Your Goal')[1];
        
        // 👇 Wait for the "Create New" button to appear (visible in modal)
        const submitButton = await screen.findByRole('button', { name: /create new/i });
      
        fireEvent.change(goalInput, { target: { value: 'Wake up early' } });
        fireEvent.change(habitInput, { target: { value: 'Morning Walk' } });
        fireEvent.click(submitButton);
      
        await waitFor(() => {
          expect(mockAddHabits).toHaveBeenCalled();
          expect(mockSetGoal).toHaveBeenCalledWith('');
          expect(mockSetHabit).toHaveBeenCalledWith('');
          expect(mockPush).toHaveBeenCalledWith('/doneRoute');
        });
      });  
   })