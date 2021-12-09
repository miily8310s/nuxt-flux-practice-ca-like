<template>
  <div v-if="initialized">
    <PersonalForm :form-data="personalData" />
    <SurveyForm :form-data="surveyData" />
    <DisplayFormData />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { mapGetters, mapActions } from 'vuex';
import SurveyForm from '@/components/form/SurveyForm.vue';
import PersonalForm from '@/components/form/PersonalForm.vue';
import { PersonalData, SurveyData } from '@/domain/models/forms/vo';
import DisplayFormData from '@/components/DisplayFormData.vue';

@Component({
  components: {
    SurveyForm,
    PersonalForm,
    DisplayFormData,
  },
  computed: {
    ...mapGetters({
      personalData: 'form/personalData',
      surveyData: 'form/surveyData',
    }),
  },
  methods: {
    ...mapActions({
      fetchFormData: 'form/fetchFormData',
    }),
  },
})
export default class Index extends Vue {
  /**
   * 仕様
   * formの初期表示はDBから取得した値を表示
   * formの値を変更するとstoreのformDataも追従される
   * cansel時は元の値に戻りdisabledになる
   * 編集状態は常に1つだけ
   * save時はstoreのformDataの状態が永続化され、disabledになる
   * saveされるdataはリアクティブで下へ表示される
   */
  personalData!: PersonalData;
  surveyData!: SurveyData;
  initialized = false;
  fetchFormData!: () => Promise<void>;

  async init() {
    await this.fetchFormData();
  }

  async created() {
    await this.init();
    this.initialized = true;
  }
}
</script>
