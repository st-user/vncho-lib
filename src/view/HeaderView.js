import DOM from '../common/DOM.js';

const template = data => {

    return `
        <header class="header">
            <div class="header__content clearfixContainer">
                <a class="header__logo" target="_blank" rel="noopener noreferrer" href="https://www.ajizablg.com">
                </a>
                <h1 class="header__title">${data.title}</h1>
                <div id="showExplanationsWrapper" class="header__btn-show-explanations-wrapper">
                    <div id="showExplanations" class="header__btn-show-explanations">?</div>
                </div>
            </div>         
        </header>
        <div class="header__remark-about-browser">
            ${data.remarkAboutBrowser}
        </div>
    `;
};

export default class HeaderView {

    constructor(params) {
        const {
            containerSelector,
            title,
            remarkAboutBrowser
        } = params;

        const $container = DOM.query(containerSelector);
        $container.insertAdjacentHTML('beforeend', template({
            title, remarkAboutBrowser
        }));
    } 
}