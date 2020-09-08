import {assert } from 'chai';
import { createSandbox } from 'sinon';
import { getWordTokens, getSubSentenceTokens, getSentenceTokens, getParagraphTokens } from './../src/text-tokenizer';
describe('check delimiters', () => {

  
    it('word tokenizer',  () => {
       
        const expectedTokens = ['These', 'are', 'the', 'word-tokens'];
        const tokens = getWordTokens('These are the word-tokens.');
        assert.deepEqual(tokens, expectedTokens);


    });

    it('subsentence tokenizer',  () => {
       
        const sentence = 'These are the subsentence-tokens, which; are typed by: my own hands!';
        const expectedTokens = ['These are the subsentence-tokens', 'which', 'are typed by', 'my own hands'];
        const tokens = getSubSentenceTokens(sentence);
        assert.deepEqual(tokens, expectedTokens);


    });

    it('sentence tokenizer',  () => {
       
        const sentence = 'These are the sentence-tokens: here is token1. And here comes token2; as usual, I wrote it by my own hands!';
        const expectedTokens = ['These are the sentence-tokens: here is token1', 'And here comes token2; as usual, I wrote it by my own hands'];
        const tokens = getSentenceTokens(sentence);
        assert.deepEqual(tokens, expectedTokens);


    });

    it('subsentence tokenizer with ( ) marks',  () => {
       
        const sentence = 'These are the sentence-tokens: (here is an unnecessary info1 , and info2), and here comes token2; as usual, I wrote it by my own hands!';
        const expectedTokens = ['These are the sentence-tokens', 'here is an unnecessary info1', 'and info2', 'and here comes token2', 'as usual','I wrote it by my own hands'];
        const tokens = getSubSentenceTokens(sentence);
        assert.deepEqual(tokens, expectedTokens);


    });

    it('sentence tokenizer',  () => {
       
        const rootText = 'This is paragraph1\n\n\n And this is paragraph2.\nSentence within.';
        const expectedTokens = ['This is paragraph1', 'And this is paragraph2.\nSentence within.'];
        const tokens = getParagraphTokens(rootText);
        assert.deepEqual(tokens, expectedTokens);


    });
});
