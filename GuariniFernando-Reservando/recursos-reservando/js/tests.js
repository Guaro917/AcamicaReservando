let expect = chai.expect;

describe("funcionesEnRestaurant", () => {
    describe("reservarHorario", () => {
        it("Cuando se reserva un horario, se elimina del array", () => {
            let restaurantDeTest =  new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]);
            restaurantDeTest.reservarHorario("15:30");
            expect(restaurantDeTest.horarios).to.eql(["13:00", "18:00"]);
            expect(restaurantDeTest.horarios.length).to.equal(2);
        });
        it("Cuando el restaurant no posee el horario pasado por parametro,el arreglo se mantiene igual", () => {
            let restaurantDeTest =  new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]);
            restaurantDeTest.reservarHorario("19:00");
            expect(restaurantDeTest.horarios[0]).to.equal("13:00");
            expect(restaurantDeTest.horarios[1]).to.equal("15:30");
            expect(restaurantDeTest.horarios[2]).to.equal("18:00");
            expect(restaurantDeTest.horarios.length).to.equal(3);
        });
        it("Cuando no se pasa ningun parametro, el arreglo se mantiene igual", () => {
            let restaurantDeTest =  new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]);
            restaurantDeTest.reservarHorario();
            expect(restaurantDeTest.horarios).to.eql(["13:00", "15:30", "18:00"]);
            expect(restaurantDeTest.horarios.length).to.equal(3);
        });
    });
    describe("obtenerPuntuacion", () =>  {
        it("Calcula correctamente el promedio de las calificaciones", () => {
            let restaurantDeTest =  new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]);
            expect(restaurantDeTest.obtenerPuntuacion()).to.equal(7.4);                
        });
        it("Restaurante sin calificaciones tiene puntuacion 0", () => {
            let restaurantDeTest =  new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", []);
            expect(restaurantDeTest.obtenerPuntuacion()).to.equal(0); 
        });
    });
    describe("calificar", () => {
        it("Si la calificacion no es un numero, el arreglo de calificaciones no se modifica", () => {
            let restaurantDeTest =  new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]);
            restaurantDeTest.calificar(NaN);
            expect(restaurantDeTest.calificaciones).to.eql([6, 7, 9, 10, 5]);           
        });
        it("Si la calificacion es un numero menor a 1, el arreglo de calificaciones no se modifica", () => {
            let restaurantDeTest =  new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]);
            restaurantDeTest.calificar(0);
            expect(restaurantDeTest.calificaciones).to.eql([6, 7, 9, 10, 5]);
        });
        it("Si la calificacion es un numero mayor a 10, el arreglo de calificaciones no se modifica", () => {
            let restaurantDeTest =  new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]);
            restaurantDeTest.calificar(11);
            expect(restaurantDeTest.calificaciones).to.eql([6, 7, 9, 10, 5]);
        });
        it("Se agrega correctamente una calificacion al arreglo", () => {
            let restaurantDeTest =  new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]);
            restaurantDeTest.calificar(9);
            expect(restaurantDeTest.calificaciones).to.eql([6, 7, 9, 10, 5, 9]);
        });
        it("Si el numero agregado no es entero, no se agrega al arreglo", () => {
            let restaurantDeTest =  new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]);
            restaurantDeTest.calificar(2.3);
            expect(restaurantDeTest.calificaciones).to.eql([6, 7, 9, 10, 5]);
        });
    });
});

