const ViewModel = class {
    static #private = Symbol();
    static get(data) {
        return new ViewModel(this.#private, data);
    }
    styles = {}; attirbutes = {}; properties = {}; events = {};
    constructor(checker, data) {
        if (checker != ViewModel.#private) throw "use ViewModel.get()!";
        Object.entries(data).forEach(([k, v]) => {
            switch (k) {
                case 'styles': this.styles = v; break;
                case 'attirbutes': this.attirbutes = v; break;
                case 'properties': this.properties = v; break;
                case 'events': this.events = v; break;
                default: this[k] = v;
            }
        });
        Object.seal(this);
    }
}

export default ViewModel;