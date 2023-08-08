    import { useEffect, useState, useContext } from "react";
    //import axios from 'axios';
    import { useLocation } from "react-router-dom";
    import {  Button, Table } from 'antd';
    //import { useState } from 'react';
    import { Form } from 'react-bootstrap'; 
    //import selectedUserContext from '../Context/selectedUserContext';
    import Header from './Header';
    import { useNavigate } from 'react-router-dom';
    import { useSelector } from "react-redux";
    const { Column, ColumnGroup } = Table;

    function TransferCoins(props) {
        
        const {state} = useLocation();
        const {id, d} = state;
        const [data, setData] = useState(d)
        const [transferId, settransferId] = useState("");
        const [coinChain, setCoinChain] = useState("");
        const [type, setType] = useState();
        const navigate = useNavigate();
        // const selectedUser = useContext(selectedUserContext);
        // console.log(selectedUser);
        useEffect(() => {
        }, [])
        const myArray = [
            {key:1, label:"10 coins"},
            {key:2, label:"20 coins"},
            {key:3, label:"30 coins"},
            {key:4, label:"40 coins"},
        ]
        const transferCoinsHandler = () => {
            data.find(obj => {
                if(obj.transferAddress == transferId)
                {
                    obj.purchasedCoins = parseInt(obj.purchasedCoins) + (parseInt(coinChain) * 10);
                    return obj;
                }
            });
            setData([...data,data]);
            setTimeout(()=> {
                navigate('/dashboard');
            },3000)
        }
        
        // const { selectedUser } = useSelector(state => state.selectUserReducer);
        // console.log(selectedUser);
        return (
            <>
            <Header isLoggedIn={props.isLoggedIn} />
    {data.map((d,i) => {
                    return <div key={i}>
                        <p>{d.userName}: {d.purchasedCoins}</p>
                        </div>
                })}
                <p>Hello from Transfer File</p>
                {<Form>
            <Form.Group controlId="transferId">
                <Form.Label>Transfer Address</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter Transfer Address ID"
                    value={transferId}
                    onChange={(e) => settransferId(e.target.value)}
                />
            </Form.Group>
            <Form.Group controlId="coinChain">
            <Form.Label>Select Coin Chain</Form.Label>
            <Form.Control
            as="select"
            value={type}
            onChange={e => {
                console.log("e.target.value", e.target.value);
                setCoinChain(e.target.value);
            }}
            >
            { myArray.map(opt => (
            <option value={opt.key}>{opt.label}</option>
            ))}
            </Form.Control>
        </Form.Group>
            <Button className="mt-3" onClick={transferCoinsHandler}>Transfer Coins</Button>
    </Form>}
            </>
        )
    }
    export default TransferCoins;