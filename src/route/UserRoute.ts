import { UserController } from "src/controller/user/UserController";
import { UserPasswordController } from "src/controller/user/UserPasswordController";
import { UserProfileController } from "src/controller/user/UserProfileController";

export const UserRoute =
  [
    // User
    {
      method: "get",
      route: "/users",
      controller: UserController,
      action: "list",
      permission: "guest"
    },
    {
      method: "get",
      route: "/users/:id",
      controller: UserController,
      action: "one",
      permission: "owner"
    },
    {
      method: "put",
      route: "/users",
      controller: UserController,
      action: "put",
      permission: "guest"
    },
    {
      method: "patch",
      route: "/users/:id",
      controller: UserController,
      action: "patch",
      permission: "owner"
    },
    {
      method: "delete",
      route: "/users/:id",
      controller: UserController,
      action: "delete",
      permission: "owner"
    },

    // User Profiles
    {
      method: "get",
      route: "/users/profile/:id",
      controller: UserProfileController,
      action: "one",
      permission: "guest"
    },
    {
      method: "put",
      route: "/users/profile/:id",
      controller: UserProfileController,
      action: "put",
      permission: "owner"
    },
    {
      method: "patch",
      route: "/users/profile/:id",
      controller: UserProfileController,
      action: "patch",
      permission: "owner"
    },
    {
      method: "get",
      route: "/users/profiles/:id",
      controller: UserProfileController,
      action: "list",
      permission: "owner"
    },

    // User Password
    {
      method: "post",
      route: "/users/password/lost-and-found",
      controller: UserPasswordController,
      action: "post",
      permission: "guest"
    },
    {
      method: "get",
      route: "/users/passwords/:id",
      controller: UserPasswordController,
      action: "list",
      permission: "owner"
    },
    {
      method: "patch",
      route: "/users/password/:id",
      controller: UserPasswordController,
      action: "patch",
      permission: "owner"
    },
  ];

