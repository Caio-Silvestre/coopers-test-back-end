import { IsNotEmpty, IsString, IsEmail } from 'class-validator';

// DTO para criação de usuário
export class UpdateUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;
}
