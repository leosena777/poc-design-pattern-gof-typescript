# Abstract Factory

Cria instâncias de classes derivadas.
Abstract Factory define uma interface para criar todos os produtos distintos, mas deixa a criação real do produto em classes de fábrica concretas. Cada tipo de fábrica corresponde a uma determinada variedade de produtos.

O código do cliente chama os métodos de criação de um objeto de fábrica em vez de criar produtos diretamente com uma chamada de construtor ( newoperador). Como uma fábrica corresponde a uma única variante de produto, todos os seus produtos serão compatíveis.

O código do cliente funciona com fábricas e produtos somente através de suas interfaces abstratas. Ele permite que o mesmo código do cliente funcione com produtos diferentes. 

## Uso do padrão no TypeScript

**Quando usar?:** O padrão Abstract Factory é bastante comum no código TypeScript. Muitas estruturas e bibliotecas o utilizam para fornecer uma maneira de estender e personalizar seus componentes padrão.

**Como identificar?**: O padrão é fácil de reconhecer pelos métodos, que retornam um objeto de fábrica. Em seguida, a fábrica é usada para criar subcomponentes específicos.


## Prós e contras


✅Você pode ter certeza de que os produtos que você recebe de uma fábrica são compatíveis entre si.<br />
✅Você evita acoplamentos rígidos entre produtos de concreto e código do cliente.<br />
✅Princípio de responsabilidade única . Você pode extrair o código de criação do produto em um único local, facilitando o suporte ao código.<br />
✅Princípio Aberto / Fechado . Você pode introduzir novas variantes de produtos sem quebrar o código do cliente existente.<br />

❌O código pode se tornar mais complicado do que deveria ser, pois muitas novas interfaces e classes são introduzidas junto com o padrão.

[ 💻 **Código de exemplo** ](index.ts) <br/>

[ ⬅️ **Voltar**](../../README.md)