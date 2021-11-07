export const StringUtils =
{
  leftPad: (str: any, padLen: number, padStr: string = ' ') =>
  {
    str = StringUtils.toOnlyString(str).trim();

    if (padStr.length > padLen)
    {
      return str;
    }

    while (str.length < padLen) { str = padStr + str; }

    return str;
  },
  rightPad: (str: any, padLen: number, padStr: string = ' ') =>
  {
    str = StringUtils.toOnlyString(str).trim();

    if (padStr.length > padLen)
    {
      return str;
    }

    while (str.length < padLen) { str += padStr; }
    return str;
  },
  toOnlyString: (str: any): string =>
  {
    switch (typeof str)
    {
      case 'boolean':
        return str.valueOf().toString();
        break;

      case 'number':
        return '' + str;
        break;

      case 'string':
        return str;
        break;

      case 'undefined':
      default:
        return '';
        break;
    }
  },
  regex:
  {
    isValidEmail: (email: string): boolean =>
    {
      if (typeof email === 'undefined' || email === null)
      {
        return false;
      }

      // length for ccTLDs, handshake domain
      let regex = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{1,30}$/;

      if (regex.test(email) !== true)
      {
        return false;
      }

      return true;
    },
    isValidId: (id: string): boolean =>
    {
      if (typeof id === 'undefined' || id === null)
      {
        return false;
      }

      // length 6-50, e.g. "0000abcd", "taegyun.ko", "ctrl-s", "help_me"
      let regex = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z]){5,49}$/;

      if (regex.test(id) !== true)
      {
        return false;
      }

      return true;
    },
    isValidPassword: (password: string): boolean =>
    {
      if (typeof password === 'undefined' || password === null)
      {
        return false;
      }

      // length 7-70, must contain at least one number and special character, e.g. 'asdf44^', '1122ws@@'
      let regex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*\W).{7,70}$/;

      if (regex.test(password) !== true)
      {
        return false;
      }

      return true;
    }
  },
};