import express from "express";

import { deleteUser, getAllUsers, updateUser } from "../controllers/users";
import { isAuthenticated, isOwner } from "../middlewares";

export default (router: express.Router) => {
  router.get("/users", isAuthenticated as any, getAllUsers as any);
  router.delete(
    "/users/:id",
    isAuthenticated as any,
    isOwner as any,
    deleteUser as any
  );
  router.patch(
    "/users/:id",
    isAuthenticated as any,
    isOwner as any,
    updateUser as any
  );
};
