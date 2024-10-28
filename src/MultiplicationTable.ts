export class MultiplicationTable {
  public render(start: number, end: number): string {
    if (
      !(
        this.isValid(start, end) &&
        this.isInRange(start) &&
        this.isInRange(end)
      )
    ) {
      return "";
    }
    let martix: number[][] = this.generateTable(start, end);
    const re = this.contactMultiplicationFrom(start, end, martix);

    return re;
  }
 
  private isValid(start: number, end: number): boolean {
    return start <= end;
  }
 
  private isInRange(number: number): boolean {
    return number >= 1 && number <= 10;
  }
 
  private generateTable(start: number, end: number): number[][] {
    let martix: number[][] = [];
    for (let i = start; i <= end; i++) {
      for (let j = start; j <= i; j++) {
        martix.push([j, i]);
      }
    }
    return martix;
  }
 
  private contactMultiplicationFrom(
    start: number,
    end: number,
    matrix: number[][]
  ): string {
    let rowsMatrix: number[][][] = [];
    const columnLengths: number[] = [];
    let i = 0;
 
    for (let rowIndex = 0; rowIndex < end - start + 1; rowIndex++) {
      let row: number[][] = [];
      let rowLength = 1 + rowIndex;
      while (rowLength--) {
        row.push(matrix[i]);
        i++;
      }
      rowsMatrix.push(row);
    }
 
 
    rowsMatrix[rowsMatrix.length - 1].forEach(x => {
      let lenOfExpression = 2 + x[0].toString().length + x[1].toString().length + (x[0] * x[1]).toString().length;
      columnLengths.push(lenOfExpression);
    })
    let res: string = "";

    for (let rowIndex = 0; rowIndex < rowsMatrix.length; rowIndex++){
      let rowString = "";
 
      for (
        let colIndex = 0;
        colIndex < rowsMatrix[rowIndex].length;
        colIndex++
      ) {
        let a = rowsMatrix[rowIndex][colIndex][0];
        let b = rowsMatrix[rowIndex][colIndex][1];
 
        let expression = `${a}*${b}=${a*b}`;
        if(colIndex<rowIndex)
          expression = expression.padEnd(columnLengths[colIndex] + 2, ' ');
        else
          expression = expression;
 
        rowString += expression;
      }
      res+=(rowString+'\n')
    }
    return res.trim();
  }
}
 