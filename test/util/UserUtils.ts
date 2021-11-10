import { expect } from "chai";
import { UserUtils } from "src/util/UserUtils";
import { createConnection } from "typeorm";

describe('UserUtils', () =>
{
  it('checkExistUserEmail("dev@ctrls.to")', async () =>
  {
    await createConnection(require("ormconfig"));
    let a: any = await UserUtils.checkExistUserEmail("dev@ctrls.to");
    expect(a).to.not.equal(undefined);
  });
});