<template>
  <div class="bg-white p-6 rounded-lg shadow-md">
    <template v-if="cepDetails">
      <h2 class="text-xl font-semibold text-gray-900 mb-4">Detalhes do CEP</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div v-for="(item, key) in displayItems" :key="key" class="border-b border-gray-100 pb-2">
          <span class="text-gray-600 text-sm">{{ item.label }}:</span>
          <span class="block text-gray-900 font-medium">{{ item.value || '-' }}</span>
        </div>
      </div>
    </template>
    <template v-else>
      <p class="text-gray-500 text-center">Digite o CEP para ver os detalhes</p>
    </template>
  </div>
</template>

<script setup lang="ts">
import type { CepResponse } from '../types/cep'

const props = defineProps<{
  cepDetails: CepResponse | null
}>()

const displayItems = computed(() => {
  if (!props.cepDetails) return []

  return [
    { label: 'CEP', value: props.cepDetails.cep },
    { label: 'Logradouro', value: props.cepDetails.logradouro },
    { label: 'Complemento', value: props.cepDetails.complemento },
    { label: 'Bairro', value: props.cepDetails.bairro },
    { label: 'Cidade', value: props.cepDetails.localidade },
    { label: 'Estado', value: props.cepDetails.estado },
    { label: 'UF', value: props.cepDetails.uf },
    { label: 'Região', value: props.cepDetails.regiao },
    { label: 'DDD', value: props.cepDetails.ddd }
  ]
})
</script>