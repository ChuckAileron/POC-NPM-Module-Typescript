import { IsString, IsNotEmpty } from 'class-validator';

export class PocDTO {
    @IsString()
    @IsNotEmpty()
    data: string;
}