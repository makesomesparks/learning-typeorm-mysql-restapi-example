export const SecurityUtils =
{
  Bcrypt: require('bcrypt'),

  bcrypt: (str: string, salt: number = 10) =>
  {
    return SecurityUtils.Bcrypt.hashSync(str, salt);
  },
  bcryptCompare: (plainPassword: string, hash: string) =>
  {
    return SecurityUtils.Bcrypt.compareSync(plainPassword, hash);
  },
}
