import * as bodyParser from "body-parser";
import * as express from "express";
import { Request, Response } from "express";
import "reflect-metadata";
import { createConnection } from "typeorm";
import { Routes } from "./routes";

createConnection()
  .then(async (connection) =>
  {
    const app = express();
    app.use(bodyParser.json());

    Routes.forEach((route) =>
    {
      if (typeof ((app as any)[route.method]) !== 'undefined') {
        (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) =>
        {
          if (route.permission != "guest") {
            // Permission; somthing codes ...
          }

          const result = new (route.controller as any)()[route.action](req, res, next);

          if (result instanceof Promise) {
            result.then((result) => result !== null && result !== undefined ? res.send(result) : undefined);
          }
          else if (result !== null && result !== undefined) {
            res.json(result);
          }
        }
        );
      }
    });

    app.listen(3000);
    console.info("server listening 3000");
  })
  .catch((error) => console.log(error));
