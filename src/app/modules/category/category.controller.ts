import type { Request, Response } from "express";
import { categoryServices } from "./category.service.ts";
import catchHandel from "../../shared/catchHandel.ts";

const createCategory = catchHandel(async (req: Request, res: Response) => {
  const data = req.body;
  const result = await categoryServices.createCategory(data);

  res.status(200).json(result);
});

const getAllCategories = catchHandel(async (req: Request, res: Response) => {
  const result = await categoryServices.getCategories();

  res.status(200).json(result);
});

const getSingleCategory = catchHandel(async (req: Request, res: Response) => {
  const id = req.params.id as string;
  const result = await categoryServices.getSingleCategory(id);

  res.status(200).json(result);
});

const updateCategory = catchHandel(async (req: Request, res: Response) => {
  const id = req.params.id as string;
  const data = req.body;
  const result = await categoryServices.updateCategory(id, data);

  res.status(200).json(result);
});

const deleteCategory = catchHandel(async (req: Request, res: Response) => {
  const id = req.params.id as string;
  const result = await categoryServices.deleteCategory(id);

  res.status(200).json(result);
});

export const categoryController = {
  createCategory,
  getAllCategories,
  getSingleCategory,
  updateCategory,
  deleteCategory,
};
