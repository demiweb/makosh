import setTouchClassName from './setTouchClassName.js';
import svgUseIt from 'svg-use-it';
import setSelects from './components/setSelects';
import setHeroHeight from './components/setHeroHeight';

$(function() {
  svgUseIt();
  setTouchClassName();
  setSelects();
  setHeroHeight();
});
