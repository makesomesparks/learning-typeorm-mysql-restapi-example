import { UserController } from "../controller/user/UserController";
import { UserPasswordController } from "../controller/user/UserPasswordController";
import { UserProfileController } from "../controller/user/UserProfileController";
import { UserTagController } from "../controller/user/UserTagController";

export const AuthRoute =
  [
    // User
    {
      method: "post",
      route: "/auth/create",
      controller: UserController,
      action: "create",
      permission: "guest"
    },
    {
      method: "post",
      route: "/auth/signin",
      controller: UserController,
      action: "signin",
      permission: "guest"
    },
    {
      method: "post",
      route: "/auth/signin/third-party",
      controller: UserController,
      action: "signinThirdParty",
      permission: "guest"
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
      method: "patch",
      route: "/user/:id",
      controller: UserController,
      action: "patch",
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

