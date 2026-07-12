<template lang="pug">
.image-uploader(
  @dragover.prevent="onDragOver"
  @dragleave.prevent="onDragLeave"
  @drop.prevent="onDrop"
  :class="{ 'image-uploader--dragover': dragOver }"
)
  label.image-uploader__label
    input(
      type="file"
      :accept="accept"
      @change="handleFileSelect"
    )
    .image-uploader__preview(v-if="preview")
      img(:src="preview" :alt="label")
      .image-uploader__remove(@click.stop="removeFile") ×
    .image-uploader__placeholder(v-else)
      ui-svg-icon(:name="icon" :size="32")
      span {{ placeholder }}
      span.image-uploader__hint {{ label }}
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'ImageUploader',
  props: {
    modelValue: {
      type: File,
      default: null
    },
    label: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      default: 'Перетащите или нажмите для загрузки'
    },
    icon: {
      type: String,
      default: 'download'
    },
    accept: {
      type: String,
      default: 'image/jpeg,image/png,image/webp'
    }
  },
  emits: ['update:modelValue'],
  setup (props, { emit }) {
    const preview = ref(null)
    const dragOver = ref(false)
    const file = ref(null)

    const onDragOver = () => {
      dragOver.value = true
    }

    const onDragLeave = () => {
      dragOver.value = false
    }

    const onDrop = (e) => {
      dragOver.value = false
      const files = e.dataTransfer.files
      if (files.length > 0) {
        const selectedFile = files[0]
        if (selectedFile.type.startsWith('image/')) {
          file.value = selectedFile
          const reader = new FileReader()
          reader.onload = (e) => {
            preview.value = e.target.result
          }
          reader.readAsDataURL(selectedFile)
          emit('update:modelValue', selectedFile)
        }
      }
    }

    const handleFileSelect = (e) => {
      const selectedFile = e.target.files[0]
      if (selectedFile) {
        file.value = selectedFile
        const reader = new FileReader()
        reader.onload = (e) => {
          preview.value = e.target.result
        }
        reader.readAsDataURL(selectedFile)
        emit('update:modelValue', selectedFile)
      }
      e.target.value = ''
    }

    const removeFile = () => {
      file.value = null
      preview.value = null
      dragOver.value = false
      emit('update:modelValue', null)
    }

    return {
      preview,
      dragOver,
      onDragOver,
      onDragLeave,
      onDrop,
      handleFileSelect,
      removeFile
    }
  }
}
</script>

<style lang="sass" scoped>
.image-uploader
  position: relative
  transition: all 0.3s ease
  height: 100%

  label
    cursor: pointer
    display: block
    height: 100%

  input
    display: none

  &--dragover
    .image-uploader__label
      border-color: $firstColor
      background: rgba($firstColor, 0.1)
      transform: scale(1.02)

  &__label
    width: 100%
    height: 150px
    border: 2px dashed rgba(255, 255, 255, 0.2)
    border-radius: $BR
    overflow: hidden
    position: relative
    transition: all 0.3s ease
    background: rgba(255, 255, 255, 0.02)

    &:hover
      border-color: $firstColor

  &__preview
    width: 100%
    height: 100%
    position: relative

    img
      width: 100%
      height: 100%
      object-fit: cover

  &__remove
    position: absolute
    top: 10px
    right: 10px
    width: 30px
    height: 30px
    background: rgba(0, 0, 0, 0.8)
    border-radius: 50%
    display: flex
    align-items: center
    justify-content: center
    color: $white
    font-size: 20px
    cursor: pointer
    transition: background 0.3s
    z-index: 2

    &:hover
      background: #ff6b6b

  &__placeholder
    width: 100%
    height: 100%
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
    color: rgba(255, 255, 255, 0.5)
    @include font('t16-regular')
    text-align: center
    padding: 20px
    gap: 8px

    :deep(svg)
      opacity: 0.5
      margin-bottom: 5px

  &__hint
    font-size: 12px
    opacity: 0.6
    margin-top: 2px
</style>
