    import { useEffect, useState } from "react";
    import axios from 'axios';

    function APICalling() {
        const [data, setData] = useState([]);
        useEffect(() => {
            getPosts();
        }, [3])
        const getPosts = async () => {
            await axios.get('http://localhost:3031/crypto')
            .then((res) => {
                setData(res.data)
                // setTimeout(()=>{
                    console.log(data)
                // },2000)
            })
            .catch(err => {
                console.log(err);
            })
        }
        return (
            <>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                {data.map((d,i) => {
                    return <tr key={i}>
                        <td>{d.id}</td>
                        <td>{d.symbol}</td>
                        <td>{d.author}</td>
                        </tr>
                })}
                </tbody>
            </table>
                
            </>
        )
    }

    export default APICalling;