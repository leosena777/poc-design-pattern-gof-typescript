interface Product {
  doSomething(): void;
}

interface Factory {
  createProduct(name: string): Product | null;
}

class ConcreteProductA implements Product {
  doSomething(): void {
    console.log("Product A do this");
  }
}

class ConcreteProductB implements Product {
  doSomething(): void {
    console.log("Product B do this");
  }
}

class ProductFactory implements Factory {
  createProduct(name: string): Product | null {
    switch (name) {
      case "product-a":
        return new ConcreteProductA();
      case "product-b":
        return new ConcreteProductB();
      default:
        return null;
    }
  }
}

(function main() {
  const factory = new ProductFactory();
  const product = factory.createProduct("product-a");

  if (product === null) {
    throw "product cannot be null";
  }
  product.doSomething();


  const factory2 = new ProductFactory();
  const product2 = factory2.createProduct("product-b");

  if (product2 === null) {
    throw "product cannot be null";
  }
  product2.doSomething();


})();
