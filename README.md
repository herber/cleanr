![Cleanr](https://cldup.com/2R0W8avd38.png)

## Installation
```bash
npm install [--save] cleanr
```

## Usage
```javascript
const clean = require('cleanr');

const object = {...}

console.log(clean(object));
```
> This will log `object` without the empty parameters to the console.

## What is `empty`
  - {}
  - []
  - '' & ' '
  - undefined

## License
MIT