describe("funcionesEnListado", () => {
    describe("buscarRestaurante(id)", () => {
        it("El id debe ser siempre un numero", () => {
            let listadoDeTest = new Listado(listadoDeRestaurantes);
            expect(listadoDeTest.buscarRestaurante(NaN)).to.equal("No se ha encontrado ningún restaurant");
        });
        it("El id pasado debe encontrarse dentro del listado", () => {
            let listadoDeTest = new Listado(listadoDeRestaurantes);
            expect(listadoDeTest.buscarRestaurante(25)).to.equal("No se ha encontrado ningún restaurant");
        });
        it("Si no se le pasa un parametro no podra encontrar el restaurante", () => {
            let listadoDeTest = new Listado(listadoDeRestaurantes);
            expect(listadoDeTest.buscarRestaurante()).to.equal("No se ha encontrado ningún restaurant");
        });
        it("El id se encuentra correctamente", () => {
            let listadoDeRestaurantes = [
                new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]),
                new Restaurant(2, "Mandarín Kitchen", "Asiática", "Londres", ["15:00", "14:30", "12:30"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7]),
                new Restaurant(3, "Burgermeister", "Hamburguesa", "Berlín", ["11:30", "12:00", "22:30"], "../img/hamburguesa4.jpg", [5, 8, 4, 9, 9]),
            ];
            let listadoDeTest = new Listado(listadoDeRestaurantes);
            let guardarRestaurant = listadoDeTest.buscarRestaurante(1);
            let guardarComparador = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5])
            expect(guardarRestaurant).to.eql(guardarComparador);   
        });
    });
    describe("obtenerRestaurantes(filtroRubro, filtroCiudad, filtroHorario)", () => {
        it("No deberia filtrar nada si no se le pasa un filtro por parametro", () => {
        let listadoDeRestaurantes = [
            new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]),
            new Restaurant(2, "Mandarín Kitchen", "Asiática", "Londres", ["15:00", "14:30", "12:30"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7]),
            new Restaurant(3, "Burgermeister", "Hamburguesa", "Berlín", ["11:30", "12:00", "22:30"], "../img/hamburguesa4.jpg", [5, 8, 4, 9, 9]),
        ];
        let listadoDeTest = new Listado(listadoDeRestaurantes);
        let restaurantesFiltrados = listadoDeTest.obtenerRestaurantes();
        expect(restaurantesFiltrados.length).to.equal(0);
        });
        it("Deberia devolver los restaurantes que  sirvan comida del rubro elegido", () => {
            let listadoDeRestaurantes = [
                new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]),
                new Restaurant(2, "Mandarín Kitchen", "Asiática", "Londres", ["15:00", "14:30", "12:30"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7]),
                new Restaurant(3, "Burgermeister", "Hamburguesa", "Berlín", ["11:30", "12:00", "22:30"], "../img/hamburguesa4.jpg", [5, 8, 4, 9, 9]),
            ];
            let listadoDeTest = new Listado(listadoDeRestaurantes);
            let restaurantesFiltrados = listadoDeTest.obtenerRestaurantes("Asiática", null, null);
            expect(restaurantesFiltrados.length).to.equal(2);
        });
        it("Deberia devolver los restaurantes que se encuentren en la ciudad elegida", () => {
            let listadoDeRestaurantes = [
                new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]),
                new Restaurant(2, "Mandarín Kitchen", "Asiática", "Londres", ["15:00", "14:30", "12:30"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7]),
                new Restaurant(3, "Burgermeister", "Hamburguesa", "Berlín", ["11:30", "12:00", "22:30"], "../img/hamburguesa4.jpg", [5, 8, 4, 9, 9]),
            ];
            let listadoDeTest = new Listado(listadoDeRestaurantes);
            let restaurantesFiltrados = listadoDeTest.obtenerRestaurantes(null, "Nueva York", null);
            expect(restaurantesFiltrados.length).to.equal(1);
        });
        it("Deberia devolver los restaurantes que cuenten con la franja horaria escogida", () => {
            let listadoDeRestaurantes = [
                new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]),
                new Restaurant(2, "Mandarín Kitchen", "Asiática", "Londres", ["15:00", "14:30", "12:30"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7]),
                new Restaurant(3, "Burgermeister", "Hamburguesa", "Berlín", ["11:30", "12:00", "22:30"], "../img/hamburguesa4.jpg", [5, 8, 4, 9, 9]),
            ];
            let listadoDeTest = new Listado(listadoDeRestaurantes);
            let restaurantesFiltrados = listadoDeTest.obtenerRestaurantes(null, null, "22:30");
            expect(restaurantesFiltrados.length).to.equal(1);
        });
        it("Si se le pasan varios parametros, debe cumplirlos a todos o no filtrar nada segun corresponda", () => {
            let listadoDeRestaurantes = [
                new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]),
                new Restaurant(2, "Mandarín Kitchen", "Asiática", "Londres", ["15:00", "14:30", "12:30"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7]),
                new Restaurant(3, "Burgermeister", "Hamburguesa", "Berlín", ["11:30", "12:00", "22:30"], "../img/hamburguesa4.jpg", [5, 8, 4, 9, 9]),
            ];
            let listadoDeTest = new Listado(listadoDeRestaurantes);
            let restaurantesFiltrados = listadoDeTest.obtenerRestaurantes("Hamburguesa", "Buenos Aires", "22:30");
            expect(restaurantesFiltrados.length).to.equal(0);
        });
        it("Si se le pasan varios parametros y hay un Restaurant que cumple, lo filtra", () => {
            let listadoDeRestaurantes = [
                new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]),
                new Restaurant(2, "Mandarín Kitchen", "Asiática", "Londres", ["15:00", "14:30", "12:30"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7]),
                new Restaurant(3, "Burgermeister", "Hamburguesa", "Berlín", ["11:30", "12:00", "22:30"], "../img/hamburguesa4.jpg", [5, 8, 4, 9, 9]),
            ];
            let listadoDeTest = new Listado(listadoDeRestaurantes);
            let restaurantesFiltrados = listadoDeTest.obtenerRestaurantes("Hamburguesa", "Berlín", "22:30");
            expect(restaurantesFiltrados.length).to.equal(1);
        });
    });
});

describe("funcionesEnReserva", () => {
    describe("precioBase", () => {
        it("Calcula correctamente el precio base de la reserva", () => {
            let reserva1 = new Reserva (new Date(2018, 7, 24, 11, 00), 8, 350, "DES1");
            let reserva2 = new Reserva (new Date(2018, 7, 27, 14, 100), 2, 150, "DES200");            
            expect(reserva1.precioBase()).to.equal(2800);
            expect(reserva2.precioBase()).to.equal(300);
        });
    });
    describe("precioFinal", () => {
        it("Calcula correctamente el precio final de la reserva", () => {
            let reserva1 = new Reserva (new Date(2018, 7, 24, 11, 00), 8, 350, "DES1");
            let reserva2 = new Reserva (new Date(2018, 7, 27, 14, 100), 2, 150, "DES200");
            expect(reserva1.precioFinal()).to.equal(2310);
            expect(reserva2.precioFinal()).to.equal(100);
        });
    });
});
