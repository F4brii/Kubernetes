import Layout from '../src/components/Layout';


//components
import Login from '../src/components/Login';
const index = () => {
    return (
        <Layout>
            <Login/>
            <style global jsx>{`
                *{
                    box-sizing: border-box;
                }
                html,
                body,
                body > div:first-child,
                div#__next,
                div#__next > div,
                div#__next > div > div {
                    height: 100%;
                    margin:0; padding:0;
                }                               
            `}</style>
        </Layout>
    );
}

export default index;