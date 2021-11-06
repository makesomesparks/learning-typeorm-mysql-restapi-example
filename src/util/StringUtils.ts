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
};