import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type FileDocument = HydratedDocument<File>;

@Schema({ timestamps: true })
export class File {
  @Prop({ required: true })
  originalName: string;

  @Prop({ required: true })
  fileName: string;

  @Prop({ required: true })
  path: string;

  @Prop({ default: 'pending' })
  status: 'pending' | 'in_processing' | 'completed' | 'error';
}

export const FileSchema = SchemaFactory.createForClass(File);
