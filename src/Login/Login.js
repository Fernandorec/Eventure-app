import usuarioImg from './usuario.png';
import fondoImg from './FONDO.png';
import usuarioImg2 from './usuario2.png';
import candadoImg from './candadoImg.png';
import emailImg from './emailImg.png';
import { useState } from 'react';


export function Login() {
    return (
      <div
        style={{
          backgroundImage: `url(${fondoImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          width: '100vw',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div style={{
          display: 'flex',
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          borderRadius: '20px',
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
          overflow: 'hidden'
        }}>
          <section
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '40px',
              width: '50vw',
              maxWidth: '400px',
              borderRadius: '20px 0 0 20px',
            }}
          >
            <img src={usuarioImg} alt="Logo" className="login-image" style={{ marginBottom: '10px', width: '180px', height: '140px' }} />
  
            <h1 style={{ marginBottom: '20px', color: 'white', fontSize: '24px' }}>Regístrate</h1>
  
            <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div className='IDredondear' style={{ marginBottom: '10px', textAlign: 'center' }}>
                <input 
                  type="text" 
                  placeholder="Nombre de Usuario" 
                  style={{ 
                    width: '100%', 
                    padding: '10px 10px 10px 40px', 
                    borderRadius: '10px', 
                    border: '1px solid #ccc', 
                    backgroundImage: `url(${usuarioImg})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: '10px center',
                    backgroundSize: '20px 20px'
                  }} 
                />
              </div>
  
              <div className='IDredondear' style={{ marginBottom: '10px', textAlign: 'center' }}>
                <input 
                  type="text" 
                  placeholder="Correo Electrónico" 
                  style={{ 
                    width: '100%', 
                    padding: '10px 10px 10px 40px', 
                    borderRadius: '10px', 
                    border: '1px solid #ccc', 
                    backgroundImage: `url(${emailImg})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: '10px center',
                    backgroundSize: '20px 20px'
                  }} 
                />
              </div>
  
              <div className='IDredondear' style={{ marginBottom: '10px', textAlign: 'center' }}>
                <input 
                  type="password" 
                  placeholder="Contraseña" 
                  style={{ 
                    width: '100%', 
                    padding: '10px 10px 10px 40px', 
                    borderRadius: '10px', 
                    border: '1px solid #ccc', 
                    backgroundImage: `url(${candadoImg})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: '10px center',
                    backgroundSize: '20px 20px'
                  }} 
                />
              </div>
  
              <div className='IDredondear' style={{ marginBottom: '20px', textAlign: 'center' }}>
                <input type="checkbox" style={{ borderRadius: '3px' }} /> Recordar
              </div>
  
              <button style={{
                padding: '10px 20px',
                backgroundColor: '#808080',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                width: '100%',
              }}>
                Continuar
              </button>
            </form>
          </section>
  
          <section
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '40px',
              width: '50vw',
              maxWidth: '400px',
              backgroundColor: 'white',
              borderRadius: '0 20px 20px 0',
            }}
          >
            <h1 style={{ marginBottom: '20px', fontSize: '32px', color: '#000' }}>EVENTURE</h1>
            <h2 style={{ marginBottom: '20px', fontSize: '24px', color: '#333' }}>Bienvenido</h2>
            <p style={{ fontSize: '16px', textAlign: 'center', color: '#666' }}>
              Regístrate para encontrar más diseños y poder tener un evento más organizado
            </p>
          </section>
        </div>
      </div>
    );
  }
  
  export default Login;