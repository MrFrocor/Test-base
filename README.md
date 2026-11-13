# Test-base: концепт сайту ПП «333»

Концепт редизайну сайту клінінгової компанії ПП «333» (333lv.com.ua) на [Astro](https://astro.build).

## Запуск

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # готовий сайт у dist/
```

## Де лежить вміст

Тексти, послуги й ціни зберігаються не в коді, а в JSON-файлах. Пізніше їх редагуватиме адмінка:

- `src/content/site.json`: контакти, перший екран, цифри, переваги, кроки, FAQ
- `src/content/services.json`: послуги, їх опис, що входить і ціни

Ціни в `services.json` поки приклади, їх треба замінити на справжні.

Форми працюють у демо-режимі: заявка нікуди не надсилається.

## Фото

- `public/images/hero.webp`, `svc-*.webp`, `work-*.webp`: стокові фото з [Unsplash](https://unsplash.com/license) (безкоштовна ліцензія, комерційне використання дозволене). Перед запуском справжнього сайту їх краще замінити фото самої компанії.
- `public/images/work-mall-1.jpg`, `work-mall-2.jpg` і `public/images/logos/*`: фото та логотипи клієнтів зі старого сайту 333lv.com.ua.

ID фото на Unsplash (адреса: `https://unsplash.com/photos/<id>`): hero `CVcIMnH_7so`, прибирання `Iu6parQAO-U`, хімчистка `5TXz228u4eo`; решту можна знайти за назвою файлу пошуком на Unsplash.
