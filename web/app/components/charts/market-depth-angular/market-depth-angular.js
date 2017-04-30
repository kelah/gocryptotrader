angular.module('goCryptoWeb.charts.market-depth-angular', []).component('angularmarketdepth', {
    templateUrl: '/components/charts/market-depth-angular/market-depth-angular.html',
    controller: 'AngularMarketDepthController',
    controller: function($scope) {

        $scope.labels = [65, 59, 80, 81, 56, 55, 40, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        $scope.series = ['Series A', 'Series B'];
        $scope.data = [
            [65, 59, 80, 81, 56, 55, 40, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 28, 48, 40, 19, 86, 27, 90]
        ];
        $scope.onClick = function(points, evt) {
            console.log(points, evt);
        };
        $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
        $scope.options = {
            scales: {
                yAxes: [{
                        id: 'y-axis-1',
                        type: 'linear',
                        display: true,
                        position: 'left'
                    },
                    {
                        id: 'y-axis-2',
                        type: 'linear',
                        display: true,
                        position: 'right'
                    }
                ]
            }
        };

    }
});