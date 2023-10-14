import React from "react";
import './css/pet.css';

const Pet = () => {
    function Player({Title, Name, Animal, breed, Birthday, FavoriteFood, srcImg}){
        return (
            <div className="container3">
                <h1 className="title3">{Title}</h1>
                <div className="block3">
                    <img src={require("./photo/pet.jpg")}></img>
                    <div>
                        <h1>Name: {Name}</h1>
                        <h3>Animal: {Animal}</h3>
                        <h3>breed: {breed}</h3>
                        <h3>Birthday: {Birthday}</h3>
                        <h3>FavoriteFood: {FavoriteFood}</h3>
                    </div>
                </div>
            </div>
        );
    }//Player()

    return (
        <Player
            Title={"My pet"} 
            Name={"Пушок"}
            Animal={"Собака"}
            breed={"Австралийский терьер"}
            Birthday={"6 марта 2020"}
            FavoriteFood={"Косточка"}
            srcImg={"./photo/pet.jpg"}
        />
    );
}

export default Pet;