import { getConnection, getRepository } from "typeorm";
import { ViewUser } from "../entity/view/ViewUser";

export const UserUtils =
{
  checkExistUserEmail: async (email: string): Promise<"exist-verified" | "exist-not-verified" | "empty"> =>
  {
    let userRepository = getRepository(ViewUser);
    let viewUser: ViewUser = await userRepository.createQueryBuilder().where("email = :id", { "email": email }).getOne();

    if (typeof viewUser === 'undefined')
    {
      return "empty";
    }
    else
    {
      if (!viewUser.isEmailVerify)
      {
        return "exist-not-verified";
      }

      return "exist-verified";
    }
  }
}