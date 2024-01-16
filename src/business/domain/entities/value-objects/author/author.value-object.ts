export default class Author {
  private value: string;

  constructor(value: string) {
    this.ensureIsValid(value);
    this.value = value;
  }

  private ensureIsValid(value: string): void {
    if (value.length < 3) throw new Error("Invalid Author");
  }

  public get getValue(): string {
    return this.value;
  }
}
