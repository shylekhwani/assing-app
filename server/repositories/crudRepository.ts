import { Model, Types } from "mongoose";

interface CRUDRepository<T> {
  create: (data: Partial<T>) => Promise<T>;
  getAll: () => Promise<T[]>;
  getById: (id: string) => Promise<T | null>;
  delete: (id: string) => Promise<T | null>;
  update: (id: string, data: Partial<T>) => Promise<T | null>;
  deleteMany: (modelIds: string[]) => Promise<{ deletedCount?: number }>;
}

export default function crudRepository<T>(model: Model<T>): CRUDRepository<T> {
  return {
    create: async function (data) {
      return await model.create(data);
    },
    getAll: async function () {
      return await model.find();
    },
    getById: async function (id) {
      return await model.findById(id);
    },
    delete: async function (id) {
      return await model.findByIdAndDelete(id);
    },
    update: async function (id, data) {
      return await model.findByIdAndUpdate(id, data, { new: true });
    },
    deleteMany: async function (modelIds) {
      return await model.deleteMany({
        _id: {
          $in: modelIds.map((id) => new Types.ObjectId(id)),
        },
      });
    },
  };
}
