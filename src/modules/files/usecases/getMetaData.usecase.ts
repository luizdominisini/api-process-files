import { Inject, Injectable } from '@nestjs/common';
import { IUseCase } from '../../../interfaces/usecases';
import {
  FILE_REPOSITORY,
  IFileRepository,
} from '../interfaces/file-repository';

@Injectable()
export class listMetadata implements IUseCase {
  constructor(
    @Inject(FILE_REPOSITORY)
    private readonly fileRepo: IFileRepository,
  ) {}

  async execute() {
    return this.fileRepo.findAll;
  }
}
