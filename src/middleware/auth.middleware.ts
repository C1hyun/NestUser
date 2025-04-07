import {
    Injectable,
    NestMiddleware,
    UnauthorizedException,
  } from '@nestjs/common';
  import { Request, Response, NextFunction } from 'express'; 
  
  @Injectable()
  export class AuthMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
      const name = req.query?.name || req.body?.name;
      console.log(`실제 이름: ${name}`);
      if (!name) {
        throw new UnauthorizedException('name 값 없음');
      }

      const trimmedName = name.trim()
      if (trimmedName == 'Park') {
        next();
      } else {
        throw new UnauthorizedException('허가 받지 않은 유저');
      }
    }
  }