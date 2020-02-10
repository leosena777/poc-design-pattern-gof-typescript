# Factory Method

O método Factory é um padrão de design criacional que resolve o problema de criar objetos do produto sem especificar suas classes concretas. Ele fornece uma interface para criar objetos em uma superclasse, mas permite que as subclasses alterem o tipo de objetos que serão criados.

O Método de Fábrica define um método, que deve ser usado para criar objetos em vez da chamada direta do construtor ( newoperador). As subclasses podem substituir esse método para alterar a classe de objetos que serão criados.


## Uso do padrão no TypeScript

**Quando usar?:** 
Use o método Factory quando não souber de antemão os tipos e dependências exatas dos objetos com os quais seu código deve funcionar. <br/>
Use o Método de Fábrica quando desejar fornecer aos usuários da sua biblioteca ou estrutura uma maneira de estender seus componentes internos.<br/>
Use o Método de Fábrica quando desejar salvar recursos do sistema reutilizando objetos existentes em vez de recriá-los sempre.

**Como identificar?**
Os métodos de fábrica podem ser reconhecidos por métodos de criação, que criam objetos de classes concretas, mas os retornam como objetos de tipo ou interface abstrata.


## Prós e contras

✅Você evita um acoplamento rígido entre o criador e os produtos de concreto. <br/>
✅Princípio de responsabilidade única. Você pode mover o código de criação do produto para um local do programa,facilitando o suporte ao código. <br/>
✅Princípio Aberto / Fechado . Você pode introduzir novos tipos de produtos no programa sem quebrar o código do cliente existente. <br/>

❌O código pode se tornar mais complicado, pois é necessário introduzir muitas subclasses novas para implementar o padrão. O melhor cenário é quando você está introduzindo o padrão em uma hierarquia existente de classes de criadores.

[ 💻 **Código de exemplo** ](index.ts) <br/>

[ ⬅️ **Voltar**](../../README.md)