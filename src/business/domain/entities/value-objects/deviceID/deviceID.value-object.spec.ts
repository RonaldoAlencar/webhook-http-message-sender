import DeviceID from "./deviceID.value-object";

describe("DeviceID", () => {
  it("should create a valid DeviceID", () => {
    const input = "echosala";
    const deviceID = new DeviceID(input);
    expect(deviceID).toBeInstanceOf(DeviceID);
  });

  it("should throw an error for an invalid DeviceID", () => {
    const input = "ec";
    expect(() => new DeviceID(input)).toThrow("Invalid DeviceID");
  });
});
