const Binder = class extends ViewModelListener{
    #items = new Set; #processors ={};
    
    add(v, _=type(v, BinderItem)) {this.#items.add(v);}
    addProcessor(v, _0=type(v, Processor){
        this.#processors[v.cat]=v;
    })
    render(viewmodel, _=type(viewmodel, ViewModel)){
        const processores = Object.defineProperties(this.#processors);
        this.#items.forEach(item => {
            const vm =type(viewmodel[item.viewmodel], ViewModel),el=item.el;
            processores.forEach(([pk, processor])=>{
                Object.defineProperties(vm[pk]).forEach(([k,v])=>{
                    processor.process(vm, el, k, v);
                })
            })
        });
    }
};

export default Binder;