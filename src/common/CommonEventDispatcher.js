
const $mainOvserver = document.createElement('div');
const toEventName = (name, context) => !context ? name : `${name}.${context}`;

export default class CommonEventDispatcher {

    static dispatch(_eventName, detail, context) {
        const eventName = toEventName(_eventName, context);
        $mainOvserver.dispatchEvent(new CustomEvent(eventName, {
            detail: detail
        }));
    }

    static on(_eventName, handler, context) {
        const eventName = toEventName(_eventName, context);
        $mainOvserver.addEventListener(eventName, handler);
    }
}
