export default class CustomEventNamesFactory {

    static createNames() {
        const names = {
            set: (key, value) => {
                Object.keys(names).forEach(existingKey => {
                    if (existingKey === key) {
                        throw `CustomEventNamesのキーが重複しています : ${key}`;
                    }
                });
                Object.values(names).forEach(existingValue => {
                    if (existingValue === value) {
                        throw `CustomEventNamesの値が重複しています : ${value}`;
                    }
                });
                names[key] = value;
                return names;
            }
        };
        return names;
    }
}