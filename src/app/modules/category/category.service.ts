import { prisma } from "../../../lib/index.ts";
import type { ICategory } from "./category.interface.ts";

const createCategory = async (data: ICategory) => {
  const category = await prisma.category.create({
    data: {
      name: data.name,
      userId: data.userId,
    },
  });
  return category;
};

const getCategories = async () => {
  const categories = await prisma.category.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return categories;
};

const getSingleCategory = async (id: string) => {
  const category = await prisma.category.findUnique({
    where: {
      id,
    },
  });
  return category;
};

const updateCategory = async (id: string, data: Partial<ICategory>) => {
  const update = await prisma.category.update({
    where: {
      id,
    },
    data,
  });
  return update;
};

const deleteCategory = async (id: string) => {
  const result = await prisma.category.delete({
    where: {
      id,
    },
  });
  return result;
};

export const categoryServices = {
  createCategory,
  getCategories,
  getSingleCategory,
  updateCategory,
  deleteCategory,
};
