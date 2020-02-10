var ConcreteProductA = /** @class */ (function () {
    function ConcreteProductA() {
    }
    ConcreteProductA.prototype.doSomething = function () {
        console.log("Product A do this");
    };
    return ConcreteProductA;
}());
var ConcreteProductB = /** @class */ (function () {
    function ConcreteProductB() {
    }
    ConcreteProductB.prototype.doSomething = function () {
        console.log("Product B do this");
    };
    return ConcreteProductB;
}());
var ProductFactory = /** @class */ (function () {
    function ProductFactory() {
    }
    ProductFactory.prototype.createProduct = function (name) {
        switch (name) {
            case "product-a":
                return new ConcreteProductA();
            case "product-b":
                return new ConcreteProductB();
            default:
                return null;
        }
    };
    return ProductFactory;
}());
(function main() {
    var factory = new ProductFactory();
    var product = factory.createProduct("product-a");
    if (product === null) {
        throw "product cannot be null";
    }
    product.doSomething();
    var factory2 = new ProductFactory();
    var product2 = factory2.createProduct("product-b");
    if (product2 === null) {
        throw "product cannot be null";
    }
    product2.doSomething();
})();
