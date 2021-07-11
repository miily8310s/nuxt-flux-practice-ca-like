import formData from '@/application/forms';
import { FormType } from '@/domain/models/forms/vo';
import { FormDataStore } from '@/store/form/type';
import { cloneDeep } from 'lodash';
import {
  DefineActions,
  DefineGetters,
  DefineMutations,
} from 'vuex-type-helper';

type Getters = DefineGetters<FormDataStore['getters'], FormDataStore['state']>;
type Mutations = DefineMutations<
  FormDataStore['mutations'],
  FormDataStore['state']
>;
type Actions = DefineActions<
  FormDataStore['actions'],
  FormDataStore['state'],
  FormDataStore['mutations'],
  FormDataStore['getters']
>;

export const state: FormDataStore['state'] = {
  // DBからfetchした値
  _formData: undefined,
  // 表示/編集用の値
  formData: undefined,
  editedType: null,
};

export const getters: Getters = {
  _formData: (state) => state._formData!,
  formData: (state) => state.formData!,
  personalData: (state) => state.formData!.personal,
  surveyData: (state) => state.formData!.survey,
  editedType: (state) => state.editedType!,
  formAction: () => (formType: FormType) => {
    if (formType === 'personal' || formType === 'survey') {
      return 'form/postFormData';
    }
  },
};

export const mutations: Mutations = {
  mutateFormData(state, { ...payload }) {
    const copyPayload = cloneDeep(payload);
    state._formData = payload.formData;
    state.formData = copyPayload.formData;
  },
  setFormData(state, { ...payload }) {
    if (!state.formData) {
      return;
    }
    state.formData[payload.formType][payload.title] = payload.value;
  },
  cancelFormData(state) {
    const copyFormData = cloneDeep(state._formData);
    state.formData = copyFormData;
  },
  setType(state, { ...payload }) {
    state.editedType = payload.editedType;
  },
};

export const actions: Actions = {
  async fetchFormData({ commit }) {
    const data = await formData.findAll();
    commit('mutateFormData', { formData: data });
  },
  setFormData({ commit }, storeFormData) {
    commit('setFormData', storeFormData);
  },
  cancelFormData({ commit }) {
    commit('cancelFormData', {});
  },
  postFormData({ state }) {
    // TODO: 永続化処理
    // eslint-disable-next-line no-console
    console.log(state.formData);
  },
  setType({ commit }, editedType) {
    commit('setType', editedType);
  },
};
