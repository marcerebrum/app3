<template>
  <button
    :class="[
      'px-6 py-2 rounded-lg transition-colors flex items-center gap-2',
      'disabled:opacity-50 disabled:cursor-not-allowed',
      variant === 'primary' ? 'bg-blue-600 hover:bg-blue-700 text-white' : '',
      variant === 'secondary' ? 'bg-gray-200 hover:bg-gray-300 text-gray-800' : '',
      block ? 'w-full' : '',
      size === 'sm' ? 'px-4 py-1 text-sm' : '',
      size === 'lg' ? 'px-8 py-3 text-lg' : ''
    ]"
    v-bind="$attrs"
  >
    <slot name="icon-left"></slot>
    <slot></slot>
    <slot name="icon-right"></slot>
  </button>
</template>

<script setup lang="ts">
defineProps({
  variant: {
    type: String as () => 'primary' | 'secondary',
    default: 'primary'
  },
  size: {
    type: String as () => 'sm' | 'md' | 'lg',
    default: 'md'
  },
  block: {
    type: Boolean,
    default: false
  }
})
</script>