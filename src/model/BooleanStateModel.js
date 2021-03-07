import CommonEventDispatcher from '../common/CommonEventDispatcher.js';

export default class BooleanStateModel {

    #eventName;
    #value;

    constructor(eventName, defaultValue) {
        this.#eventName = eventName;
        this.#value = defaultValue;
    }

    setTrue() {
        this.setValue(true);
    }

    setFalse() {
        this.setValue(false);
    }

    toggle() {
        this.setValue(!this.#value);
    }

    getValue() {
        return this.#value;
    }

    setValue(value) {
        this.#value = value;
        CommonEventDispatcher.dispatch(this.#eventName, {
            value: this.#value
        });
    }
}
