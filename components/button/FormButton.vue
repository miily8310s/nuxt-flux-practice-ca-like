<template>
  <div class="form-button">
    <template v-if="!isEdit">
      <div class="form-button__item">
        <EditButton :form-type="formType" @on-edit="onEdit" />
      </div>
    </template>
    <template v-else>
      <div class="form-button__item">
        <CancelButton @on-cancel="onCancel" />
      </div>
      <div class="form-button__item">
        <SaveButton @on-save="onSave" />
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { mapActions, mapGetters } from 'vuex';
import { EditedType } from '@/domain/models/forms/vo';
import EditButton from '@/components/button/EditButton.vue';
import CancelButton from '@/components/button/CancelButton.vue';
import SaveButton from '@/components/button/SaveButton.vue';

@Component({
  components: {
    EditButton,
    CancelButton,
    SaveButton,
  },
  computed: {
    ...mapGetters({
      editedType: 'form/editedType',
    }),
  },
  methods: {
    ...mapActions({
      setType: 'form/setType',
      cancelFormData: 'form/cancelFormData',
    }),
  },
})
export default class FormButton extends Vue {
  @Prop({ type: String, default: true })
  formType!: EditedType;

  @Prop({ type: String, default: '' })
  formAction!: string;

  editedType!: EditedType;
  setType!: (editedType: { editedType: EditedType }) => void;
  cancelFormData!: () => void;

  get isEdit() {
    return this.editedType === this.formType;
  }

  onSave() {
    this.$store.dispatch(this.formAction);
    this.setType({ editedType: null });
  }

  onEdit() {
    this.setType({ editedType: this.formType });
  }

  onCancel() {
    this.setType({ editedType: null });
    this.cancelFormData();
  }
}
</script>

<style lang="css">
.form-button {
  display: flex;
}
.form-button__item {
  margin-right: 10px;
}
</style>
