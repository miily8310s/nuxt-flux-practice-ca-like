export type PersonalData = {
  name: string;
  age: number;
  items: FormItem[];
  // ブラケット記法のno indexエラー対策
  [key: string]: string | number | FormItem[];
};

export type SurveyData = {
  health: string;
  motivation: string;
  remarks: string;
  items: FormItem[];
  [key: string]: string | number | FormItem[];
};

// FormItems
export type InputType = 'text' | 'number';
export type FormTitle = keyof PersonalData | keyof SurveyData;

export type FormItem = {
  title: FormTitle;
  type: InputType;
};

// type
export const FormTypes = {
  personal: 'personal',
  survey: 'survey',
} as const;
export type FormType = keyof typeof FormTypes;
export type EditedType = FormType | null;
