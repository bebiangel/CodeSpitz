const Binder = class{
    #items = new Set;
    add(v, _=type(v, BinderItem)) {this.#items.add(v);}
    render(viewmodel, _=type(viewmodel, ViewModel)){
        this.#items.forEach(item => {
            const vm =type(viewmodel[item.viewmodel], ViewModel),el=item.el;
            Object.entries(vm.styles).forEach(([k, v])=>el.style[k]=v);
            Object.entries(vm.attirbutes).forEach(([k, v])=>el.setAttribute(k, v));
            Object.entries(vm.properties).forEach(([k, v])=>el[k]=v);
            Object.entries(vm.events).forEach(([k, v])=>el["on"+k]=e=>v.call(el, e, viewmodel));
        });
    }
}
export default Binder;