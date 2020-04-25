#! /bin/bash

slug=""
now=""

read -p "Input url of the post. 👉" url

if [[ -z $url ]]; then
  echo "Error occurred!"
  exit 1
else
  slug="$(echo -n "${url}" | sed -e 's/[^[:alnum:]]/-/g' | tr -s '-' | tr A-Z a-z)"
  touch ./src/contents/blog/$slug.mdx
fi

read -p "Input title of the post. 👉" title

if [[ -z $title ]]; then
  echo "Error occurred!"
  exit 1
else
  now="$(date +'%FT%T.000Z')"
  echo "---
title: $title
date: '$now'
---

<!-- Please write something here. -->" >./src/contents/blog/$slug.mdx
fi
