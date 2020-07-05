function sumatoria(numeros) {
   let sumatoria = 0;
   
    numeros.forEach(elemento => {
        sumatoria += elemento;
    });
    return sumatoria;
}

function promedio(numeros) {
    let promedio = sumatoria(numeros) / numeros.length;
    return Math.round(promedio * 10) / 10;
}



var Restaurant = function(id, nombre, rubro, ubicacion, horarios, imagen, calificaciones) {
    this.id = id;
    this.nombre = nombre;
    this.rubro = rubro;
    this.ubicacion = ubicacion;
    this.horarios = horarios;
    this.imagen = imagen;
    this.calificaciones = calificaciones;
}

//esto es lo mismo que escribir 
// this.horarios = this.horarios.filter(horario) {
// return horario !== horarioReservado;
//}
Restaurant.prototype.reservarHorario = function(horarioReservado) {
    this.horarios = this.horarios.filter(horario => horario !== horarioReservado);
}

//note que en esta funcion nuevaCalificacion esta marcado como que debe ser menos estricto que 10, asumo que
//es un error de tipeo y lo corregi a <=10
Restaurant.prototype.calificar = function(nuevaCalificacion) {
    if (Number.isInteger(nuevaCalificacion) && nuevaCalificacion > 0 && nuevaCalificacion <= 10) {
        this.calificaciones.push(nuevaCalificacion);
    }
}

Restaurant.prototype.obtenerPuntuacion = function() {
    if (this.calificaciones.length === 0) {
        return 0;
    } else {
        return promedio(this.calificaciones);
    }
}

