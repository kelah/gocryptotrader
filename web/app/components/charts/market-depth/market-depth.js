
angular.module('myApp.charts.market-depth',[]).component('chartmarketdepth', {
  templateUrl: '/components/charts/market-depth/market-depth.html',
  controller:'ChartMarketDepthController',
  controller: function ($scope, $http, Notification, $rootScope, $interval) {
    $scope.liveSwitch = false;

    $scope.myRender = { 
        width: "100%",
        height: '568px',
        autoResize: true
    };
    
    $scope.chartDeets = 
    {
      graphset:[
          {
              type:"area",
              title:{
                    text:"Market Depth",
                    "font-size":14,
                    "offset-x":-200,
                    "offset-y":-5
              },
              scaleY:{
                  label:{
                      text:"Cumulative Volume"
                  }
              },
              plotarea:{
                  "adjust-layout":true
              },
              "scale-x":{
                  "min-value":0,
                  "max-value":10,
                  step: 1,
                  decimals:0,
                  label:{
                      text:"Price"
                  }
              },
          }
      ]
    };

    $scope.getFakeData = function() {
        if($scope.liveSwitch == true) {
        var data = {};
        data.BuyOrders = 
            [
                [0,25],
                [1,10],
                [2,5],
                [3,3],
                [4,2],
                [5,0]
            ];
        
        data.SellOrders = 
           [
                [5,1],
                [6,10],
                [7,20],
                [8,25],
                [9,27],
                [10,30]
            ];
        
        $scope.liveSwitch = false;
        return data;

        } else {
        var data = {};
        data.BuyOrders = 
            [
                [0,20],
                [1,11],
                [2,3],
                [3,5],
                [4,1],
                [5,0]
            ];
        
        data.SellOrders = 
           [
                [5,0],
                [6,5],
                [7,23],
                [8,21],
                [9,30],
                [10,35]
            ];
        
        $scope.liveSwitch = true;
        return data;

        }
    };


    $scope.getLineDetails = function() {
        $http.get('/OrderValues').success(function(data) {
            //This Call doesn't exist yet, so here's this instead:
        });
        var data = $scope.getFakeData();
            $scope.lineOne = {
                backgroundColor: 'green',
                alphaArea:.56,
                lineColor: 'green',
                marker: {
                    backgroundColor:'green',
                    visible:true
                },
                values: data.BuyOrders
            };

            $scope.lineTwo = {
                backgroundColor: '#c62828',
                alphaArea:.56,
                lineColor: '#c62828',
                marker: {
                    backgroundColor:'#c62828',
                    visible:true
                },
                values: data.SellOrders
            };
             $scope.chartDeets.graphset[0]['scale-x']['min-value'] = data.BuyOrders[0][0];
             $scope.chartDeets.graphset[0]['scale-x']['max-value'] = data.SellOrders[data.SellOrders.length -1][0]; 
              
            $scope.chartDeets.graphset[0].series = [$scope.lineOne, $scope.lineTwo];
    };
    
    $scope.getLineDetails();
    
    //I'm prettending to be live updates!
    $interval(function() {
        $scope.getLineDetails();
    },4000);
  }
});



