import { createI18n } from "vue-i18n";
import uz from "./locales/uz.json";
import ru from "./locales/ru.json";
import en from "./locales/en.json";

const messages = {
  uz,
  en,
  ru,
};

function getCookie(name) {
  const cookies = document.cookie.split("; ");
  for (const cookie of cookies) {
    const [cookieName, cookieValue] = cookie.split("=");
    if (cookieName === name) {
      return decodeURIComponent(cookieValue);
    }
  }
  return "uz";
}

if (getCookie("lang") == "uz") {
  document.cookie = "lang=uz";
}

const i18n = createI18n({
  locale: getCookie("lang"),
  messages,
});

export default i18n;
