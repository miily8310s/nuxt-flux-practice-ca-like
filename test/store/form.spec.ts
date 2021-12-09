import { createLocalVue } from '@vue/test-utils';
import { cloneDeep } from 'lodash';
import Vuex, { Store } from 'vuex';
import { EditedType } from '@/domain/models/forms/vo';
import mockData from '@/infrastructure/mock/data/forms';
import * as target from '@/store/form/main';
import { objectKeysToCamel } from '@/utils/changeCase';

const mock: typeof mockData = objectKeysToCamel(mockData);

jest.mock('@/application/forms', () => ({
  findAll: () => mock,
}));

describe('store/form/index', () => {
  // vuexを使う準備
  const localVue = createLocalVue();
  localVue.use(Vuex);
  let store: Store<any>;

  beforeEach(() => {
    store = new Store(cloneDeep(target));
  });

  describe('gettersのテスト', () => {
    beforeEach(() => {
      store.commit('mutateFormData', { formData: mock });
    });

    test('formData: fetchした値通りか', () => {
      expect(store.getters.formData).toEqual(mock);
    });

    test('_formData: fetchした値通りか', () => {
      expect(store.getters._formData).toEqual(mock);
    });
  });

  describe('mutationsのテスト', () => {
    test('mutateFormData: fetchDataをformDataと_formDataに保存する', () => {
      store.commit('mutateFormData', { formData: mock });
      expect(store.state.formData).toEqual(mock);
      expect(store.state._formData).toEqual(mock);
    });

    // TODO: 実装
    // const testData = [
    //   {
    //     formType: 'personal',
    //     title: 'title1',
    //     value: 'value1',
    //   },
    //   {
    //     formType: 'survey',
    //     title: 1111,
    //     value: 2222,
    //   },
    // ]

    // test.each(testData)(
    //   'setFormData: formTypeに一致する値を保存する',
    //   (testData) => {
    //     store.commit('setFormData', { ...testData });
    //     expect(store.state.formData.personal).toEqual(testData);
    //     expect(store.state.formData.survey).toEqual(mock.data.survey);
    //   },
    // );
  });

  describe('actions', () => {
    test('setTypeがコミットされると、正しい値がセットされる', () => {
      const editedType: EditedType = 'personal';
      store.dispatch('setType', { editedType });
      expect(store.getters.editedType).toBe('personal');
    });
  });
});
