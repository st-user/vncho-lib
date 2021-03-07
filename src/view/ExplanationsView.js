import HoverWindowView from './HoverWindowView.js';

export default class ExplanationsView {

    #view;

    constructor(params) {
        const {
            eventName,
            handleSelector,
            contentsSelector
        } = params;

        this.#view = new HoverWindowView(
            eventName,
            !handleSelector ? '#showExplanations' : handleSelector,
            !contentsSelector ? '#explanations' : contentsSelector
        );
    }

    setUpEvents() {
        this.#view.setUpEvents();
    }

}