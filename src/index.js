import './style.css';
import {bubbleSort} from './js/bubble-sort';
import {shakerSort} from './js/shaker-sort';
import {selectionSort} from './js/selection-sort';
import {insertionSort} from './js/insertion-sort';

const list = [8, 2, 4, 1, 9, 0, 6, 5, 7, 3];

console.log('bubbleSort ::', bubbleSort(list));
console.log('shakerSort ::', shakerSort(list));
console.log('selectionSort ::', selectionSort(list));
console.log('insertionSort ::', insertionSort(list));