export default class extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }

    render() {
        return (
            <>
                <div className={ this.state.visible ? "sidenav" : "sidenav-inactivo" }>
                    <button type='button' className="closebtn" onClick={() => {
                        this.setState({visible: !this.state.visible})
                    }}>&times;</button>
                    <a href="#">Crud</a>
                    <a href="#">Agregar</a>
                    <a href="#">Eliminar</a>
                    <a href="#">Actualizar</a>
                </div>

                <button type='button' onClick={() => {
                    this.setState({visible: !this.state.visible})
                }}>
                            <i className="fa fa-bars"></i>
                        </button>
                <style jsx>{`

            button{
                color: gray;
                font-size: 1.3rem;
                background: transparent;
                border: none;
            }

            .sidenav-inactivo {
                height: 100%;
                width: 0;
                position: fixed;
                z-index: 1;
                top: 0;
                left: 0;
                background-color: #2f353a;
                overflow-x: hidden;
                transition: 0.5s;
                padding-top: 60px;
              }

              .sidenav {
                height: 100%;
                width: 250px;
                position: fixed;
                z-index: 1;
                top: 0;
                left: 0;
                background-color: #2f353a;
                overflow-x: hidden;
                transition: 0.5s;
                padding-top: 60px;
                text-align: center;
              }

            .sidenav a {
                padding: 8px 8px 8px 32px;
                text-decoration: none;
                font-size: 25px;
                color: #818181;
                display: block;
                transition: 0.3s;
              }

              .sidenav a:hover {
                color: #f1f1f1;
              }
              
              .sidenav .closebtn {
                position: absolute;
                top: 0;
                right: 25px;
                font-size: 36px;
                margin-left: 50px;
              }
        `}</style>
            </>
        );
    }
}