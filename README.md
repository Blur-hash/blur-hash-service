<p align="center">
  <br>
  <img src="https://blur-hash.com/logo2.a7c40623.png">
  <br>
  <br>
  <br>
</p>

`blur-hash-service` is a wrapper around the website and api: [blur-hash.com](https://www.blur-hash.com)

You can get your free api key by signing up here: [blur-hash.com/login](https://blur-hash.com/#/login)

For rendering the blurhash on the front end you can use the below libraries:

> React Component: [react-blurhash](https://github.com/woltapp/react-blurhash)
<br>
> React Native: [react-native-blurhash](https://github.com/mrousavy/react-native-blurhash/blob/master/README.md)

### Getting started:
`npm install blurhash_service`
<br />
<br />
`yarn add blurhash_service`
<br />

### Methods:

#### blurByBase64:

```javascript
const blurhash = require('blurhash_service');

blurhash.config({ apiKey: 'YOUR_API_KEY' });

const options = {
  'value':   'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
  'quality': 2,
};

async function init() {
  const { data } = await blurhash.blurByBase64(options);

  console.log(data);
  // output
  //  {
  //    message: 'Success',
  //    id:      '0c6e9803-22ac-4cb9-9990-eaf7dfd12542',
  //    hash:    'AL8Nwo~q~q~q'
  //  }
}

init();

```

<br />

#### blurByURL

```javascript
const blurhash = require('blurhash_service');

blurhash.config({ apiKey: 'YOUR_API_KEY' });

const options = {
  'value':   'https://i.picsum.photos/id/962/100/100.jpg?hmac=1R-Ep4_VzvNYC_FbmfgTK6cMjpkCs7TjjQC8JhVyNpA',
  'quality': 2,
};

async function init() {

  const { data } = await blurhash.blurByUrl(options);

  console.log(data);
  // output
  //  {
  //    message: 'Success',
  //    id:      '0c6e9803-22ac-4cb9-9990-eaf7dfd12542',
  //    hash:    'AfFrt]E2~qNH'
  //  }
};

init();

```

#### getBlurById

```javascript
const blurhash = require('blurhash_service');

blurhash.config({ apiKey: 'YOUR_API_KEY' });

const validBlurId = '0c6e9803-22ac-4cb9-9990-eaf7dfd12542';

async function init() {

  const { data } = await blurhash.getBlurById(validBlurId);

  console.log(data);
  // output
  //  {
  //    message: 'Success',
  //    hash:    'L~LW#Xv}f,WqPqOYWAj[M{f,nhn$'
  //  }
};

init();

```

