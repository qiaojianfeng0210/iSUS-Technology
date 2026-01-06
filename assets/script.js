(function(){
  const burger = document.querySelector('[data-burger]');
  const mobile = document.querySelector('[data-mobile]');
  if(burger && mobile){
    burger.addEventListener('click', () => {
      const open = mobile.getAttribute('data-open') === '1';
      mobile.setAttribute('data-open', open ? '0' : '1');
      mobile.style.display = open ? 'none' : 'block';
      burger.setAttribute('aria-expanded', open ? 'false' : 'true');
    });
    // default closed on load for small screens
    mobile.style.display = 'none';
  }

  // Contact form: build a mailto link (static hosting friendly)
  const form = document.querySelector('form[data-mailto]');
  if(form){
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = form.getAttribute('data-mailto');
      const name = form.querySelector('[name="name"]')?.value || '';
      const company = form.querySelector('[name="company"]')?.value || '';
      const from = form.querySelector('[name="email"]')?.value || '';
      const message = form.querySelector('[name="message"]')?.value || '';
      const subject = encodeURIComponent(`Magicarpet inquiry from ${company || name || 'website'}`);
      const body = encodeURIComponent(
`Name: ${name}
Company: ${company}
Email: ${from}

Message:
${message}
`);
      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    });
  }
})();