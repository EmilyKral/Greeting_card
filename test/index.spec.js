/**
 * @jest-environment jsdom
 */

const { TestWatcher } = require("@jest/core");
const { expect } = require("@jest/globals");
const fs = require("fs");
const path = require("path");
const html = fs.readFileSync(path.resolve(__dirname, "../index.html"), "utf8");

describe('index.html',()=>{
    beforeEach(()=>{
        document.documentElement.innerHTML = html.toString();
    })

    describe('form', ()=>{
        test('does it exist',()=>{
            let form = document.querySelector('form');
            expect(form).toBeTruthy();
        })
        test('asks for greeting',()=>{
            let greeting = document.querySelector('[for="greeting"]')
            expect(greeting).toBeTruthy();
        })
        test('submit button exists', ()=>{
            let submit = document.querySelector('[type="submit"]');
            expect(submit).toBeTruthy();
        })
    })
})