import { Router } from "express";
import { createUserController } from "./createUser";
import { findUserByIdController } from "./findUserById";

const router = Router();

router.post("/users", (request, response) => {
  return createUserController.handle(request, response);
});

router.get("/users/:id", (request, response) => {
  return findUserByIdController.handle(request, response);
});

export { router };
