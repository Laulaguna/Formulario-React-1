import React from 'react';
import HeaderTitulo from './HeaderTitulo';

export default function TableBody() {
    const data = [

        { nombre: '' },
        { apellidos: '' },
        { sexo: '' },
        { email: '' },
    ];


    return (


        <div>
            <h2><HeaderTitulo /></h2>

            <div>
                <label for="nombre">Nombre:</label>
                <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    maxlength="50"
                />
            </div>

            <div>
                <label for="apellidos">Apellidos:</label>
                <input
                    type="text"
                    id="apellidos"
                    name="apellidos"
                    maxlength="50"
                />
            </div>

            <div> Sexo:
                <input
                    type="radio"
                    id="sexo-h"
                    value="h"
                    name="sexo"
                />
                <label for="sexo-h">hombre</label>
                <input
                    type="radio"
                    id="sexo-m"
                    value="m"
                    name="sexo"
                />
                <label for="sexo-m">mujer</label>
            </div>

            <div>
                <label for="email">Correo Electrónico:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    maxlength="100"
                />
            </div>
        </div>

    );
}

