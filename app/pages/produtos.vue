<template>
  <div class="min-h-screen bg-gray-50 py-8 px-4">
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <header class="mb-8">
        <h1 class="text-4xl font-bold text-gray-900 mb-2">Nossos Produtos</h1>
        <p class="text-gray-600">Explore nossa seleção de produtos exclusivos</p>
      </header>

      <!-- Filters -->
      <div class="flex flex-wrap gap-4 mb-8">
        <button class="px-4 py-2 bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200 transition-colors">
          Todos
        </button>
        <button class="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors">
          Eletrônicos
        </button>
        <button class="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors">
          Roupas
        </button>
        <button class="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors">
          Acessórios
        </button>
      </div>

      <!-- Products Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <!-- Product Card 1 -->
        <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
          <div class="h-48 bg-gray-200">
            <img src="https://via.placeholder.com/400" alt="Produto 1" class="w-full h-full object-cover"/>
          </div>
          <div class="p-4">
            <h3 class="text-lg font-semibold text-gray-800 mb-2">Smartphone Pro Max</h3>
            <p class="text-gray-600 text-sm mb-3">O mais avançado smartphone da linha</p>
            <div class="flex justify-between items-center">
              <span class="text-blue-600 font-bold">R$ 2.999,00</span>
              <button class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Comprar
              </button>
            </div>
          </div>
        </div>

        <!-- Product Card 2 -->
        <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
          <div class="h-48 bg-gray-200">
            <img src="https://via.placeholder.com/400" alt="Produto 2" class="w-full h-full object-cover"/>
          </div>
          <div class="p-4">
            <h3 class="text-lg font-semibold text-gray-800 mb-2">Notebook Ultra</h3>
            <p class="text-gray-600 text-sm mb-3">Portátil e potente para seu trabalho</p>
            <div class="flex justify-between items-center">
              <span class="text-blue-600 font-bold">R$ 4.599,00</span>
              <button class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Comprar
              </button>
            </div>
          </div>
        </div>

        <!-- Product Card 3 -->
        <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
          <div class="h-48 bg-gray-200">
            <img src="https://via.placeholder.com/400" alt="Produto 3" class="w-full h-full object-cover"/>
          </div>
          <div class="p-4">
            <h3 class="text-lg font-semibold text-gray-800 mb-2">Fones Wireless</h3>
            <p class="text-gray-600 text-sm mb-3">Som cristalino e sem fios</p>
            <div class="flex justify-between items-center">
              <span class="text-blue-600 font-bold">R$ 599,00</span>
              <button class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Comprar
              </button>
            </div>
          </div>
        </div>

        <!-- Product Card 4 -->
        <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
          <div class="h-48 bg-gray-200">
            <img src="https://via.placeholder.com/400" alt="Produto 4" class="w-full h-full object-cover"/>
          </div>
          <div class="p-4">
            <h3 class="text-lg font-semibold text-gray-800 mb-2">Smartwatch Fit</h3>
            <p class="text-gray-600 text-sm mb-3">Monitore sua saúde com estilo</p>
            <div class="flex justify-between items-center">
              <span class="text-blue-600 font-bold">R$ 899,00</span>
              <button class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Comprar
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Pagination -->
      <div class="flex justify-center mt-12 gap-2">
        <button class="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
          Anterior
        </button>
        <button class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          1
        </button>
        <button class="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
          2
        </button>
        <button class="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
          3
        </button>
        <button class="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
          Próxima
        </button>
      </div>
    </div>
  </div>
</template>