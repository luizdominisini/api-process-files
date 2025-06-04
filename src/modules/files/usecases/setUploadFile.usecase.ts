import { Inject, Injectable } from '@nestjs/common';
import { writeFile } from 'fs/promises';
import { join } from 'path';
import { ulid } from 'ulid';
import { IUseCase } from '../../../interfaces/usecases';
import {
  FILE_REPOSITORY,
  IFileRepository,
} from '../interfaces/file-repository';

@Injectable()
export class uploadFile implements IUseCase {
  constructor(
    @Inject(FILE_REPOSITORY)
    private readonly fileRepo: IFileRepository,
  ) {}

  async execute(file: Express.Multer.File) {
    const folderPath = join(process.cwd(), 'uploads');
    const fileName = `${ulid()}-${file.originalname}`;
    const fullPath = join(folderPath, fileName);

    await writeFile(fullPath, file.buffer);

    return fullPath;
  }
}
