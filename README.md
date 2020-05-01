# 🚀 Parcel UI

<!--[![Build Status](https://travis-ci.org/ngduc/parcelui.svg?branch=master)](https://travis-ci.org/ngduc/parcelui)-->

Parcel + Typescript + React/Preact + Router + CSS Modules + SASS + Jest + Api-Now + Bulma

And more:

- Lazy loading (code splitting) for a page (Route).
- CSS scoping using CSS Modules: just import a local CSS or SASS file and use it.
- Store management with react-easy-state (easier than Redux, MobX).
- Component unit testing with Jest & Enzyme.
- Making Ajax requests using Whatwg-fetch Req with Mock APIs (json-server).
- Mock API server with [api-now](https://github.com/ngduc/api-now).
- Responsive and modular CSS using [Bulma CSS framework](https://bulma.io/).

### 🔧 Installation

Clone this project:

```
git clone https://github.com/jmunox/parcelui.git your-app
cd your-app
rm -rf .git
yarn
```

- Update `package.json` with your information.
- Run `yarn dev` then open http://localhost:1234/

### ⚙️ Commands

```
yarn mock-api         launch mock API Server using https://github.com/ngduc/api-now

yarn dev              launch DEV mode takes 1.4s (tsc watch, parcel & mock-api)
yarn test:watch       run jest --watch (auto run test files)

yarn build            build for PROD to static directory ./dist
yarn serve            serve static built dir "./dist" using api-now (or any web server)
```

### CSS

- SCSS is recommended, but optional. You can also use ".css" files normally.

#### Bulma
- Bulma is a free, open source CSS framework based on Flexbox https://bulma.io/


### Others

Recommend:

- VSCode & prettier addon

<img src="tools/dev.jpg">

### Change log
#### 2020-04-29 
Clone from https://github.com/ngduc/parcelui [commit](https://github.com/ngduc/parcelui/commit/e54fa345659100d532ead7257749799ee6b94a2a)
Updated dev-dependencies:
- Added Bulma (^0.8.2),
- Updated postcss-modules to ^1.5.0,
- Updated sass to ^1.25.0