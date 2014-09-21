
app.controller('slideController', function ($scope, $http) {
    //Read the json file and retuen the data in object
    $http.get("scripts/exercise.json").success(function (data) {
        $scope.response = data;
        $scope.images = data.attachment;
        $scope.total = $scope.images.length;
    });


});

//Directive return the colorbox slider with prev/next and close functions 
//and also customizes the width and hight of color box container.

app.directive('applyColorBox', function () {
    return function (scope, element, attrs) {
        if (scope.$last) { 
            $(".group1").colorbox({
                rel: 'group1', slideshow: true, onLoad: function () {
                    var HEIGHT_PERCENTAGE = .9; // '1' would set the height to 100%
                    var h = "innerHeight" in window
                       ? window.innerHeight
                       : document.documentElement.offsetHeight;
                    h *= HEIGHT_PERCENTAGE;
                    var WIDTH_PERCENTAGE = .9; // '1' would set the width to 100%
                    var w = "innerHeight" in window
                       ? window.innerWidth
                       : document.documentElement.offsetWidth;
                    w *= WIDTH_PERCENTAGE;
                    $(this).colorbox({ width: w, height: h, scalePhotos: true }); //scale photo according the size of browser
                }
            });
        }
    };
});

//This sliderDir is to make user slider control take the image array as input 
//and return sliding functionality in images on prev/next click

//app.directive('sliderDir', function ($timeout) {
//    return {
//        restrict: 'AE',
//        replace: true,
//        scope: {
//            images: '='
//        },
//        link: function (scope, elem, attrs) {

//            scope.currentIndex = 0; // Initially the index is at the first image

//            scope.next = function () {
//                scope.currentIndex < scope.images.length - 1 ? scope.currentIndex++ : scope.currentIndex = 0;
//            };

//            scope.prev = function () {
//                scope.currentIndex > 0 ? scope.currentIndex-- : scope.currentIndex = scope.images.length - 1;
//            };

//            scope.$watch('currentIndex', function () {
//                scope.images.forEach(function (image) {
//                    image.visible = false; // make every image invisible
//                });

//                scope.images[scope.currentIndex].visible = true; // make the current image visible
//            });

//            /* Start: For Automatic slideshow*/

//            var timer;

//            var sliderFunc = function () {
//                timer = $timeout(function () {
//                    scope.next();
//                    timer = $timeout(sliderFunc, 5000);
//                }, 5000);
//            };

//            sliderFunc();

//            scope.$on('$destroy', function () {
//                $timeout.cancel(timer);
//            });
//        },
//        templateUrl: 'Template.html'
//    };

    
//});