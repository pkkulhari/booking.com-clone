import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator'

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  public username!: string

  @IsNotEmpty()
  @IsEmail()
  public email!: string

  @IsNotEmpty()
  @IsString()
  public password!: string

  @IsOptional()
  @IsString()
  public avatar!: string
}
