<p align="center">
  <a href="https://github.com/Kicshikxo/Kicshikxo-weather">
    <img src="https://github.com/Kicshikxo/Kicshikxo-weather/blob/main/src/public/favicon.svg" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Kicshikxo weather</h3>

  <p align="center">
    Простой вывод прогноза погоды с использованием API OpenMeteo
  </p>
</p>

### <p align="center">[![Stargazers](https://img.shields.io/github/stars/Kicshikxo/Kicshikxo-weather?style=social)](https://github.com/Kicshikxo/Kicshikxo-weather) ![License](https://img.shields.io/github/license/Kicshikxo/Kicshikxo-weather)</p>

Kicshikxo weather - это простой сервис для отображения прогноза погоды на следующие 24 часа для указанного города.
Сервис использует открытое API [Open-Meteo](https://open-meteo.com), кэширует данные в Redis и отображает температуру на графике.

Основные функции:

- Получение прогноза погоды на 24 часа
- Кэширование данных о погоде в Redis на 15 минут
- Визуализация изменений температуры по часам
- Поиск города через геокодинг Open-Meteo

## Попробовать прямо сейчас

Используйте Kicshikxo weather прямо в браузере:

- [weather.kicshikxo.ru](https://weather.kicshikxo.ru)

## Используемые технологии

Проект построен с использованием следующих технологий:
- **Backend**: Node.js, TypeScript, Express
- **Frontend**: HTML, CSS, JS, Chart.js
- **Кэширование**: Redis
- **API погоды**: [Open-Meteo](https://open-meteo.com)

## Установка и запуск

Для работы проекта в фоне должен быть запущен [Redis](https://redis.io/)

```bash
redis-server
```

### Клонирование репозитория

```bash
git clone https://github.com/Kicshikxo/Kicshikxo-weather.git
cd Kicshikxo-weather
```

### Установка зависимостей
```bash
npm install
```

#### Запуск в режиме разработки:

```bash
npm run dev
```

#### Запуск релизной версии:

```bash
npm run start
```

#### Переменные окружения

С помощью переменных окружения можно менять порт запущенного приложения и адрес для клиента Redis

```bash
export PORT=3000
export REDIS_URL=redis://localhost:6379
npm run start
```

## Лицензия

Распространяется по лицензии WTFPL. Смотрите [LICENSE](https://github.com/Kicshikxo/Kicshikxo-weather/blob/main/LICENSE) для большей информации.
