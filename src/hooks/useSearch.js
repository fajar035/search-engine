/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { words } from '../data';

function useSearch(keywords) {
  const [result, setResult] = useState([]);

  useEffect(() => {
    const wordArr = words.words;
    let tmpWord = [];
    let tmpResult = [];
    const value = keywords.split(' ');

    for (let j = 0; j < value.length; j++) {
      tmpWord.push(value[j]);
    }

    const word = tmpWord[tmpWord.length - 1];
    for (let i = 0; i < wordArr.length; i++) {
      if (wordArr[i].targetWord.includes(word) || wordArr[i].englishWord.includes(word)) {
        tmpResult.push(wordArr[i].targetWord || wordArr[i].englishWord);
      }
    }

    const uniqTmpResult = tmpResult.reduce((a, b) => {
      if (a.indexOf(b) < 0) a.push(b);
      return a;
    }, []);

    if (word.length !== 0) return setResult(uniqTmpResult.slice(0, 10));
    return setResult([]);
  }, [keywords]);

  return result;
}

export default useSearch;
