import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cat } from 'src/cats/entity/cat.entity';
import { Dog } from 'src/dogs/entity/dog.entity';
import { Post } from 'src/posts/entity/post.entity';
import { User } from 'src/users/entity/users.entity';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'mascotapp',
        entities: [User, Dog, Cat, Post],
        synchronize: true,
        keepConnectionAlive: true,
        retryAttempts: 2,
        retryDelay: 1000,
      }),
    }),
  ],
})
export class DatabaseModule {}
