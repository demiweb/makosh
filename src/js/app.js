import setTouchClassName from './setTouchClassName.js';
import svgUseIt from 'svg-use-it';
import setSelects from './components/setSelects';
import setHeroHeight from './components/setHeroHeight';
import setScrollbar from './components/setScrollbar';
import setTabs from './components/setTabs';
import setAccordion from './components/setAccordion';

$(function() {
  svgUseIt();
  setTouchClassName();
  setSelects();
  setHeroHeight();
  setScrollbar();
  setTabs();
  setAccordion();
});
