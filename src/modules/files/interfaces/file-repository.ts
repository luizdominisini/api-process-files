export const FILE_REPOSITORY = Symbol('FILE_REPOSITORY');

export interface IFileRepository {
  findAll(): Promise<any[]>;
  findById(data: any): Promise<any>;
  create(data: any): Promise<any>;
}
