var app = angular.module('feedbackApp', []);

app.controller('FeedbackController', function($scope) {
  $scope.feedback = {
    name: '',
    email: '',
    rating: 0,
    comment: ''
  };

  $scope.stars = Array(5).fill(0);

  $scope.setRating = function(rating) {
    $scope.feedback.rating = rating;
  };

  $scope.submitFeedback = function() {
    // Here, you can handle the submission of the feedback, e.g., send it to a server.
    console.log("Feedback submitted:", $scope.feedback);
    // Clear the form after submission
    $scope.feedback = {
      name: '',
      email: '',
      rating: 0,
      comment: ''
    };
  };
});