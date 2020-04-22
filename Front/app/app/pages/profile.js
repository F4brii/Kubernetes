import Layout from '../src/components/Layout';
import { Cookies } from 'react-cookie';

//components

import Nav from '../src/components/dashboard/Nav';
import Footer from '../src/components/dashboard/Footer';

//cookies
const cookies = new Cookies();

const settings = () => {
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
                    <h1>Perfil</h1>
                    <h4>Usuario: {cookies.get('username')}</h4>
                    <h4>Token: {cookies.get('token')}</h4>
                </div>
                <br />
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

export default settings;