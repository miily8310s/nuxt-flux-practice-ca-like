import { FormData } from '@/domain/models/forms/formData';

export default interface IFromRepository {
  fetchAll(): Promise<FormData>;
}
