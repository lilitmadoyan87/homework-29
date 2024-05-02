import { Injectable } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { Review } from './entities/review.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ReviewService {
  constructor(@InjectRepository(Review) private reviewRepository: Repository<Review>) { }

  async create(createReviewDto: CreateReviewDto) {
    try {
      const review = await this.reviewRepository.save(createReviewDto)
      return review;
    } catch (e) {
      return { message: "Could not create review" }
    }
  }

  async findAll() {
    try {
      const reviews = await this.reviewRepository.find()
      return reviews;
    } catch (e) {
      return { message: "Could not find reviews" }
    }
  }

  async findOne(id: number) {
    try {
      const review = await this.reviewRepository.findOne({ where: { id } })
      if (review) {
        return review;
      } else {
        return { message: "Review doesn't exist" }
      }
    } catch (e) {
      return { message: "Could not find review" }
    }
  }

  async update(id: number, updateReviewDto: UpdateReviewDto) {
    try {
      const review = await this.reviewRepository.findOne({ where: { id } })
      if (review) {
        await this.reviewRepository.update(id, updateReviewDto);
        return { message: "Review was updated" }
      } else {
        return { message: "Review doesn't exist" }
      }
    } catch (e) {
      return { message: "Could not update review" }
    }
  }

  async remove(id: number) {
    try {
      const review = await this.reviewRepository.findOne({ where: { id } })
      if (review) {
        await this.reviewRepository.delete(id);
        return { message: "Review was deleted" }
      } else {
        return { message: "Review doesn't exist" }
      }
    } catch (e) {
      return { message: "Could not delete review" }
    }
  }
}
