// https://github.com/Financial-Times/polyfill-service/blob/master/polyfills/Object/assign/polyfill.js
if(!('assign' in Object)) {
    Object.assign = function assign(target, source) { // eslint-disable-line no-unused-vars
        for (var index = 1, key, src; index < arguments.length; ++index) {
        src = arguments[index];
        for (key in src) {
            if (Object.prototype.hasOwnProperty.call(src, key)) {
            target[key] = src[key];
            }
        }
        }
        return target;
    };
}
