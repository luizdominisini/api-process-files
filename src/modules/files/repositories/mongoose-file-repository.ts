import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { File, FileDocument } from '../../../schemas/file.schema';
import { IFileRepository } from '../interfaces/file-repository';

export class MongooseFileRepository implements IFileRepository {
  constructor(
    @InjectModel(File.name)
    private readonly fileModel: Model<FileDocument>,
  ) {}

  findAll(): Promise<any[]> {
    return this.fileModel.find();
  }
  findById(id: any): Promise<any> {
    return this.fileModel.findById(id);
  }
  create(data: any): Promise<any> {
    return this.fileModel.create(data);
  }
}
