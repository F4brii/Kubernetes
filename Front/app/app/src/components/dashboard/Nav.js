import Link from 'next/link';

//components
import Settings from './Settings'
import Sidebar from './Side';

export default class extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activar: false,
        }
    }

    render() {
        return (
            <header className='header'>
                <div className='logo'>
                    <div className='button-hidden'>
                        <Sidebar />
                    </div>
                    <div>
                        <img src='https://coreui.io/react/demo/static/media/logo.406a451a.svg'></img>
                    </div>
                    <div>
                        <div className='activa'>
                            <Sidebar />
                        </div>
                        <div className='image'>
                            <Settings />
                        </div>
                    </div>
                </div>
                <div className='menu'>
                    <div className='right'>
                        <button type='button' className='button-hidden' onClick={() => {
                            this.setState({ activar: !this.state.activar })
                        }}>
                            <i className="fa fa-bars"></i>
                        </button>
                    </div>
                    <ul className={this.state.activar ? "active" : ""}>
                        <li>
                            <Link href='/home'>
                                <a>Dashboard</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/profesores'>
                                <a>Profesores</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/estudiantes'>
                                <a>Estudiantes</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/cursos'>
                                <a>Cursos</a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='espace'></div>
                <div className='profile btn-group'>
                    <div className='espace'></div>
                    <Settings />
                </div>
                <style jsx>{`
            .header{
                background: white;
                display: flex;
                flex-direction: row;
                width: 100%;
                height: 6%;
                border: solid 1px gray;
            }

            .header .logo{
                width: 10%;
                display: flex;
                justify-content: center;
                align-items: center;
                text-align: right;
            }

            .header .logo img{
                width: 60%;
                height: 30%;
                margin-right: 20px;
            }

            .header .logo button{
                color: gray;
                font-size: 1.3rem;
                background: transparent;
                border: none;
            }
            .header .logo .image{
                display : none;
            }

            .header .logo .button-hidden{
                display : none;
            }

            .header .menu{
                width: 30%;
                display: flex;                
                align-items: center;
                color: #73818f;
            }

            .header .menu button{
                display: none;
            }

            .header .menu ul{
                width: 80%;
                margin: 0;
                padding: 0;
            }
            
            .header .menu ul li{
            
                list-style: none;
                display: inline-block;
                padding: 20px;  
            }


            .header .menu ul li a{
                color: #73818f;
                text-decoration: none;
            }

            .header .menu ul li a:hover{            
                color: #000;  
            }

            .header .espace{
                width: 40%;
            }
            .header .profile{
                width: 20%;
                display: flex;
                justify-content: center;
                align-items: center;
                text-align: right;
            }

            .header .profile .espace{
                width: 75%;
            }            
            
            .header .profile #menu button {
                width: 2.5rem;
                height: 2.5rem;
                border-radius:150px;
                border: 1px solid;
            }

            .header .profile button:hover{
                opacity: 0.50;
                -moz-opacity: .50;
                filter:alpha (opacity=50);
              }

            @media (max-width: 1920px){
                .header .logo{
                    width: 15%;
                }

                .header .logo img{
                    width: 45%;
                }

                .header .menu{
                    width: 60%;
                    display: flex;                
                    align-items: center;
                    color: #73818f;
                }

                .header .menu{
                    width: 50%;
                    display: flex;                
                    align-items: center;
                    color: #73818f;
                }

                .header .espace{
                    width: 10%;
                }

                .header .profile{
                    width: 25%;
                }

            }            

            @media (max-width: 1400px){
                .header .logo{
                    width: 20%;
                }

                .header .logo img{
                    width: 45%;
                }

                .header .menu{
                    width: 60%;
                }

                .header .menu ul li{
                    padding: 10px;  
                }

                .header .espace{
                    width: 0%;
                }

                .header .profile{
                    width: 25%;
                }

                .header .profile .espace{
                    width: 75%;
                }
            }

            @media (max-width: 800px){
                .header{
                    flex-direction: column;
                    width: 100%;
                    height: 9.5%;
                }

                .header .logo{
                    width: 100%;
                    text-align: center;
                    border: 1px solid;
                }

                .header .logo img{
                    width: 30%;
                    height: 30%;
                    margin: 0;
                }

                .header .logo .activa{
                    display: none;
                }

                .header .logo .image{
                    display : block;
                }
    
                .header .logo .button-hidden{
                    display : block;
                }

                .header .menu{
                    width: 100%;
                    border: 1px solid;
                    flex-direction: column;
                    border: none;
                }

                .header .menu ul{
                    width: 100%;
                }

                .header .menu .right{
                    width: 100%;
                    margin-left: 20px;
                }

                .header .menu button{
                    display: block;
                    color: gray;
                    font-size: 1.3rem;
                    background: transparent;
                    border: none;
                }

                .header .menu ul{
                    width: 100%;
                    display: none;
                }

                .header .menu ul li{   
                    display: block;
                    text-align: center;
                    padding: 10px;
                    background: white; 
                }

                .header .menu .active{
                    display: block;
                }

                .header .espace{
                    display: none;
                }

                .header .profile{
                    display: none;
                }
            }

            @media (max-width: 600px){
                .header{
                    flex-direction: column;
                    width: 100%;
                    height: 7.5%;
                }

                .header .logo{
                    width: 100%;
                    text-align: center;
                    border: 1px solid;
                }

                .header .logo img{
                    width: 30%;
                    height: 30%;
                    margin: 0;
                }

                .header .logo .activa{
                    display: none;
                }

                .header .logo .image{                    
                    display : block;
                   
                }
    
                .header .logo .button-hidden{
                    display : block;
                }

                .header .menu{
                    width: 100%;
                    border: 1px solid;
                    flex-direction: column;
                    border: none;
                }

                .header .menu .right{
                    width: 100%;
                    margin-left: 5px;
                }

                .header .menu button{
                    display: block;
                    color: gray;
                    font-size: 1.3rem;
                    background: transparent;
                    border: none;
                }

                .header .menu ul{
                    width: 100%;
                    display: none;
                }

                .header .menu ul li{   
                    display: block;
                    text-align: center;
                    padding: 10px;
                    background: white; 
                }

                .header .menu .active{
                    display: block;
                }

                .header .espace{
                    display: none;
                }

                .header .profile{
                    display: none;
                }
            }
        `}</style>
            </header>
        );
    }
}