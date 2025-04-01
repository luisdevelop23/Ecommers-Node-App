import { BrandDto } from "../dto/brand.dto";
import { BrandEntity } from "../entity/brand.entity";

export abstract class BrandRepository {
    abstract getBrands(): Promise<BrandEntity[]>
    abstract getBrandById(id: string): Promise<BrandEntity>
    abstract createBrand(brand: BrandDto): Promise<BrandEntity>
    abstract updateBrand(id: string, brand: BrandDto): Promise<BrandEntity>
    abstract deleteBrand(id: string): Promise<BrandEntity>
}