import * as assert from 'power-assert';

describe('First Test', () => {
    let author = "satocw";
    it('author is satocw', () => {
        assert(author === "aaa");   // will fail
    });
});