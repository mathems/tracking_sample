import { HttpException, HttpStatus } from '@nestjs/common';

export class NotExistsException extends HttpException {
  constructor() {
    super('Not exists', HttpStatus.NOT_FOUND);
  }
}
