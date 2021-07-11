<template>
  <div>
    <button @click="onCancel">CANCEL</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Emit } from 'vue-property-decorator';

@Component
export default class CancelButton extends Vue {
  @Emit()
  private onCancel() {}
}
</script>
