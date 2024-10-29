export class MultiplicationTable {
  public render(start: number, end: number): string{
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
    let output: string = "";
    let colLen: Array<number> = this.recordColumnLength(mulList[mulList.length - 1]);
    for (let row = 0 ; row < mulList.length ; row++)
    {
      for (let col = 0 ; col < mulList[row].length ; col++) {
        output += mulList[row][col];
        if (col != mulList[row].length - 1) {
          let space = " ";
          output += space.repeat(colLen[col] - mulList[row][col].length);
        }
      }
      if (row != mulList.length - 1) {
        output += "\n";
      }
    }
    return output;
  }
  private recordColumnLength(row: Array<string>): Array<number> {
    let output = new Array<number>();
    for (let singleMul of row){
      output.push(singleMul.length + 2);
    }
    return output;
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

