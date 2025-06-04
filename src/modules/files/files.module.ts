import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { File, FileSchema } from 'src/schemas/file.schema';
import { FilesController } from './files.controller';
import { FILE_REPOSITORY } from './interfaces/file-repository';
import { MongooseFileRepository } from './repositories/mongoose-file-repository';
import { listMetadata } from './usecases/getMetaData.usecase';
import { uploadFile } from './usecases/setUploadFile.usecase';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: File.name, schema: FileSchema }]),
  ],
  controllers: [FilesController],
  providers: [
    listMetadata,
    uploadFile,
    { provide: FILE_REPOSITORY, useClass: MongooseFileRepository },
  ],
  exports: [],
})
export class FilesModule {}
