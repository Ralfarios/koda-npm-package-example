import slugerization from "./slugerization";
const mock = "The quick brown fox jumps over the lazy dog";

describe("Test slugerization", () => {
  test("Get slug with '-' as hyphen and lower case", () => {
    const slug = slugerization(mock);
    expect(slug).toBe("the-quick-brown-fox-jumps-over-the-lazy-dog");
  });

  test("Get slug with '-' as hyphen and upper case", () => {
    const slug = slugerization(mock, { slugCase: "upper" });
    expect(slug).toBe("THE-QUICK-BROWN-FOX-JUMPS-OVER-THE-LAZY-DOG");
  });

  test("Get slug with '+' as hyphen and lower case", () => {
    const slug = slugerization(mock, { hyphen: "+" });
    expect(slug).toBe("the+quick+brown+fox+jumps+over+the+lazy+dog");
  });

  test("Get slug with '+' as hyphen and upper case", () => {
    const slug = slugerization(mock, { hyphen: "+", slugCase: "upper" });
    expect(slug).toBe("THE+QUICK+BROWN+FOX+JUMPS+OVER+THE+LAZY+DOG");
  });
});
