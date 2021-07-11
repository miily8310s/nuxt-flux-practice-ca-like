import { prodClient } from '@/infrastructure/provider/prodClient';

class HttpClientFactory {
  getClient() {
    if (process.env.NUXT_ENV_DEPLOYMENT === 'production') {
      return prodClient;
    }
    if (process.env.NUXT_ENV_DEPLOYMENT === 'development') {
      return prodClient;
    }
    if (process.env.NUXT_ENV_DEPLOYMENT === 'local') {
      return require('@/infrastructure/provider/mockClient').default;
    }
    return prodClient;
  }
}

const httpClientFactory = new HttpClientFactory();

export default httpClientFactory;
