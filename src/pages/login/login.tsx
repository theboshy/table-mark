import React, {FunctionComponent, useEffect, useState} from 'react';
import './loginStyle.scss';
import {StorageService} from '../../services/save.local.storage';
import { useHistory } from 'react-router-dom';
import { writeMachine } from '../../services/save.local.machine';
import {User} from "../../components/user/user";

export const LoginPage = (props: any) => {

    const [userName, setUserName] = useState('');
    const history = useHistory();

    const storageService = new StorageService();
    storageService.set('some_shit', 'shit!');
    const wF = new writeMachine();
    const handle = () => {
        //wF.writeFile("hola");
        let d = {name: userName, score: [], icon: ""};
        let us = User.Create(d);
        let json = JSON.stringify(User.Create(d))
        let usFromJson = User.Parse(json);
        console.log(us);
        console.log(json);
        console.log(usFromJson);
        history.push('/game');
    }

    const text = 'Lorem Ipsum er ganske enkelt dummy tekst fra trykkeri- og typebransjen. Lorem Ipsum har vært bransjens standard dummy-tekst helt siden 1500-tallet, da en ukjent skriver tok en bysse av typen og krypset den for å lage en type eksemplarbok. Det har overlevd ikke bare fem århundrer, men også spranget til elektronisk setting, og forblir i hovedsak uendret. Det ble popularisert på 1960-tallet med utgivelsen av Letraset-ark som inneholder Lorem Ipsum-passasjer, og mer nylig med desktop-publiseringsprogramvare som Aldus PageMaker inkludert versjoner av Lorem Ipsum.';
    const text2 = 'Den vanlige delen av Lorem Ipsum brukt siden 1500-tallet er gjengitt nedenfor for de som er interessert. Avsnittene 1.10.32 og 1.10.33 fra "de Finibus Bonorum et Malorum" av Cicero er også gjengitt i sin eksakte originale form, ledsaget av engelske versjoner fra 1914-oversettelsen av H. Rackham.';
    const text3 = 'Aliquam fringilla luctus sagittis. Curabitur quis erat sodales, feugiat dui vel, hendrerit tellus. Vestibulum id neque ipsum. Sed interdum, lectus sit amet condimentum iaculis, mi erat ullamcorper arcu, ac fringilla nisi tortor sit amet eros. Sed sed iaculis massa. Nam sed sagittis urna. Morbi sodales blandit mi, id tristique nunc accumsan sed.';
    const text4 = 'Curabitur vel vehicula eros. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam sollicitudin nibh non pellentesque ornare. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque ultricies vel augue a tincidunt.';
    const text5 = 'Cras porta libero ipsum, eget sagittis metus scelerisque at. Integer elementum risus eleifend, tristique eros et, convallis massa. Maecenas bibendum, quam sit amet accumsan aliquet, enim mi elementum tortor, nec condimentum dui mi vitae augue. Nunc sit amet libero turpis.';
    const text6 = 'Vivamus a scelerisque eros. Curabitur in ex nunc. Donec non felis ac libero auctor ornare vitae sit amet lectus. Nulla sagittis condimentum augue, vel commodo augue gravida sit amet.';

    return <>
        <div className="container-fluid wiki-search">
            <section>
            <form>
                   <div className="inputGroup inputGroup2">
                    <label htmlFor="password">Nombre de usuario</label>
                    <input type="text" id="nombre_usuario" className="password"
                           onChange={(e)=>setUserName(e.target.value)}/>

                </div>
                <div className="inputGroup inputGroup3">
                    <button id="login" onClick={() => handle()}>Entrar</button>
                </div>
            </form>
            </section>
            <section>
            <div className="book">
                <span className="page turn">
                    {text}
                </span>
                <span className="page turn">
                    {text2}
                </span>
                <span className="page turn">
                    {text3}
                </span>
                <span className="page turn">
                    {text4}
                </span>
                <span className="page turn">
                    {text5}
                </span>
                <span className="page turn">
                    {text6}
                </span>
                <span className="cover"></span>
                <span className="page"></span>
                <span className="cover turn">
                    <img src="https://ep00.epimg.net/cultura/imagenes/2013/06/15/actualidad/1371283072_174122_1371283573_noticia_normal.jpg"/>
                </span>
            </div>
            </section>
        </div>
    </>
}
