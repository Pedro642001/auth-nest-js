import { Injectable } from '@nestjs/common';
import { PrismaService } from './../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createUserDto: CreateUserDto) {
    const user = {
      ...createUserDto,
      password: await bcrypt.hash(createUserDto.password, 10),
    };

    return this.prisma.users.create({ data: user });
  }

  findAll() {
    return `This action returns all users`;
  }

  findByEmail(email: string) {
    return this.prisma.users.findFirst({ where: { email } });
  }

  findOne(id: number) {
    return this.prisma.users.findFirst({ where: { id } });
  }
}
