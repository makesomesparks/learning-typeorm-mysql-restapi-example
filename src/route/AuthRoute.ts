import { AuthController } from "src/controller/auth/AuthController";

export const AuthRoute =
  [
    {
      method: "put",
      route: "/auth/user/sign-up",
      controller: AuthController,
      action: "signUp",
      permission: "guest"
    },
    {
      method: "put",
      route: "/auth/user/sign-in",
      controller: AuthController,
      action: "signIn",
      permission: "guest"
    },
    {
      method: "put",
      route: "/auth/user/sign-out",
      controller: AuthController,
      action: "signOut",
      permission: "guest"
    },
    {
      method: "put",
      route: "/auth/user/third-party",
      controller: AuthController,
      action: "thirdParty",
      permission: "guest"
    },
  ];

