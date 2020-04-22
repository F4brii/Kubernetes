import Router from 'next/router'
import { Cookies } from 'react-cookie';

// set up cookies
const cookies = new Cookies();

export default class extends React.Component {
    render() {
        return (
            <>
                <nav id='menu'>
                    <ul>
                        <li>
                            <button type='button' className='btm'></button>
                            <ul>
                                <li><button type='button' className='rectangulo' disabled>Settings</button></li>
                                <li><button type='button' className='rectangulo' onClick={() => { Router.push('/profile') }}>Profile</button></li>
                                <li><button type='button' className='rectangulo' disabled></button></li>
                                <li><button type='button' className='rectangulo' onClick={() => {
                                    cookies.remove('token');
                                    cookies.remove('activo');
                                    cookies.remove('username');
                                    cookies.remove('password');
                                    return Router.push('/')
                                }}>Logout</button></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                <style jsx>{`

            #menu{
                font-size: 16px;
            }            

            #menu .btm{
                width: 2.5em;
                height: 2.5em;
                border-radius:150px;
                border: 1px solid;
            }

            #menu .rectangulo{
                width: 100%;
                background: transparent;
                border: none;
            }

            .btm:hover{
                opacity: 0.50;
                -moz-opacity: .50;
                filter:alpha (opacity=50);
            }

            #menu ul{
                list-style:none;
                margin:0;
                padding:0;
            }

            #menu ul .btm{
                display:block;
                text-decoration:none;
                font-weight:400;
                padding:10px;
                text-transform:uppercase;
            }

            #menu ul li {
                position:relative;
                float:left;
                margin:0;
                padding:0;
            }

            #menu ul ul {
                display:none;
                position:absolute;
                top:100%;
                left:0;
                padding:0;
                border-radiux: 5px;
            }

            #menu ul ul li {
                float:none;
                width:200px;
                margin-left: -150px;
                background: white;
                border: 0.1px solid gray;
            }

            #menu ul ul button {
                line-height:120%;
                padding:10px 15px;
            }

            #menu ul li:hover > ul {
                display:block;
            }
        `}</style>
            </>
        );
    }
}