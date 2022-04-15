import { inject, injectable } from "tsyringe";

import { Category } from "../../entities/Category";
import { CategoriesRepository } from "../../repositories/CategoriesRepository";
import { ICategoriesRepository } from "../../repositories/implementations/ICategoriesRepository";

@injectable()
class ListCategoriesUseCase {
    constructor(
        @inject(CategoriesRepository)
        private categoriesRepositories: ICategoriesRepository
    ) {}

    async execute(): Promise<Category[]> {
        const categories = await this.categoriesRepositories.list();

        return categories;
    }
}

export { ListCategoriesUseCase };
