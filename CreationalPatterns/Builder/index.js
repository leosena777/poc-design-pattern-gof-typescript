var Size;
(function (Size) {
    Size[Size["Small"] = 0] = "Small";
    Size[Size["Medium"] = 1] = "Medium";
    Size[Size["Big"] = 2] = "Big";
})(Size || (Size = {}));
var FastFood = /** @class */ (function () {
    function FastFood(burger, fires, cola) {
        if (burger === void 0) { burger = {}; }
        if (fires === void 0) { fires = {}; }
        if (cola === void 0) { cola = {}; }
        this._burger = burger;
        this._fires = fires;
        this._cola = cola;
    }
    Object.defineProperty(FastFood.prototype, "burger", {
        get: function () {
            return this._burger;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FastFood.prototype, "fires", {
        get: function () {
            return this._fires;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FastFood.prototype, "cola", {
        get: function () {
            return this._cola;
        },
        enumerable: true,
        configurable: true
    });
    return FastFood;
}());
var Mcdonalds = /** @class */ (function () {
    function Mcdonalds(options) {
        this._meal = {};
        console.log('basic info');
    }
    Mcdonalds.prototype.buildBurger = function (name, options) {
        this._meal['burger'] = {
            type: 'burger',
            name: name,
            options: options
        };
        return this;
    };
    Mcdonalds.prototype.buildFries = function (size, options) {
        this._meal['fires'] = {
            type: 'fires',
            size: size,
            options: options
        };
        return this;
    };
    Mcdonalds.prototype.buildCola = function (size, options) {
        this._meal['cola'] = {
            type: 'cola',
            size: size,
            options: options
        };
        return this;
    };
    Mcdonalds.prototype.getMeal = function () {
        var meal = new FastFood(this._meal['burger'], this._meal['fires'], this._meal['cola']);
        return meal;
    };
    return Mcdonalds;
}());
(function main() {
    var mcd = new Mcdonalds({ location: 'Zhujiang New Town, Canton, China' });
    var meal = mcd
        .buildBurger('Big Mac', { sauce: false })
        .buildCola(Size.Medium, { ice: false })
        .buildFries(Size.Big, { 'sauce-amount': 2 })
        .getMeal();
    console.log(meal);
    console.log('---------------------------------------');
    console.log('buger ->', meal._burger);
    console.log('potato fries ->', meal._fires);
    console.log('drink ->', meal._cola);
})();
