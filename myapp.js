//Programmed by Zeshan Bilal (contact@zdatatech.com)
//
    var myApp = angular.module('myApp',['ionic','ngRoute','analytics']); 
    var QuizData;
    var QuestionNum;
    var CorrectAnswer;
    var randomChoices = new Array();
    var choices = new Array();
    var SelectedQuestion;

myApp.config(function($routeProvider,$locationProvider, $compileProvider) {
    
    // Set the whitelist for certain URLs just to be safe
  $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
    
  // Set up the initial routes that our app will respond to.
  // These are then tied up to our nav router which animates and
  // updates a navigation bar
  $routeProvider
  .when('/', {
    templateUrl: 'welcome.html',
    controller: ''
  })
  .when('/step-one-page-one', {
    templateUrl: 'LessonTwoSound.html',
    controller: 'LessonTwoSound'
  })
  .when('/step-one-page-two', {
    templateUrl: 'LessonTwoPg2Sound.html',
    controller: 'LessonTwoPageTwo'
  })
  .when('/step-one-page-three', {
    templateUrl: 'lesson-two-page-three.html',
    controller: 'LessonTwoPageThree'
  })
  .when('/step-two-page-one', {
    templateUrl: 'lesson-three-page-one.html',
    controller: 'LessonThreePageOne'
  })
  .when('/step-three-page-one', {
    templateUrl: 'lesson-four-page-one.html',
    controller: 'LessonFourPageOne'
  })
  .when('/step-three-page-two', {
    templateUrl: 'lesson-four-page-two.html',
    controller: 'LessonFourPageTwo'
  })
  
  // if none of the above routes are met, use this fallback
  // which executes the 'IntroCtrl' controller (controllers.js)
  .otherwise({
    redirectTo: '/'
  });  
    
    $locationProvider.html5Mode(true);
    
}); 

angular.module('analytics', ['ng']).service('analytics', [
    '$rootScope', '$window', '$location', function($rootScope, $window, $location) {
      var track = function() {
        $window._gaq.push(['_trackPageview', $location.path()]);
      };
      $rootScope.$on('$viewContentLoaded', track);
    }
  ]);

