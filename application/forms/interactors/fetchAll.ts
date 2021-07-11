import { IFetchAll } from '@/application/forms/usecase/IFetchAll';
import { FormData } from '@/domain/models/forms/formData';
import IFormRepository from '@/interfaces/repository/forms/IFormRepository';

export class FetchAll implements IFetchAll {
  constructor(private readonly formRepository: IFormRepository) {}

  execute(): Promise<FormData> {
    return this.formRepository.fetchAll();
  }
}
