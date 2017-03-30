// Funcion Construtora
function Cliente(nombre,apellido,telefono) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.telefono = telefono;
    this.info = function () {
        console.log ("Informacion: "+this.nombre+" "+this.apellido+"\nTelefono: "+this.telefono);
    }
}

var cliente = new Cliente("Edgar","Torres","3158891137");

cliente.info();