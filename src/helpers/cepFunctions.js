export const getAddress = async (cep) => {
  const spanCep = document.querySelector('.cart__address');
  const CEP1 = `https://cep.awesomeapi.com.br/json/${cep}`;
  const CEP2 = `https://brasilapi.com.br/api/cep/v2/${cep}`;
  try {
    const result = await Promise.any([fetch(CEP1), fetch(CEP2)]);
    const data = await result.json();
    return data;
  } catch {
    spanCep.innerHTML = 'CEP não encontrado';
  }
};

export const searchCep = async () => {
  const inputCep = document.querySelector('.cep-input');
  const spanCep = document.querySelector('.cart__address');

  const data = await getAddress(inputCep.value);
  const tamanhoCep = 8;
  if (!Number(inputCep.value) || inputCep.value.length !== tamanhoCep) {
    spanCep.innerHTML = 'CEP não encontrado';
  } else {
    spanCep.innerHTML = `${data.address} - ${data.district} - ${data
      .city} - ${data.state}`;
  }
};
