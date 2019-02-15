export default class Reservacion {
    construccion(nombre, tipoHabitacion, fechaLlegada,
    fechaSalida){
        this._nombre = nombre;
        this._tipoHabitacion = tipoHabitacion;
        this._fechaOrigen = fechaOrigin;
        this._fechaLlegada = fechaLlegada;
        this._fechaSalida = fechaSalida;
    }

    imprimir() {
        console.log(`${this._nombre}, ${this._tipoHabitacion}, ${this._fechaLlegada}, ${this._fechaSalida}`);
    }

    get Noches() {
        let dia = 1000*60*60*24;
        let fechaTiem = this._fechaLlegada.getTime();
        this._fechaSalida = this._fechaSalida.getTime();
        let dif = ((this._fechaSalida) - (fechaTiem));
        let noches = (dif)/(dia);
        console.log(`numero de noches ${noches}`);
    }

    get DiasParaLlegada() {
        let dia = 1000*60*60*24;
        let TiemFecha = this._fechaLlegada.getTime();
        let fechaOrig = this._currentDate.getTime();
        let difference = ((fechaTiem) - (fechaOrig));
        let noches = (dif)/(dia);
        console.log(`Nuemero de noches que el cliente estara hospedado ${noches}`);
    }

    
}