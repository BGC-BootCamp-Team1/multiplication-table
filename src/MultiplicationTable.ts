export class MultiplicationTable {
  public generateMultiplicationTable(start: number, end: number): string {
    if (!this.secondInputLargerThanFirst(start, end)) {
      return "";
    } else if (!this.inRange1to10(start)) {
      return "";
    } else if (!this.inRange1to10(end)) {
      return "";
    } else {
      return this.render(start, end);
    }
  }

  public secondInputLargerThanFirst(start: number, end: number): boolean {
    return end >= start;
  }

  public inRange1to10(num: number): boolean {
    return num >= 1 || num <= 10;
  }

  public generateTable(start: number, end: number): string {
    var result = "";

    return result;
  }

  public render(start: number, end: number): string {
    return "1*1=1";
  }

  public generateOneMultiplation(num1: number, num2: number): string {
    return `${num1}*${num2}=${num1*num2}`;
  }


}
