export class MultiplicationTable {
  public renderMultiplicationTable(start: number, end: number): string {
    if (!this.secondInputLargerThanFirst(start, end)) {
      return "";
    } else if (!this.inRange1to10(start)) {
      return "";
    } else if (!this.inRange1to10(end)) {
      return "";
    } else {
      let table = this.generateTable(start, end);
      return this.render(table);
    }
  }

  private secondInputLargerThanFirst(start: number, end: number): boolean {
    return end >= start;
  }

  private inRange1to10(num: number): boolean {
    return num >= 1 && num <= 10;
  }

  private generateTable(start: number, end: number): string[][] {
    let table: string[][] = [];
    for (let i = start; i <= end; i++) {
      table.push(this.generateOneRow(start, i));
    }
    return table;
  }

  private generateOneRow(rowStart: number, rowEnd: number): string[] {
    let row: string[] = [];
    for (let i = rowStart; i <= rowEnd; i++) {
      row.push(this.generateOneEquation(i, rowEnd));
    }
    return row;
  }

  private generateOneEquation(num1: number, num2: number): string {
    return `${num1}*${num2}=${num1 * num2}`;
  }

  private render(table: string[][]): string {
    let renderedTable: string = "";
    table.forEach((row, rowIndex) => {
      let renderedRow: string = "";
      row.forEach((equation, equationIndex) => {
        let equationLength = this.calculateEquationLength(table, equationIndex);
        if (equationIndex != row.length - 1) {
          equation = equation.padEnd(equationLength, " ");
        }
        renderedRow += equation;
      });
      renderedTable += renderedRow;
      if (rowIndex != table.length - 1) {
        renderedTable += "\n";
      }
    });
    return renderedTable;
  }

  private calculateEquationLength(
    table: string[][],
    columnIndex: number
  ): number {
    return table[table.length - 1][columnIndex].length + 2;
  }
}
