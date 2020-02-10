# Singleton
Singleton é um padrão de design criacional, que garante que apenas um objeto desse tipo exista e forneça um único ponto de acesso a ele para qualquer outro código.
Singleton tem quase os mesmos prós e contras que as variáveis ​​globais. Embora sejam super úteis, eles quebram a modularidade do seu código.
Você pode apenas usar uma classe, que depende do Singleton, em algum outro contexto. Você terá que levar a classe Singleton também. Na maioria das vezes, essa limitação surge durante a criação de testes de unidade.

## Uso do padrão no TypeScript

**Quando usar?:** 
Use o padrão Singleton quando uma classe em seu programa tiver apenas uma única instância disponível para todos os clientes; por exemplo, um único objeto de banco de dados compartilhado por diferentes partes do programa.<br />
Use o padrão Singleton quando precisar de um controle mais rígido sobre as variáveis ​​globais.<br />

**Como identificar?**
Singleton pode ser reconhecido por um método de criação estático, que retorna o mesmo objeto em cache.

## Prós e contras

✅Você pode ter certeza de que uma classe possui apenas uma única instância.<br />
✅Você ganha um ponto de acesso global para essa instância.<br />
✅O objeto singleton é inicializado somente quando solicitado pela primeira vez.<br />

❌Viola o princípio da responsabilidade única . O padrão resolve dois problemas no momento.
❌O padrão Singleton pode mascarar o design incorreto, por exemplo, quando os componentes do programa sabem muito um do outro.
❌O padrão requer tratamento especial em um ambiente multithread para que vários threads não criem um objeto singleton várias vezes.
❌Pode ser difícil testar o código do cliente do Singleton, porque muitas estruturas de teste dependem da herança ao produzir objetos simulados. Como o construtor da classe singleton é privado e a substituição de métodos estáticos é impossível na maioria dos idiomas, você precisará pensar em uma maneira criativa de mockar o singleton. Ou simplesmente não escreva os testes. Ou não use o padrão Singleton.

[ 💻 **Código de exemplo** ](index.ts) <br/>

[ ⬅️ **Voltar**](../../README.md)