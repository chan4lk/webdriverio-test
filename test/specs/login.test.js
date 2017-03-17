describe("First Spec", function () {
    it("should navigate to the homepage", function () {
        
        return browser.url("http://localhost/")
            .setValue('#UserName', 'abc')
            .setValue('#PASSWORD', '123')
            .click('#loginButton')
            .getTitle().then(function (title) {
                console.log('Title is: ' + title);
                // outputs:
                // "Title is: WebdriverIO (Software) at DuckDuckGo"
            })
            .end();
    });
});