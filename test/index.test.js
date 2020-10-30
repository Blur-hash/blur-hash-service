'use strict';

const { expect } = require('chai');

const blurhash = require('../src/')

const TEST_API_KEY = process.env.BLUR_HASH_TEST_API_KEY;

describe('bluring', function() {
  describe('blurByBase64()', async function() {
    it('throws when an invalid base64 image is provided', async function() {
      this.timeout(5000)

      blurhash.config({ apiKey: TEST_API_KEY });

      const options = {
        'value':   'NOT VALID',
        'quality': 2,
      };

      await expect(() =>
        blurhash.blurByBase64(options)
      ).to.throw;
    });

    it('returns a valid hash', async function() {
      this.timeout(5000)

      blurhash.config({ apiKey: TEST_API_KEY });

      const options = {
        'value':   'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        'quality': 2,
      };

      const { data } = await blurhash.blurByBase64(options);

      expect(data).to.deep.equal({
        message: 'Success',
        id: data.id,
        hash: 'AL8Nwo~q~q~q'
      })
    });

  });

  describe('blurByUrl()', async function() {
    it('throws when an invalid url is provided', async function() {
      this.timeout(5000)

      blurhash.config({ apiKey: TEST_API_KEY });

      const options = {
        'value':   'NOT VALID',
        'quality': 2,
      };

      await expect(() =>
        blurhash.blurByUrl(options)
      ).to.throw;
    });

    it('returns a valid hash', async function() {
      this.timeout(5000)

      blurhash.config({ apiKey: TEST_API_KEY });

      const options = {
        'value':   'https://i.picsum.photos/id/962/100/100.jpg?hmac=1R-Ep4_VzvNYC_FbmfgTK6cMjpkCs7TjjQC8JhVyNpA',
        'quality': 2,
      };

      const { data } = await blurhash.blurByUrl(options);

      expect(data).to.deep.equal({
        message: 'Success',
        id: data.id,
        hash: 'AfFrt]E2~qNH'
      })
    });
  });

  describe('getBlurById()', async function() {
    it('throws when an invalid url is provided', async function() {
      this.timeout(5000)

      blurhash.config({ apiKey: TEST_API_KEY });

      const blurId = 'NOT VALID';

      await expect(() =>
        blurhash.getBlurById(blurId)
      ).to.throw;
    });

    it('returns a valid hash', async function() {
      this.timeout(5000)

      blurhash.config({ apiKey: TEST_API_KEY });

      const validBlurId = '0c6e9803-22ac-4cb9-9990-eaf7dfd12542';

      const { data } = await blurhash.getBlurById(validBlurId);

      expect(data).to.deep.equal({
        message: 'Success',
        hash: 'L~LW#Xv}f,WqPqOYWAj[M{f,nhn$'
      })
    });
  });
});
