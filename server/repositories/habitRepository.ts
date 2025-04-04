import Habit, { IHabit } from "../schemas/habitSchema";
import crudRepository from "./crudRepository";

const habitRepository = {
  ...crudRepository<IHabit>(Habit),
};

export default habitRepository;