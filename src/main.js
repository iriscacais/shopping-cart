import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';

document.querySelector('.cep-button').addEventListener('click', searchCep);

const productList = document.querySelector('.products'); // capturo a section onde quero colocar as informações da API
const produtos = await fetchProductsList('computador'); // chamo a função fetchProductsList com o argumento computador - aqui retorno a API - o retorno é igual ao search.js que está na pasta mock!

produtos.forEach((produto) => { // percorro cada elemento do objeto retornado pela API
  const { id, title, thumbnail, price } = produto; // desestruturo o objeto produto para pegar apenas os elementos que vou apresentar no html. - no caso sao os elementos criados também pela função createProductElemenst
  const product = createProductElement({ id, title, thumbnail, price }); // chamo a funçao que cria os elementos no html
  productList.appendChild(product); // faço o appendChild para que as informaçoes apareçam no html!
});
