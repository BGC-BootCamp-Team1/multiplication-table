export class MultiplicationTable {
  public render(start: number, end: number): string {
    return "1*1=1";
  }

  public generateMultiplicationTable(start: number, end: number): string[][] {
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
    return "${multiplierRow} * {multiplierColumn} = {product}";
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
