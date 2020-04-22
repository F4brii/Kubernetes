import Link from 'next/link';

export default class extends React.Component {

    render() {
        return (
            <>
                <div className="tarjeta">
                    <Link href={this.props.link}>
                        <a>
                            <img src={this.props.ruta} />
                        </a>
                    </Link>
                    <div className="container">
                        <h4><b>{this.props.text}</b></h4>
                    </div>
                </div>
                <style jsx>{`
            .tarjeta img{
                width: 100%;
                height: 80%;
            }

            .tarjeta {
                box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
                transition: 0.3s;
                width: 90%;
                height: 90%;
                border: 1px solid;
              }
              
              .tarjeta:hover {
                box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
              }
              
              .container {
                padding: 2px 16px;
              }
        `}</style>
            </>
        );
    }
}