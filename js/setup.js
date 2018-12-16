var setDialog = document.querySelector(".setup");
setDialog.classList.remove("hidden");

var wizardNames = [
  "Иван",
  "Хуан Себастьян",
  "Мария",
  "Кристоф",
  "Виктор",
  "Юлия",
  "Люпита",
  "Вашингтон"
];
var wizardLastNames = [
  "да Марья",
  "Верон",
  "Мирабелла",
  "Вальц",
  "Онопко",
  "Топольницкая",
  "Нионго",
  "Ирвинг"
];
var wizardCoats = [
  "rgb(101, 137, 164)",
  "rgb(241, 43, 107)",
  "rgb(146, 100, 161)",
  "rgb(56, 159, 117)",
  "rgb(215, 210, 55)",
  "rgb(0, 0, 0)"
];
var wizardEyes = ["black", "red", "blue", "yellow", "green"];

var getRandomNumberInRange = function(from, to) {
  return Math.round(Math.random() * (to - from) + from);
};

var getRandomElement = function(arr) {
  var length = arr.length;
  var x = getRandomNumberInRange(0, length - 1);
  return arr[x];
};

var createWizard = function() {
  return {
    name: getRandomElement(wizardNames) + getRandomElement(wizardLastNames),
    coatColor: getRandomElement(wizardCoats),
    eyesColor: getRandomElement(wizardEyes)
  }
};

var createWizardArray = function(n) {
  var array = [];
  for (var i = 1; i <= n; i++) {
    array.push(createWizard());
  }
  return array;
};

var wizards = createWizardArray(4);

var similarListElement = setDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document
  .querySelector('#similar-wizard-template')
  .content.querySelector('.setup-similar-item');

var renderWizard = function(wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);
setDialog.querySelector('.setup-similar').classList.remove('hidden');