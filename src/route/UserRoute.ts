import { UserController } from "../controller/user/UserController";
import { UserPasswordController } from "../controller/user/UserPasswordController";
import { UserProfileController } from "../controller/user/UserProfileController";
import { UserTagController } from "../controller/user/UserTagController";

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
      route: "/user/:id",
      controller: UserController,
      action: "one",
      permission: "owner"
    },
    {
      method: "put",
      route: "/user",
      controller: UserController,
      action: "put",
      permission: "guest"
    },
    {
      method: "delete",
      route: "/user/:id",
      controller: UserController,
      action: "delete",
      permission: "owner"
    },
    {
      method: "fetch",
      route: "/user/:id",
      controller: UserController,
      action: "fetch",
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
      method: "fetch",
      route: "/users/profile/:id",
      controller: UserProfileController,
      action: "fetch",
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
      method: "fetch",
      route: "/users/password/:id",
      controller: UserPasswordController,
      action: "fetch",
      permission: "owner"
    },

    // User Tag
    {
      method: "get",
      route: "/users/tags/:id",
      controller: UserTagController,
      action: "list",
      permission: "guest"
    },
    {
      method: "delete",
      route: "/users/tag/:id",
      controller: UserTagController,
      action: "delete",
      permission: "owner"
    },
    {
      method: "put",
      route: "/users/tag/:id",
      controller: UserTagController,
      action: "put",
      permission: "owner"
    }
  ];

