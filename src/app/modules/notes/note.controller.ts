import type { Request, Response } from "express";
import { noteServices } from "./note.service.ts";
import catchHandel from "../../shared/catchHandel.ts";

const createNote = catchHandel(async (req: Request, res: Response) => {
  const data = req.body;
  const result = await noteServices.createNote(data);

  res.status(200).json(result);
});

const getAllNotes = catchHandel(async (req: Request, res: Response) => {
  const result = await noteServices.getNotes();

  res.status(200).json(result);
});

const getSingle = catchHandel(async (req: Request, res: Response) => {
  const id = req.params.id as string;
  const result = await noteServices.getSingle(id);

  res.status(200).json(result);
});

const updateNote = catchHandel(async (req: Request, res: Response) => {
  const id = req.params.id as string;
  const data = req.body;
  const result = await noteServices.updateNote(id, data);

  res.status(200).json(result);
});

const deleteNote = catchHandel(async (req: Request, res: Response) => {
  const id = req.params.id as string;
  const result = await noteServices.deleteNote(id);

  res.status(200).json(result);
});

export const noteController = {
  createNote,
  getAllNotes,
  getSingle,
  updateNote,
  deleteNote,
};
