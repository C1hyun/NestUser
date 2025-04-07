import { 
  Module, 
  NestModule,
  MiddlewareConsumer,
  RequestMethod } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { AuthMiddleware } from './middleware/auth.middleware';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .exclude({ path: 'user/create_user', method: RequestMethod.POST })
      .exclude({ path: 'user/user_all', method: RequestMethod.GET })
      .exclude({ path: 'user/delete', method: RequestMethod.DELETE})
      .forRoutes(UserController);
    
  }
}
