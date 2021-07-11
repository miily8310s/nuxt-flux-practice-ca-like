import { FormData } from '@/domain/models/forms/formData';
import { API, FORMS } from '@/infrastructure/Path';
import IClient from '@/infrastructure/provider/IClient';
import IFormRepository from '@/interfaces/repository/forms/IFormRepository';

export class FormRepository implements IFormRepository {
  constructor(private readonly _client: IClient) {}

  async fetchAll(): Promise<FormData> {
    const { data } = await this._client.get<FormData>(API + FORMS);
    return data.data;
  }
}
