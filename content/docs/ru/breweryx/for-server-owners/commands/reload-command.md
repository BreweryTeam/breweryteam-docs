---
title: "Команда 'Reload'"
---

#### Синтаксис: `/breweryx reload`

##### Разрешение: brewery.cmd.reload

Эта команда перезагружает плагин, а также аддоны и конфигурацию.

При использовании этой команды, BreweryX перезагрузит:

- config.yml
- recipes.yml
- cauldron.yml
- custom-items.yml
- Всю локализацию
- А также заставит аддоны перезагрузить собственные данные и конфигурацию.

Эта команда **НЕ**:

- Не сохраняет принудительно данные BreweryX
- Не перезагружает BreweryX DataManager (настраивается в `config.yml#storage`)

Для упомянутых действий, нужно использовать `/breweryx data save` или `/breweryx data reload`.
