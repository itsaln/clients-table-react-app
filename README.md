# Clients Table

- [React](https://react.dev/learn) + [Typescript](https://www.typescriptlang.org/docs/) - основной стек
- [Vite](https://vitejs.dev/guide/) - быстрый сборщик

Архитектура основывается [FSD](https://clickuz.atlassian.net/wiki/x/CYA1TQ)

### Одностраничное веб-приложение, где:
- Пользователь видит таблицу клиентов с полями: Название, ИНН, Статус, Дата регистрации.
- Реализована загрузка данных с mock API: mockapi.io https://mockapi.io
- Фильтрация по названию и статусу
- Сортировка по дате регистрации
- Постраничная навигация
- Использовано функциональные компоненты, хуки и библиотека по выбору: Tanstack React Table
