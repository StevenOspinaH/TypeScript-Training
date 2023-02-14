import { expect } from "chai";
import "mocha";
import RequestManager from '../core/RequestManager';
// import RequestManager from '../core/SuperAgentAdapter';
import { ActionVerb } from '../core/IRequestManager';

describe("Request Manager Unit Tests", () => {
  context("Unit Test with typescript: ", () => {
    it("GET /anything ", async () => {
      const {data, status} = await RequestManager.request(ActionVerb.Get, '/anything');
      expect(data.args).to.be.empty;
      expect(status, "should return status 200").to.equal(200);
      expect(data.url, "Example API").to.equal('https://httpbin.org/anything');
    });

    it("POST /anything ", async () => {
      const responseBody = await RequestManager.request(ActionVerb.Post, '/anything');
      expect(responseBody.data.form).to.be.empty;
      expect(responseBody.status, "should return status 200").to.equal(200);
      expect(responseBody.data.method, "Should return the Post method").to.equal('POST');
    });

    it("PUT /anything ", async () => {
      const responseBody = await RequestManager.request(ActionVerb.Put, '/anything');
      expect(responseBody.data.form).to.be.empty;
      expect(responseBody.status, "should return status 200").to.equal(200);
      expect(responseBody.data.method, "Should return the Put method").to.equal('PUT');
      expect(responseBody.data.json).to.be.null;
    });

    it("DELETE /anything ", async () => {
      const responseBody = await RequestManager.request(ActionVerb.Delete, '/anything');
      expect(responseBody.status, "should return status 200").to.equal(200);
      expect(responseBody.data.method, "Should return the Delete method").to.equal('DELETE');
      expect(responseBody.data.files).to.be.empty;
    });

    it("PATCH /anything ", async () => {
      const responseBody = await RequestManager.request(ActionVerb.Patch, '/anything');
      expect(responseBody.status, "should return status 200").to.equal(200);
      expect(responseBody.data.method, "Should return the PATCH method").to.equal('PATCH');
      expect(responseBody.data.files).to.be.empty;
    });

    it("POST /anything/{anythning}", async () => {
      const responseBody = await RequestManager.request(ActionVerb.Post, '/anything/{anythning}');
      expect(responseBody.data.data).to.be.empty;
      expect(responseBody.status, "should return status 200").to.equal(200);
      expect(responseBody.data.url, "Example API").to.equal('https://httpbin.org/anything/{anythning}');
    });

    it("Error: GET /anythi", async () => {

      try{
        const responseBody = await RequestManager.request(ActionVerb.Get, '/anythi');
        console.info(responseBody);
      } catch (error:any){
        expect(error.response?.status).to.equal(404);
        expect(error.response?.data).to.contains("The requested URL was not found");
      }
    });
  });
});
