import React, { useState } from 'react';
import "./Carrucel-Inicio.css";


function CarrucelInicio() {
    const [carruleta, setCarruleta] = useState(0);


    return (
        <div className="carrusel-container">
        <h2 className="titulo-eventos">Tipos de eventos</h2> {/* Título agregado */}
            <div className="slider">
                <div className="slide-track">


                        {/* 9 SLIDES */}
                        <div className="slide">
                            <img src="https://i.pinimg.com/564x/2c/0e/99/2c0e99cf87dba04b46a70a61221df3e5.jpg" />
                        </div>
                        <div className="slide">
                            <img src="https://i.pinimg.com/564x/9f/77/51/9f77514cc58504f61ee872b101755e49.jpg" />
                        </div>
                        <div className="slide">
                            <img src="https://i.pinimg.com/564x/84/48/33/8448332fe00becf3eb2d7c092e2670f6.jpg" />
                        </div>
                        <div className="slide">
                            <img src="https://i.pinimg.com/564x/9e/8b/17/9e8b1715d32efba5625686a26dce2c4a.jpg" />
                        </div>
                        <div className="slide">
                            <img src="https://i.pinimg.com/564x/ce/07/d7/ce07d7beb4f31f238cbd69e8a914ccbc.jpg" />
                        </div>
                        <div className="slide">
                            <img src="https://i.pinimg.com/564x/2c/0e/99/2c0e99cf87dba04b46a70a61221df3e5.jpg" />
                        </div>
                        <div className="slide">
                            <img src="https://i.pinimg.com/564x/9f/77/51/9f77514cc58504f61ee872b101755e49.jpg" />
                        </div>
                        <div className="slide">
                            <img src="https://i.pinimg.com/564x/84/48/33/8448332fe00becf3eb2d7c092e2670f6.jpg" />
                        </div>
                        <div className="slide">
                            <img src="https://i.pinimg.com/564x/9e/8b/17/9e8b1715d32efba5625686a26dce2c4a.jpg.jpg" />
                        </div>
                        {/* Again same 9 slades */}
                        <div className="slide">
                            <img src="https://i.pinimg.com/564x/ce/07/d7/ce07d7beb4f31f238cbd69e8a914ccbc.jpg" />
                        </div>
                        <div className="slide">
                            <img src="https://i.pinimg.com/564x/2c/0e/99/2c0e99cf87dba04b46a70a61221df3e5.jpg" />
                        </div>
                        <div className="slide">
                            <img src="https://i.pinimg.com/564x/9f/77/51/9f77514cc58504f61ee872b101755e49.jpg" />
                        </div>
                        <div className="slide">
                            <img src="https://i.pinimg.com/564x/84/48/33/8448332fe00becf3eb2d7c092e2670f6.jpg" />
                        </div>
                        <div className="slide">
                            <img src="https://i.pinimg.com/564x/9e/8b/17/9e8b1715d32efba5625686a26dce2c4a.jpg" />
                        </div>
                        <div className="slide">
                            <img src="https://i.pinimg.com/564x/ce/07/d7/ce07d7beb4f31f238cbd69e8a914ccbc.jpg" />
                        </div>
                        <div className="slide">
                            <img src="https://i.pinimg.com/564x/2c/0e/99/2c0e99cf87dba04b46a70a61221df3e5.jpg" />
                        </div>
                        <div className="slide">
                            <img src="https://i.pinimg.com/564x/9f/77/51/9f77514cc58504f61ee872b101755e49.jpg" />
                        </div>
                        <div className="slide">
                            <img src="https://i.pinimg.com/564x/84/48/33/8448332fe00becf3eb2d7c092e2670f6.jpg" />
                        </div>
                    </div>
                </div>
            </div>


    );
}

export default CarrucelInicio;
