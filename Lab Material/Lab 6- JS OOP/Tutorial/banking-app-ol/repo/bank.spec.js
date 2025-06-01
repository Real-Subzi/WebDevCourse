import { expect } from 'chai';
import { describe } from 'mocha';

import * as repo from './bank.js'

describe('Bank Repo', () => {
    describe('Convert From US To QAR Method', () => {
        it('expect 1 USD to be 3.65 QAR', () => {
            expect(repo.convertFromUSToQAR(1)).to.equal(3.65)
        })
        it('expect 100 USD to be 365 QAR', () => {
            expect(repo.convertFromUSToQAR(100)).to.equal(365)
        })
    })

    describe('Sum Balance Method', () => {

    })
})
