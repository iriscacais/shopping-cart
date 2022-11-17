import './mocks/fetchSimulator';
import { fetchProduct } from '../helpers/fetchFunctions';
import product from './mocks/product';

// implemente seus testes aqui
describe('Teste a função fetchProduct', () => {
  it('Teste se fetchProduct é uma função', () => {
    expect(typeof fetchProduct).toBe('function');
  });

  it('Teste se ao executar fetchProduct, fetch é chamada', async () => {
    await fetchProduct('MLB1405519561');
    expect(fetch).toHaveBeenCalled();
  });

  it('Teste se fetchProduct com o argumento MLB1405519561, fetch utiliza o endpoint ', async () => {
    await fetchProduct('MLB1405519561');
    const endpoint = 'https://api.mercadolibre.com/items/MLB1405519561';
    expect(fetch).toHaveBeenCalledWith(endpoint);
  });

  it('Teste se o retorno de fetchProduct com o argumento MLB1405519561 é uma estrutura de dados igaul ao objeto produto ', async () => {
    await fetchProduct('MLB1405519561');
    expect(fetchProduct('MLB1405519561')).resolves.toBe(product);
  });

  it('Teste se o retorno de fetchProduct sem argumento retorna um erro ID não informado', () => {
    expect(fetchProduct()).rejects.toThrow('ID não informado');
  });
});
