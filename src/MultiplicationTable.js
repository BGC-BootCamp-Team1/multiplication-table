"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiplicationTable = void 0;
var MultiplicationTable = /** @class */ (function () {
    function MultiplicationTable() {
    }
    MultiplicationTable.prototype.renderTable = function (mulList) {
        var output = "";
        var colLen = this.recordColumnLength(mulList[mulList.length - 1]);
        console.log(colLen);
        console.log(mulList.length);
        console.log(mulList[mulList.length - 1].length);
        for (var row = 0; row < mulList.length; row++) {
            for (var col = 0; col < mulList[row].length; col++) {
                output += mulList[row][col];
                if (col != mulList[row].length - 1) {
                    var space = " ";
                    output += space.repeat(colLen[col] - mulList[row][col].length);
                }
            }
            if (row != mulList.length - 1) {
                output += "\n";
            }
        }
        return output;
    };
    MultiplicationTable.prototype.render = function (start, end) {
        if (!this.isValidInput(start, end)) {
            return '';
        }
        // let output: string = '';
        var table = this.generateMultiplicationTable(start, end);
        var output = this.renderTable(table);
        return output;
    };
    MultiplicationTable.prototype.recordColumnLength = function (row) {
        var output = new Array();
        for (var _i = 0, row_1 = row; _i < row_1.length; _i++) {
            var singleMul = row_1[_i];
            output.push(singleMul.length + 2);
        }
        return output;
    };
    MultiplicationTable.prototype.generateMultiplicationTable = function (start, end) {
        var table = [];
        for (var i = start; i <= end; i++) {
            var rowItems = this.generateMultiplicationRow(start, i);
            table.push(rowItems);
        }
        return table;
    };
    MultiplicationTable.prototype.generateMultiplicationRow = function (start, rowMultiplier) {
        var rowItems = [];
        for (var i = start; i <= rowMultiplier; i++) {
            rowItems.push(this.generateMultiplicationItem(rowMultiplier, i));
        }
        return rowItems;
    };
    MultiplicationTable.prototype.generateMultiplicationItem = function (multiplierRow, multiplierColumn) {
        var product = multiplierRow * multiplierColumn;
        // return `${multiplierRow}*${multiplierColumn}=${product}`;
        return "".concat(multiplierColumn, "*").concat(multiplierRow, "=").concat(product);
    };
    MultiplicationTable.prototype.isValidInput = function (start, end) {
        return (this.isValidRange(start) &&
            this.isValidRange(end) &&
            this.isStartSmallerThanEnd(start, end));
    };
    MultiplicationTable.prototype.isStartSmallerThanEnd = function (start, end) {
        return start < end;
    };
    MultiplicationTable.prototype.isValidRange = function (num) {
        return num >= 1 && num <= 10;
    };
    return MultiplicationTable;
}());
exports.MultiplicationTable = MultiplicationTable;
// const table = new MultiplicationTable();
// const generatedTable = table.generateMultiplicationTable(2, 1);
// console.log(table.render(generatedTable));
var table = new MultiplicationTable();
var start = 2;
var end = 10;
//when
var rendered = table.render(start, end);
console.log(rendered);
