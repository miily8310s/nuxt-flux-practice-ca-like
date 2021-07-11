<template>
  <div>
    <h2>PersonalForm</h2>
    <BaseForm :form-data="formData" :form-type="formTypes.personal" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';
import BaseForm from '@/components/form/BaseForm.vue';
import { PersonalData, FormTypes } from '@/domain/models/forms/vo';

@Component({
  components: {
    BaseForm,
  },
})
export default class PersonalForm extends Vue {
  readonly formTypes = FormTypes;
  @Prop({ type: Object, default: true })
  formData!: PersonalData;
}
</script>
