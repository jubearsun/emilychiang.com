app.controller('NavCtrl', ['$scope', '$document', function($scope, $document) {
    $(document).ready(function() {
        $('.dropdown-button').dropdown();
        $('.button-collapse').sideNav({closeOnClick: true});
    });
}]);
