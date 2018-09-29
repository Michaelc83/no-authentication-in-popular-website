var selector = '';

selector += '#age-verification-container';
selector += ', .age-verification-modal';
selector += ', #age-verification-wrapper';

var elements = document.querySelectorAll(selector);

for (var i = 0; i < elements.length; i++) {
  elements[i].remove();
}
