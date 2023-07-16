export interface CepData {
  cep: string;
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
}

export const checkCEP = async (cep: string): Promise<CepData> => {
  const cleanedCep = cep.replace(/\D/g, '');

  try {
    const response = await fetch(`https://viacep.com.br/ws/${cleanedCep}/json`);

    if (response.ok) {
      const data = await response.json() as CepData;
      return data;
    } else {
      throw new Error('Erro ao obter os dados do CEP');
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};
