
import axios from 'axios';
import { Cookies } from 'react-cookie';
import Router from 'next/router'



// set up cookies
const cookies = new Cookies();

export default class extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleSubmit(event) {
        const options = {
            url: 'http://192.168.0.19:32341/token/',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            data: {
                username: this.state.username,
                password: this.state.password
            }
        };


        axios(options)
            .then(response => {
                const token = response.data.token;
                cookies.set('token', token);
                cookies.set('activo', true);
                cookies.set('username', this.state.username);
                cookies.set('password', this.state.password);
                return Router.push('/home')
            }).catch(error => {
                alert(this.state.password)
                this.setState({ username: '' })
                this.setState({ password: '' })
                return error
            })
        event.preventDefault();
    }

    render() {
        return (
            <div className='contenedor'>
                <div className='login'>
                    <div className='formulario column'>
                        <form className="form-signin" onSubmit={this.handleSubmit} method="POST">
                            <h1 className='titulo'>Login</h1>
                            <img src='https://pngimage.net/wp-content/uploads/2018/06/login-png-10.png'></img>
                            <div className='row part'>
                                <label className='label'>Username: </label>
                                <input type="text" className='espacio' name="username" value={this.state.username} onChange={this.handleChange} required ></input>
                            </div>
                            <div className='row part'>
                                <label className='label' >Password: </label>
                                <input type="password" className='espacio' name="password" value={this.state.password} onChange={this.handleChange} required></input>
                            </div>
                            <div className='column bottom'>
                                <input className='btm' type="submit" value="Sign in" />
                                <p className="label">© 2020-2021</p>
                            </div>
                        </form>
                    </div>
                </div>
                <style jsx>{`
                    .contenedor{
                        width: 100%; 
                        height: 100%;
                        background: linear-gradient(-90deg, #042DD6, #8658F7);
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                    .login{
                        width: 40%;
                        height: 53%;
                        background: #DBE0F9;
                        box-shadow: 0px 0px 5px 1px black;
                    }
                    .login .formulario{
                        width: 100%;
                        height: 100%;
                        text-align: center;
                    }
                    .login .formulario .titulo{
                        font-size: 3rem;
                        letter-spacing: 2px;
                        
                    }
                    .login .formulario .part{
                        width: 50%;
                        margin: 10px auto;
                        box-sizing: border-box;
                        font-style: oblique
                        font-family: "Comic Sans MS", cursive, sans-serif;
                    }
                    .label{
                        font-size: 1.2rem;
                        font-weight: bold;
                    }
                    .espacio{
                        margin-left: 5px;
                        width: 260px;
                        height: 25px;
                        border-radius: 3px;
                    }
                    login .formulario .bottom{
                        width: 50%;
                        margin: auto;
                    }
                    .btm{
                        border-radius: 4px;
                        width: 120px;
                        height: 35px;
                        background: #042DD6;
                        color: #fff;
                        font-size: 1.2rem;
                    }                    
                    img{
                        width: 25%
                    }   
                    @media (max-width: 1920px){
                        .login{
                            width: 45%;
                            height: 53%;
                        }
                        .login .formulario .titulo{
                            font-size: 2.5rem;
                        }
                        .espacio{
                            width: 280px;
                            height: 28px;
                        }
                        .label{
                            font-size: 1.5rem;
                        }
                        img{
                            width: 20%
                        }
                    }  
                    @media (max-width: 1400px){
                        .login{
                            width: 50%;
                            height: 45%;
                        }
                        .login .formulario .titulo{
                            font-size: 2.5rem;
                        }
                        .espacio{
                            width: 180px;
                            height: 25px;
                        }
                        .label{
                            font-size: 1.3rem;
                        }
                        img{
                            width: 20%
                        }
                    } 
                    @media (max-width: 1280px){
                        .login{
                            width: 50%;
                            height: 45%;
                        }
                        .login .formulario .titulo{
                            font-size: 2rem;
                        }
                        .espacio{
                            width: 180px;
                            height: 25px;
                        }
                        .label{
                            font-size: 1.5rem;
                        }
                        img{
                            width: 25%
                        }
                    } 
                    @media (max-width: 1024px){
                        .login{
                            width: 60%;
                            height: 45%;
                        }
                        .login .formulario .titulo{
                            font-size: 2rem;
                        }
                        .espacio{
                            width: 180px;
                            height: 25px;
                        }
                        .label{
                            font-size: 1.5rem;
                        }
                        img{
                            width: 25%
                        }
                    }      
                    @media (max-width: 800px){
                        .login{
                            width: 80%;
                            height: 45%;
                        }
                        .login .formulario .titulo{
                            font-size: 2rem;
                        }
                        .espacio{
                            width: 180px;
                            height: 25px;
                        }
                        .label{
                            font-size: 1.4rem;
                        }
                        img{
                            width: 25%
                        }
                    }     
                    @media (max-width: 600px){
                        .login{
                            width: 80%;
                            height: 40%;
                        }
                        .login .formulario .titulo{
                            font-size: 2.3rem;
                        }
                        .espacio{
                            width: 140px;
                            height: 25px;
                        }
                        .label{
                            font-size: 1.2rem;
                        }
                        img{
                            width: 30%
                        }
                    }   
                `}</style>
            </div>
        );
    }
}