import { inject, injectable } from "tsyringe";

import { AppErrors } from "../../../../errors/AppErrors";
import { CategoriesRepository } from "../../repositories/CategoriesRepository";
import { ICategoriesRepository } from "../../repositories/implementations/ICategoriesRepository";

interface IRequest {
    name: string;
    description: string;
}

@injectable()
class CreateCategoryUseCase {
    constructor(
        @inject("CategoriesRepository")
        private categoriesRepository: ICategoriesRepository
    ) {}

    async execute({ name, description }: IRequest): Promise<void> {
        const categoryAlreadyExists =
            await this.categoriesRepository.findByName(name);

        if (categoryAlreadyExists) {
            throw new AppErrors("Category Already Existis!");
        }

        this.categoriesRepository.create({ name, description });
    }
}

export { CreateCategoryUseCase };
