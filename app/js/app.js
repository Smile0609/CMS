angular.module('DemoApp', ['ngRoute'])
      .config(['$routeProvider', function($routeProvider) {
        $routeProvider
          .when('/allvideo', {
            templateUrl: 'allvideo/allvideo.html',
            // controller: 'LoginController',
          })
          .when('/allvideo/uservideo',{
            templateUrl: 'allvideo/uservideo.html',
          })  
          .when('/allfiles', {
            templateUrl: 'allfiles/allfiles.html',
            // controller: 'LoginController',
          })
          .when('/allfiles/userfile',{
            templateUrl: 'allfiles/userfile.html',
          })
          .when('/broadheading',{
            templateUrl: 'broadheading/bhead.html',
          })
          .when('/usermanager/stu',{
            templateUrl: 'usermanager/stu.html',
          })
          .when('/usermanager',{
            templateUrl: 'usermanager/tea.html',
          })
          .when('/evaluate/user',{
            templateUrl: 'evaluate/usermute.html',
          })
          .when('/evaluate',{
            templateUrl: 'evaluate/evadelete.html',
          })
          .when('/notice',{
            templateUrl: 'notice/checknotice.html',
          })
          .when('/notice/add',{
            templateUrl: 'notice/addnotice.html',
          })
      }])

    // angular.module('DemoApp')
    //   .controller('LoginController', ['$scope', function($scope) {
    //     $scope.username = ''
    //     $scope.password = ''
    //     $scope.login = function() {
    //       console.log($scope.username, $scope.password)
    //     }
    //   }])
 
