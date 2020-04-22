export default class extends React.Component {
    render() {
        return (
            <>
                <div className="footer">
                    <div className='part'>
                        <p>© 2020 Cuarentena Covid-19.</p>
                        <p>Todos los derechos reservados.</p>
                        <p>Nit: 00.000.757-3</p>
                        <p>Linea Gratuita PQRs: 000000000000</p>
                        <p>contacto@unicovid.co</p>
                        <p>notificacionesjudiciales@unicovid.co</p>
                        <p>Políticas de Privacidad y Términos de Uso.</p>
                    </div>
                    <div className='part'>
                        <p>Barcelona: Km. 12 Vía Puerto López</p>
                        <p>Fax: +57 (8) 6616800 ext: 204</p>
                        <p>Horario de atención: Lunes a Viernes</p>
                        <p>7:30am a 11:45m y 2:00pm a 5:30pm</p>
                    </div>
                    <div className='part'>
                        <h5>Vigilada</h5>
                        <img src='https://coreui.io/react/demo/static/media/logo.406a451a.svg'/>
                    </div>
                </div>
                <style jsx>{`
            .footer {
                position: fixed;
                left: 0;
                bottom: 0;
                width: 100%;
                height: 25%;
                background: black;
                color: white;
                justify-content: center;
                align-items: center;
                display: flex;
                flex-wrap: wrap;
             }

             .part{
                 width: 25%;
                 height: 80%;
                 margin: 10px;
                 font-size: 1.1rem;
             }

             .part p{
                 margin: 0
             }

             .part img{
                 width: 30%;
                 margin-top: 20px;
                 margin-left: 30px;
             }

             @media (max-width: 1280px){
                .footer{
                    width: 100%;
                    height: 40%;
                }

                .footer .part{
                   width: 45%;
                   height: 30%;
                   margin: 20px;
                   margin-top: 30px;
                   margin-bottom: 30px;
                }

                .footer .part p{
                    font-size: 1.3rem;
                }

                .part img{
                    width: 40%;
                }
                
            }

             @media (max-width: 1024px){
                .footer{
                    width: 100%;
                    height: 40%;
                }

                .footer .part{
                   width: 45%;
                   height: 30%;
                   margin: 20px;
                   margin-top: 30px;
                   margin-bottom: 30px;
                }

                .footer .part p{
                    font-size: 1.3rem;
                }

                .part img{
                    width: 40%;
                }
                
            }

             @media (max-width: 800px){
                .footer{
                    width: 100%;
                    height: 40%;
                }

                .footer .part{
                   width: 45%;
                   height: 30%;
                   margin: 20px;
                   margin-top: 30px;
                   margin-bottom: 30px;
                }

                .footer .part p{
                    font-size: 1.3rem;
                }

                .part img{
                    width: 40%;
                }
                
            }

             @media (max-width: 600px){
                .footer{
                    width: 100%;
                    height: 60%;
                }

                .footer .part{
                   width: 60%;
                   height: 30%;
                   margin-top: 20px;
                   margin-bottom: 30px;
                }

                .footer .part p{
                    font-size: 1.3rem;
                }

                .part img{
                    width: 45%;
                }
                
            }

             @media (max-width: 400px){
                 .footer{
                     width: 100%;
                     height: 70%;
                 }

                 .footer .part{
                    width: 60%;
                    height: 40%;
                    margin-top: 10px;
                    margin-bottom: 10px;
                 }   
                 
                 .part img{
                    width: 50%;
                }
             }
        `}</style>
            </>
        );
    }
}