import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { ReviewModule } from './review/review.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { Product } from './product/entities/product.entity';
import { Review } from './review/entities/review.entity';

@Module({
  imports: [
  TypeOrmModule.forRoot({
    type: "mysql",
    database: "nest_homework_29",
    host: "127.0.0.1",
    port: 3306,
    username: "root",
    password: "",
    entities:[User, Product, Review],
    synchronize: true
  }),
    UserModule, ProductModule, ReviewModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
