<template>
  <div>
    <button @click="onEdit">Edit</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Emit } from 'nuxt-property-decorator';

@Component
export default class EditButton extends Vue {
  @Emit()
  private onEdit() {}
}
</script>

<style scoped></style>
