export class MultiplicationTable {
  public render(start: number, end: number): string{
    if(!this.isInputValid(start,end))
      return '';
    return this.tableRender(this.genMultiplicationTable(start,end));
  }
  public isInputValid(start:number,end:number):boolean{
    if(start<=end && start>=0 && end<=10) 
      return true
    else 
      return false
  }
  public genMultiplicationRow(start:number,rowNumber:number):string[]{
    let row:string[] = [];
    for(let i = start;i<=rowNumber;i++){
      row.push(i+'*'+rowNumber+'='+i*rowNumber);
    }
    return row;
  }
  public genMultiplicationTable(start:number,end:number):string[][]{
    let multiplicationTable:string[][] = [];
    for(let i=start;i<=end;i++){
      multiplicationTable[i-start]=this.genMultiplicationRow(start,i);
    }
    return multiplicationTable
  }
  public tableRender(multiplicationTable:string[][]):string{
    const lastRow = multiplicationTable[multiplicationTable.length - 1];
    const columnWidths = lastRow.map(item => item.length)

    let result:string = '';
    for (const row of multiplicationTable) {
      const formattedRow = row.map((item, index) => {
          return item.padEnd(columnWidths[index], ' ');
      }).join('  ');
      result += formattedRow.trim() + '\n';
    }
    return result.trim();
  }

}
