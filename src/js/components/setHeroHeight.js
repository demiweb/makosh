import { debounce } from 'throttle-debounce';
import { $WIN } from '../constants';

export default function setHeroHeight() {


  function setheight() {
    const $hero = $('.js-hero');
    if (!$hero.length) return;

    const $header = $('.header');
    const headerHeight = $header.outerHeight();

    if (window.matchMedia('(min-width: 1200px)').matches) {
      $hero.css({
        minHeight: ''
      });
    } else {
      $hero.css({
        minHeight: window.innerHeight - headerHeight + 'px'
      });
    };   
  };  

  setheight();

  const setHeightDebounced = debounce(100, setheight);

  $WIN.on('resize', setHeightDebounced);
}
