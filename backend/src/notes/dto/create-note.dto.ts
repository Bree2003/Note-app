import { IsNotEmpty, MinLength } from 'class-validator';

export class CreateNoteDto {
  @IsNotEmpty({ message: 'Title should not be empty' })
  @MinLength(3, { message: 'Title should be at least 3 characters long' })
  title: string;
  description: string;
}
