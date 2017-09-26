function registro(nombre, apellido, edad, sexo){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.sexo = sexo;
}

registro.prototype.correoElectronico = "@gmail.com";
registro.prototype.obtenerCorreo = function(){
    return this.nombre + this.apellido + this.correoElectronico;
};

Usuario = new registro("Claudina", "Cortez", 20, "femenino");
console.log(Usuario);

