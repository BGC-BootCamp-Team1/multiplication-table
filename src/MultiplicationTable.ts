export class MultiplicationTable {
  public render(start: number, end: number): string{
    if (
      !(this.isValid(start,end) && this.isInRange(start) && this.isInRange(end))
    ) {
      return '';
    }
    let martix :number[][]=this.generateTable(start,end);
    return this.contactMultiplicationFrom(start,end,martix);
  }

  private isValid(start: number, end: number):boolean{
    return start<=end;
  }

  private isInRange(number:number):boolean{
    return number>=1 && number<=10;
  }

  private generateTable(start: number, end: number):number[][]{
    let martix:number[][] = [];
    for (let i = start; i <= end; i++) {
      for (let j = start; j <= i; j++) {
          martix.push([j,i]);
      }
    }
    return martix;
  }

  private contactMultiplicationFrom(start: number, end: number,matrix:number[][]):string{
    let res:string = '';
    let cursor:number=0;
    for (let index = start; index <= end; index++) {
      for (let j = start; j <= index; j++) {
        if (cursor < matrix.length) {
          res += `${matrix[cursor][0]}*${matrix[cursor][1]}=${matrix[cursor][0] * matrix[cursor][1]}`;

          if (j === index) {
              res += '\n';
          } else {
              res += '\t';
          }
          cursor++;
  
        }
      }

    }
    return res;
  }

}
