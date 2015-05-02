var Cat = (function () {
    function Cat(name, willScratch) {
        this._name = name;
        this._willScratch = willScratch;
    }
    Object.defineProperty(Cat.prototype, "Name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cat.prototype, "WillScratch", {
        get: function () {
            return this._willScratch;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cat.prototype, "Mood", {
        get: function () {
            return this._mood;
        },
        set: function (value) {
            this._mood = value;
        },
        enumerable: true,
        configurable: true
    });
    return Cat;
})();
