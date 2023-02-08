import { expect } from "chai";
import "mocha";
import getApi from "../src/task21";

describe("First test using mocha and chai", () => {
  context("Unit test with typescript: ", () => {
    it("Testing Get request", async () => {
      const {data, status} = await getApi();
      expect(data.args).to.be.empty;
      expect(status, "should return status 200").to.equal(200);
      expect(data.url, "Example API").to.equal('https://httpbin.org/get');
    });
  });
});
