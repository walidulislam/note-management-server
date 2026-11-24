import express from "express";
import { authRouter } from "../modules/auth/auth.router.ts";
import { noteRouter } from "../modules/notes/note.route.ts";

const router = express.Router();

const routers = [
  {
    path: "/auth",
    route: authRouter,
  },
  {
    path: "/note",
    route: noteRouter,
  },
];

routers.forEach((f) => router.use(f.path, f.route));

export const allRouter = router;
