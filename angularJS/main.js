//khởi tạo module
    //set angular cho vùng myJS
    let myApp = angular.module("myJS", [])
    //2 tham số (tên vùng ng-app, thành phần phụ thuộc)
    myApp.controller("demoController", myFunc); //2 tham số, tham số 1 tên controller,tham số 2 hàm ánh xạ tới
    myApp.controller("demoController1",staff);
    function myFunc($scope) {   
        //tham sô scope luôn phải có để gender dữ liệu và view
        // Khai báo biến
        $scope.xinchao = "Hello";
        console.log($scope.xinchao)
    }
    function staff($scope){
        $scope.xinchao1 = "Hello1";
        $scope.ten = "Lộc";
        $scope.namsinh = 2005;
        $scope.chuyennganh = "agularJS";
        
        //khai báo mảng
        $scope.students = [
            {
                ten: "Nguyễn Phúc Lộc",
                namsinh:2005,
                chuyennganh:"cntt"
            }, 
            {
                ten: "Nguyễn Thị Linh",
                namsinh:2005,
                chuyennganh:"cntt"
            }
        ]
    }