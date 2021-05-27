"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sp = void 0;
function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}
;
function sp(str) {
    for (let i = 0; i < str.length; i++) {
        sleep(30);
        process.stdout.write(str[i]);
    }
    ;
}
exports.sp = sp;
;
//# sourceMappingURL=type.js.map