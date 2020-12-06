const request = require('request-promise');
const fs = require('fs');

let LOCAL_API_KEY = undefined;

function config({ apiKey }) {
  LOCAL_API_KEY = apiKey;
}

async function blurByUrl(options) {

  const requestParameters = {
    'method': 'POST',
    'url':    'https://api.blur-hash.com/blur/url',
    'headers': {
      'x-api-key':    LOCAL_API_KEY,
      'Content-Type': 'application/json'
    },
    'body': JSON.stringify({
      'imageUrl': options
    })
  }

  try {
    const result = await request(requestParameters)
    const parsed = JSON.parse(result);

    return parsed;
  } catch(error) {
    throw new Error(error)
  }
}

async function blurByBase64(options) {

  const requestParameters = {
    'method': 'POST',
    'url':    'https://api.blur-hash.com/blur/buffer',
    'headers': {
      'x-api-key':    LOCAL_API_KEY,
      'Content-Type': 'application/json'
    },
    'body': JSON.stringify({
      'base64String': options
    })
  }

  try {
    const result = await request(requestParameters);
    const parsed = JSON.parse(result);

    return parsed;
  } catch(error) {
    throw new Error(error)
  }
}

async function batchBlurByBase64(options) {

  const requestParameters = {
    'method': 'POST',
    'url':    'https://api.blur-hash.com/blur/batchBuffer',
    'headers': {
      'x-api-key':    LOCAL_API_KEY,
      'Content-Type': 'application/json'
    },
    'body': JSON.stringify({
      'base64Array': options
    })
  }

  try {
    const result = await request(requestParameters);
    const parsed = JSON.parse(result);

    return parsed;
  } catch(error) {
    throw new Error(error)
  }
}

async function getBlurById(blurId) {

  const requestParameters = {
    'method': 'GET',
    'url': 'https://api.blur-hash.com/blur/' + blurId,
    'headers': {
      'x-api-key': LOCAL_API_KEY
    }
  };

  try {
    const result = await request(requestParameters);
    const parsed = JSON.parse(result);

    return parsed;
  } catch(error) {
    throw new Error(error)
  }
}

async function convertImageToHash(options) {

  const rawImageData = fs.readFileSync(options.pathToImage);

  const base64String = Buffer.from(rawImageData).toString('base64');

  const localOptions = {
    'value':   base64String,
    'quality': options.quality,
  };

  const result = await blurByBase64(localOptions);

  return result;
}

module.exports = {
  getBlurById,
  blurByUrl,
  blurByBase64,
  batchBlurByBase64,
  convertImageToHash,
  config
}
