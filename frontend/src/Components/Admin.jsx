import React, { useState, useRef, useEffect } from "react";
import { io } from "socket.io-client";

const Admin = () => {
    const Score = useRef();
    let socket;
    useEffect(() => {
        socket = io("http://localhost:3000");
        socket.on("connect", () => {
            console.log("Connected to the socket server");
        });
        return () => {
            socket.disconnect();
        };
    }, []);

    const handleClick = (value) => {
      console.log(value); 
      socket.emit("admin", value); 
  };
    return (
        <div>
             <button onClick={() => handleClick(1)}>1</button>
            <button onClick={() => handleClick(2)}>2</button>
            <button onClick={() => handleClick(3)}>3</button>
            <button onClick={() => handleClick(4)}>4</button>
            <button onClick={() => handleClick(5)}>5</button>
            <button onClick={() => handleClick(6)}>6</button>
        </div>
    );
};

export default Admin;
