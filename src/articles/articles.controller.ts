import { Controller, Get, Post, Body, Patch, Param, Delete, BadRequestException, ParseIntPipe } from '@nestjs/common';
import { ApiBadRequestResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { Article } from './entities/article.entity';


@ApiTags("articles")
@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}


  @Post()
  create(@Body() createArticleDto: CreateArticleDto) {
    return this.articlesService.create(createArticleDto);
  }
 @ApiOkResponse({type:Article , isArray: true})
  @Get()
  findAll() {
    return this.articlesService.findAll();
  }
  @ApiOkResponse({type:Article})
@ApiBadRequestResponse()
  @Get(':id')
  async findOne(@Param('id',ParseIntPipe) id: number):Promise<Article> {
   const data:Article =await this.articlesService.findOne(id);
   
   if(data){
    throw new BadRequestException()
   }
return data;
  }
  @ApiOkResponse({type:Article})
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateArticleDto: UpdateArticleDto) {
    return this.articlesService.update(+id, updateArticleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.articlesService.remove(+id);
  }
}
