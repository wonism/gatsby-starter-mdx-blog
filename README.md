# gatsby-starter-mdx-blog
> Build your own blog w/ MDX & Gatsby

## Install
```
$ git clone git@github.com:wonism/gatsby-starter-mdx-blog.git <<PROJECT_NAME>>
# Recommend you to delete `.git`
$ cd <<PROJECT_NAME>> && rm -r .git
```

## Start with gatsby-cli
```
$ gatsby new <<PROJECT_NAME>> https://github.com/wonism/gatsby-stater-mdx-blog
```

## Development
```
$ npm start
```

## Build
```
$ npm run build
```

## Features
- ⚛️  Support writing blog contents w/ [MDX](https://github.com/mdx-js)
- 🔖 Support **Category** and **Tag**
  - You can just add `categories: ["Category"]` and `tags: ["Tag"]` below the `date` in mdx file.
- 🔢 Support pagination
- 🌙 Support `dark mode`
- 💬 Support Resume
  - Generate PDF with your data. (written in JSON format)
  - Download
- ✏️ Draft version of your post
  - You can just add `draft: true` below the `date` in mdx file.
- 🔮 Support comments w/ [Utterances](https://utteranc.es)
- ✉️ Support Contacts Form w/ [React Mail Form](https://github.com/wonism/react-mail-form)
- 🗄 Support Sitemap and RSS Feed
- 🤖 Support post scaffolding
  - You can just run `npm run new` then input url & title. (slugify the url automatically.)
- 📝 All codes are written in [TypeScript](https://www.typescriptlang.org)
- 💅 CSS in JS w/ [Emotion](https://emotion.sh/docs/introduction)
- 🔍 Search Engine Optimization w/ [React Helmet](https://github.com/nfl/react-helmet)
- 📊 [Google Analytics](https://analytics.google.com)

## You SHOULD change...
- Your picture in `./content/images/profile.png`
- Favicon in `./content/images/favicon.png`
  - You can check the details for favicon in [Gatsby Plugin Manifest](https://www.gatsbyjs.org/packages/gatsby-plugin-manifest)
- Your biography in `src/shared/Bio/index.tsx`
- Your Resume data in `src/constants/resume.ts`
  - If you do **not** want show resume, you can check `onCreatePage` in `gatsby-node.js`.
- `gastby-config.js`
  - site meta data
  - google analytics tracking id
