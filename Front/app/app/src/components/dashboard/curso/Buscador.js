import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import fetch from 'isomorphic-unfetch';
import { Cookies } from 'react-cookie';

const cookies = new Cookies();

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 800,
        height: 300,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function Buscador() {

    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const [id, setId] = React.useState('');
    const [profesor, setProfesor] = React.useState({});


    const handleOpen = () => {

        const token = cookies.get('token');

        fetch(`http://192.168.0.19:30042/course/${id}/`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            },
        })
            .then(res => res.json())
            .then(setProfesor)

        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <>
            <div className="d-flex h-100">
                <div className="searchbar">
                    <input className="search_input" type="text" name="id" value={id} onChange={e => setId(e.target.value)} placeholder="Search..." required />
                    <button type='submit' className="search_icon" onClick={handleOpen}>
                        <i className="fas fa-search"></i>
                    </button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                    >
                        <div style={modalStyle} className={classes.paper}>
                            <h1>Curso Buscado....</h1>
                            <p>ID: {profesor.id}</p>
                            <p>Nombre: {profesor.name}</p>
                            <p>Maximo: {profesor.maxLength}</p>
                            <p>Minimo: {profesor.minLength}</p>
                        </div>
                    </Modal>
                </div>
            </div>
            <style jsx>{`
        .searchbar{
            margin-bottom: auto;
            margin-top: auto;
            height: 60px;
            background-color: #353b48;
            border-radius: 30px;
            padding: 10px;
        }
        .search_input{
            color: white;
            border: 0;
            outline: 0;
            background: none;
            width: 0;
            caret-color:transparent;
            line-height: 40px;
            transition: width 0.4s linear;
        }
        .searchbar:hover > .search_input{
            padding: 0 10px;
            width: 450px;
            caret-color:red;
            transition: width 0.4s linear;
        }
        .search_icon{
            background: transparent;
            color: #e74c3c;
            border: none;
        }
        .search_icon{
            height: 40px;
            width: 40px;
            float: right;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            color:white;
            text-decoration:none;
            }
    `}</style>
        </>
    );
}