window.TrangChuController = function($scope,$http){
   $scope.title = "Danh sách sinh viên";
   const apiStudents = "http://localhost:3000/students";
   $http.get(apiStudents).then(function(response){
        console.log(response);
        console.log(response.data);    
   })
}