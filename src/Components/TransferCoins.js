    import { useEffect, useState, useContext } from "react";
    import axios from 'axios';
    import { useLocation } from "react-router-dom";
    import { Input, InputNumber, Button, Space, Table, Tag } from 'antd';
    import { PlusOutlined } from '@ant-design/icons';
    //import { useState } from 'react';
    import { Form } from 'react-bootstrap'; 
    import selectedUserContext from '../Context/selectedUserContext';
    import { useNavigate } from 'react-router-dom';

    const { Column, ColumnGroup } = Table;


    function TransferCoins() {
        
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
            {key:1, label:"Moo Moo"},
            {key:2, label:"Moo Moo"},
            {key:3, label:"Moo Moo"},
            {key:4, label:"Moo Moo"},
        ]
        const transferCoinsHandler = () => {
            data.find(obj => {
                if(obj.transferAddress == transferId)
                {
                    obj.purchasedCoins = parseInt(obj.purchasedCoins) + parseInt(coinChain);
                    return obj;
                }
            });
            setData([...data,data]);
            navigate('/');
        }
        return (
            <>
    {data.map((d,i) => {
                    return <div key={i}>
                        <p>{d.purchasedCoins}</p>
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