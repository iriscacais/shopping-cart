# Projeto Shopping-Cart 
## Desenvolvido no módulo de front-end do curso de desenvolvimento web da Trybe 🚀

### Descrição do projeto
Com CSS e HTML já desenvolvidos pela Trybe, o objetivo desse projeto foi desenvolver um carrinho de compras dinâmico, consumindo dados de uma API do mercado livre e dados de uma API de CEP. Além disso, colocar em prática conhecimentos de TDD (Test Driven Development) para treinar e garantir escritas de códigos de qualidade garantindo a funcionalidade da aplicação.

obs: as funções dentro do arquivo shopFunction.js e cartFunctions.js foram desenvolvidas pela Trybe (exceto a parte de evento de click dentro da função createProductElement que foi desenvolvida por mim).

### Tecnologias usadas no desenvolvimento do projeto
- Consumo de API;
- JavaScript;
- Jest

### Para rodar esse projeto
Para ver esse projeto funcionando na sua máquina:
- Clonar o repositório:
> git clone git@github.com:iriscacais/shopping-cart.git
- Instalar as dependências:
> npm install
- Para visualizar o projeto em uma página web utilize:
> npm start

### O que foi desenvolvido 
1. (TDD) Testes para a função fetchProductsList. Os testes se encontram no arquivo fetchProductsList.test.js dentro da pasta tests;

2. Implementa a função fetchProductsList responsável por realizar a requisição e retornar os resultados da API do mercado livre ou retornar a mensagem de erro:
 - Termo de busca não informado
 - > https://api.mercadolibre.com/sites/MLB/search?q=$QUERY
 
3. Utiliza a função fetchProductsList criar uma listagem de produtos dentro do arquivo main.js. Para criar todos os componentes HTML referentes a cada um dos produtos retornados pela API foi utilizada a função desenvolvida pela Trybe createProductElement;

4. Adiciona o texto Carregando... durante a requisição da API. Função se encontra no arquivo main.js;

5. Adiciona a mensagem: Algum erro ocorreu, recarregue a página e tente novamente, caso ocorra algum erro durante a requisição da API;

6. (TDD) Testes para a função fetchProduct. Os testes se encontram no arquivo fetchProduct.test.js dentro da pasta tests;

7. Implementa a função fetchProduct que retorna dados de um produto e adiciona ao carrinho. A função se encontra dentro do arquivo fetchFunctions.js;

8. Implementa a funcionalidade que adiciona os produtos ao carrinho. A função com evento de click se encontra em createProductElement dentro do arquivo shopFunctions. Essa parte da função foi implementada por mim e o restante dela pela Trybe. As funções saveCartId e createCartProductElement foram desenvolvidas pela Trybe.

9. Recupera os itens adicionados no carrinho de compras do localStorage. Utilizando o método Promise.all para manter a ordem do que foi adicionado ao carrinho. A funçao se encontra no arquivo main.js com o nome localStorageCart;

10. Calcula o valor total dos produtos no carrinho de compras;

11. Implementa a função getAddress no arquivo cepFunctions.js, responsável por realizar a requisição para a API de CEPs e retornar o endereço completo do CEP. A requisição foi feita para 2 APIs de CEP diferentes com o objetivo de utilizar a que retornar primeiro. Utilizando o método Promise.any;

>https://cep.awesomeapi.com.br/json/$CEP 

>https://brasilapi.com.br/api/cep/v2/$CEP
