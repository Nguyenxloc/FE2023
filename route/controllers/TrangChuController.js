window.TrangChuController = function($scope){
    $scope.title="Đây là trang chủ"

    $scope.addNew = function(){
        console.log($scope.inputValue);
        console.log($scope.inputValue.name);
        console.log($scope.inputValue.address);
    }
    $scope.cal = function(){
        console.log($scope.inputNum);
        $scope.sum = Number($scope.inputNum.num1)+Number($scope.inputNum.num2);
        console.log(Number($scope.inputNum.num1)+Number($scope.inputNum.num2));
    }
    $scope.signUp = function(){
        if($scope.user.pass=="locnpph29878"){
            $scope.mes = "Welcome to new land ";
        }
        else{
            $scope.mes = "Wrong password";
        }
    }

    $scope.count = function(){
        
    }

    // Khai báo mảng
    $scope.students = [
        {
            ten: "Tạ Văn Định",
            namsinh: 2005,
            chuyennganh: "CNTT"
        },
        {
            ten: "DinhTV7",
            namsinh: 2005,
            chuyennganh: "CNTT"
        }
    ];
}