<template>
  <div>{{ formData }}</div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { mapGetters } from 'vuex';
import { FormData } from '@/domain/models/forms/formData';

@Component({
  computed: {
    ...mapGetters({
      formData: 'form/formData',
    }),
  },
})
export default class DisplayFormData extends Vue {
  formData!: FormData;
}
</script>

<style scoped></style>
