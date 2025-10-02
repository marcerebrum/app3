<template>
  <div class="bg-white p-6 rounded-lg shadow-md mt-8">
    <h2 class="text-xl font-semibold text-gray-900 mb-4">Histórico de CEPs</h2>
    
    <div v-if="ceps.length > 0" class="space-y-3">
      <div 
        v-for="cep in ceps" 
        :key="cep.cep"
        class="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
        @click="$emit('select', cep)"
      >
        <div>
          <p class="font-medium text-gray-900">{{ cep.cep }}</p>
          <p class="text-sm text-gray-600">{{ formatLocation(cep) }}</p>
        </div>
        <span class="text-secondary-600">&rarr;</span>
      </div>
    </div>
    <p v-else class="text-center text-gray-500">
      Nenhum CEP pesquisado ainda
    </p>
  </div>
</template>

<script setup lang="ts">
import type { CepResponse } from '../types/cep'

const props = defineProps<{
  ceps: CepResponse[]
}>()

defineEmits<{
  (e: 'select', cep: CepResponse): void
}>()

const formatLocation = (cep: CepResponse) => {
  return `${cep.localidade}/${cep.uf} - ${cep.bairro}`
}
</script>