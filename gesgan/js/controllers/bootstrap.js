'use strict';

/* Controllers */

  // bootstrap controller
  app.controller('AccordionDemoCtrl', ['$scope', function($scope) {
    $scope.oneAtATime = true;

    $scope.groups = [
      {
        title: 'Accordion group header - #1',
        content: 'Dynamic group body - #1'
      },
      {
        title: 'Accordion group header - #2',
        content: 'Dynamic group body - #2'
      }
    ];

    $scope.items = ['Item 1', 'Item 2', 'Item 3'];
// $scope.ok = function(){
    
//   };
    $scope.addItem = function() {
      var newItemNo = $scope.items.length + 1;
      $scope.items.push('Item ' + newItemNo);
    };

    $scope.status = {
      isFirstOpen: true,
      isFirstDisabled: false
    };
  }])
  ; 
  app.controller('AlertDemoCtrl', ['$scope', function($scope) {
    $scope.alerts = [
      { type: 'success', msg: 'Well done! You successfully read this important alert message.' },
      { type: 'info', msg: 'Heads up! This alert needs your attention, but it is not super important.' },
      { type: 'warning', msg: 'Warning! Best check yo self, you are not looking too good...' }
    ];

    $scope.addAlert = function() {
      $scope.alerts.push({type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.'});
    };

    $scope.closeAlert = function(index) {
      $scope.alerts.splice(index, 1);
    };
  }])
  ; 
  app.controller('ButtonsDemoCtrl', ['$scope', function($scope) {
    $scope.singleModel = 1;

    $scope.radioModel = 'Middle';

    $scope.checkModel = {
      left: false,
      middle: true,
      right: false
    };
  }])
  ; 
  app.controller('CarouselDemoCtrl', ['$scope', function($scope) {
    $scope.myInterval = 5000;
    var slides = $scope.slides = [];
    $scope.addSlide = function() {
      slides.push({
        image: 'img/c' + slides.length + '.jpg',
        text: ['Carousel text #0','Carousel text #1','Carousel text #2','Carousel text #3'][slides.length % 4]
      });
    };
    for (var i=0; i<4; i++) {
      $scope.addSlide();
    }
  }])
  ; 
  app.controller('DropdownDemoCtrl', ['$scope', function($scope) {
    $scope.items = [
      'The first choice!',
      'And another choice for you.',
      'but wait! A third!'
    ];

    $scope.status = {
      isopen: false
    };

    $scope.toggled = function(open) {
      //console.log('Dropdown is now: ', open);
    };

    $scope.toggleDropdown = function($event) {
      $event.preventDefault();
      $event.stopPropagation();
      $scope.status.isopen = !$scope.status.isopen;
    };
  }])
  ;

  app.controller('ModalInstanceCtrl', ['$scope', '$http', '$modalInstance', 'items', 'MyService', '$filter','$modal', function($scope, $http, $modalInstance, items, MyService,$filter,$modal) {
    // $scope.item={};
    // $scope.items = items;
    // $scope.selected = {
    //   item: $scope.items[0]
    // };

$scope.item={};
$scope.filter={};
$scope.filter = '';
      $scope.tbOptionsListadoRazas = {
      bDestroy: true,
      pageLength: 5,
      data: []                                             
    };

$http.get('http://52.33.127.122:1337/raza/?idUsuario='+MyService.data.idUsuario).then(function (resp2) {
    var bandera="";
    var bandera2="";
    $scope.razas = resp2.data.results;
    for (var i  = 0; i<$scope.razas.length;i++){
        bandera = $scope.razas[i].createdAt;
        bandera2=$filter('date')(new Date(bandera),'dd/MM/yyyy');
        $scope.razas[i].createdAtFormateada=bandera2;
        // $scope.razas[i].opciones='<button class="btn btn-danger" ng-click="borrar()">Borrar</button>';
        



        // $scope.razas[i].opciones='<button class="btn btn-danger" title="Borrar" ng-click="borrar($index)">Borrar</button>';
 
    }
    // $scope.borrar=function(item){
    //   alert("cancelado"+item);
    // };
    $scope.razas=$scope.razas.reverse();
    // $scope.tbOptionsListadoRazas.data = $scope.razas;
    // $scope.tbOptionsListadoRazas.aoColumns=[
    //   { mData: 'createdAtFormateada' },
    //   { mData: 'nombre' },
    //   // { mData: 'opciones'} , 
    //   // {
    //   //       title: 'Actions',
    //   //       data: null,
    //   //       className: 'center',
    //   //       defaultContent: '<button type="button" ng-click="edit()" class="btn btn-warning"><i class="fa fa-edit"></i></button><button type="button" ng-click="Delete()" class="btn btn-danger"><i class="fa fa-trash-o"></i></button>'

    //   //       }                        
    // ];
});


$http.get('http://52.33.127.122:1337/alimento/?idUsuario='+MyService.data.idUsuario).then(function (resp2) {
    var bandera="";
    var bandera2="";
    $scope.alimentos = resp2.data.results;
    for (var i  = 0; i<$scope.alimentos.length;i++){
        bandera = $scope.alimentos[i].createdAt;
        bandera2=$filter('date')(new Date(bandera),'dd/MM/yyyy');
        $scope.alimentos[i].createdAtFormateada=bandera2;
            }
  
    $scope.alimentos=$scope.alimentos.reverse();
   
});
$http.get('http://52.33.127.122:1337/tipoBano/?idUsuario='+MyService.data.idUsuario).then(function (resp2) {
    var bandera="";
    var bandera2="";
    $scope.tiposBanos = resp2.data.results;
    for (var i  = 0; i<$scope.tiposBanos.length;i++){
        bandera = $scope.tiposBanos[i].createdAt;
        bandera2=$filter('date')(new Date(bandera),'dd/MM/yyyy');
        $scope.tiposBanos[i].createdAtFormateada=bandera2;
            }
  
    $scope.tiposBanos=$scope.tiposBanos.reverse();
   
});
$http.get('http://52.33.127.122:1337/tipoAlimento/?idUsuario='+MyService.data.idUsuario).then(function (resp2) {
    var bandera="";
    var bandera2="";
    $scope.tiposAlimentos = resp2.data.results;
    for (var i  = 0; i<$scope.tiposAlimentos.length;i++){
        bandera = $scope.tiposAlimentos[i].createdAt;
        bandera2=$filter('date')(new Date(bandera),'dd/MM/yyyy');
        $scope.tiposAlimentos[i].createdAtFormateada=bandera2;
            }
  
    $scope.tiposAlimentos=$scope.tiposAlimentos.reverse();
   
});
$http.get('http://52.33.127.122:1337/tipoMedicamento/?idUsuario='+MyService.data.idUsuario).then(function (resp2) {
    var bandera="";
    var bandera2="";
    $scope.tiposMedicamentos = resp2.data.results;
    for (var i  = 0; i<$scope.tiposMedicamentos.length;i++){
        bandera = $scope.tiposMedicamentos[i].createdAt;
        bandera2=$filter('date')(new Date(bandera),'dd/MM/yyyy');
        $scope.tiposMedicamentos[i].createdAtFormateada=bandera2;
            }
  
    $scope.tiposMedicamentos=$scope.tiposMedicamentos.reverse();
   
});

$http.get('http://52.33.127.122:1337/medicamento/?idUsuario='+MyService.data.idUsuario).then(function (resp2) {
    var bandera="";
    var bandera2="";
    $scope.medicamentos = resp2.data.results;
    for (var i  = 0; i<$scope.medicamentos.length;i++){
        bandera = $scope.medicamentos[i].createdAt;
        bandera2=$filter('date')(new Date(bandera),'dd/MM/yyyy');
        $scope.medicamentos[i].createdAtFormateada=bandera2;
            }
  
    $scope.medicamentos=$scope.medicamentos.reverse();
   
});

$http.get('http://52.33.127.122:1337/bano/?idUsuario='+MyService.data.idUsuario).then(function (resp2) {
    var bandera="";
    var bandera2="";
    $scope.banos = resp2.data.results;
    for (var i  = 0; i<$scope.banos.length;i++){
        bandera = $scope.banos[i].createdAt;
        bandera2=$filter('date')(new Date(bandera),'dd/MM/yyyy');
        $scope.banos[i].createdAtFormateada=bandera2;
            }
  
    $scope.banos=$scope.banos.reverse();
   
});



// function edit() {
//   alert("hola");
        
//     }
    
$scope.borrar=function(item){
   var idRaza=item.id;
      $http.delete('http://52.33.127.122:1337/raza/'+idRaza , item)
      $modalInstance.dismiss('cancel');
};
$scope.borrarAlimento=function(item){
   var idAlimento=item.id;
      $http.delete('http://52.33.127.122:1337/alimento/'+idAlimento , item)
      $modalInstance.dismiss('cancel');
};
$scope.borrarMedicamento=function(item){
   var idMedicamento=item.id;
      $http.delete('http://52.33.127.122:1337/medicamento/'+idMedicamento , item)
      $modalInstance.dismiss('cancel');
};
$scope.borrarBano=function(item){
   var idBano=item.id;
      $http.delete('http://52.33.127.122:1337/bano/'+idBano , item)
      $modalInstance.dismiss('cancel');
};
$scope.borrarTipoBano=function(item){
   var idTipoBano=item.id;
      $http.delete('http://52.33.127.122:1337/tipoBano/'+idTipoBano , item)
      $modalInstance.dismiss('cancel');
};
$scope.borrarTipoAlimento=function(item){
   var idTipoAlimento=item.id;
      $http.delete('http://52.33.127.122:1337/tipoAlimento/'+idTipoAlimento , item)
      $modalInstance.dismiss('cancel');
};
$scope.borrarTipoMedicamento=function(item){
   var idTipoMedicamento=item.id;
      $http.delete('http://52.33.127.122:1337/tipoMedicamento/'+idTipoMedicamento , item)
      $modalInstance.dismiss('cancel');
};
//  $scope.filterOptions = {
//         filterText: "",
//         useExternalFilter: true
//     }; 

//     $scope.totalServerItems = 0;
//     $scope.pagingOptions = {
//         pageSizes: [250, 500, 1000],
//         pageSize: 250,
//         currentPage: 1
//     }; 
//     $scope.setPagingData = function(data, page, pageSize){  
//         var pagedData = data.splice((page - 1) * pageSize, page * pageSize);
//         $scope.myData = pagedData;
//         $scope.totalServerItems = data.length;
//         if (!$scope.$$phase) {
//             $scope.$apply();
//         }
//     };
//     $scope.getPagedDataAsync = function (pageSize, page, searchText) {
//         setTimeout(function () {
//            var data ;
//           $http.get('http://52.33.127.122:1337/alimento/?idUsuario='+MyService.data.idUsuario).then(function (resp2) {
//             $scope.alimentos = resp2.data.results;
//           });
//           data = $scope.alimentos;
// $scope.setPagingData(data,page,pageSize);


//         }, 100);
//     };

//     $scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage);

//     $scope.$watch('pagingOptions', function (newVal, oldVal) {
//         if (newVal !== oldVal && newVal.currentPage !== oldVal.currentPage) {
//           $scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage, $scope.filterOptions.filterText);
//         }
//     }, true);
//     $scope.$watch('filterOptions', function (newVal, oldVal) {
//         if (newVal !== oldVal) {
//           $scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage, $scope.filterOptions.filterText);
//         }
//     }, true);
 
    // $scope.gridOptions = {
    //     data: 'myData',
    //     enablePaging: true,
    //     showFooter: true,
    //     totalServerItems: 'totalServerItems',
    //     pagingOptions: $scope.pagingOptions,
    //     filterOptions: $scope.filterOptions
    // };
  


    $scope.mensajeBorrado="Al borrar este animal, se perderá de manera definitiva toda la información referente al mismo, está seguro de querer borrarlo?";
     $http.get('http://52.33.127.122:1337/raza/?idUsuario='+MyService.data.idUsuario).then(function (resp) {
      $scope.razas = resp.data.results;
    });
    $scope.okSalto = function (item) {
      var idAnimal=MyService.data.identificador;
      item.idAnimal=idAnimal;
      item.idUsuario=MyService.data.idUsuario;
      item.hembra=MyService.data.hembra;
      item.numero=MyService.data.numero;
      $http.post('http://52.33.127.122:1337/salto/' ,item);  
      $modalInstance.close();
      // var pas = item._id;
      // $scope.ordenosFiltrados = $scope.ordenos.filter(function (ordeno) {
      //   return (ordeno.idAnimal == pas );
      // });
    };
    $scope.okTratamiento = function (item) {
      var idAnimal=MyService.data.identificador;
      item.idAnimal=idAnimal;
      item.idUsuario=MyService.data.idUsuario;
      $http.post('http://52.33.127.122:1337/tratamiento/' ,item);  
      $modalInstance.close();
      // var pas = item._id;
      // $scope.ordenosFiltrados = $scope.ordenos.filter(function (ordeno) {
      //   return (ordeno.idAnimal == pas );
      // });
    };

  $scope.sexado =function (item){
    if (item.sexo=='Hembra'){item.avatar='img/cow.png';
      item.control=true;
    } 
    if (item.sexo=='Macho'){item.avatar='img/bull.png';
      item.control=false;
    }

  }

  //     $scope.sexado =function (item){
  //   if (item.sexo=='Hembra'){item.avatar='img/cow.png';

  //   } 
  //   if (item.sexo=='Macho'){item.avatar='img/bull.png';
      
  //   }

  // }
   $scope.okPeso = function (item) {

 // var item = {
 //      avatar:'img/cow.png',
 //      sexo:"Hembra",
 //      prenez:false,
 //      mensajeNuevo:"Presione \"Editar\" para ingresar datos",
 //      fechaNacimiento:"Por ingresar",
 //      idUsuario: MyService.data.idUsuario
 //    };



       var idAnimal=MyService.data.identificador;
      item.idAnimal=idAnimal;
      item.idUsuario=MyService.data.idUsuario;
      $http.post('http://52.33.127.122:1337/peso/' ,item);  
     
      $modalInstance.close();
      // var pas = item._id;
      // $scope.ordenosFiltrados = $scope.ordenos.filter(function (ordeno) {
      //   return (ordeno.idAnimal == pas );
      // });
    };
 $scope.okParto = function (item) {

 // var item = {
 //      avatar:'img/cow.png',
 //      sexo:"Hembra",
 //      prenez:false,
 //      mensajeNuevo:"Presione \"Editar\" para ingresar datos",
 //      fechaNacimiento:"Por ingresar",
 //      idUsuario: MyService.data.idUsuario
 //    };



       var idAnimal=MyService.data.identificador;
      item.idAnimal=idAnimal;
      item.idUsuario=MyService.data.idUsuario;
      $http.post('http://52.33.127.122:1337/parto/' ,item);  
     $scope.nuevoAnimal={};
     $scope.nuevoAnimal.idArete=item.idArete;
      $scope.nuevoAnimal.nombre=item.nombre;
       $scope.nuevoAnimal.fechaNacimiento= new Date();
       $scope.nuevoAnimal.raza=item.raza;
        $scope.nuevoAnimal.grupo='Becerros (as)';
        $scope.nuevoAnimal.idUsuario=MyService.data.idUsuario;
        $scope.nuevoAnimal.sexo=item.sexo;
        $scope.nuevoAnimal.avatar=item.avatar;
       $http.post('http://52.33.127.122:1337/animal/' ,$scope.nuevoAnimal);
      $modalInstance.close();
      // var pas = item._id;
      // $scope.ordenosFiltrados = $scope.ordenos.filter(function (ordeno) {
      //   return (ordeno.idAnimal == pas );
      // });
    };


    $scope.okOrdeno = function (item) {
      var idAnimal=MyService.data.identificador;
      item.idAnimal=idAnimal;
      item.idUsuario=MyService.data.idUsuario;
      $http.post('http://52.33.127.122:1337/ordeno/' ,item);  
      $modalInstance.close();
      // var pas = item._id;
      // $scope.ordenosFiltrados = $scope.ordenos.filter(function (ordeno) {
      //   return (ordeno.idAnimal == pas );
      // });
    };
    $scope.machos=[];
    $scope.hembras=[];
 $scope.cargaHembras = function(){
      $http.get('http://52.33.127.122:1337/animal/?idUsuario='+MyService.data.idUsuario).then(function (resp) {
        $scope.animales = resp.data.results;
        for (var i=0;i<$scope.animales.length;++i){
          if($scope.animales[i].sexo=='Hembra'){
            $scope.hembras.push($scope.animales[i]);
          }
        }
      });
    };
    $scope.cargaHembras();
     $scope.hembrasJovenes=[];
 $scope.cargaHembrasJovenes = function(){
      $http.get('http://52.33.127.122:1337/animal/?idUsuario='+MyService.data.idUsuario).then(function (resp) {
        $scope.animales = resp.data.results;
        for (var i=0;i<$scope.animales.length;++i){
          if($scope.animales[i].sexo=='Hembra' && $scope.animales[i].grupo!='Vacas'){
            $scope.hembrasJovenes.push($scope.animales[i]);
          }
        }
      });
    };
    $scope.cargaHembrasJovenes();
    $scope.hembrasAdultas=[];
 $scope.cargaHembrasAdultas = function(){
      $http.get('http://52.33.127.122:1337/animal/?idUsuario='+MyService.data.idUsuario).then(function (resp) {
        $scope.animales = resp.data.results;
        for (var i=0;i<$scope.animales.length;++i){
          if($scope.animales[i].sexo=='Hembra' && $scope.animales[i].grupo=='Vacas'){
            $scope.hembrasAdultas.push($scope.animales[i]);
          }
        }
      });
    };
    $scope.cargaHembrasAdultas();

$scope.secas=[];
 $scope.cargaSecas = function(){
      $http.get('http://52.33.127.122:1337/animal/?idUsuario='+MyService.data.idUsuario).then(function (resp) {
        $scope.animales = resp.data.results;
        for (var i=0;i<$scope.animales.length;++i){
          if($scope.animales[i].sexo=='Hembra' &&  $scope.animales[i].estado==false && $scope.animales[i].grupo=='Vacas'){
            $scope.secas.push($scope.animales[i]);
          }
        }
      });
    };
    $scope.cargaSecas();



    $scope.enOrdeno=[];
 $scope.cargaEnOrdeno = function(){
      $http.get('http://52.33.127.122:1337/animal/?idUsuario='+MyService.data.idUsuario).then(function (resp) {
        $scope.animales = resp.data.results;
        for (var i=0;i<$scope.animales.length;++i){
          if($scope.animales[i].sexo=='Hembra' &&  $scope.animales[i].estado==true && $scope.animales[i].grupo=='Vacas'){
            $scope.enOrdeno.push($scope.animales[i]);
          }
        }
      });
    };
    $scope.cargaEnOrdeno();





    $scope.cargaMachos = function(){
      $http.get('http://52.33.127.122:1337/animal/?idUsuario='+MyService.data.idUsuario).then(function (resp) {
        $scope.animales = resp.data.results;
        for (var i=0;i<$scope.animales.length;++i){
          if($scope.animales[i].sexo=='Macho'){
            $scope.machos.push($scope.animales[i]);
          }
        }
      });
    };
  $scope.cargaMachos();
    $scope.cargaTiposBanos = function(){
      $http.get('http://52.33.127.122:1337/tipoBano/?idUsuario='+MyService.data.idUsuario).then(function (resp) {
        $scope.tiposBanos = resp.data.results;
      });
    };
    $scope.cargaTiposMedicamentos = function(){
      $http.get('http://52.33.127.122:1337/tipoMedicamento/?idUsuario='+MyService.data.idUsuario).then(function (resp) {
        $scope.tiposMedicamentos = resp.data.results;
      });
    };
    $scope.cargaBanos = function(){
      $http.get('http://52.33.127.122:1337/bano/?idUsuario='+MyService.data.idUsuario).then(function (resp) {
        $scope.Banos = resp.data.results;
      });
    };
     $scope.cargaTiposAlimentos = function(){
      $http.get('http://52.33.127.122:1337/tipoAlimento/?idUsuario='+MyService.data.idUsuario).then(function (resp) {
        $scope.tiposAlimentos = resp.data.results;
      });
    };
    $scope.cargaAlimentos = function(){
      $http.get('http://52.33.127.122:1337/alimento/?idUsuario='+MyService.data.idUsuario).then(function (resp) {
        $scope.alimentos = resp.data.results;
      });
    };
    $scope.cargaMedicamentos = function(){
      $http.get('http://52.33.127.122:1337/medicamento/?idUsuario='+MyService.data.idUsuario).then(function (resp) {
        $scope.medicamentos = resp.data.results;
      });
    };
    $scope.cargaMedicamentos();
    $scope.cargaAlimentos();
    $scope.cargaBanos();
    $scope.cargaTiposBanos();
      $scope.cargaTiposMedicamentos();
      $scope.cargaTiposAlimentos();

// ##########################################################################
// ##########################################################################
// ##########################################################################

// Esta funcion es la que se ejecuta al aceptar (ok) en el modal nuevo baño
// invocado desde el dashboard 

// ##########################################################################
// ##########################################################################
// ##########################################################################
$scope.okMedicamento = function (item) {

    // $scope.items = items;
    // $scope.selected = {
    //   item: $scope.items[0]
    // };
      // var idAnimal=MyService.data.identificador;
      // item.idAnimal=idAnimal;
       item.idUsuario=MyService.data.idUsuario;
      $http.post('http://52.33.127.122:1337/medicamento/' ,item);       
      $modalInstance.close();
    //   var pas = item._id;
    //   $scope.banosFiltrados = $scope.banos.filter(function (bano) {  
    //   return (bano.idAnimal == pas );
    // });


    };
    $scope.okAlimento = function (item) {

    // $scope.items = items;
    // $scope.selected = {
    //   item: $scope.items[0]
    // };
      // var idAnimal=MyService.data.identificador;
      // item.idAnimal=idAnimal;
       item.idUsuario=MyService.data.idUsuario;
      $http.post('http://52.33.127.122:1337/alimento/' ,item);       
      $modalInstance.close();
    //   var pas = item._id;
    //   $scope.banosFiltrados = $scope.banos.filter(function (bano) {  
    //   return (bano.idAnimal == pas );
    // });


    };
     $scope.okRaza = function (item) {


       item.idUsuario=MyService.data.idUsuario;
      $http.post('http://52.33.127.122:1337/raza/' ,item);       
      $modalInstance.close();
   

    };

     $scope.okTipoMedicamento = function (item) {
       item.idUsuario=MyService.data.idUsuario;
      $http.post('http://52.33.127.122:1337/tipomedicamento/' ,item);       
      $modalInstance.close();
      };


       $scope.okTipoAlimento = function (item) {
       item.idUsuario=MyService.data.idUsuario;
      $http.post('http://52.33.127.122:1337/tipoalimento/' ,item);       
      $modalInstance.close();
      };

       $scope.okTipoBano = function (item) {
       item.idUsuario=MyService.data.idUsuario;
      $http.post('http://52.33.127.122:1337/tipobano/' ,item);       
      $modalInstance.close();
      };
    $scope.okBano = function (item) {

       item.idUsuario=MyService.data.idUsuario;
      $http.post('http://52.33.127.122:1337/bano/' ,item);       
      $modalInstance.close();
  


    };
    $scope.okSumAlimento = function (item) {

    // $scope.items = items;
    // $scope.selected = {
    //   item: $scope.items[0]
    // };
      var idAnimal=MyService.data.identificador;
       item.idAnimal=idAnimal;
       item.idUsuario=MyService.data.idUsuario;
      $http.post('http://52.33.127.122:1337/sumAlimento/' ,item);       
      $modalInstance.close();
    //   var pas = item._id;
    //   $scope.banosFiltrados = $scope.banos.filter(function (bano) {  
    //   return (bano.idAnimal == pas );
    // });
    };
    $scope.okSumMedicamento = function (item) {

    // $scope.items = items;
    // $scope.selected = {
    //   item: $scope.items[0]
    // };
      var idAnimal=MyService.data.identificador;
       item.idAnimal=idAnimal;
       item.idUsuario=MyService.data.idUsuario;
      $http.post('http://52.33.127.122:1337/sumMedicamento/' ,item);       
      $modalInstance.close();
    //   var pas = item._id;
    //   $scope.banosFiltrados = $scope.banos.filter(function (bano) {  
    //   return (bano.idAnimal == pas );
    // });
    };
 $scope.okSumBano = function (item) {

    // $scope.items = items;
    // $scope.selected = {
    //   item: $scope.items[0]
    // };
      var idAnimal=MyService.data.identificador;
       item.idAnimal=idAnimal;
       item.idUsuario=MyService.data.idUsuario;
      $http.post('http://52.33.127.122:1337/sumBano/' ,item);       
      $modalInstance.close();
    //   var pas = item._id;
    //   $scope.banosFiltrados = $scope.banos.filter(function (bano) {  
    //   return (bano.idAnimal == pas );
    // });


    };
// ##########################################################################
// ##########################################################################
// ##########################################################################

// FIN

// ##########################################################################
// ##########################################################################
// ##########################################################################
    $scope.okConfirm = function (item) { 
      var idAnimal=MyService.data.identificador;
      $http.delete('http://52.33.127.122:1337/animal/'+idAnimal , item)
      // $scope.items.splice($scope.items.indexOf(item), 1);
      $scope.items = null;
      $scope.item = null;
      $scope.articulos = null;  
      $modalInstance.close();
    };

    $scope.okConfirm2 = function (item) { 
     var idGrupo=MyService.data.identificador;
    $http.delete('http://52.33.127.122:1337/grupo/'+idGrupo, item)
    // $scope.groups.splice($scope.groups.indexOf(item), 1);
 $scope.item = null;
 $scope.items = null;
      $modalInstance.close();
    };


    $scope.ok = function (item) {
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  }])
  ; 
  app.controller('ModalDemoCtrl', ['$scope', '$modal', '$log', function($scope, $modal, $log) {
    $scope.items = ['item1', 'item2', 'item3'];

// $scope.openBano = function () {
    
//       var modalInstance = $modal.open({
//         templateUrl: 'modalBano.html',
//         controller: 'ModalInstanceCtrl',
//         size: 'sm',
//         resolve: {
//           items: function () {
//             return $scope.items;
//           }
//         }
//       });
//     modalInstance.result.then(function (selectedItem) {
//       $scope.selected = selectedItem;
//     }, function () {
//       $log.info('Modal dismissed at: ' + new Date());
//     });
//   };

    $scope.open = function (item) {
      var identificador =item.id;
      var modalInstance = $modal.open({
        templateUrl: 'myModalContent.html',
        controller: 'ModalInstanceCtrl',
        size: 'lg',
        resolve: {
          items: function () {
            return $scope.items;
          }
        }
      });

      modalInstance.result.then(function (selectedItem) {
        $scope.selected = selectedItem;
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };
  }])
  ; 
  app.controller('PaginationDemoCtrl', ['$scope', '$log', function($scope, $log) {
    $scope.totalItems = 64;
    $scope.currentPage = 4;

    $scope.setPage = function (pageNo) {
      $scope.currentPage = pageNo;
    };

    $scope.pageChanged = function() {
      $log.info('Page changed to: ' + $scope.currentPage);
    };

    $scope.maxSize = 5;
    $scope.bigTotalItems = 175;
    $scope.bigCurrentPage = 1;
  }])
  ; 
  app.controller('PopoverDemoCtrl', ['$scope', function($scope) {
    $scope.dynamicPopover = 'Hello, World!';
    $scope.dynamicPopoverTitle = 'Title';
  }])
  ; 
  app.controller('ProgressDemoCtrl', ['$scope', function($scope) {
    $scope.max = 200;

    $scope.random = function() {
      var value = Math.floor((Math.random() * 100) + 1);
      var type;

      if (value < 25) {
        type = 'success';
      } else if (value < 50) {
        type = 'info';
      } else if (value < 75) {
        type = 'warning';
      } else {
        type = 'danger';
      }

      $scope.showWarning = (type === 'danger' || type === 'warning');

      $scope.dynamic = value;
      $scope.type = type;
    };
    $scope.random();

    $scope.randomStacked = function() {
      $scope.stacked = [];
      var types = ['success', 'info', 'warning', 'danger'];

      for (var i = 0, n = Math.floor((Math.random() * 4) + 1); i < n; i++) {
          var index = Math.floor((Math.random() * 4));
          $scope.stacked.push({
            value: Math.floor((Math.random() * 30) + 1),
            type: types[index]
          });
      }
    };
    $scope.randomStacked();
  }])
  ; 
  app.controller('TabsDemoCtrl', ['$scope', function($scope) {
    $scope.tabs = [
      { title:'Dynamic Title 1', content:'Dynamic content 1' },
      { title:'Dynamic Title 2', content:'Dynamic content 2', disabled: true }
    ];
  }])
  ; 
  app.controller('RatingDemoCtrl', ['$scope', function($scope) {
    $scope.rate = 7;
    $scope.max = 10;
    $scope.isReadonly = false;

    $scope.hoveringOver = function(value) {
      $scope.overStar = value;
      $scope.percent = 100 * (value / $scope.max);
    };
  }])
  ; 
  app.controller('TooltipDemoCtrl', ['$scope', function($scope) {
    $scope.dynamicTooltip = 'Hello, World!';
    $scope.dynamicTooltipText = 'dynamic';
    $scope.htmlTooltip = 'I\'ve been made <b>bold</b>!';
  }])
  ; 
  app.controller('TypeaheadDemoCtrl', ['$scope', '$http','MyService','$state', '$filter', 'filterFilter',function($scope, $http, MyService, $state,$filter,filterFilter) {
    $scope.selected = undefined;
    $http.get('http://52.33.127.122:1337/animal/?idUsuario='+MyService.data.idUsuario).then(function (resp) {
      $scope.items2 = resp.data.results;
    });


    $scope.items = null;
 
    $scope.item=null;
    $scope.selectItem3 = function(item){ 

// $state.go('app.dashboard-v1');
    MyService.data.luz = 'on';
    
    // $http.get('http://52.33.127.122:1337/animal/?idUsuario='+MyService.data.idUsuario).then(function (resp) {
    //   $scope.items2 = resp.data.results;
    // });
  
    // $scope.group = item.grupo;
    // // $scope.group.selected = true;
    // $scope.filter = item.grupo;

    //   // alert ("dato: " +item.sexo);
    //   var identificador =item.id;
    //   var numero =item.idArete;
    //   var nombre =item.nombre;
    //   // var peso =item.peso;
    //   // var estado = item.estado;
    //   MyService.data.hembra = nombre;
    //   MyService.data.numero = numero;
    //   // MyService.data.estado = estado;
    //    // MyService.data.numero = peso;
    //   MyService.data.identificador = identificador;
      MyService.data.animal = item;
   
 $scope.state = $state;
 // alert(+MyService.data.animal.estado);
 // alert("estamos en "+$scope.state);
        $state.go('apps.animal');
            // $scope.item.selected = true;
   // $scope.sap=MyService.data.sap;
 
      };

   $scope.getLocation = function(val) {
      return $http.get('http://maps.googleapis.com/maps/api/geocode/json', {
        params: {
          address: val,
          sensor: false
        }
      }).then(function(res){
        var addresses = [];
        angular.forEach(res.data.results, function(item){
          addresses.push(item.formatted_address);
        });
        return addresses;
      });
    };
  }])
  ; 
  app.controller('DatepickerDemoCtrl', ['$scope', function($scope) {
    $scope.today = function() {
      $scope.dt = new Date();
    };
    $scope.today();

    $scope.clear = function () {
      $scope.dt = null;
    };

    // Disable weekend selection
    $scope.disabled = function(date, mode) {
      return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
    };

    $scope.toggleMin = function() {
      $scope.minDate = $scope.minDate ? null : new Date();
    };
    $scope.toggleMin();

    $scope.open = function($event) {
      $event.preventDefault();
      $event.stopPropagation();

      $scope.opened = true;
    };

    $scope.dateOptions = {
      formatYear: 'yy',
      startingDay: 1,
      class: 'datepicker'
    };

    $scope.initDate = new Date('2016-15-20');
    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];
  }])
  ; 
  app.controller('TimepickerDemoCtrl', ['$scope', function($scope) {
    $scope.mytime = new Date();

    $scope.hstep = 1;
    $scope.mstep = 15;

    $scope.options = {
      hstep: [1, 2, 3],
      mstep: [1, 5, 10, 15, 25, 30]
    };

    $scope.ismeridian = true;
    $scope.toggleMode = function() {
      $scope.ismeridian = ! $scope.ismeridian;
    };

    $scope.update = function() {
      var d = new Date();
      d.setHours( 14 );
      d.setMinutes( 0 );
      $scope.mytime = d;
    };

    $scope.changed = function () {
      //console.log('Time changed to: ' + $scope.mytime);
    };

    $scope.clear = function() {
      $scope.mytime = null;
    };
  }]);