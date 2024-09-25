import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";
import ".././App.css";

const User = () => {
    const [count, setCount] = useState([1, 2]);

    useEffect(() => {
        const socket = io("http://localhost:3000");
        socket.on("connect", () => {
            console.log("Connected to the socket server");
        });
        socket.on("score", (score) => {
            console.log("Score received", score);
            setCount((prevCount) => [...prevCount, Number(score)]);
        });
        return () => {
            socket.disconnect(); 
        };
    }, []);

    return <div>{count}</div>;
};

export default User;
