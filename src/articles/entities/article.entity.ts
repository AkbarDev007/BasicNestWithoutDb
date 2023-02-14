import { ApiProperty } from "@nestjs/swagger";
import { IsEmail } from "class-validator";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Article {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column()
    @IsEmail()
    email: string;

    @ApiProperty()
    @Column()
    name: string;
    @ApiProperty()
    @Column()
    content: string;
    @ApiProperty()
    @CreateDateColumn()
    created_at: Date;
    

}
