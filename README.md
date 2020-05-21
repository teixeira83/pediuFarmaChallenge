# Pediu Farma Challenge

A tarefa é muito simples, fazer uma engenharia reversa no banco de dados fornecido para extrair dele as seguintes informações:

**Tarefa 1**
- Preço do produto;
- Código de barras do produto (EAN);
- Quantidade em estoque;

A regra de preço é a seguinte, existem 2 preços o preço cheio, também conhecimedo como PMC, e o preço de promoção, quando houver promoção ela se sobrepões ao preço cheio.

**Exemplo:**

Dipirona, preço cheio R$ 4, promoção, R$ 2,99 o preço final será o de promoção.

Obs.: o preço da promoão só vale se estiver dentro da valdide.

**Tarefa 2**

Você irá escrever um script na linguagem que se sentir mais confortável que gere uma lista json com as informações da tarefa 1 
Exemplo da lista:

```
[{ 
    "ean":789000000, 
    "preco":1.99,
    "estoque":38
},
{ 
    "ean":789000001, 
    "preco":3.99,
    "estoque":18
},
...
]
```

## Instalação

Basta clonar este repositório e fazer a instação dos pacotes do npm com o seguinte comando na raiz do projeto:

```
npm install
```

É necessário configurar as varáveis de ambiente. Para isto, basta criar o arquivo _*.env*_ dentro da raiz do projeto e adicionar as seguintes variáveis:

```
DB_DATABASE=${name_of_database}
DB_HOST=${address}
DB_PORT=${port}
DB_USER=${name_of_mysql_user}
DB_PASS=${pass_of_database}
```
O projeto verifica se as variáveis de ambiente foram configuradas com sucesso. Caso contrário um warning deverá te lembrar :)

Para subir o servidor em modo de desenvolvedor com o nodemon ativo:

```
npm run devmode
```

Se quiser subir somente o servidor sem os pacotes de desenvolvimento:

```
npm start
```
