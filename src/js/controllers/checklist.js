app.controller('ChecklistCtrl', ['$scope', '$document', function($scope, $document) {
    $(document).ready(function() {
        $('#print').click(function() {
            window.print();
        });
    });
}]);
