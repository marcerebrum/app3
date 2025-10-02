<template>
  <input
    :value="modelValue"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    :type="type"
    :placeholder="placeholder"
    :maxlength="maxLength"
    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
    v-bind="$attrs"
  />
</template>

<script setup lang="ts">
defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    default: ''
  },
  maxLength: {
    type: Number,
    default: undefined
  }
})

defineEmits(['update:modelValue'])
</script>