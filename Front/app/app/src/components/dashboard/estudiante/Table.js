import fetch from 'isomorphic-unfetch';
import { Cookies } from 'react-cookie';

const cookies = new Cookies();


export default class extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            profesores: [],
        };
    }

    componentWillMount() {
        const token = cookies.get('token');

        fetch('http://192.168.0.19:32341/students', {
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
                <td>{profesor.user}</td>
                <td>{profesor.code_institutional}</td>
            </tr>
        );
        return (
            <>
                <h4>Lista de Estudiantes</h4>
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Usuario</th>
                            <th scope="col">Codigo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listItems}
                    </tbody>
                </table>
            </>)
    }
}