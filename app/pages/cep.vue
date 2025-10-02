<template>
  <div class="min-h-screen bg-gray-50 py-12 px-4">
    <div class="max-w-2xl mx-auto">
      <!-- Header -->
      <header class="text-center mb-12">
        <h1 class="text-3xl font-bold text-gray-900 mb-2">Consulta de CEP</h1>
        <p class="text-gray-600">Digite um CEP para buscar informações do endereço</p>
      </header>

      <!-- Search Form -->
      <div class="bg-white p-6 rounded-lg shadow-md mb-8">
        <div class="flex gap-4">
          <div class="flex-1">
            <input
              v-model="cep"
              type="text"
              placeholder="Digite o CEP (somente números)"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              maxlength="8"
              @keyup.enter="handleSearch"
              @keypress="onlyNumbers"
            />
          </div>
          <button
            @click="handleSearch"
            :disabled="loading"
            class="px-12 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            <span v-if="loading" class="inline-block animate-spin">⌛</span>
            <span>{{ loading ? 'Buscando...' : 'Buscar' }}</span>
          </button>
        </div>

        <!-- Error Message -->
        <div v-if="error" class="mt-4 p-4 bg-red-50 text-red-600 rounded-lg">
          {{ error }}
        </div>
      </div>

      <!-- Results -->
      <div v-if="cepData" class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-xl font-semibold text-gray-900 mb-4">Resultado da Busca</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div v-for="(value, key) in displayData" :key="key" class="border-b border-gray-100 pb-2">
            <span class="text-gray-600 text-sm">{{ formatLabel(key) }}:</span>
            <span class="block text-gray-900 font-medium">{{ value || '-' }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const cep = ref('')
const { loading, error, cepData, fetchCep } = useCep()

const onlyNumbers = (e: KeyboardEvent) => {
  // Permite apenas números (0-9)
  if (!/[0-9]/.test(e.key)) {
    e.preventDefault()
  }
}

const handleSearch = () => {
  if (!cep.value || cep.value.trim() === '') {
    alert('Informe o CEP')
    return
  }
  fetchCep(cep.value)
}

// Dados formatados para exibição
const displayData = computed(() => {
  if (!cepData.value) return {}
  
  return {
    cep: cepData.value.cep,
    logradouro: cepData.value.logradouro,
    complemento: cepData.value.complemento,
    bairro: cepData.value.bairro,
    localidade: cepData.value.localidade,
    uf: cepData.value.uf,
    estado: cepData.value.estado,
    regiao: cepData.value.regiao,
    ddd: cepData.value.ddd
  }
})

// Formata os labels para exibição
const formatLabel = (key: string) => {
  const labels: Record<string, string> = {
    cep: 'CEP',
    logradouro: 'Logradouro',
    complemento: 'Complemento',
    bairro: 'Bairro',
    localidade: 'Cidade',
    uf: 'UF',
    estado: 'Estado',
    regiao: 'Região',
    ddd: 'DDD'
  }
  return labels[key] || key
}
</script>