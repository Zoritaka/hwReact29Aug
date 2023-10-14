import React from "react";
import './css/blackMan.css';

const FavoriteMovie = () => {
    function Player({Title, Author, Actors, Date, description, srcImg}){
        return (
            <div className="container2">
                <h1 className="title2">My Favorite Movie</h1>
                <div className="block2">
                    <img src={require("./photo/blackMan.jpg")}></img>
                    <div>
                        <h1>Title: {Title}</h1>
                        <h3>Author: {Author}</h3>
                        <h3>Actors: {Actors}</h3>
                        <h3>Date: {Date}</h3>
                        <h3>description: {description}</h3>
                    </div>
                </div>
            </div>
        );
    }//Player()

    return (
        <Player
            Title={"Люди в черном (Men in Black)"}
            Author={"Фильм основан на комиксах Лоуэлла Канна и режиссирован Барри Зонненфельдом."}
            Actors={"Томми Ли Джонс, Уилл Смит, Линда Фиорентино"}
            Date={"2 июля 1997"}
            description={"Фильм 'Людив черном' - это научно-фантастическая комедия о секретной организации, называемой 'Люди в черном', которая борется с инопланетной угрозой. Agent K и Agent J, сыгранные Томми Ли Джонсом и Уиллом Смитом, объединяют усилия, чтобы защитить Землю от инопланетных нарушителей закона, используя сверхсекретное оружие и технологии, чтобы сохранить нормальный ход жизни на планете."}
            srcImg={"./photo/blackMan.jpg"}
        />
    );
}

export default FavoriteMovie;