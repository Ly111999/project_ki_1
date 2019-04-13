/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



function getEndpoint(userid) {
    return "https://reqres.in/api/users/2" ;

}






var app = angular.module("demoApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider

    // route for the home page
        .when('/', {
            templateUrl : "pages/home.html",
            controller  : "mainController"
        })

        // route for the about page
        .when("/about", {
            templateUrl : "pages/about.html",
            controller  : "aboutController"
        })

        // route for the contact page
        .when("/contact", {
            templateUrl : "pages/contact.html",
            controller  : "contactController"
        });
});
app.controller('mainController', function($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
});

app.controller('aboutController', function($scope) {
    $scope.message = 'Look! I am an about page.';


  });

app.controller('contactController', function($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
});


app.controller('home1', function ($scope, $http) {
$http.get("https://reqres.in/api/users?page=1").success(function (data) {
    $scope.data1 = data.data;
    console.log($scope.data1);

})

});


app.controller('home2', function ($scope, $http) {
    $scope.Get_id= function () {
        $http.get("https://reqres.in/api/users/" + $scope.user_id).success(function (data) {
            $scope.data2 = data;
            console.log($scope.data2);
    });


    };


});