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
