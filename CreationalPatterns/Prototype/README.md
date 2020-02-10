# Prototype
Prototype é um padrão de design criacional que permite a clonagem de objetos, mesmo complexos, sem acoplamento a suas classes específicas.
Todas as classes de protótipos devem ter uma interface comum que permita copiar objetos, mesmo que suas classes concretas sejam desconhecidas. Objetos protótipos podem produzir cópias completas, pois objetos da mesma classe podem acessar os campos privados um do outro.


## Uso do padrão no TypeScript

**Quando usar?:** 
Use o padrão Prototype quando seu código não depender das classes concretas de objetos que você precisa copiar. <br/>
Use o padrão quando desejar reduzir o número de subclasses que diferem apenas na maneira como inicializam seus respectivos objetos. Alguém poderia ter criado essas subclasses para poder criar objetos com uma configuração específica.


**Como identificar?**
O protótipo pode ser facilmente reconhecido por um cloneou copymétodos, etc.


## Prós e contras

✅Você pode clonar objetos sem acoplar às suas classes concretas. <br />
✅Você pode se livrar do código de inicialização repetido em favor da clonagem de protótipos pré-criados.<br />
✅Você pode produzir objetos complexos de forma mais conveniente.<br />
✅Você obtém uma alternativa à herança ao lidar com predefinições de configuração para objetos complexos.

❌A clonagem de objetos complexos com referências circulares pode ser muito complicada.

[ 💻 **Código de exemplo** ](index.ts) <br/>

[ ⬅️ **Voltar**](../../README.md)