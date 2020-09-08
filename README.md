# Simple Text Tokenizer

Tokenize text to paragraphs, sentences, subsentences, and words.

## Installation

Use [npm](http://npmjs.org):

```bash
npm install text-tokenizer
```

## How to

### Import functions
```js

import * as tokenizer from 'text-tokenizer'
```

### Tokenize text to paragraphs

```js
getParagraphTokens('this is the text of paragraph1\n\n\n this is the text of paragraph1\n');
```

### Tokenize paragraph to sentences:

```js
getSentenceTokens('this is the text of sentence1. And this is sentence2!');
```

### Tokenize sentence to subsentences 
```js
getSubSentenceTokens('this is the text of subsentence1, this is sentence2; and this is the 3rd one!');
```

### Tokenize sentence to words 
```js
getSubSentenceTokens('this is the text of subsentence1, this is sentence2; and this is the 3rd one!');
```

