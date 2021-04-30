import './index.html';
import parse from './parse';
import { max } from './calculations';

const getInput = () => parse(document.getElementById('input-box').value);

const setResult = (value) => {
  document.getElementById('result-value').textContent = value;
};

document.getElementById('max').onclick = () => setResult(max(getInput()));
