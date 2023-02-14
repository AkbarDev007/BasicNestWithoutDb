import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { Article } from './entities/article.entity';
@Injectable()
export class ArticlesService {
  constructor(@InjectRepository(Article) private articlesRepository:Repository<Article>,){}
  create(createArticleDto: CreateArticleDto) {
    const newUser = this.articlesRepository.create(createArticleDto);
    return this.articlesRepository.save(newUser);
  }

  findAll() {
    return this.articlesRepository.find();
  }

  async findOne(id: number) {
    return await this.articlesRepository.findOneBy({id:id});
  }

  async update(id: number, updateArticleDto: UpdateArticleDto) {
    return this.articlesRepository.update(id, updateArticleDto)
  }

 async remove(id: number) {
    const article = await this.findOne(id);
    return this.articlesRepository.remove(article);
  }
}
