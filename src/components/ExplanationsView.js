import HoverWindowView from './HoverWindowView.js';

export default class ExplanationsView {

    #view;

    constructor(eventName) {
        this.#view = new HoverWindowView(
            eventName,
            '#showExplanations',
            '#explanations'
        );
    }

    setUpEvents() {
        this.#view.setUpEvents();
    }

}