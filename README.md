# Finance (frontend-only)

Одностраничное приложение для учета личных финансов (баланс, транзакции, бюджеты, накопительные «pots»). Проект сейчас работает полностью в демо-режиме: данные берутся из `public/data.json`, бэкенд и регистрация отключены.

## Технологии
- Next.js + React, TypeScript
- Tailwind CSS
- Redux Toolkit (zustand-like store), react-hook-form
- Framer Motion (анимации)
- Jest / Testing Library, Playwright (опционально для E2E)

## Как запустить
```bash
cd personal-finance-app/frontend
yarn install
yarn dev
# открывайте http://localhost:3000
```
Бэкенд не нужен — демо-данные подключаются автоматически.

## Структура
- `app/` — страницы и layout
- `components/`, `hooks/`, `redux/` — UI-блоки, хуки, хранилище
- `public/data.json` — демо-данные, которые подгружаются вместо API

## Скрипты
- `yarn dev` — запуск разработки
- `yarn test` — unit/компонентные тесты (при необходимости)
- `yarn storybook` — каталог компонентов (опционально)
- `yarn e2e:ui` — Playwright UI (если хотите прогнать E2E поверх демо)

## Автор
EldarMister

## Лицензия
Лицензия не выбрана (all rights reserved).
