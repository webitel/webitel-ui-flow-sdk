import Vue from 'vue';
import VueI18n from 'vue-i18n';
import en from './en/en';
import es from './es/es';
import ro from './ro/ro';
import ru from './ru/ru';
import uk from './uk/uk';
import pl from './pl/pl';
import uz from './uz/uz';
import vi from './vi/vi';
import kz from './kz/kz';

Vue.use(VueI18n);

const messages = {
  en,
  es,
  ru,
  ro,
  uk,
  pl,
  uz,
  vi,
  kz,
};

export default new VueI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages,
});
