export class MultiplicationTable {
  

  public render(table: string[][]): string {
    let output: string = "";

    // 找到每列的最大宽度
    const colWidths = table[0].map((_, colIndex) => {
      return Math.max(...table.map(row => row[colIndex].length));
    });

    for (const row of table) {
      const formattedRow = row.map((item, index) => {
        // 根据每列的最大宽度填充空格
        return item.padEnd(colWidths[index] + 2); // +2 为了增加一点格式美观
      }).join(''); // 使用空字符串连接
      output += formattedRow + '\n'; // 每行添加换行符
    }

    return output;
  
  }

  public generateMultiplicationTable(start: number, end: number): string[][] {
    if (!this.isValidInput(start, end)) {
      return [];

    }
    const table: string[][] = [];
    for (let i = start; i <= end; i++) {
      const rowItems = this.generateMultiplicationRow(start, i);
      table.push(rowItems);
    }
    return table;
  }

  public generateMultiplicationRow(
    start: number,
    rowMultiplier: number
  ): string[] {
    const rowItems: string[] = [];
    for (let i = start; i <= rowMultiplier; i++) {
      rowItems.push(this.generateMultiplicationItem(rowMultiplier, i));
    }
    return rowItems;
  }

  public generateMultiplicationItem(
    multiplierRow: number,
    multiplierColumn: number
  ): string {
    const product = multiplierRow * multiplierColumn;
    return `${multiplierRow} * ${multiplierColumn} = ${product}`;
  }

  public isValidInput(start: number, end: number): boolean {
    return (
      this.isValidRange(start) &&
      this.isValidRange(end) &&
      this.isStartSmallerThanEnd(start, end)
    );
  }

  public isStartSmallerThanEnd(start: number, end: number): boolean {
    return start < end;
  }

  public isValidRange(num: number): boolean {
    return num >= 1 && num <= 10;
  }
}


const table = new MultiplicationTable();
const generatedTable = table.generateMultiplicationTable(2, 3);
console.log(table.render(generatedTable));