interface CepResponse {
  cep: string;
  logradouro: string;
  complemento: string;
  unidade: string;
  bairro: string;
  localidade: string;
  uf: string;
  estado: string;
  regiao: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
}

export const useCep = () => {
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

      cepData.value = data
    } catch (e) {
      error.value = e instanceof Error ? e.message : 'Erro ao buscar CEP'
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