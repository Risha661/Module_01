
git config --global user.name "Ирина Князева"
git config --global user.email "knyazeva.irina.94@mail.ru"

git config --list

git config --global core.autocrlf true
git config --global core.quotepath off
git config --global init.defaultBranch main

git init #инициализация
git add . #добавление файлов
git commit -m ''#добавление комментария
git status #проверка статуса и обновлений репозитория

git diff
git diff --color-words
git checkout # вернуть всё к последнему коммиту