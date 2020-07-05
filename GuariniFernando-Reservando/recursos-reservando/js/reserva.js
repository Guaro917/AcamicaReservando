var Reserva = function(horario, cantidadPersonas, precioPersona, codigoDescuento) {
    this.horario = horario;
    this.cantidadPersonas = cantidadPersonas;
    this.precioPersona = precioPersona;
    this.codigoDescuento = codigoDescuento;
}

Reserva.prototype.precioBase = function() {
    return this.cantidadPersonas * this.precioPersona;
}


Reserva.prototype.adicionales = function(precioBase) {
    return this.adicionalFinDeSemana(precioBase) + this.adicionalHorario(precioBase);
}

Reserva.prototype.adicionalFinDeSemana = function(precioBase) {
    const diaSemana = this.horario.getUTCDay();

    if (diaSemana === 0 || diaSemana === 5 || diaSemana === 6){
        return precioBase * 10 / 100;
    };

    return 0;
}

Reserva.prototype.adicionalHorario = function(precioBase) {
    let horas = this.horario.getHours();

    if ((horas >= 13 && horas <= 14) || (horas >= 20 && horas <= 21)){
        return precioBase * 5 / 100;
    };

    return 0;
}

Reserva.prototype.descuentos = function(precioBase) {
    return this.descuentosGrupo(precioBase) + this.descuentosCodigo(precioBase);
}

Reserva.prototype.descuentosGrupo = function(precioBase) {
    let descuento = 0;

    if (this.cantidadPersonas >= 4 && this.cantidadPersonas < 6){
        descuento = 5;
    } else if (this.cantidadPersonas >= 6 && this.cantidadPersonas < 8) {
        descuento = 10;
    } else if (this.cantidadPersonas >= 8){
        descuento = 15;
    }

    return precioBase * descuento / 100;
}

Reserva.prototype.descuentosCodigo = function(precioBase) {
    let descuento = 0;

    if (this.codigoDescuento === 'DES15'){
        descuento = precioBase * 15 /100 ;
    } else if (this.codigoDescuento === 'DES200') {
        descuento = 200;
    } else if (this.codigoDescuento === 'DES1'){
        descuento = this.precioPersona;
    }

    return descuento;
}

Reserva.prototype.precioFinal = function() {
    precioBase = this.precioBase();
    return this.precioBase() + this.adicionales(precioBase) - this.descuentos(precioBase); 
}

