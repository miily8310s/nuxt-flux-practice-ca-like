import formUseCase from '@/application/forms';
import { objectKeysToCamel } from '@/utils/changeCase';
import mockData from '@/infrastructure/mock/data/forms';

const mock: typeof mockData = objectKeysToCamel(mockData);

jest.mock('@/application/forms', () => ({
  findAll: () => mock,
}));

describe('application: forms', () => {
  test('fetchAll', async () => {
    const res = await formUseCase.findAll();
    expect(res).toEqual(mock);
  });
});
