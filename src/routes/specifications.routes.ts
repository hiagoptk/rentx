import { Router } from "express";

import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/CreateSpecificationController";
import { ListSpecificationsController } from "../modules/cars/useCases/listSpecifications/ListSpecificationsController";

const specificationRoutes = Router();
const createSpeficiationController = new CreateSpecificationController();
const listSpecificationsController = new ListSpecificationsController();

specificationRoutes.post("/", createSpeficiationController.handle);

specificationRoutes.get("/", listSpecificationsController.handle);

export { specificationRoutes };
