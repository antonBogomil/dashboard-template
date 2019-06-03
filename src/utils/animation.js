let collapsible = document.querySelector('collapse');
for (let i = 0; i < collapsible.length; i++) {
    collapsible.addEventListener('click',function (e) {
        this.classList.add('collapse-active')
    })
}