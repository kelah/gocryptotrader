'use strict';

// Declare app level module which depends on views, and components
angular.module('goCryptoWeb', [
    'ngRoute',
    'ui-notification',
    'chart.js',
    'goCryptoWeb.home',
    'goCryptoWeb.wallets',
    'goCryptoWeb.settings',
    'goCryptoWeb.version',
    'goCryptoWeb.buy',
    'goCryptoWeb.sell',
    'goCryptoWeb.enabledExchanges',
    'goCryptoWeb.buyOrders',
    'goCryptoWeb.sellOrders',
    'goCryptoWeb.stringUtils',
    'goCryptoWeb.webSocket',
    'goCryptoWeb.charts.market-depth-angular'
]).
config(['$locationProvider', '$routeProvider', 'NotificationProvider', function($locationProvider, $routeProvider, NotificationProvider) {
        NotificationProvider.setOptions({
            delay: 5000,
            startTop: 60,
            startRight: 10,
            verticalSpacing: 10,
            horizontalSpacing: 20,
            positionX: 'right',
            positionY: 'top'
        });

        $locationProvider.hashPrefix('!');

        $routeProvider.otherwise({ redirectTo: '/' });
    }])
    .config(['ChartJsProvider', function(ChartJsProvider) {
        // Configure all charts
        ChartJsProvider.setOptions({
            colours: ['#803690', '#00ADF9', '#DCDCDC', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
            responsive: true
        });
        // Configure all line charts
        ChartJsProvider.setOptions('Line', {
            datasetFill: false
        });
    }]);