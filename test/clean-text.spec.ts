import {assert } from 'chai';
import { createSandbox } from 'sinon';
import { cleanRootText, cleanParagraphText } from './../src/utils/clean-text';
describe('check text cleaning', () => {

  
    it('root text cleaner',  () => {
       
        const expectedCleanText = 'Paragraph1\nSentence1\nSentence2\n\nParagraph2\n\nParagraph3';
        const cleanedText = cleanRootText('Paragraph1\nSentence1\nSentence2\n\nParagraph2\n\n\n\nParagraph3');
        assert.deepEqual(cleanedText, expectedCleanText);


    });

    it('paragraph cleaner',  () => {
       
        const expectedCleanText = 'Sentence1. Sentence2. Word1 Word2. Word3, Word4.';
        const cleanedText = cleanParagraphText('\nSentence1.\n\nSentence2.\n\n\n Word1 Word2. Word3, Word4.\n');
        assert.deepEqual(cleanedText, expectedCleanText);


    });
});
