class Cat {
    constructor(name: string, willScratch: number) {
        this._name = name;
        this._willScratch = willScratch;
    }

    private _name: string;
    get Name() {
        return this._name;
    }

    private _willScratch: number;
    get WillScratch() {
        return this._willScratch;
    }

    private _mood: Moods;
    get Mood(): Moods { return this._mood }
    set Mood(value: Moods) {
        this._mood = value;
    }
}