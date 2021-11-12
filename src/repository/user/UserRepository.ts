import { ViewUser } from "src/model/entity/view/ViewUser";
import { createConnection, getRepository } from "typeorm";

export const UserRepository =
{
  getUserEmail: async (email: string): Promise<ViewUser> =>
  {
    return await getRepository(ViewUser).createQueryBuilder().where("email = :email", { "email": email }).getOne();
  },
  getUserId: async (id: string): Promise<ViewUser> =>
  {
    return await getRepository(ViewUser).createQueryBuilder().where("id = :id", { "id": id }).getOne();
  },
}