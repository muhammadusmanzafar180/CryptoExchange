    import react from "react";
    import { Card, Col, Row, Button } from 'antd';
    import { useState, useEffect} from 'react';
    import axios from 'axios';
    import { useNavigate } from 'react-router-dom';
    import selectedUserContext from '../Context/selectedUserContext';

    function Dashboard () {
        const [data, setData] = useState([]);
        // const [selectedUser,setselectedUser] = useState({
        //     "posts": [
        //         {
        //             "id": 1,
        //             "title": "json-server",
        //             "author": "typicode"
        //         }
        //     ],
        //     "comments": [
        //         {
        //             "id": 1,
        //             "body": "some comment",
        //             "postId": 1
        //         }
        //     ],
        //     "profile": {
        //         "name": "typicode"
        //     },
        //     "crypto": [
        //         {
        //             "transferAddress": 1,
        //             "userName": "John",
        //             "symbol": "611",
        //             "rates": 0.389165,
        //             "name": "SixEleven",
        //             "name_full": "SixEleven (611)",
        //             "max_supply": 611000,
        //             "purchasedCoins": 100,
        //             "icon_url": "https://assets.coinlayer.com/icons/611.png"
        //         },
        //         {
        //             "transferAddress": 2,
        //             "userName": "Smith",
        //             "symbol": "ABC",
        //             "rates": 59.99,
        //             "name": "AB-Chain",
        //             "name_full": "AB-Chain (ABC)",
        //             "max_supply": 210000000,
        //             "purchasedCoins": 55,
        //             "icon_url": "https://assets.coinlayer.com/icons/ABC.png"
        //         },
        //         {
        //             "transferAddress": 3,
        //             "userName": "Snowden",
        //             "symbol": "ZEC",
        //             "rates": 0.005626,
        //             "name": "ZCash",
        //             "name_full": "ZCash (ZEC)",
        //             "max_supply": 21000000,
        //             "purchasedCoins": 97,
        //             "icon_url": "https://assets.coinlayer.com/icons/ZEC.png"
        //         },
        //         {
        //             "transferAddress": 4,
        //             "userName": "Michael",
        //             "symbol": "ACP",
        //             "rates": 0.014931,
        //             "name": "Anarchists Prime",
        //             "name_full": "Anarchists Prime (ACP)",
        //             "max_supply": 53760000,
        //             "purchasedCoins": 62,
        //             "icon_url": "https://assets.coinlayer.com/icons/ACP.png"
        //         }
        //     ]
        // });
        
        const fontSize = {fontSize: 10};
        const styleGray = {backgroundColor : 'gray'};
        const styleYellow = {backgroundColor : 'yellow'}
        const styleGreen = {backgroundColor : 'green'}
        const symbol = {
                display: 'inline-block',
                borderRadius: 60,
                backgroundColor: 'grey',
                // boxShadow: 0 0 2 #888,
                // padding: 0.5 0.6,
        };
        
        useEffect(() => {
            //axios.get('http://api.coinlayer.com/api/list?access_key=00aa953b58b1e894e2734d71cd0fcf15')
            axios.get('http://localhost:3031/crypto')
            .then((res) => {
                setData(res.data)
                console.log(data)
            })
            .catch(err => {
                console.log(err);
            })

            // setselectedUser(data);
        }, [])
        
        const navigate = useNavigate();

        const transferhandler = (id) => {
            navigate(
                '/transfer',
                {
                state: {
                    d:data,
                    id:id
                }
                }
            )
        }
        // const SelectedUserContext = selectedUserContext;
        // console.log(SelectedUserContext);

        return (
            <>
            <Row gutter={16}> 
            <Col span={8}>
                {data.map((d,i) => {
                    return <Card title={d.userName} bordered={true} key={i}>
                    <h3 style={styleGreen}>{d.name_full}</h3>
                    <h5 style={styleGray}>Purchased Coins - {d.purchasedCoins}</h5>
                    <p style={styleYellow}>Rate - {d.rates}</p>
                    <Button onClick={() => transferhandler(d.transferAddress)}>Tranfser</Button>
                </Card>
                })
                }
            </Col> 
            </Row> 
            </>
        )
    }

    export default Dashboard;