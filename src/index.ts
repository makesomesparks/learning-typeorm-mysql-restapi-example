import * as bodyParser from 'body-parser';
import * as express from 'express';
import { Request, Response } from 'express';
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { Routes } from 'src/routes';
import { StringUtils } from 'src/util/StringUtils';

createConnection()
  .then(async (connection) =>
  {
    const app = express();
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    Routes.forEach((route) =>
    {
      let x = new (route.controller as any)()[route.action];

      console.log(`[${typeof x !== 'undefined' ? 'O' : ' '}] ${StringUtils.rightPad(route.method.toUpperCase(), 6)} ${route.route}`);

      if (typeof x !== 'undefined')
      {
        (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) =>
        {
          if (route.permission != "guest")
          {
            // Permission; somthing codes ...
          }

          if (typeof route.controller[route.action] !== 'undefined')
          {
            const result = new (route.controller as any)()[route.action](req, res, next);

            if (result instanceof Promise)
            {
              result.then((result) => result !== null && result !== undefined ? res.send(result) : undefined);
            }
            else if (result !== null && result !== undefined)
            {
              res.json(result);
            }
          }
        });
      }
    });

    app.listen(3000);
    console.info("server listening 3000");
  })
  .catch((error) => console.log(error));
