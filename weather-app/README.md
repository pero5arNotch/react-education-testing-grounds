## Setup

Project setup by running:

```
npm create vite@latest weather-app -- --template react-ts
```

React part of your app:
pages - import anything, but keep imports inside pages hierarchical
components - import anything other than pages
root .tsx files
routes
hooks
context

Other parts of your app should be kept isolated from React, except maybe typings (in utils)

styes and constants are isolated from everything else

Rules are meant to be broken, but keep the breaking to a minimum
