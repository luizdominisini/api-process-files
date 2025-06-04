import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { ulid } from 'ulid';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger = new Logger('RoutesMiddleware');
  use(req: Request, res: Response, next: NextFunction) {
    const { originalUrl, ip, method } = req;
    const { statusCode } = res;

    this.logger.log(
      `${ulid()} - ${method} - ${originalUrl} - ${statusCode} - ${ip}`,
    );
    next();
  }
}
