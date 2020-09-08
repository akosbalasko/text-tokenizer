import * as delimiters from './constants';
import { cleanRootText, cleanParagraphText } from './utils/clean-text';
import { removePunctuations } from './utils/remove-punctuation';

export const getParagraphTokens = (text: string): Array<string> => {
    return getTokens(text, delimiters.paragraphDelimiter);
}

export const getSentenceTokens = (text: string): Array<string> => {
    return getTokens(text, delimiters.sentenceDelimiters);
}

export const getSubSentenceTokens = (text: string): Array<string> => {
    return getTokens(text, delimiters.subSentenceDelimiters).map(token => removePunctuations(token));
}

export const getWordTokens = (text: string): Array<string> => {
    return getTokens(text, delimiters.wordDelimiter).map(token => removePunctuations(token));
}

export const getTokens = (text: string, delimiterRegexp: RegExp): Array<string> => {
    return (delimiterRegexp === delimiters.paragraphDelimiter ? 
            cleanRootText(text) :
            cleanParagraphText(text))
        .split(delimiterRegexp).map(token => token.trim()).filter(token => !!token)
}
