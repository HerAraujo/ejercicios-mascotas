import { Module } from '@nestjs/common';
import { DogsModule } from './dogs/dogs.module';
import { CatsModule } from './cats/cats.module';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { AppService } from './app.service';

@Module({
  imports: [DogsModule, CatsModule, UsersModule, PostsModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
