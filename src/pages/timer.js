import React, { useState, useEffect } from "react";

const useTime = () => {
    const [value, setTime] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => {
            clearInterval(timer);
        }
    }, []);
    function Player({Title}){
        return (
            <div className="container3">
                <h1 className="title3">{Title}</h1>
                <div className="block3">
                    <div>
                        <h1>{value}</h1>
                    </div>
                </div>
            </div>
        );
    }//Player()
    return (
        <Player
            Title={"Time now"}
        />
    );
}

export default useTime;