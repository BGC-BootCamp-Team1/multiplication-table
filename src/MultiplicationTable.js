"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiplicationTable = void 0;
var MultiplicationTable = /** @class */ (function () {
    function MultiplicationTable() {
    }
    MultiplicationTable.prototype.render = function (table) {
        var output = "";
        // 找到每列的最大宽度
        var colWidths = table[0].map(function (_, colIndex) {
            return Math.max.apply(Math, table.map(function (row) { return row[colIndex].length; }));
        });
        for (var _i = 0, table_1 = table; _i < table_1.length; _i++) {
            var row = table_1[_i];
            var formattedRow = row.map(function (item, index) {
                // 根据每列的最大宽度填充空格
                return item.padEnd(colWidths[index] + 2); // +2 为了增加一点格式美观
            }).join(''); // 使用空字符串连接
            output += formattedRow + '\n'; // 每行添加换行符
        }
        return output;
    };
    MultiplicationTable.prototype.generateMultiplicationTable = function (start, end) {
        if (!this.isValidInput(start, end)) {
            return [];
        }
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
        return "".concat(multiplierRow, " * ").concat(multiplierColumn, " = ").concat(product);
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
var table = new MultiplicationTable();
var generatedTable = table.generateMultiplicationTable(2, 3);
console.log(table.render(generatedTable));
