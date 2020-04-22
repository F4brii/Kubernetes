import fetch from 'isomorphic-unfetch';


export default class extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            profesores: [],
        };
    }

    componentWillMount() {
        const token = cookies.get('token');

        fetch('http://192.168.0.19:30042/courses', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            },
        })
            .then(res => res.json())
            .then((profesores) => {
                this.setState({ profesores: profesores })
            })
    }

    render() {
        const listItems = this.state.profesores.map((profesor) =>
            <tr key={profesor.id}>
                <td>{profesor.id}</td>
                <td>{profesor.name}</td>
                <td>{profesor.maxLength}</td>
                <td>{profesor.minLength}</td>
            </tr>
        );
        return (
            <>
                <h4>Lista de Cursos</h4>
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Maximo</th>
                            <th scope="col">Minimo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listItems}
                    </tbody>
                </table>
            </>)
    }
}