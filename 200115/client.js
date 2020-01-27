const viewmodel = ViewModel.get({
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

const scanner = new Scanner;
const binder = scanner.scan(document.querySelector("#target"));
binder.render(viewmodel);


const viewmodel = ViewModel.get({
    isStop: false,
    styles: {
        width: '50%',
        background: "#ffa",
        cursor: "pointer"
    },
    events: {
        click(e, vm) {
            vm.isStop = true;
        }
    }
})

const f = _ => {
    viewmodel.changeContents();
    binder.render(viewmodel);
    if (!viewmodel.isStop) requestAnimationFrame(f);
}
requestAnimationFrame(f);