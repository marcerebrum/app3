<template>
  <div class="min-h-screen bg-gray-50 py-12 px-4">
    <div class="max-w-2xl mx-auto">
      <!-- Search Form -->
      <div class="bg-white p-6 rounded-lg shadow-md mb-8">
        <div class="flex gap-4">
          <div class="flex-1">
            <BaseInput
              v-model="cep"
              placeholder="Digite o CEP (somente números)"
              :maxLength="8"
              @keyup.enter="handleSearch"
            />
          </div>
          <BaseButton
            @click="handleSearch"
            :disabled="loading"
          >
            <template #icon-left>
              <span v-if="loading" class="inline-block animate-spin">⌛</span>
            </template>
            {{ loading ? 'Buscando...' : 'Buscar' }}
          </BaseButton>
        </div>
      </div>

      <!-- Error Message -->
      <div v-if="error" class="mt-4 p-4 bg-primary-50 text-primary-600 rounded-lg">
        {{ error }}
      </div>
    </div>

    <!-- CEP Details -->
    <CepDetails :cep-details="cepData" />

    <!-- CEP History -->
    <CepList 
      :ceps="searchHistory"
      @select="handleSelectFromHistory"
    />
  </div>
</template>

<script setup lang="ts">
import BaseInput from '../components/BaseInput.vue'
import BaseButton from '../components/BaseButton.vue'
import CepDetails from '../components/CepDetails.vue'
import CepList from '../components/CepList.vue'
import type { CepResponse } from '../types/cep'

const cep = ref('')
const { loading, error, cepData, fetchCep } = useCepService()
const searchHistory = ref<CepResponse[]>([])

const handleSearch = async () => {
  if (!cep.value) {
    alert('Informe o CEP')
    return
  }
  await fetchCep(cep.value)
  
  // Adiciona ao histórico se a busca foi bem sucedida
  if (cepData.value && !error.value) {
    addToHistory(cepData.value)
  }
}

const addToHistory = (cep: CepResponse) => {
  // Evita duplicatas no histórico
  if (!searchHistory.value.find(item => item.cep === cep.cep)) {
    searchHistory.value = [cep, ...searchHistory.value]
  }
}

const handleSelectFromHistory = async (selectedCep: CepResponse) => {
  cep.value = selectedCep.cep.replace('-', '') // Remove o hífen para o campo de busca
  await fetchCep(cep.value)
}
</script>