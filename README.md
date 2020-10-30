

<p align="center">
  <br>
  <img src="https://blur-hash.com/logo2.a7c40623.png">
</p>

Blur hash as a service is a wrapper around the website: [www.blur-hash.com](https://www.blur-hash.com)

You can get your free api key by signing up here: [https://blur-hash.com/login](https://blur-hash.com/#/login)


### To install run
```
npm install blurhash_service
```


### Getting started:

#### blurByBase64

```javascript
  const blurhash = require('blurhash_service');

  blurhash.config({ apiKey: 'YOUR_API_KEY' });

  const options = {
    'value':   'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
    'quality': 2,
  };

  const { data } = await blurhash.blurByBase64(options);

  // output
  //  {
  //    message: 'Success',
  //    id:      '0c6e9803-22ac-4cb9-9990-eaf7dfd12542',
  //    hash:    'AL8Nwo~q~q~q'
  //  }

```

#### blurByURL

```javascript
  const blurhash = require('blurhash_service');

  blurhash.config({ apiKey: 'YOUR_API_KEY' });

  const options = {
    'value':   'https://i.picsum.photos/id/962/100/100.jpg?hmac=1R-Ep4_VzvNYC_FbmfgTK6cMjpkCs7TjjQC8JhVyNpA',
    'quality': 2,
  };

  const { data } = await blurhash.blurByUrl(options);

  // output
  //  {
  //    message: 'Success',
  //    id:      '0c6e9803-22ac-4cb9-9990-eaf7dfd12542',
  //    hash:    'AfFrt]E2~qNH'
  //  }

```

#### getBlurById

```javascript
  const blurhash = require('blurhash_service');

  blurhash.config({ apiKey: 'YOUR_API_KEY' });

  const validBlurId = '0c6e9803-22ac-4cb9-9990-eaf7dfd12542';

  const { data } = await blurhash.getBlurById(validBlurId);

  // output
  //  {
  //    message: 'Success',
  //    hash:    'L~LW#Xv}f,WqPqOYWAj[M{f,nhn$'
  //  }
```


