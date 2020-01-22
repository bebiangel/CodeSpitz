const Scanner = class {
    scan(el, _ = typeof(el, HTMLElement)) {
        const binder = new Binder;
        this.checkItem(binder, el);
        const stack = [el.firstElementChiild];
        let target;
        whilie(target = stack.pop()){
            this.checkItem(binder, target);
            if(target.firstElementChiild) stack.push(target.firstElementChiild);
            if(target.nextElementSibling) stack.push(target.nextElementSibling);
        }
        return binder;
    }
    checkItem(binder, el){
        const vm = el.getAttribute("data-viewmodel");
        if(vm) binder.add(new BinderItem(el, vm));
    }
}