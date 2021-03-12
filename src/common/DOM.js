const on  = (element, eventName, handler) => {
    if (Array.isArray(element)) {
        element.forEach(e => e.addEventListener(eventName, handler));
    } else {
        element.addEventListener(eventName, handler);
    }
};

let isWindowKeyupEventPrevented = false;
let isWindowKeydownEventPrevented = false;

export default class DOM {

    static query(selector, dom) {
        if (!dom) {
            dom = document;
        }
        return dom.querySelector(selector);
    }

    static all(selector, dom) {
        if (!dom) {
            dom = document;
        }
        return dom.querySelectorAll(selector);
    }

    static click(element, handler) {
        on(element, 'click', handler);
    }

    static change(element, handler) {
        on(element, 'change', handler);
    }

    static keyup(element, handler) {
        on(element, 'keyup', handler);
    }

    static keydown(element, handler) {
        on(element, 'keydown', handler);
    }

    static dragover(element, handler) {
        on(element, 'dragover', handler);
    }

    static drop(element, handler) {
        on(element, 'drop', handler);
    }

    static mousedown(element, handler) {
        on(element, 'mousedown', handler);
    }

    static mousemove(element, handler) {
        on(element, 'mousemove', handler);
    }

    static mouseup(element, handler) {
        on(element, 'mouseup', handler);
    }

    static contextmenu(element, handler) {
        on(element, 'contextmenu', handler);
    }

    static dblclick(element, handler) {
        on(element, 'dblclick', handler);
    }

    static windowKeyupIfNotPrevented(handler) {
        window.addEventListener('keyup', event => {
            if (isWindowKeyupEventPrevented) {
                return;
            }
            handler(event);
        });
    }

    static windowKeydownIfNotPrevented(handler) {
        window.addEventListener('keydown', event => {
            if (isWindowKeydownEventPrevented) {
                return;
            }
            handler(event);
        });
    }

    static intValue(element) {
        if (!element || !element.value) {
            return 0;
        }
        return parseInt(element.value, 10);
    }

    static none(element) {
        element.style.display = 'none';
    }

    static block(element) {
        element.style.display = 'block';
    }

    static display(element, isBlock) {
        if (isBlock) {
            DOM.block(element);
        } else {
            DOM.none(element);
        }
    }

    static inlineBlock(element) {
        element.style.display = 'inline-block';
    }

    static optionValue(selectElement) {
        const selectedIndex = selectElement.selectedIndex;
        return selectElement.options[selectedIndex].value;
    }

    static getElementPosition(element) {
        let left = 0, top = 0;
        if (element.offsetParent) {
            do {
                left += element.offsetLeft;
                top += element.offsetTop;
                element = element.offsetParent;
            } while(element);

            return {
                left: left,
                top: top
            };
        }
        return undefined;
    }
}
