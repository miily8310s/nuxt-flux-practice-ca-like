<template>
  <div class="form">
    <div v-for="(item, i) in formData.items" :key="item">
      {{ item.title }}:
      <input
        :value="formData[item.title]"
        :disabled="!isEdit"
        :type="item.type"
        @change="onChange(formType, item.title, $event.target.value)"
      />
    </div>
    <FormButton :form-type="formType" :form-action="formAction(formType)" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';
import { mapGetters, mapActions } from 'vuex';
import {
  EditedType,
  FormTitle,
  FormType,
  PersonalData,
  SurveyData,
} from '@/domain/models/forms/vo';
import FormButton from '@/components/button/FormButton.vue';

@Component({
  components: {
    FormButton,
  },
  computed: {
    ...mapGetters({
      editedType: 'form/editedType',
      formAction: 'form/formAction',
    }),
  },
  methods: {
    ...mapActions({
      setFormData: 'form/setFormData',
    }),
  },
})
export default class BaseForm extends Vue {
  // gettersの引数を渡してどのactionをpropsするかはここで判断させる
  // 結果actionそのものを渡すことはできなかったのでdispatchするstringを取得するようにした
  @Prop({ type: Object, default: true })
  formData!: PersonalData | SurveyData;

  @Prop({ type: String, default: true })
  formType!: FormType;

  editedType!: EditedType;
  formAction!: (formType: FormType) => string | undefined;
  setFormData!: (setFormData: {
    formType: FormType;
    title: FormTitle;
    value: string;
  }) => void;

  get isEdit() {
    return this.editedType === this.formType;
  }

  onChange(formType: FormType, title: FormTitle, value: string | number) {
    this.setFormData({ formType, title, value });
  }
}
</script>

<style scoped>
.form {
  margin: 20px;
}
</style>
