import Select from '../lib/customSelect';

export default function setSelects() {
  const $selects = $('.js-select');

  const options = {
    default: {}
  };

  $selects.each((i, selectEl) => {
    const type = selectEl.getAttribute('data-type');
    const select = new Select(selectEl, options[type]);
    select.init();

    // placeholder
    if (selectEl.classList.contains('has-placeholder')) {
      selectEl.parentNode.classList.add('has-placeholder');
    };

    selectEl.addEventListener('change', (e) => {
      const currSelect = e.currentTarget;
      const selectType = currSelect.dataset.type;

      if (currSelect.value !== 'placeholder') {
        currSelect.classList.add('has-placeholder-hidden');
        currSelect.parentNode.classList.add('has-placeholder-hidden');
      } else {
        currSelect.classList.remove('has-placeholder');
        currSelect.parentNode.classList.remove('has-placeholder-hidden');
      };
    });
  });
};
