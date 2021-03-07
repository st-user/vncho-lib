import DOM from '../common/DOM.js';
import CommonEventDispatcher from '../common/CommonEventDispatcher.js';
import BooleanStateModel from '../model/BooleanStateModel.js';


export default class HoverWindowView {

    #stateModel;
    #eventName;

    #$handle;
    #$contents;

    constructor(eventName, handleSelector, contentsSelector) {
        this.#stateModel = new BooleanStateModel(eventName, false);
        this.#eventName = eventName;
        this.#$handle = DOM.query(handleSelector);
        this.#$contents = DOM.query(contentsSelector);
    }

    setUpEvents() {
        DOM.click(this.#$handle, event => {
            event.stopPropagation();
            this.#stateModel.toggle();
        });

        DOM.click(this.#$contents, event => event.stopPropagation());

        window.addEventListener('click', () => {
            this.#stateModel.setFalse();
        });

        CommonEventDispatcher.on(this.#eventName, () => {
            this.#render();
        });

        this.#stateModel.setFalse();
    }

    #render() {
        DOM.display(this.#$contents, this.#stateModel.getValue());
    }
}