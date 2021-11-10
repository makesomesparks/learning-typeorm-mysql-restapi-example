import { ViewUser } from "src/model/entity/view/ViewUser";
import { createConnection, getRepository } from "typeorm";

export const UserUtils =
{
  checkExistUserEmail: async (email: string): Promise<"exist-verified" | "exist-not-verified" | "empty"> =>
  {

    let viewUser: ViewUser = await getRepository(ViewUser).createQueryBuilder().where("email = :email", { "email": email }).getOne();

    if (typeof viewUser === 'undefined')
    {
      return 'empty';
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