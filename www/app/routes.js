/**
 * Created by triptoli on 4/30/2017.
 */
angular.module('myRoute',['ngRoute'])
.config(function ($routeProvider,$locationProvider) {
$routeProvider
    .when('/',{
       templateUrl:'app/views/pages/home.html'
    })
    .when('/about',{
       templateUrl:'app/views/pages/about.html'
    })
     .when('/register',{
       templateUrl:'app/views/pages/user/register.html',
         controller:'RegCtrl',
         controllerAs:'register'
    })
     .when('/login',{
       templateUrl:'app/views/pages/user/login.html',
         controller:'LoginCtrl',
         controllerAs:'login'
    })
    .otherwise({redirectTo:'/'})

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
})