# Design Pattern - GOF 🚀

## O que é Design Pattern?

Um padrão de projeto ( design pattern ) é uma solução geral para um problema que ocorre com frequência dentro de um determinado contexto no projeto de software. São template de como resolver um problema que pode ser usado em muitas situações diferentes.

## Estrutura de um padrão:

| **Estrutura** |                                **Exemplo**                                 |
| ------------- | :------------------------------------------------------------------------: |
| Nome          |                                 Singleton                                  |
| Problema      |                 Uma classe precisa ter uma única instância                 |
| Solução       |          Garante que uma classe terá somente uma única instância           |
| Consequências | Fácil acesso e gerência de recursos compartilhados como variáveis globais. |

## O que é GOF ?

Em 1994 quatro autores, Erich Gamma, Richard Helm, Ralph Johnson e John Vlissides, publicaram um livro, o Design Patterns: Elements of Reusable Object-Oriented Software (Padrões de Projeto: Soluções reutilizáveis de software orientado a objetos) para explicar conceitos de padrões de projeto para o desenvolvimento de software. Estes quatro autores ficaram então conhecidos como Gang Of Four, ou seja GOF.

Existem 23 padrões de projetos definidos pelo GoF, que são separados em três grupos, cada um dos grupos visa solucionar um tipo de cenário com um determinado problema.

# 1. CREATIONAL DESIGN PATTERNS

## (PADRÕES DE PROJETO DE CRIAÇÃO)

Estes padrões lidam com o processo de criação de novos objetos de uma forma que ele pode ser desacoplado do seu sistema de implementação. Isso fornece mais flexibilidade em decidir quais objetos precisam ser criados para um determinado caso ou cenário. São os seguintes:

- 📚[**Factory Method:**](/CreationalPatterns/FactoryMethod/README.md) Cria instâncias de classes derivadas
- 📚[**Abstract Factory:**](/CreationalPatterns/AbstractFactory/README.md) Cria instâncias de muitas classes several classes pertencentes a diferentes famílias
- 📚[**Builder:**](/CreationalPatterns/Builder/README.md) Separa a construção do objeto de sua representação
- 📚[**Prototype:**](/CreationalPatterns/Prototype/README.md) Cria um objeto duplicado ou um clone do objeto
- 📚[**Singleton:**](/CreationalPatterns/Singleton/README.md) Garante que a classe só tenha uma instância

# 2.  STRUCTURAL DESIGN PATTERNS
## (PADRÕES DE PROJETO ESTRUTURAIS)

Estes padrões lidam com a composição das estruturas dos objetos. O conceito de herança é usado para compor interfaces e definir várias formas de compor objetos para obter novas funcionalidades. São os seguintes:

- **Adapter:** Combinar interfaces de classes diferentes
- **Bridge:** Separar uma abstração de objeto de sua implementação
- **Composite:** Uma estrutura em árvore de simples e objetos compostos
- **Decorator:** Adicionar responsabilidades para objetos dinamicamente
- **Facade:** Uma simples classe que representa um complexo sistema inteiro
- **Flyweight:** Minimizar o uso da memória compartilhando o máximo de dados possível com objetos similares
- **Proxy:** Fornece um objeto substituto, que faz referência a outro objeto

# 3.  BEHAVIORAL DESIGN PATTERNS
##    (PADRÕES DE PROJETO COMPORTAMENTAIS)

Estes padrões lidam com o processo de comunicação, gerenciamento de relações, e responsabilidades entre objetos. São os seguintes:

- **Chain of Responsibility:** Passa uma requisição entre uma lista ou objetos encadeados.
- **Command:** Embrulha uma requisição em um objeto como um comando e passa para o objeto invocador
- **Interpreter:** Implementar uma linguagem computacional especializada para resolver problemas específicos rapidamente
- **Iterator:** Iterators são usados para acessar os elementos de um objeto agregado sequencialmente sem expor sua estrutura interna
- **Mediator:** Fornece uma interface unificada para um conjunto de interfaces em um subsistema
- **Memento:** Oferece a capacidade de restaurar um objeto ao seu estado anterior (rollback)
- **Observer:** Objetos registrados para observar um evento que pode ser disparado por outro objeto.
- **State:** Uma maneira limpa para um objeto mudar parcialmente seu tipo em tempo de execução
- **Strategy:** Algoritmos podem ser selecionados em tempo real
- **Visitor:** Um modo e separar um algoritmo de um objeto
- **Template Method:** Descreve o esqueleto de um programa

## **Neste repositório você vai encontrar exemplos práticos da implementações desses padrões** 
