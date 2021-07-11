import { FetchAll } from '@/application/forms/interactors';
import httpClientFactory from '@/infrastructure/HttpClientFactory';
import IClient from '@/infrastructure/provider/IClient';
import { FormRepository } from '@/interfaces/repository/forms';

// Discriminated Union で補完が効くように
type KeyType = 'fetchAll' | 'fetch';

class DI {
  constructor(private readonly _client: IClient) {}

  // Function Overloading
  getInstance(type: 'fetchAll'): FetchAll;
  // eslint-disable-next-line no-dupe-class-members
  getInstance(type: KeyType) {
    if (type === 'fetchAll') {
      const repository = new FormRepository(this._client);
      return new FetchAll(repository);
    }
  }
}

const di = new DI(httpClientFactory.getClient());

export default di;
