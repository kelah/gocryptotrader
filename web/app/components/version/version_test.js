'use strict';

describe('goCryptoWeb.version module', function() {
  beforeEach(module('goCryptoWeb.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
