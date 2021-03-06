import di from '@/di';
import { FormData } from '@/domain/models/forms/formData';

class FormUseCase {
  async findAll(): Promise<FormData> {
    const useCase = di.getInstance('fetchAll');
    const result = await useCase.execute();
    return result;
  }
}

const formUseCase = new FormUseCase();

export default formUseCase;
