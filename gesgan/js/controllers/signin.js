'use strict';

/* Controllers */
  // signin controller
app.controller('SigninFormController', ['$scope', '$http', '$state', 'MyService','toaster', function($scope, $http, $state, MyService,toaster) {
    $scope.toaster = {
    title: 'Exito',
    type: 'success',
    text: 'Datos de cuenta actualizados con exito',
  };


  $scope.pop = function(){
    toaster.pop($scope.toaster.type, $scope.toaster.title, $scope.toaster.text);
  };

    $scope.user = {};
    $scope.datos={};
    $scope.authError = null;
    $scope.item={};
    $scope.item.nombre=MyService.data.nombre;
    $scope.item.email=MyService.data.email;
    $scope.item.password=MyService.data.password;
    $scope.editItem = function(item){
   if(item){
      item.editing = true;
    }
   
  };


  $scope.doneEditingDatos = function(item){
    var usuarioAct = {};
   
    MyService.data.idenUser=item.id;
    
    usuarioAct.nombre=item.nombre;
    usuarioAct.email=item.email;
    usuarioAct.password=item.password;
     $scope.app.nombre=item.nombre;

      // $scope.pop4();
      $http.put('http://18.218.43.203:1337/usergesgan/'+MyService.data.idUsuario , usuarioAct)
    
MyService.data.datos=item;
    // $scope.items = null;
    // $scope.animales = null;
    // $scope.item=null;
    item.editing = false;
    $scope.pop();
  };
   
    $scope.login = function() {
      $scope.authError = null;
      // Try to login
       $http.get('http://18.218.43.203:1337/usergesgan/?email=' +$scope.user.email).success(function(respuesta){
                // if ($scope.email=== 'undefined'){$scope.mensaje="usuario no registrado"}
                     // if (vm.dato !== vm.login.usuario){vm.login.mensaje="usuario no registrado"}
                $scope.datos = respuesta.results[0];
                MyService.data.datos=$scope.datos;
                // alert("email: "+$scope.datos[0].email);
                // vm.dato = vm.paises[0].usuario;
                // vm.tipoUsuario= vm.paises[0].tipoUsuario;
                // vm.identificador=vm.paises[0].id;
                // vm.dato2= vm.paises[0].pass;
                 if ($scope.datos.email == $scope.user.email && $scope.datos.password == $scope.user.password)
                
                    {
                       MyService.data.nombre=$scope.datos.nombre;
                      MyService.data.email=$scope.datos.email;
                       MyService.data.password=$scope.datos.password;
                       $scope.app.nombre=MyService.data.nombre;
                       $scope.app.email=MyService.data.email;
                     $scope.app.password=MyService.data.password;
                      MyService.data.idUsuario=$scope.datos.id;
                       $scope.app.usuario=$scope.datos.email;
                      // alert("hola" +MyService.data.idUsuario);
                      $state.go('app.dashboard-v1');
                    }
                    else
                    {
                       $scope.authError = 'Email o contraseña incorrectos';
                    }
                 });
                // {
                // if (vm.tipoUsuario==="1"){$window.location.href = 'http://192.168.0.102:3001'};
                // if (vm.tipoUsuario==="2"){$window.location.href = 'http://192.168.0.102:3002'};
                // if (vm.tipoUsuario==="3"){$window.location.href = 'http://192.168.0.102:3003'};
                // if (vm.tipoUsuario==="4"){$window.location.href = 'http://192.168.0.102:3004'};
                // if (vm.tipoUsuario==="5"){$window.location.href = 'http://192.168.0.102:3005'};

                // if (vm.tipoUsuario==="6"){$window.location.href = 'http://192.168.0.102:3006/socio/'+ vm.identificador};
                
                // }  else
                // {
                //     vm.login.mensaje= "por favor verifique los datos y vuelva a intentarlo"
                // }
           
      // $http.post('api/login', {email: $scope.user.email, password: $scope.user.password})
      // .then(function(response) {
      //   if ( !response.data.user ) {
      //     $scope.authError = 'Email o contraseña incorrectos';
      //   }else{
      //     $state.go('app.dashboard-v1');
      //   }
      // }, function(x) {
      //   $scope.authError = 'Server Error';
      // });
    };
  }])
;