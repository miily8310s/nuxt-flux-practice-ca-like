import { FormData } from '@/domain/models/forms/formData';

export interface IFetchAll {
  execute(): Promise<FormData>;
}
