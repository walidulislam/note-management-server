import express from "express";
import { noteController } from "./note.controller.ts";

const router = express.Router();

router.post("/create", noteController.createNote);
router.get("/notes", noteController.createNote);
router.get("/notes/:id", noteController.getSingle);
router.patch("/update/:id", noteController.updateNote);
router.delete("/delete/:id", noteController.deleteNote);

export const noteRouter = router;
