var chai = require('chai');
var chaiHttp = require('chai-http');
var mongoose = require('mongoose');

var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

var http = require('http');
chai.use(chaiHttp);

describe('Test Home Feed results', function () {
//	this.timeout(15000);

	var requestResult;
	var response;
		 
    before(function (done) {
        chai.request("http://localhost:8080")
			.get("/app/posts")
			.end(function (err, res) {
				requestResult = res.body;
				response = res;
 				done();
			});
        });
    
    it('Should return an array object with more than 1 object', function (){
        expect(response.body).to.be.an.object;
		expect(response.body).to.have.length.above(2);
		expect(response).to.have.headers;
    });
    
	it('The first entry in the array has known properties', function(){
	    expect(requestResult[0]).to.include.keys('username');
	    expect(requestResult[0]).to.have.property('_id');
		expect(response.body).to.not.be.a.string;
	});
	it('The elements in the array have the expected properties', function(){
		expect(response.body).to.satisfy(
			function (body) {
				for (var i = 0; i < body.length; i++) {
					expect(body[i]).to.have.property('title');
					expect(body[i]).to.have.property('type');
					expect(body[i]).to.have.property('content');
					expect(body[i]).to.have.property('created');
					expect(body[i]).to.have.property('username').that.is.a('string');
				}
				return true;
			});
	});	
	
});