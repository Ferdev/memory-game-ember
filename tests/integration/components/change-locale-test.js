import {moduleForComponent, test} from 'ember-qunit';
import localesEN from 'memory-game/locales/en/translations';
import localesES from 'memory-game/locales/es/translations';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('change-locale', 'Integration | Component | change-locale', {
  integration: true
});

test('it should be able to change the locale', function(assert) {
  var _localesList, _changeToEnglishButton, _changeToSpanishButton;

  this.render(hbs`{{change-locale}}`);

  _localesList = this.$('ul').eq(0);
  _changeToEnglishButton = this.$('li a').eq(0);
  _changeToSpanishButton = this.$('li a').eq(1);

  assert.ok(_localesList, 'it should display the locales button list');
  assert.ok(_changeToEnglishButton, 'it should have a button to switch to English');
  assert.ok(_changeToSpanishButton, 'it should have a button to switch to Spanish');

  assert.ok(_changeToEnglishButton.text().trim(), localesEN.components.changeLocale.english);
  assert.ok(_changeToSpanishButton.text().trim(), localesEN.components.changeLocale.spanish);

  _changeToSpanishButton.click();

  assert.ok(_changeToEnglishButton.text().trim(), localesES.components.changeLocale.english);
  assert.ok(_changeToSpanishButton.text().trim(), localesES.components.changeLocale.spanish);

  _changeToEnglishButton.click();
  assert.ok(_changeToEnglishButton.text().trim(), localesEN.components.changeLocale.english);
  assert.ok(_changeToSpanishButton.text().trim(), localesEN.components.changeLocale.spanish);
});
