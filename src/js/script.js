

$(document).ready(function(){
    const slider = tns({
      container: '.carousel__inner',
      items: 1,
      slideBy: 'page',
      controls: false,
      nav: false
  });

  document.querySelector(".carousel__prev").addEventListener('click', function () {
      slider.goTo('prev');
    });
    document.querySelector(".carousel__next").addEventListener('click', function () {
      slider.goTo('next');
    });

  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__list').removeClass('catalog__list_active').eq($(this).index()).addClass('catalog__list_active');
  });

  function toogleSlide(item) {
    $(item).each(function(i) {
      $(this).on('click', function(e) {
        e.preventDefault();
        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
      })
    })
  }
  toogleSlide('.catalog-item__more');
  toogleSlide('.catalog-item__back');

  const consultBtn = document.querySelectorAll('[data-consult]')
  const buyBtn = document.querySelectorAll('.button_buy')
  const consutlModal = document.querySelector('#consultation')
  const orderModal = document.querySelector('#order')
  const thanksModal = document.querySelector('#thanks')
  const overlayModal = document.querySelector('.overlay')
  const closeModal = document.querySelectorAll('.modal__close')
  const orderName = orderModal.querySelector('.modal__subtitle')


  const addModalTrigger = (btns) => {
    btns.forEach((btn, i) => {
      btn.addEventListener('click', ()=>{
        if (btns.length == buyBtn.length) {
          orderName.textContent = document.querySelectorAll('.catalog-item__subtitle')[i].innerHTML
          orderModal.classList.add('modal__active')
        } else {
          consutlModal.classList.add('modal__active')
        }
        overlayModal.classList.add('modal__active')
      })
    })
  };

  const submitFormClose = (form) => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        form.classList.remove('modal__active');
        thanksModal.classList.add('modal__active');
        setTimeout(()=> {
          thanksModal.classList.remove('modal__active')
          overlayModal.classList.remove('modal__active');
        }, 1500)
      })
    }
  addModalTrigger(consultBtn);
  addModalTrigger(buyBtn);
  submitFormClose(orderModal);
  submitFormClose(consutlModal);


  closeModal.forEach((btn) => {
      btn.addEventListener('click', () => {
      btn.parentNode.classList.remove('modal__active')
      overlayModal.classList.remove('modal__active')
    })
  })

  

  

});