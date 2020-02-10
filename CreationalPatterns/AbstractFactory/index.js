var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AbstractProductA = /** @class */ (function () {
    function AbstractProductA() {
    }
    return AbstractProductA;
}());
var AbstractProductB = /** @class */ (function () {
    function AbstractProductB() {
    }
    return AbstractProductB;
}());
var ProductA = /** @class */ (function (_super) {
    __extends(ProductA, _super);
    function ProductA(value) {
        var _this = _super.call(this) || this;
        console.log(value);
        return _this;
    }
    ProductA.prototype.methodA = function () { };
    ProductA.prototype.methodB = function () { };
    return ProductA;
}(AbstractProductA));
var ProductB = /** @class */ (function (_super) {
    __extends(ProductB, _super);
    function ProductB(value) {
        var _this = _super.call(this) || this;
        console.log(value);
        return _this;
    }
    ProductB.prototype.methodA = function () { };
    ProductB.prototype.methodB = function () { };
    return ProductB;
}(AbstractProductB));
var AbstractFactory = /** @class */ (function () {
    function AbstractFactory() {
    }
    return AbstractFactory;
}());
var NewYorkFactory = /** @class */ (function (_super) {
    __extends(NewYorkFactory, _super);
    function NewYorkFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewYorkFactory.prototype.createProductA = function () {
        return new ProductA('ProductA made in New York');
    };
    NewYorkFactory.prototype.createProductB = function () {
        return new ProductB('ProductB made in New York');
    };
    return NewYorkFactory;
}(AbstractFactory));
var CaliforniaFactory = /** @class */ (function (_super) {
    __extends(CaliforniaFactory, _super);
    function CaliforniaFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CaliforniaFactory.prototype.createProductA = function () {
        return new ProductA('ProductA made in California');
    };
    CaliforniaFactory.prototype.createProductB = function () {
        return new ProductB('ProductB made in California');
    };
    return CaliforniaFactory;
}(AbstractFactory));
(function main() {
    var nyFactory = new NewYorkFactory();
    nyFactory.createProductA();
    nyFactory.createProductB();
    var calFactory = new CaliforniaFactory();
    calFactory.createProductA();
    calFactory.createProductB();
})();
