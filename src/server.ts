import "reflect-metadata";
import express, { NextFunction, Request, Response } from "express";
import swaggerUi from "swagger-ui-express";
import "express-async-errors";

import { AppErrors } from "./errors/AppErrors";
import { router } from "./routes";
import swaggerFile from "./swagger.json";

import "./database";

import "./shared/container";

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.use(
    (err: Error, request: Request, response: Response, next: NextFunction) => {
        if (err instanceof AppErrors) {
            return response.status(err.statusCode).json({
                message: err.message,
            });
        }
        return response.status(500).json({
            status: "error",
            message: `Internal server error - ${err.message}`,
        });
    }
);

app.listen(3333, () => console.log("I'm running!"));
