import { inject, injectable } from "tsyringe";

import { Specification } from "../../entities/Specification";
import { ISpecificationRepository } from "../../repositories/implementations/ISpecificationRepository";

@injectable()
class ListSpecificationsUseCase {
    constructor(
        @inject("SpecificationsRepository")
        private specificationsRepository: ISpecificationRepository
    ) {}

    async execute(): Promise<Specification[]> {
        const specifications = await this.specificationsRepository.list();

        return specifications;
    }
}

export { ListSpecificationsUseCase };
