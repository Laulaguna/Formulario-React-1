import React from 'react';
import HeaderTitulo from './HeaderTitulo';
import TableBody from './TableBody';

export default function TableBody2() {
    const data1 = [

        { poblacion: '' },
        { descripcion: '' },
        { info: '' },
        { condiciones: '' },
        { submit: '' },
    ];


    return (
        <tbody>

            <div>
                {/* <h2><HeaderTitulo /></h2> */}
                <div><TableBody /></div>
                <div>
                    <label for="poblacion">Población:</label>
                    <select
                        name="poblacion"
                        id="poblacion"
                    >
                        <option value="Alicante">Alicante</option>
                        <option value="Madrid">Madrid</option>
                        <option value="Sevilla">Sevilla</option>
                        <option value="Valencia">Valencia</option>
                    </select>
                </div>

                <div>
                    <label for="descripcion">Descripción:</label>
                    <textarea
                        type="text"
                        id="descripcion"
                        name="descripcion"
                        rows="6"
                        cols="60"
                    />
                </div>

                <div>
                    <label>
                        <input
                            type="checkbox"
                            name="info"
                            id="info"
                            checked="checked"
                        />
                        Deseo recibir información sobre novedades y ofertas
                    </label>
                </div>

                <div>
                    <label>
                        <input
                            type="checkbox"
                            name="condiciones"
                            id="condiciones"
                            checked="checked"
                        />
                        Declaro haber leido y aceptar las condiciones generales del programa y la normativa sobre protección de datos
                    </label>
                </div>

                <div>
                    <button>Enviar</button>
                </div>


            </div>
        </tbody>
    );
}







