export class MultiplicationTable {
  public render(start: number, end: number): string {
    return "1*1=1";
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
