import Layout from '../src/components/Layout';
import { Cookies } from 'react-cookie';

//components

import Nav from '../src/components/dashboard/Nav';
import Footer from '../src/components/dashboard/Footer';
import Buscador from '../src/components/dashboard/estudiante/Buscador';
import Table from '../src/components/dashboard/estudiante/Table';

//cookies
const cookies = new Cookies();

const estudiantes = () => {
    let activo = cookies.get('activo')
    if (!activo) {
        return (
            <>
                <h1>Usuario Inactivo, vaya al login.</h1>
                <button type='button' onClick={() => {
                    Router.push('/')
                }}>
                    Login
                </button>
            </>
        );
    }
    return (
        <Layout>
            <div className='main'>
                <Nav />
                <br />
                <div className='container'>
                    <h1>
                        Estudiantes
                    </h1>
                    <br />
                    <h4>Buscador de estudiante por ID</h4>
                    <Buscador />
                    <br />
                    <Table />
                </div>
                <Footer />
            </div>
            <style global jsx>{`
                html,
                body,
                body > div:first-child,
                div#__next,
                div#__next > div,
                div#__next > div > div {
                    height: 100%;
                }

                *{
                    box-sizing: border-box;
                }

                .main{
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(180deg, #C2C0C0, white);
                } 
            `}</style>
        </Layout>
    );
}

export default estudiantes;