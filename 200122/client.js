const scanner = new Scanner;
const binder = scanner.scan(document.querySelector("#target"));
binder.addProcessor(new (class extends Processor{
    _process(vm, el, k, v) {el.style[k]=v;}
})("styles"));
binder.addProcessor(new (class extends Processor{
    _process(vm, el, k, v) {el[k]=v;}
})("properties"));
binder.addProcessor(new (class extends Processor{
    _process(vm, el, k, v) {el.setAttribute(k, v);}
})("attribues"));
binder.addProcessor(new (class extends Processor{
    _process(vm, el, k, v) {el["on"+k]=e=>v.call(el, e, vm);}
})("events"));

const viewmodel = ViewModel.get({
    isStop:false,
    changeContents(){
        this.wrapper.styles.background = `rgb(${})`;
        this.contents.properties.innerHTML = Math;
    },
    wrapper: ViewModel.get({
        styles: {
            width: '50%',
            background: "#ffa",
            cursor: "pointer"
        }
    }),
    title: ViewModel.get({
        properties: {
            innerHTML: "Title"
        }
    }),
    contents: ViewModel.get({
        properties: {
            innerHTML: "Contents"
        }
    })
})

binder.watch(viewmodel);
const f = _ => {
    viewmodel.changeContents();
    binder.render(viewmodwl);
    if (!viewmodel.isStop) requestAnimationFrame(f);
}
requestAnimationFrame(f);