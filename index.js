"use strict";
exports.__esModule = true;
exports.from = exports.fromXlsx = exports.fromCsv = void 0;
var path = require("path");
/**
 * Parses a csv file or buffer.
 */
function fromCsv(arg) {
}
exports.fromCsv = fromCsv;
/**
 * Parses an xlsx file or buffer.
 */
function fromXlsx(arg) {
}
exports.fromXlsx = fromXlsx;
/**
 * Automatically determines the file type and parses it accordingly.
 */
function from(arg) {
    var parsed = path.extname(arg);
}
exports.from = from;
