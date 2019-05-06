import Select from 'customSelect';

export default function setSelects() {
  const $selects = $('.js-select');

  // add search input
  const panelInput = document.createElement('input');
  const panelInputWrap = document.createElement('div');
  panelInput.type = 'text';
  panelInput.className = 'js-search';
  panelInputWrap.innerHTML = '<svg class="icon icon-search"><use xlink:href="img/sprite.svg#icon-search"></use></svg>';
  panelInputWrap.appendChild(panelInput);


  // =========== options ===========
  const options = {
    with_input: {
      panelItem: {
        item: panelInputWrap,
        position: 'top'
      }
    }
  };
  // =========== options ===========

  $selects.each((i, selectEl) => {
    const type = selectEl.getAttribute('data-type');
    const select = new Select(selectEl, options[type]);
    select.init();

    // add placeholder
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

    // set search
    const $customSelect = $(selectEl).closest('.custom-select');
    const $searchInput = $customSelect.find('.js-search');

    $searchInput.on('input', (e) => {
      const filter = e.currentTarget.value.toUpperCase();
      const $options = $(e.currentTarget).closest('.custom-select__panel').find('.custom-select__option');

      $options.each((i, option) => {
        const textValue = option.innerText;
        if (textValue.toUpperCase().indexOf(filter) > -1) {
          option.style.display = '';
        } else {
          option.style.display = 'none';
        }
      });
    });

    // set scrollbar
    const $wrap = $(selectEl).closest('.custom-select');
    const $scrollContainer = $wrap.find('.custom-select__options').length > 0 ? $wrap.find('.custom-select__options') : $wrap.find('.custom-select__panel');
    $scrollContainer.addClass('js-scrollbar');
  });
};
