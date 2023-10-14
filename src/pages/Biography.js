import React from "react";
import './css/me.css';

const Biography = () => {
    function Player({FIO, tel, email, city, experience, skills, srcImg}){
        return (
            <div className="container1">
                <h1 className="title1">Biography</h1>
                <div className="block1">
                    <img src={require("./photo/me.jpg")}></img>
                    <div>
                        <h1>FIO: {FIO}</h1>
                        <h3>tel: {tel}</h3>
                        <h3>email: {email}</h3>
                        <h3>city: {city}</h3>
                        <h3>experience: {experience}</h3>
                        <h3>skills: {skills}</h3>
                    </div>
                </div>
            </div>
        );
    }//Player()

    return (
        <Player
            FIO={"Нурбек Алимхан Нурымулы"}
            tel={"87774564633"}
            email={"dikhanbaev.2019@mail.ru"}
            city={"Astana"}
            experience={"Опыта в работе нету"}
            skills={"Учусь в шаге, владею базовыми знаниями программиста"}
            srcImg={"./photo/me.jpg"}
        />
    );
}

export default Biography;