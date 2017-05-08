/**
 * Created by triptoli on 5/1/2017.
 */
angular.module('userService',[])
    .factory('User',function ($http) {
        userFactory={};
        userFactory.create=function (data) {
            return $http.post('/api/user',data);
        }

        return userFactory;
    })
