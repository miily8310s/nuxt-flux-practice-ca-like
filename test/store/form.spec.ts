import { FormData } from '@/domain/models/forms/formData';
import { EditedType } from '@/domain/models/forms/vo';
import FromMockData from '@/infrastructure/mock/data/forms';
import * as form from '@/store/form/index';
import { createLocalVue } from '@vue/test-utils';
import { cloneDeep } from 'lodash';
import Vuex, { Store } from 'vuex';

// vuexを使う準備
const localVue = createLocalVue();
localVue.use(Vuex);

describe('store/form/index', () => {
  let store: Store<any>;
  const formMockData: FormData = FromMockData.data;

  // itが呼ばれる前のタイミングで毎回初期化をする
  beforeEach(() => {
    store = new Vuex.Store(cloneDeep(form));
  });

  describe('getters', () => {
    test('formDataのgettersが正しい値か', () => {
      // 初期値はundefined
      expect(store.getters.formData).toBe(undefined);
      store.commit('mutateFormData', { formData: formMockData });
      expect(store.getters.formData).toEqual(formMockData);
    });

    test('personalのageが正しい値か', () => {
      store.commit('mutateFormData', { formData: formMockData });
      expect(store.getters.formData.personal.age).toBe(22);
    });
  });

  describe('actions', () => {
    test('setTypeがコミットされると、正しい値がセットされる', () => {
      // 初期値はnull
      expect(store.getters.editedType).toBe(null);
      const editedType: EditedType = 'personal';
      store.dispatch('setType', { editedType });
      expect(store.getters.editedType).toBe('personal');
    });
  });
});
