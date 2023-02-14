import { ApiProperty } from '@nestjs/swagger';


export class UpdateArticleDto {
    @ApiProperty({required: false})
    name?:string;
    @ApiProperty({required: false})
    content?:string;
}
