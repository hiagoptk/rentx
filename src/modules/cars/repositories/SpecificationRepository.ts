import { getRepository, Repository } from "typeorm";

import { Specification } from "../entities/Specification";
import {
    ICreateSpecificationDTO,
    ISpecificationRepository,
} from "./implementations/ISpecificationRepository";

class SpecificationsRepository implements ISpecificationRepository {
    private repository: Repository<Specification>;

    //  private static INSTANCE: SpecificationsRepository;

    constructor() {
        this.repository = getRepository(Specification);
    }

    //    public static getInstance(): SpecificationsRepository {
    //        if (!SpecificationsRepository.INSTANCE) {
    //            SpecificationsRepository.INSTANCE = new SpecificationsRepository();
    //        }
    //
    //        return SpecificationsRepository.INSTANCE;
    //    }

    async create({
        name,
        description,
    }: ICreateSpecificationDTO): Promise<void> {
        const specification = this.repository.create({
            name,
            description,
        });

        await this.repository.save(specification);
    }

    async list(): Promise<Specification[]> {
        const specifications = await this.repository.find();
        return specifications;
    }

    async findByName(name: string): Promise<Specification> {
        const specification = await this.repository.findOne({ name });

        return specification;
    }
}

export { SpecificationsRepository };
