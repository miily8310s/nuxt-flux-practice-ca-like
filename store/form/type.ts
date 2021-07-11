import { FormData } from '@/domain/models/forms/formData';
import {
  EditedType,
  FormTitle,
  FormType,
  PersonalData,
  SurveyData,
} from '@/domain/models/forms/vo';

type State = {
  _formData?: FormData;
  formData?: FormData;
  editedType?: EditedType;
};

type Getters = {
  _formData: FormData;
  formData: FormData;
  personalData: PersonalData;
  surveyData: SurveyData;
  editedType: EditedType;
  formAction: (formType: FormType) => string | undefined;
};

type Mutations = {
  mutateFormData: {
    formData: FormData;
  };
  setFormData: {
    formType: FormType;
    title: FormTitle;
    value: string | number;
  };
  cancelFormData: {};
  setType: {
    editedType: EditedType;
  };
};

type Actions = {
  fetchFormData: { formData: FormData };
  setFormData: {
    formType: FormType;
    title: FormTitle;
    value: string | number;
  };
  cancelFormData: {};
  postFormData: {};
  setType: {
    editedType: EditedType;
  };
};

export type FormDataStore = {
  state: State;
  getters: Getters;
  mutations: Mutations;
  actions: Actions;
};
