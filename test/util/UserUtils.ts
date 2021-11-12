import { expect } from "chai";
import { UserRepository } from "src/repository/user/UserRepository";
import { createConnection } from "typeorm";

describe('UserUtils', () =>
{
  it('checkExistUserEmail("dev@ctrls.to")', async () =>
  {
    await createConnection(require("ormconfig"));
    let a: any = await UserRepository.getUserEmail("dev@ctrls.to");
    expect(a).to.not.equal(undefined);
  });

  it('checkExistUserId("ctrls")', async () =>
  {
    // await createConnection(require("ormconfig"));
    // let a: any = await UserUtils.checkExistUserEmail("dev@ctrls.to");
    // expect(a).to.not.equal(undefined);
  });

  it('checkExistReserve("ctrls")', async () =>
  {
    // await createConnection(require("ormconfig"));
    // let a: any = await UserUtils.checkExistUserEmail("dev@ctrls.to");
    // expect(a).to.not.equal(undefined);
  });

});