import express from "express";
import { categoryController } from "./category.controller.ts";

const router = express.Router();

router.post("/create", categoryController.createCategory);
router.get("/categories", categoryController.getAllCategories);
router.get("/categories/:id", categoryController.getSingleCategory);
router.patch("/update/:id", categoryController.updateCategory);
router.delete("/delete/:id", categoryController.deleteCategory);

export const categoryRouter = router;
