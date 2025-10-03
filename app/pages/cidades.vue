<template>
  <div class="min-h-screen bg-gray-50 py-12 px-4">
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <header class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-900 mb-2">Principais Cidades do Brasil</h1>
        <p class="text-lg text-gray-600">Explore informações das principais cidades brasileiras</p>
      </header>

      <!-- Filtros -->
      <div class="mb-8">
        <div class="flex flex-wrap gap-3">
          <button 
            v-for="regiao in regioes" 
            :key="regiao"
            :class="[
              'px-4 py-2 rounded-full transition-colors',
              regiaoSelecionada === regiao 
                ? 'bg-primary-500 text-white' 
                : 'bg-white text-gray-700 hover:bg-secondary-100'
            ]"
            @click="regiaoSelecionada = regiao"
          >
            {{ regiao }}
          </button>
        </div>
      </div>

      <!-- Grid de Cidades -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="cidade in cidadesFiltradas" 
          :key="cidade.id"
          class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all"
        >
          <div class="h-48 bg-gray-200 relative">
            <img :src="cidade.imagem" :alt="cidade.nome" class="w-full h-full object-cover"/>
            <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
              <h3 class="text-xl font-bold text-white">{{ cidade.nome }}</h3>
              <p class="text-white/90">{{ cidade.estado }}</p>
            </div>
          </div>
          
          <div class="p-4">
            <div class="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p class="text-sm text-gray-600">População</p>
                <p class="font-semibold">{{ formatPopulacao(cidade.populacao) }}</p>
              </div>
              <div>
                <p class="text-sm text-gray-600">Região</p>
                <p class="font-semibold">{{ cidade.regiao }}</p>
              </div>
            </div>
            
            <div class="space-y-2">
              <div class="flex items-center gap-2">
                <span class="text-secondary-500">📈</span>
                <span class="text-sm">PIB: R$ {{ formatPIB(cidade.pib) }}</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-primary-500">🎓</span>
                <span class="text-sm">IDH: {{ cidade.idh }}</span>
              </div>
            </div>

            <button class="mt-4 w-full py-2 text-center bg-secondary-500 text-white rounded-lg hover:bg-secondary-600 transition-colors">
              Ver mais detalhes
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Cidade {
  id: number;
  nome: string;
  estado: string;
  regiao: string;
  populacao: number;
  pib: number;
  idh: number;
  imagem: string;
}

const regioes = ['Todas', 'Norte', 'Nordeste', 'Centro-Oeste', 'Sudeste', 'Sul']
const regiaoSelecionada = ref('Todas')

const cidades: Cidade[] = [
  {
    id: 1,
    nome: 'São Paulo',
    estado: 'SP',
    regiao: 'Sudeste',
    populacao: 12325232,
    pib: 699.288,
    idh: 0.805,
    imagem: 'https://via.placeholder.com/400x300?text=São+Paulo'
  },
  {
    id: 2,
    nome: 'Rio de Janeiro',
    estado: 'RJ',
    regiao: 'Sudeste',
    populacao: 6747815,
    pib: 354.98,
    idh: 0.799,
    imagem: 'https://via.placeholder.com/400x300?text=Rio+de+Janeiro'
  },
  {
    id: 3,
    nome: 'Salvador',
    estado: 'BA',
    regiao: 'Nordeste',
    populacao: 2886698,
    pib: 63.49,
    idh: 0.759,
    imagem: 'https://via.placeholder.com/400x300?text=Salvador'
  },
  {
    id: 4,
    nome: 'Manaus',
    estado: 'AM',
    regiao: 'Norte',
    populacao: 2219580,
    pib: 73.24,
    idh: 0.737,
    imagem: 'https://via.placeholder.com/400x300?text=Manaus'
  },
  {
    id: 5,
    nome: 'Curitiba',
    estado: 'PR',
    regiao: 'Sul',
    populacao: 1948626,
    pib: 87.15,
    idh: 0.823,
    imagem: 'https://via.placeholder.com/400x300?text=Curitiba'
  },
  {
    id: 6,
    nome: 'Brasília',
    estado: 'DF',
    regiao: 'Centro-Oeste',
    populacao: 3055149,
    pib: 235.497,
    idh: 0.824,
    imagem: 'https://via.placeholder.com/400x300?text=Brasília'
  }
]

const cidadesFiltradas = computed(() => {
  if (regiaoSelecionada.value === 'Todas') {
    return cidades
  }
  return cidades.filter(cidade => cidade.regiao === regiaoSelecionada.value)
})

const formatPopulacao = (populacao: number) => {
  return new Intl.NumberFormat('pt-BR').format(populacao)
}

const formatPIB = (pib: number) => {
  return pib.toFixed(2) + ' bi'
}
</script>