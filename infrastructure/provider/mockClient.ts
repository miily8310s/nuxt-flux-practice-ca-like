import { FORMS } from '@/infrastructure/Path';
import axiosBase from '@/infrastructure/provider/axiosBase';
import IClient from '@/infrastructure/provider/IClient';
import { objectKeysToCamel } from '@/utils/changeCase';
import { AxiosRequestConfig } from 'axios';

const result = (data: any) => ({ data });

const wrapPromise = (item: any) =>
  new Promise((resolve) =>
    setTimeout(() => {
      resolve(result(objectKeysToCamel(item)));
    }, 500),
  );

const mockPaths = [
  {
    path: FORMS,
    value: require('@/infrastructure/mock/data/forms').default,
  },
];

class MockClient implements IClient {
  /**
   * post
   */
  post(path: string, data?: any, config?: AxiosRequestConfig): Promise<any> {
    const lastPath = path.split('/').pop();

    const target = mockPaths.filter((item) => item.path === lastPath);

    if (target.length !== 0) {
      return wrapPromise(target[0].value);
    }

    return axiosBase.post(path, data, config);
  }

  // TODO: 整備
  put(path: string, data: any, config?: AxiosRequestConfig): Promise<any> {
    const lastPath = path.split('/').pop();
    const target = mockPaths.filter((item) => item.path === lastPath);

    if (target.length !== 0) {
      return wrapPromise(target[0].value);
    }

    return axiosBase.put(path, data, config);
  }

  // TODO: 整備
  get(path: string, config?: AxiosRequestConfig): Promise<any> {
    const matchedId = path.match(/\d+$/);
    const lastPath = matchedId
      ? path.split('/').splice(2, 1)[0]
      : path.split('/').pop();
    const target = mockPaths.filter((item) => item.path === lastPath);

    if (target.length !== 0) {
      if (matchedId) {
        const id = matchedId ? Number(matchedId[0]) : 0;
        const obj = target[0].value.data.find((item: any) => item.id === id);
        return wrapPromise({ data: obj });
      }
      return wrapPromise(target[0].value);
    }

    return axiosBase.get(path, config);
  }

  // TODO: 整備
  delete(path: string, config?: AxiosRequestConfig): Promise<any> {
    const lastPath = path.split('/').pop();
    const target = mockPaths.filter((item) => item.path === lastPath);

    if (target.length !== 0) {
      return wrapPromise(target[0].value);
    }

    return axiosBase.delete(path, config);
  }
}

const mockClient = new MockClient();

export default mockClient;
