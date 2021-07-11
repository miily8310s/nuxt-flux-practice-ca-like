<template>
  <div>
    <h2>SurveyForm</h2>
    <BaseForm :form-data="formData" :form-type="formTypes.survey" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';
import BaseForm from '@/components/form/BaseForm.vue';
import { SurveyData, FormTypes } from '@/domain/models/forms/vo';

@Component({
  components: {
    BaseForm,
  },
})
export default class SurveyForm extends Vue {
  readonly formTypes = FormTypes;
  @Prop({ type: Object, default: true })
  formData!: SurveyData;
}
</script>
