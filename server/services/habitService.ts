import habitRepository from "../repositories/habitRepository";
import { IHabit } from "../schemas/habitSchema"; //  habit type interface

export const createHabitService = async function (habitData: IHabit) {
  try {
    const response = await habitRepository.create(habitData);
    return response;
  } catch (error) {
    console.log(error)
    throw new Error("Error creating habit");
  }
};

export const getAllHabitsService = async function () {
  try {
    const response = await habitRepository.getAll();
    return response;
  } catch (error) {
    console.log(error)
    throw new Error("Error getting all habit");
  }
};

export const deleteHabitByIdService = async function (habitId: string) {
  try {
    const response = await habitRepository.delete(habitId);
    return response;
  } catch (error) {
    console.log(error)
    throw new Error("Error in deleting habit");
  }
};