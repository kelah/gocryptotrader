'use strict';

angular.module('goCryptoWeb.version', [
  'goCryptoWeb.version.interpolate-filter',
  'goCryptoWeb.version.version-directive'
])

.value('version', '0.1');
