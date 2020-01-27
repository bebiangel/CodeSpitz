const Processor = class{
    cat;
    constructor(cat){
        this.cat = cat;
        Object.freeze(this);
    }
    process(vm, el, k, v, _0=typeof(vm, ViewModel), _1=typeof(el, HTMLElement), _2=typeof(k, "string")){
        this._process(vm, el, k, v);
    }
    _process(vm, el, k, v) {throw "override";}
};

new (class extends Processor{
    _process(vm, el, k, v) {el.style[k]=v;}
})("styles")

new (class extends Processor{
    _process(vm, el, k, v) {el[k]=v;}
})("properties")

new (class extends Processor{
    _process(vm, el, k, v) {el.setAttribute(k, v);}
})("attribues")

new (class extends Processor{
    _process(vm, el, k, v) {el["on"+k]=e=>v.call(el, e, vm);}
})("events")