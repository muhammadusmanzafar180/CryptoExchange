function Header(props) {

    return (
        <>
            <h1>MyApp {props.title}</h1>
            <button onClick={() => { props.titleHandler('Title Updated from child') }}>Change Title</button>
        </>
    )
}

export default Header;