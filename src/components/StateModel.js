import CommonEventDispatcher from '../common/CommonEventDispatcher.js';

export default class StateModel {

    #eventName;
    #stateValue;

    constructor(eventName, stateDefaultValue) {
        this.#eventName = eventName;
        this.#stateValue = stateDefaultValue;
    }

    setTrue() {
        this.setStateValue(true);
    }

    setFalse() {
        this.setStateValue(false);
    }

    toggle() {
        this.setStateValue(!this.#stateValue);
    }

    getStateValue() {
        return this.#stateValue;
    }

    setStateValue(stateValue) {
        this.#stateValue = stateValue;
        CommonEventDispatcher.dispatch(this.#eventName, {
            stateValue: this.#stateValue
        });
    }
}
