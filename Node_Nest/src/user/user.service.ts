import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepository: Repository<User>) { }

  async create(createUserDto: CreateUserDto) {
    try {
      const user=await this.userRepository.save(createUserDto)
      return user;
    } catch (e) {
      return {message: "Could not create user"}
    }
  }

  async findAll() {
    try {
      const users=await this.userRepository.find()
      return users;
    } catch (e) {
      return {message: "Could not find users"}
    }
  }

  async findOne(id: number) {
    try {
      const user=await this.userRepository.findOne({where: {id}})
      if(user){
        return user;
      }else{
      return {message: "User doesn't exist"}
      }
    } catch (e) {
      return {message: "Could not find user"}
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    try {
      const user=await this.userRepository.findOne({where: {id}})
      if(user){
         await this.userRepository.update(id, updateUserDto)
         return {message: "User was updated"}
      }else{
      return {message: "User doesn't exist"}
      }
    } catch (e) {
      return {message: "Could not update user"}
    }
  }

  async remove(id: number) {
    try {
      const user=await this.userRepository.findOne({where: {id}})
      if(user){
        await this.userRepository.delete(id);
        return {message: "User was deleted"}
      }else{
      return {message: "User doesn't exist"}
      }
    } catch (e) {
      return {message: "Could not delete user"}
    }
  }
}
