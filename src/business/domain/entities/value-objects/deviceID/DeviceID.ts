export default class DeviceID {
  private value: string;
  private listOFDeviceID: string[] = ["echosala", "echoescritorio"];

  constructor(value: string) {
    this.ensureIsValid(value);
    this.value = value;
  }

  private ensureIsValid(value: string): void {
    if (!this.listOFDeviceID.includes(value))
      throw new Error("Invalid DeviceID");
  }

  public get getValue(): string {
    return this.value;
  }
}
