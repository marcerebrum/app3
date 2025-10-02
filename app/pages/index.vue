<template>
  <main class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
    <div class="max-w-7xl mx-auto">
      <!-- Hero Section -->
      <section class="text-center mb-16">
        <h1 class="text-5xl font-extrabold text-gray-900 mb-4">
          Welcome to Our App
        </h1>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          This is a sample page demonstrating Tailwind CSS features and layouts.
        </p>
      </section>

      <!-- Features Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <div class="text-blue-500 text-2xl mb-4">🚀</div>
          <h3 class="text-xl font-semibold text-gray-800 mb-2">Fast Performance</h3>
          <p class="text-gray-600">Lightning quick loading times and smooth interactions.</p>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <div class="text-green-500 text-2xl mb-4">🎨</div>
          <h3 class="text-xl font-semibold text-gray-800 mb-2">Beautiful Design</h3>
          <p class="text-gray-600">Elegant and modern design principles throughout.</p>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <div class="text-purple-500 text-2xl mb-4">🛠️</div>
          <h3 class="text-xl font-semibold text-gray-800 mb-2">Easy to Use</h3>
          <p class="text-gray-600">Intuitive interface and user-friendly features.</p>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="text-center">
        <button class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors">
          Get Started
        </button>
      </div>
    </div>
  </main>
</template>