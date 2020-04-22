import Layout from '../src/components/Layout';
import { Cookies } from 'react-cookie';
import Router from 'next/router'

//components
import Nav from '../src/components/dashboard/Nav';
import Jumbo from "../src/components/dashboard/Jumbo";
import Footer from '../src/components/dashboard/Footer';
import Card from '../src/components/dashboard/Card';

const cookies = new Cookies();

const home = () => {
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
                <Jumbo />
                <div className='cards'>
                    <div className='card'>
                        <Card
                            ruta='data:image/jpeg;base64,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'
                            text='Dashboard'
                            link='/home'
                        />
                    </div>
                    <div className='card'>
                        <Card
                            ruta='data:image/jpeg;base64,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'
                            text='Profesores'
                            link='/profesores'
                        />
                    </div>
                    <div className='card'>
                        <Card
                            ruta='https://img2.freepng.es/20180425/kdw/kisspng-student-group-student-society-5ae0b7c760ae38.822007341524676551396.jpg'
                            text='Estudiantes'
                            link='/estudiantes'
                        />
                    </div>
                    <div className='card'>
                        <Card
                            ruta='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_XFXetk5uPqg2wqiASTHSowmk3KeVSIcHg-O1kcCA7vTKMW5l&usqp=CAU'
                            text='Cursos'
                            link='/cursos'
                        />
                    </div>
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
                    
                    .cards{
                        width: 100%;
                        height: 30%;
                        justify-content: center;
                        align-items: center;
                        display: flex;
                        flex-wrap: wrap;
                    }      
                    
                    .cards .card{
                        width: 23%;
                        height: 90%;
                        border: 1px solid;
                        margin: 10px;
                        justify-content: center;
                        align-items: center;
                        display: flex;
                    }
    
                    @media (max-width: 1920px){
                        .cards{
                            height: 30%;
                        }
    
                        .cards .card{
                            width: 23%;
                            height: 83%;
                        }
                    }
    
                    @media (max-width: 1400px){
                        .cards{
                            height: 40%;
                        }
    
                        .cards .card{
                            width: 23%;
                            height: 63%;
                        }
                    }
    
                    @media (max-width: 1280px){
                        .cards{
                            height: 50%;
                            margin-bottom: 200px;
                        }
    
                        .cards .card{
                            width: 30%;
                            height: 43%;
                        }
                    }
    
                    @media (max-width: 1024px){
                        .cards{
                            height: 60%;
                            margin-bottom: 650px;
                        }
    
                        .cards .card{
                            width: 45%;
                            height: 43%;
                        }
                    }
    
                    @media (max-width: 600px){
                        .cards{
                            height: 100%;
                            margin-bottom: 950px;
                        }
    
                        .cards .card{
                            width: 80%;
                            height: 23%;
                        }
                    }
    
                    @media (max-width: 400px){
                        .cards{
                            height: 150%;
                            margin-bottom: 1100px;
                        }
    
                        .cards .card{
                            width: 95%;
                            height: 23%;
                        }
                    }
                `}</style>
        </Layout>
    );
}


export default home;