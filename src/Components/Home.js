    import Header from './Header';
    import LazyImage from './LazyImage';


    function Home(props) {

        return (
            <>
            <Header isLoggedIn={props.isLoggedIn} />
            <p>Hello from CryptoExchange</p>
            <p>You may Login using the below credentials or Signup</p>
            <ul>
                <li>Email: farjad@gmail.com</li>
                <li>Password: password</li>
            </ul>
            {/* <SimpleForm /> */}
            <LazyImage /> 
            </>
        )
    }

    export default Home;