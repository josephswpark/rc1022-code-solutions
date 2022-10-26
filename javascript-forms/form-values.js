var contact = document.querySelector('#contact-form');

contact.addEventListener('submit', function () {
  // eslint-disable-next-line no-restricted-globals
  event.preventDefault();
  var inputByName = {
    name: contact.elements.name.value,
    email: contact.elements.email.value,
    message: contact.elements.message.value
  };
  console.log(inputByName);
  contact.reset();
});
