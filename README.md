# TMDB Kinopoisk

SPA для просмотра фильмов на базе TMDB API: каталог, поиск, фильтры, страница
фильма и избранное.

## Возможности

- Категории фильмов: popular, top rated, upcoming, now playing
- Поиск по названию
- Фильтрация по рейтингу, жанрам и сортировке
- Детальная страница фильма (инфо, актеры, похожие фильмы)
- Избранное с сохранением в `localStorage`
- Глобальный индикатор загрузки и уведомления об ошибках
- Светлая и темная тема

## Технологии

- `React` + `TypeScript`
- `Vite`
- `Redux Toolkit` + `RTK Query`
- `React Router`
- `Zod` для валидации ответов API
- `CSS Modules`

## Быстрый старт

### 1) Установка зависимостей

```bash
npm install
```

### 2) Создай `.env.local`

```env
VITE_BASE_URL=https://api.themoviedb.org
VITE_API_KEY=your_tmdb_api_key
VITE_AUTH_TOKEN=your_tmdb_read_access_token
```

### 3) Запуск в dev-режиме

```bash
npm run dev
```

Приложение будет доступно по адресу, который покажет Vite (обычно
`http://localhost:5173`).

## Скрипты

- `npm run dev` - запуск dev-сервера
- `npm run build` - сборка production-версии
- `npm run preview` - локальный просмотр production-сборки
- `npm run lint` - проверка ESLint

## Роуты

- `/` - главная
- `/movies/:category` - фильмы по категории
- `/filtered-movies` - фильтрация
- `/search?query=...` - поиск
- `/favorites` - избранное
- `/movie/:id` - страница фильма

## Структура проекта

```text
src/
  app/        # store, api, корневой App
  common/     # переиспользуемые компоненты, hooks, constants, utils
  features/   # бизнес-фичи (films, favorites)
  pages/      # страницы роутера
  widgets/    # крупные секции страниц
```

## Переменные окружения

- `VITE_BASE_URL` - базовый URL TMDB API
- `VITE_API_KEY` - API key TMDB
- `VITE_AUTH_TOKEN` - Read Access Token (Bearer)




