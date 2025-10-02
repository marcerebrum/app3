import type { CepResponse } from '../types/cep'

export const useCepService = () => {
  const loading = ref(false)
  const error = ref<string | null>(null)
  const cepData = ref<CepResponse | null>(null)

  const fetchCep = async (cep: string) => {
    try {
      loading.value = true
      error.value = null
      cepData.value = null
      
      // Remove caracteres não numéricos
      const cleanCep = cep.replace(/\D/g, '')
      
      if (cleanCep.length !== 8) {
        throw new Error('CEP deve conter 8 dígitos')
      }

      const response = await fetch(`https://viacep.com.br/ws/${cleanCep}/json/`)
      const data = await response.json()

      if (data.erro) {
        throw new Error('CEP não encontrado')
      }

      cepData.value = data as CepResponse
    } catch (e) {
      error.value = e instanceof Error ? e.message : 'Erro ao buscar CEP'
      cepData.value = null
    } finally {
      loading.value = false
    }
  }

  return {
    loading,
    error,
    cepData,
    fetchCep
  }
}