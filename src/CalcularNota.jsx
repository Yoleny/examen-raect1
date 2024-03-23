import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const CalcularNota = () => {
    const [nota1, setNota1] = useState("");
    const [nota2, setNota2] = useState("");
    const [nota3, setNota3] = useState("");
    const [mensaje, setMensaje] = useState("");

    const calcularNotaFinal = () => {
        const total = (parseFloat(nota1) ) + (parseFloat(nota2) ) + (parseFloat(nota3) );
        if (total >= 0 && total < 60) {
            setMensaje(`Su nota final es ${total}, reprobado.`);
        } else if (total >= 60 && total < 80) {
            setMensaje(`Su nota final es ${total}, bueno.`);
        } else if (total >= 80 && total < 90) {
            setMensaje(`Su nota final es ${total}, muy bueno.`);
        } else if (total >= 90 && total <= 100) {
            setMensaje(`Su nota final es ${total}, sobresaliente.`);
        } else {
            setMensaje("Por favor ingrese notas válidas.");
        }
    }

    const limpiarFormulario = () => {
        setNota1("");
        setNota2("");
        setNota3("");
        setMensaje("");
    }

    return (
        <div className="container">
            <h1>Calculadora de Nota Final</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="nota1">Primer Parcial (30%)</label>
                    <input type="number" className="form-control" id="nota1" value={nota1} onChange={(e) => setNota1(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="nota2">Segundo Parcial (30%)</label>
                    <input type="number" className="form-control" id="nota2" value={nota2} onChange={(e) => setNota2(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="nota3">Tercer Parcial (40%)</label>
                    <input type="number" className="form-control" id="nota3" value={nota3} onChange={(e) => setNota3(e.target.value)} />
                </div>
                <button type="button" className="btn btn-primary mr-2" onClick={calcularNotaFinal}>Calcular Nota Final</button>
                <button type="button" className="btn btn-danger" onClick={limpiarFormulario}>Limpiar</button>
            </form>
            {mensaje && <div className="alert alert-info mt-3" role="alert">{mensaje}</div>}
        </div>
    );
}


export default CalcularNota;
