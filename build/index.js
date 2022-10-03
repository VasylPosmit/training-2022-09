"use strict";
//calculator from console only with functions
Object.defineProperty(exports, "__esModule", { value: true });
exports.multiNums = exports.divNums = exports.subNums = exports.addNums = void 0;
function addNums(...nums) {
    const res = nums.reduce((num1, num2) => num1 + num2);
    return res;
}
exports.addNums = addNums;
function subNums(...nums) {
    const res = nums.reduce((num1, num2) => num1 - num2);
    return res;
}
exports.subNums = subNums;
function divNums(...nums) {
    const res = nums.reduce((num1, num2) => num1 / num2);
    return res;
}
exports.divNums = divNums;
function multiNums(...nums) {
    const res = nums.reduce((num1, num2) => num1 * num2);
    return res;
}
exports.multiNums = multiNums;
