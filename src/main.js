import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { fetchProductsList, fetchProduct } from './helpers/fetchFunctions';
import { createCartProductElement, createProductElement } from './helpers/shopFunctions';
import { getSavedCartIDs } from './helpers/cartFunctions';

document.querySelector('.cep-button').addEventListener('click', searchCep);
const productList = document.querySelector('.products'); // capturo a section onde quero colocar as informações da API
const mensageLoading = document.createElement('p');
const mensageError = document.createElement('p');

function createLoading() {
  mensageLoading.classList.add('loading');
  mensageLoading.innerText = 'carregando...';
  productList.appendChild(mensageLoading);
}

function removeLoading() {
  mensageLoading.remove();
}
function errorMessage() {
  mensageError.classList.add('error');
  mensageError.innerText = 'Algum erro ocorreu, recarregue a página e tente novamente';
  productList.appendChild(mensageError);
}
const main = async () => {
  createLoading();
  try {
    const produtos = await fetchProductsList('computador');
    produtos.forEach((produto) => {
      const { id, title, thumbnail, price } = produto;
      const product = createProductElement({ id, title, thumbnail, price });
      productList.appendChild(product);
    });
  } catch (error) {
    errorMessage();
  } finally {
    removeLoading();
  }
};

const localStorageCart = async () => {
  const cartProducts = document.querySelector('.cart__products');
  const ids = getSavedCartIDs();
  const arrayIds = ids.map((id) => fetchProduct(id));
  const promises = await Promise.all(arrayIds);
  promises.forEach((promise) => cartProducts
    .appendChild(createCartProductElement(promise)));
};
localStorageCart();
main();
