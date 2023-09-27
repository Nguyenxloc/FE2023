// khai báo 1 mảng dữ liệu nhân viên
// Tên, ngày sinh, mức lương, giới tính(1 là nam, 0 là nữ)
// Sử dụng angularjs để hiển thị ra table

//khởi tạo module
    //set angular cho vùng myJS
    let myApp = angular.module("myJS", [])
    //2 tham số (tên vùng ng-app, thành phần phụ thuộc)
    myApp.controller("demoController1",staff);
    function staff($scope){
        //khai báo mảng
        $scope.employee = [
            {
                ten: "Nguyễn Phúc Lộc",
                ngaysinh:new Date("2022-03-25"),
                mucluong:15000000,
                gioitinh: 0
            }, 
            {
                ten: "Nguyễn Thị Linh",
                ngaysinh:new Date("2022-03-25"),
                mucluong:15000000,
                gioitinh: 1
            }
        ]
        $scope.ten="Nguyen Phuc Loc";
        $scope.limitNum= 2;
        $scope.sayHello = function($name){
            alert("xin chao");
        }
        $scope.myFunc = function($year){
            console.log($year);
            // console.log(new Date.getFullyear() - $year.getFullyear());
        }
    }