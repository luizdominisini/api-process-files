import {
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { listMetadata } from './usecases/getMetaData.usecase';
import { uploadFile } from './usecases/setUploadFile.usecase';

@Controller('v2/files')
export class FilesController {
  constructor(
    private readonly listMetadata: listMetadata,
    private uploadFile: uploadFile,
  ) {}

  @Get('/listMetadata')
  listFiles() {
    return this.listMetadata.execute();
  }

  @Post('/uploadFile')
  @UseInterceptors(FileInterceptor('file'))
  uploadFiles(@UploadedFile() file: Express.Multer.File) {
    return this.uploadFile.execute(file);
  }
}
