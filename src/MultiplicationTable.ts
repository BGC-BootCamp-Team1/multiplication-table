export class MultiplicationTable {
  public render(start: number, end: number): string{
    // AC1: The start number should not be greater than the end number, otherwise the function will return nothing.
    // AC2: The start number and the end number can be any integer in a range of 1 to 10 (inclusive).
    // AC3: The output should be a string represents the multiplication table. Suppose that the start number is 2 and the end number is 4, the output should be something like the following.

    let isValid = this.isInputValid(start, end);
    if (!isValid)
      return "";

    let mulList = this.generateMultiplicationList(start, end);

    let outputStr = this.renderTable(mulList);
    return outputStr;
  }

  private generateMultiplicationList(start: number, end: number): Array<Array<string>> {
    let output2D = new Array<Array<string>>();
    for (let i = start ; i <= end ; i++)
    {
      let mulRow = new Array<string>();
      for (let j = start ; j <= i ; j++)
      {
        let singleMulStr = this.generateSingleMultiplication(j, i);
        mulRow.push(singleMulStr);
      }
      output2D.push(mulRow);
    }
    return output2D;
  }
  private generateSingleMultiplication(firstNum: number, secondNum: number): string {
    return firstNum + "*" + secondNum + "=" + firstNum * secondNum;
  }

  private renderTable(mulList: Array<Array<string>>): string {
    throw new Error("Method not implemented.");
  }

  private isInputValid(start: number, end: number): boolean{
    if (!this.isStartSmallerThanEnd(start, end))
      return false;
    if (!this.isInRange(start))
      return false;
    if (!this.isInRange(end))
      return false;
    return true;
  }
  private isInRange(num: number): boolean {
    return num >= 1 && num <= 10;
  }
  private isStartSmallerThanEnd(start: number, end: number): boolean {
    return start <= end;
  }
}

