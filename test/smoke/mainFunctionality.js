const sel = require("../../data/selectors.json");
const exp = require("../../data/expected.json");

describe('Checking the main functionality', function () {

    describe('Happy path', function () {

        it('TC-021 Create button is clickable after 1-4 are filled in', function () {
            browser.url('');
            let name = $(sel.name);
            name.addValue("LadyBug");

            expect(name).toEqual(true);
        });

        it('TC-015 Gender (he)', function () {
            const gender = $$(sel.gender)[0].isDisplayed();
            expect(gender).toEqual(true);
        });