function menu() {
  const burger = document.querySelector('#humburger');
  const humMenu = document.querySelector('.navigation');
  const header = document.querySelector('.hamburger-wrap')
  // const wrapper = document.querySelector('.wrapper');
  // const socials = document.querySelector('.socials--header')

  burger.addEventListener('click', function () {
    burger.classList.toggle('is-active');
    humMenu.classList.toggle('active');
    header.classList.toggle('posf');
    // wrapper.classList.toggle('wrapper--humMenu');
    // socials.classList.toggle('socials--humburger')
  });

  humMenu.addEventListener('click', (event) => {
    const target = event.target;


    if (target.classList.contains('navigation__link')) {
      burger.classList.toggle('is-active');
      humMenu.classList.toggle('active');
      header.classList.toggle('posf');
    }

  })
};

menu();