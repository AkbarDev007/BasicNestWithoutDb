import { ApiProperty } from "@nestjs/swagger";

export class CreateArticleDto {
 
    id:number;
    @ApiProperty()
    email:string;
    @ApiProperty()
    name:string;
    @ApiProperty()
    content:string;
}
