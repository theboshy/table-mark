import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import {Keys} from "../../keys";
import {User} from '../../models/user';
import {StorageService} from "../../services/save.local.storage";
import {SendEmail} from "../../services/send.email";


export const InputScore = (props: any) => {
    const history = useHistory();
    const [inputScore, setInputScore] = useState(0);
    let user = User;
    const storageService = new StorageService();
    const lvl: number = props.location.state.level;
    const handleButton = () => {
        user = storageService.get(Keys.USER);
        let scores = user.score;
        if (!scores[lvl - 1]) {
            scores.push({"level": lvl, "score": inputScore});
        } else {
            scores[lvl - 1]["level"] = lvl;
            scores[lvl - 1]["score"] = inputScore;
        }
        storageService.set(Keys.USER, user);
        history.push(Keys.PAGE_TABLE_GAME);
        let data = {user: user, level: lvl};
        SendEmail(data);
    }

    return <>
        <div className="container-all">
            <form>
                <div id="id-input" className="inputGroup inputGroup2">
                    <label>¿Cuál fue tu puntaje en el nivel: {lvl}?</label>
                    <input type="number" id="nombre_usuario" className="password"
                           onChange={(e) => {
                               setInputScore(e.target.valueAsNumber);
                           }}/>
                </div>
                <div id="div-button" className="inputGroup inputGroup3">
                    <button id="guardar-puntaje" onClick={handleButton}>
                        Guardar puntaje
                    </button>
                </div>
            </form>
        </div>
    </>
}