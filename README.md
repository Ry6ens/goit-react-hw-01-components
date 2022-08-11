# 1 - Профиль социальной сети

Необходимо создать компонент <Profile>, с помощью которого мы могли бы
отображать информацию о пользователе социальной сети. Данные о пользователе
лежат в файле user.json.

![Screenshot](./public/social-profile.png)

## Описание компонента <Profile>

Компонент должен принимать несколько пропсов с информацией о пользователе:

- username — имя пользователя
- tag — тег в социальной сети без @
- location — город и страна
- avatar — ссылка на изображение stats — объект с информацией об активности

  Компонент должен создавать DOM элемент следующей структуры.

```
<div class="profile">
  <div class="description">
    <img
      src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
      alt="User avatar"
      class="avatar"
    />
    <p class="name">Petra Marica</p>
    <p class="tag">@pmarica</p>
    <p class="location">Salvador, Brasil</p>
  </div>

  <ul class="stats">
    <li>
      <span class="label">Followers</span>
      <span class="quantity">1000</span>
    </li>
    <li>
      <span class="label">Views</span>
      <span class="quantity">2000</span>
    </li>
    <li>
      <span class="label">Likes</span>
      <span class="quantity">3000</span>
    </li>
  </ul>
</div>
```

# 2- Секция статистики

Создать компонет <Statistics>, который бы отображал статистику по переданным
пропам. Например, загрузки в облако по типу файлов, посещение веб-страницы
пользователями разных стран, финансовые траты и т. п. Данные о статистике лежат
в файле data.json.

![Screenshot](./public/statistics.jpeg)

## Описание компонента <Statistics>

Компонент должен принимать два пропа title и stats, в которых указывается
заголовок и объект статистики.

- title - не обязателен, и если он не передан, не должна рендериться разметка
  заголовка `<h2>`.
- stats - массив объектов содержащих информацию о элементе статистики. Может
  иметь произвольное кол-во элементов.
- Цвет фона элемента статистики в оформлении можно пропустить, либо создать
  функцию для генерации случайного цвета.

Компонент должен создавать DOM элемент следующей структуры.

```
<section class="statistics">
  <h2 class="title">Upload stats</h2>

  <ul class="stat-list">
    <li class="item">
      <span class="label">.docx</span>
      <span class="percentage">4%</span>
    </li>
    <li class="item">
      <span class="label">.mp3</span>
      <span class="percentage">14%</span>
    </li>
    <li class="item">
      <span class="label">.pdf</span>
      <span class="percentage">41%</span>
    </li>
    <li class="item">
      <span class="label">.mp4</span>
      <span class="percentage">12%</span>
    </li>
  </ul>
</section>
```
