import ToggleableContentsModel from './ToggleableContentsModel.js';

export default class ExplanationsModel extends ToggleableContentsModel {
    constructor(eventName) {
        super(
            eventName,
            true
        );
    }
}