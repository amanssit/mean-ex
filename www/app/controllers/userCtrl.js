/**
 * Created by triptoli on 4/30/2017.
 */
angular.module('userController', ['userService'])
    .controller('RegCtrl', function ($scope, $http,User) {
        $scope.data = {};
        this.registerUser = function () {
            User.create($scope.data)
                .then(function (res) {
                    console.log(res);
                    $scope.data = {};
                })
                .catch(function (err) {
                    console.log(err);
                })
        }
    })
