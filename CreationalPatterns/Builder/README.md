# Builder
O Builder é um padrão de design criacional, que permite a construção de objetos complexos passo a passo.
Diferente de outros padrões de criação, o Builder não exige que os produtos tenham uma interface comum. Isso torna possível produzir produtos diferentes usando o mesmo processo de construção.

## Uso do padrão no TypeScript

**Quando usar?:** 
Use o padrão Builder quando desejar que seu código possa criar representações diferentes de algum produto (por exemplo, casas de pedra e madeira). <br/>
Use o Builder para construir árvores compostas ou outros objetos complexos.<br/>

**Como identificar?**
O padrão Builder pode ser reconhecido na classe, que possui um único método de criação e vários métodos para configurar o objeto resultante. Os métodos do construtor geralmente oferecem suporte ao encadeamento (por exemplo, `someBuilder->setValueA(1)->setValueB(2)->create()` )


## Prós e contras

✅Você pode construir objetos passo a passo, adiar etapas de construção ou executar etapas recursivamente.<br />
✅Você pode reutilizar o mesmo código de construção ao criar várias representações de produtos.<br />
✅Princípio de responsabilidade única. Você pode isolar o código de construção complexo da lógica de negócios do produto.

❌A complexidade geral do código aumenta, pois o padrão requer a criação de várias novas classes.

[ 💻 **Código de exemplo** ](index.ts) <br/>

[ ⬅️ **Voltar**](../../README.md)