import { prisma } from "../../../lib/index.ts";
import type { INote } from "./note.interface.ts";

const createNote = async (data: INote) => {
  const note = await prisma.note.create({
    data: {
      title: data.title,
      content: data.content,
    },
  });
  return note;
};

const getNotes = async () => {
  const notes = await prisma.note.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return notes;
};

const getSingle = async (id: string) => {
  const note = await prisma.note.findUnique({
    where: {
      id,
    },
  });
  return note;
};

const updateNote = async (id: string, data: INote) => {
  const update = await prisma.note.update({
    where: {
      id,
    },
    data,
  });
  return update;
};

const deleteNote = async (id: string) => {
  const result = await prisma.note.delete({
    where: {
      id,
    },
  });
  return result;
};
export const noteServices = {
  createNote,
  getNotes,
  getSingle,
  updateNote,
  deleteNote,
};
