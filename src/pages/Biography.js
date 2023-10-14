import React from "react";
import './style.css';

const Biography = () => {
    function Player({FIO, tel, email, city, experience, skills, srcImg}){
        return (
            <div className="Main">
                <h1>FIO: {FIO}</h1>
                <h3>tel: {tel}</h3>
                <h3>email: {email}</h3>
                <h3>city: {city}</h3>
                <p>experience: {experience}</p>
                <p>skills: {skills}</p>
                img: <img src={require(srcImg)}></img>
            </div>
        );
    }//Player()

    return (
        <Player
            FIO={"Нурбек Алимхан Нұрымұлы"}
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