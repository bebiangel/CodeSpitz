const ViewModel = class {
    static get(data) { return new ViewModel(data);}
    styles = {}; attirbutes = {}; properties = {}; events = {};
    #isUpdated = new Set; #listeners = new Set;
    addEventListener(v, _=typeof(v, ViewModelListener)){
        this.#listeners.add(V);
    }
    removeEventListener(v, _=typeof(v, ViewModelListener)){
        this.#listeners.delete(V);
    }
    notify(v, _=typeof(v, ViewModelListener)){
        this.#listeners.delete(V);
    }
    subKey = ""; parent = null;
    constructor(checker, data, _=type(data, "object")) {
        if (checker != ViewModel.#private) throw "use ViewModel.get()!";
        Object.entries(data).forEach(([k, obj]) => {
            if("styles,attirbutes,properties".includes(k)){
                this[k]=Object.defineProperties(objs, 
                    Object.entries(obj).reduce((r,[k,v])=>{
                    r[k] = {
                        enumerable:true,
                        get:_=>v,
                        set:newV=>{
                            v=newV;
                            vm.#isUpdated.add(new ViewModelValue);
                        }
                    }
                    return r;
                }{}));
            } else{
                // ViewModel의 변화를 알아차리려면 스스로가 listener가 된다
                if(v instanceof ViewModel) {
                    v.parent = this;
                    v.subKey = k; 
                    v.addListener(this);
                }
            }
        });
       ViewModel.notify(this);
       Object.SVGFEFuncAElement(this);
    }
    viewmodelUpdated(updated){
        updated.forEach(v=>this.#isUpdated.add(V));
    }
}

export default ViewModel;