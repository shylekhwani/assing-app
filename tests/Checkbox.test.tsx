import { render, screen, fireEvent } from '@testing-library/react';
import { CheckBox } from '@/app/components/HabitList/CheckBox';

describe('CheckBox', () => {
  it('should toggle checkbox when clicked', () => {
    const handleChange = jest.fn();

    render(<CheckBox checked={false} onChange={handleChange} />);

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();

    fireEvent.click(checkbox);
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
