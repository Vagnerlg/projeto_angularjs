angular.module('park').service("carroService",function($http){

        var _carros  = [];

        this.marcas = ["Fiat","Chevrolet","Honda","Citroen","Ford","volkswagen","Outros"];

        this.add = function(carro){
            if(/^\D{3}-\d{4}$/.test(carro.placa)){
                carro.data = new Date().getTime();
                $http.post('server/post.php',carro)
                    .success(function(resp){
                        _carros = resp;
                        console.log("Item adcionado com sucesso");
                    })
                    .error(function(erro){
                        console.log(erro);
                    });
            }
        }

        this.get = function(callback){
            $http.get("server/get.php")
            .success(function(resp){
                        _carros = resp;
                        callback(_carros);
                    })
                    .error(function(erro){
                        console.log(erro);
                    });
        }

        this.getCarro = function(idcarro,callback){
            this.get(function(carros){
                var carro = carros.find(function(car){
                if(car.data == idcarro) return true;
            });
            callback(carro);
            });
        }

        this.delete = function(carro,callback){
            $http.post("server/delete.php",carro)
                .success(function(resp){
                    callback(resp);
                });
        }
});