const sel = require ('../../data/selectors.json');
const data = require ('../../data/testData.json');
const inputValues4 = require ('../../helpers/inputValues4');
const inputValues4Click = require ('../../helpers/inputValues4Click');

describe('Checking the main functionality', function () {

    describe('Happy path', function () {

        it('TC-021 Create button is clickable after 1-4 are filled in', function () {
            browser.url('');
            inputValues4(data.name, data.gender.she, data.age, data.storyType)
            const create = $(sel.create).isEnabled();
            expect(create).toEqual(true);
        });

        it('TC-022 Click button and verify story generated', function () {
            browser.url('');
            inputValues4Click(data.name, data.gender.he, data.age, data.storyType)
            const btn = $(sel.tryAgain).isDisplayed();
            expect(btn).toEqual(true);
        });
    });

});