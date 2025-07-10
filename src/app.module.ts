import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './task/entities/task/task';
import { User } from './user/entities/user/user';

@Module({
  imports: [
    TaskModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'coopers-todo.db',
      entities: [Task, User],
      synchronize: false,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
