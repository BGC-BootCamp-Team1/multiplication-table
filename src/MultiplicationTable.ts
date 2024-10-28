export class MultiplicationTable {
  

  private renderTable(mulList:string[][]): string {
    let output: string = "";
    let colLen: Array<number> = this.recordColumnLength(mulList[mulList.length - 1]);
    console.log(colLen);
    console.log(mulList.length);
    console.log(mulList[mulList.length-1].length);
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


  public render(start: number, end: number): string {
    if (!this.isValidInput(start, end)) {
      return '';

    }
    
    // let output: string = '';
    let table = this.generateMultiplicationTable(start, end);

    let output = this.renderTable(table);

    return output;
  
  }

  private recordColumnLength(row: Array<string>): Array<number> {
    let output = new Array<number>();
    for (let singleMul of row){
      output.push(singleMul.length + 2);
    }
    return output;
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
    // return `${multiplierRow}*${multiplierColumn}=${product}`;
    return `${multiplierColumn}*${multiplierRow}=${product}`;
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


// const table = new MultiplicationTable();
// const generatedTable = table.generateMultiplicationTable(2, 1);
// console.log(table.render(generatedTable));

const table = new MultiplicationTable()
    const start = 2
    const end = 10

    //when
    const rendered = table.render(start, end);
    console.log(rendered);