<template>
  <div>{{ getKeyword() }}</div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { mapGetters } from 'vuex';

@Component({
  computed: {
    ...mapGetters({
      keyword: 'search/keyword',
    }),
  },
})
export default class ChildComponent extends Vue {
  keyword!: string;

  getKeyword() {
    return this.keyword ? this.keyword : '-----';
  }
}
</script>

<style scoped></style>
