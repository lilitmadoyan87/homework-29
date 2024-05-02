import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductService {

 constructor(@InjectRepository(Product) private productRepository: Repository<Product>) { }

  async create(createProductDto: CreateProductDto) {
    try {
      const product=await this.productRepository.save(createProductDto)
      return product;
    } catch (e) {
      return {message: "Could not create product"}
    }
  }

  async findAll() {
    try {
      const products=await this.productRepository.find()
      return products;
    } catch (e) {
      return {message: "Could not find products"}
    }
  }

  async findOne(id: number) {
    try {
      const product=await this.productRepository.findOne({where: {id}})
      if(product){
        return product;
      }else{
      return {message: "Product doesn't exist"}
      }
    } catch (e) {
      return {message: "Could not find product"}
    }
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    try {
      const product=await this.productRepository.findOne({where: {id}})
      if(product){
        await this.productRepository.update(id, updateProductDto);
      return {message: "Product was updated"}
      }else{
      return {message: "Product doesn't exist"}
      }
    } catch (e) {
      return {message: "Could not update product"}
    }
  }

  async remove(id: number) {
    try {
      const product=await this.productRepository.findOne({where: {id}})
      if(product){
        await this.productRepository.delete(id);
        return {message: "Product was deleted"}
      }else{
      return {message: "Product doesn't exist"}
      }
    } catch (e) {
      return {message: "Could not delete product"}
    }
  }
}
