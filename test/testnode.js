// chai is requried for checking th results of a function to be implemented
var expect = require('chai').expect;
// the target module requried to be tested
var tools = require('../index.js')
	
//nock is useful while using mock methods for http
var nock = require('nock');
// To start with `describe` is to be used. This could be further nested with multiple `describe`s
describe("test index", function() {

	// sample test that checks the sanity of the printName method
	describe("printName()", function() {
			it("should print the last name first", function() {
				results = tools.printName({
					first: 'Abhi',
					last: 'choudhury'
				});
				expect(results).to.equal("choudhury,Abhi");
			})
		})
		// asynchronus testing
	describe("getWikiPage()", function() {
			it("should load the wiki of Pulkit Samrat", function(done) {
				// here this corresponds to the Running Mocha object
				this.timeout(5000);

				results = tools.getWikiPage({
					first: 'Pulkit',
					last: 'Samrat'
				}, function(html) {
					expect(html).to.be.ok;
					done();
				});

			})
		})
		// > #### Asyncronus testing with mock
		// > 1. Here we will use `nock` to mock wikipedia site.
		// > 2. `mocha` gives a number of hooks which could be used in the context (to mock the http call).
		// > 3. `before` is one of the hooks available, using which we can predefine objects before the test case gets executed.
		// > 4. Another example of `mocha` hook is `beforeEach`
	describe("getWikiMock()", function() {
		before(function() {

			nock("https://en.wikipedia.org")
				.get("/wiki/Pulkit_Samrat")
				.reply(200, "Mock Wiki page for Pulkit Samrat");
		});
		it("should load the wiki of Pulkit Samrat via Mock", function(done) {
			results = tools.getWikiPage({
				first: 'Pulkit',
				last: 'Samrat'
			}, function(html) {
				expect(html).to.equal("Mock Wiki page for Pulkit Samrat");
				done();
			});

		})
	})
})