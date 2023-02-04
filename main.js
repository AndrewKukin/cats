const tabs = document.getElementById('tabs');
const content = document.querySelectorAll('.content');
const insideTabs = document.getElementById('inside-tabs');
const insideContent = document.querySelectorAll('.inside-content')

const changeClass = el => {
    for (let i = 0; i < tabs.children.length; i++) {
        tabs.children[i].classList.remove('active');
    };
    el.classList.add('active');
};

tabs.addEventListener('click', e => {
    const currTab = e.target.dataset.btn;
    changeClass(e.target);
    for (let i = 0; i < content.length; i++) {
        content[i].classList.remove('active');
        if(content[i].dataset.content === currTab) {
            content[i].classList.add('active');
        }
    }
});

const changeInsideTabs = el => {
    for (let i = 0; i < insideTabs.children.length; i++) {
        insideTabs.children[i].classList.remove('active');
    };
    el.classList.add('active');
}

insideTabs.addEventListener('click', e => {
    const currInsideTab = e.target.dataset.insideBtn;
    changeInsideTabs(e.target);
    for (let i = 0; i < insideContent.length; i++) {
        insideContent[i].classList.remove('active');
        if(insideContent[i].dataset.insideContent === currInsideTab) {
            insideContent[i].classList.add('active');
        }
    }
});