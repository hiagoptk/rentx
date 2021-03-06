import { container } from "tsyringe";

import { UserRepository } from "../../modules/accounts/entities/repositories/implementations/UserRepository";
import { IUserRepository } from "../../modules/accounts/entities/repositories/IUserRepository";
import { CategoriesRepository } from "../../modules/cars/repositories/CategoriesRepository";
import { ICategoriesRepository } from "../../modules/cars/repositories/implementations/ICategoriesRepository";
import { ISpecificationRepository } from "../../modules/cars/repositories/implementations/ISpecificationRepository";
import { SpecificationsRepository } from "../../modules/cars/repositories/SpecificationRepository";

container.registerSingleton<ICategoriesRepository>(
    "CategoriesRepository",
    CategoriesRepository
);

container.registerSingleton<ISpecificationRepository>(
    "SpecificationsRepository",
    SpecificationsRepository
);

container.registerSingleton<IUserRepository>("UserRepository", UserRepository);
