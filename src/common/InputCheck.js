export default class InputCheck {
    
    static checkAll(inputValue, checkers) {
        let error = '';
        checkers.forEach(ch => error = error || ch(inputValue));
        return error;
    }

    static checkIfInputValueEmpty(errorMsg) {
        return inputValue => !inputValue ? errorMsg : '';
    }

    static checkIfInputValueMatchesRegExp(regExp, errorMsg, invert) {
        return inputValue => {
            let result;
            if (!invert) {
                result = regExp.test(inputValue);
            } else {
                result = !regExp.test(inputValue);
            }
            return result ? errorMsg : '';
        };
    }

    static checkIfIntegerGreaterEqual(value, errorMsg) {
        return inputValue => value <= parseInt(inputValue, 10) ? '' : errorMsg;
    }
}