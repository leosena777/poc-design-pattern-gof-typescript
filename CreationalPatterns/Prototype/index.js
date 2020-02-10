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
var Audi = /** @class */ (function () {
    function Audi() {
    }
    Audi.prototype.clone = function () {
        return new Audi();
    };
    return Audi;
}());
var Benz = /** @class */ (function () {
    function Benz() {
    }
    Benz.prototype.clone = function () {
        return new Benz();
    };
    return Benz;
}());
var BMW = /** @class */ (function () {
    function BMW() {
    }
    BMW.prototype.clone = function () {
        return new BMW();
    };
    return BMW;
}());
var CarFactory = /** @class */ (function () {
    function CarFactory() {
    }
    return CarFactory;
}());
var ChineseCarFactory = /** @class */ (function (_super) {
    __extends(ChineseCarFactory, _super);
    function ChineseCarFactory() {
        var _this = _super.call(this) || this;
        _this.brands = {};
        _this.brands['Audi'] = new Audi();
        _this.brands['Benz'] = new Benz();
        _this.brands['BMW'] = new BMW();
        return _this;
    }
    ChineseCarFactory.prototype.createCar = function (brand) {
        return this.brands[brand].clone();
    };
    return ChineseCarFactory;
}(CarFactory));
(function main() {
    var factory = new ChineseCarFactory();
    var prototypes = ['Audi', 'Benz', 'BMW'].map(function (brand) {
        return factory.createCar(brand);
    });
    console.log(prototypes);
})();
