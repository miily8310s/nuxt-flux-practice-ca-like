<template>
  <div>
    <button @click="onSave">SAVE</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Emit } from 'vue-property-decorator';

@Component
export default class SaveButton extends Vue {
  // sotreに依存しないように、emitするだけ
  // 値を逆流させるのはよくないが、eventだけを上に渡すのはOK
  @Emit()
  private onSave() {}
}
</script>
