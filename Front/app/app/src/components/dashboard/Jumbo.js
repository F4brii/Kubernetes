export default class extends React.Component {
    render() {
        return (
            <div className='espace'>
                <div className="jumbotron">
                    <div className="container-fluid">
                        <h1>Bienvenidos</h1>
                        <p>
                            Por medio de este sitio podra administrar y gestionar los datos relacionados
                            a la aplicacion de cursos, profesores y estudiantes.
                        </p>
                    </div>
                </div>
        <style jsx>{`
            .espace{
                margin: 20px;
                margin-top: 50px;
            }
        `}</style>
            </div>
        );
    }
}