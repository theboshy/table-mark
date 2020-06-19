import React, {useRef} from 'react';
import './levelSelector.scss'
import {CardAuthor} from "../../components/cardAuthor/card.author";
import author from "../../mocks/authors.json";
import { TimelineMax, TweenMax } from "gsap";
export const LevelSelectorPage = (props: any)=>{
    const refLine = React.createRef();
    const cards = () => {
        let cards: JSX.Element[] =  [];
        for (let i = 0;i< 10; i++) {
            cards.push(<div className='level-section'></div>)
        }
        return cards;
    }
    

    
    const initializeGame = () => {
        let b = document.body;

        let c = document.getElementById('character');
        let v = document.querySelector('#viewbox');
        let f = 24;
        let w;
        let h;
        if (c instanceof HTMLElement) {
            w = c.offsetWidth;
            h = c.offsetHeight;

        let a = 4;
        let s = 10;
        let b = 10;
        let r = 10;
        let p = Math.floor(c.offsetWidth / b);
        let q = a * p;
        let u = w - q;
        let m = [
            ['S', ' ', 'X', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            ['*', '*', '*', '*', '*', '*', '*', '*', '*', ' ', ' ', ' '],
            ['*', '*', '*', '*', '*', '*', '*', '*', '*', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', '*', '*', '*', '*', '*', '*', '*', '*', '*', ' ', ' '],
            [' ', '*', '*', '*', '*', '*', '*', '*', '*', '*', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            ['*', '*', '*', '*', '*', '*', '*', '*', '*', ' ', ' ', ' '],
            ['*', ' ', '*', '*', '*', 'L', '*', '*', ' ', '*', ' ', ' '],
            ['*', ' ', ' ', '*', '*', ' ', '*', '*', '*', '*', ' ', ' '],
            ['*', '*', ' ', 'X', '*', ' ', ' ', ' ', ' ', '*', ' ', ' '],
            ['*', ' ', ' ', '*', '*', '*', '*', '*', 'X', '*', ' ', ' '],
            ['*', ' ', '*', ' ', ' ', ' ', ' ', '*', ' ', '*', ' ', ' '],
            ['*', ' ', ' ', ' ', '#', '#', ' ', 'L', ' ', '*', ' ', ' '],
            ['#', '#', '#', '#', 'H', 'H', '#', '#', 'O', '#', ' ', ' '],
        ];
        let z = new Game(c, v, m, a, s, b, r, u, w, h, f);

        z.initialize();
        }
    }

    const list = () => {
        let list = JSX.Element[];
    }

    /*<div className='layoutContainer'>
            {cards()}
        </div>*/
    return <>
        <button onClick={() => initializeGame()}>Presioname no mms</button>
        <div className="container">
            <div className="screen" id="viewbox">
                <div className="row" data-game-row="0">
                    <div className="col" data-game-col="0"></div>
                    <div className="col" data-game-col="1"></div>
                    <div className="col" data-game-col="2"></div>
                    <div className="col" data-game-col="3"></div>
                    <div className="col" data-game-col="4"></div>
                    <div className="col" data-game-col="5"></div>
                    <div className="col" data-game-col="6"></div>
                    <div className="col" data-game-col="7"></div>
                    <div className="col" data-game-col="8"></div>
                    <div className="col" data-game-col="9"></div>
                </div>
                <div className="row" data-game-row="1">
                    <div className="col" data-game-col="0"></div>
                    <div className="col" data-game-col="1"></div>
                    <div className="col" data-game-col="2"></div>
                    <div className="col" data-game-col="3"></div>
                    <div className="col" data-game-col="4"></div>
                    <div className="col" data-game-col="5"></div>
                    <div className="col" data-game-col="6"></div>
                    <div className="col" data-game-col="7"></div>
                    <div className="col" data-game-col="8"></div>
                    <div className="col" data-game-col="9"></div>
                </div>
                <div className="row" data-game-row="2">
                    <div className="col" data-game-col="0"></div>
                    <div className="col" data-game-col="1"></div>
                    <div className="col" data-game-col="2"></div>
                    <div className="col" data-game-col="3"></div>
                    <div className="col" data-game-col="4"></div>
                    <div className="col" data-game-col="5"></div>
                    <div className="col" data-game-col="6"></div>
                    <div className="col" data-game-col="7"></div>
                    <div className="col" data-game-col="8"></div>
                    <div className="col" data-game-col="9"></div>
                </div>
                <div className="row" data-game-row="3">
                    <div className="col" data-game-col="0"></div>
                    <div className="col" data-game-col="1"></div>
                    <div className="col" data-game-col="2"></div>
                    <div className="col" data-game-col="3"></div>
                    <div className="col" data-game-col="4"></div>
                    <div className="col" data-game-col="5"></div>
                    <div className="col" data-game-col="6"></div>
                    <div className="col" data-game-col="7"></div>
                    <div className="col" data-game-col="8"></div>
                    <div className="col" data-game-col="9"></div>
                </div>
                <div className="row" data-game-row="4">
                    <div className="col" data-game-col="0"></div>
                    <div className="col" data-game-col="1"></div>
                    <div className="col" data-game-col="2"></div>
                    <div className="col" data-game-col="3"></div>
                    <div className="col" data-game-col="4"></div>
                    <div className="col" data-game-col="5"></div>
                    <div className="col" data-game-col="6"></div>
                    <div className="col" data-game-col="7"></div>
                    <div className="col" data-game-col="8"></div>
                    <div className="col" data-game-col="9"></div>
                </div>
                <div className="row" data-game-row="5">
                    <div className="col" data-game-col="0"></div>
                    <div className="col" data-game-col="1"></div>
                    <div className="col" data-game-col="2"></div>
                    <div className="col" data-game-col="3"></div>
                    <div className="col" data-game-col="4"></div>
                    <div className="col" data-game-col="5"></div>
                    <div className="col" data-game-col="6"></div>
                    <div className="col" data-game-col="7"></div>
                    <div className="col" data-game-col="8"></div>
                    <div className="col" data-game-col="9"></div>
                </div>
                <div className="row" data-game-row="6">
                    <div className="col" data-game-col="0"></div>
                    <div className="col" data-game-col="1"></div>
                    <div className="col" data-game-col="2"></div>
                    <div className="col" data-game-col="3"></div>
                    <div className="col" data-game-col="4"></div>
                    <div className="col" data-game-col="5"></div>
                    <div className="col" data-game-col="6"></div>
                    <div className="col" data-game-col="7"></div>
                    <div className="col" data-game-col="8"></div>
                    <div className="col" data-game-col="9"></div>
                </div>
                <div className="row" data-game-row="7">
                    <div className="col" data-game-col="0"></div>
                    <div className="col" data-game-col="1"></div>
                    <div className="col" data-game-col="2"></div>
                    <div className="col" data-game-col="3"></div>
                    <div className="col" data-game-col="4"></div>
                    <div className="col" data-game-col="5"></div>
                    <div className="col" data-game-col="6"></div>
                    <div className="col" data-game-col="7"></div>
                    <div className="col" data-game-col="8"></div>
                    <div className="col" data-game-col="9"></div>
                </div>
                <div className="row" data-game-row="8">
                    <div className="col" data-game-col="0"></div>
                    <div className="col" data-game-col="1"></div>
                    <div className="col" data-game-col="2"></div>
                    <div className="col" data-game-col="3"></div>
                    <div className="col" data-game-col="4"></div>
                    <div className="col" data-game-col="5"></div>
                    <div className="col" data-game-col="6"></div>
                    <div className="col" data-game-col="7"></div>
                    <div className="col" data-game-col="8"></div>
                    <div className="col" data-game-col="9"></div>
                </div>
                <div className="row" data-game-row="9">
                    <div className="col" data-game-col="0"></div>
                    <div className="col" data-game-col="1"></div>
                    <div className="col" data-game-col="2"></div>
                    <div className="col" data-game-col="3"></div>
                    <div className="col" data-game-col="4"></div>
                    <div className="col" data-game-col="5"></div>
                    <div className="col" data-game-col="6"></div>
                    <div className="col" data-game-col="7"></div>
                    <div className="col" data-game-col="8"></div>
                    <div className="col" data-game-col="9"></div>
                </div>
                <div className="row" data-game-row="10">
                    <div className="col" data-game-col="0"></div>
                    <div className="col" data-game-col="1"></div>
                    <div className="col" data-game-col="2"></div>
                    <div className="col" data-game-col="3"></div>
                    <div className="col" data-game-col="4"></div>
                    <div className="col" data-game-col="5"></div>
                    <div className="col" data-game-col="6"></div>
                    <div className="col" data-game-col="7"></div>
                    <div className="col" data-game-col="8"></div>
                    <div className="col" data-game-col="9"></div>
                </div>
                <div className="row" data-game-row="11">
                    <div className="col" data-game-col="0"></div>
                    <div className="col" data-game-col="1"></div>
                    <div className="col" data-game-col="2"></div>
                    <div className="col" data-game-col="3"></div>
                    <div className="col" data-game-col="4"></div>
                    <div className="col" data-game-col="5"></div>
                    <div className="col" data-game-col="6"></div>
                    <div className="col" data-game-col="7"></div>
                    <div className="col" data-game-col="8"></div>
                    <div className="col" data-game-col="9"></div>
                </div>
                <div className="row" data-game-row="12">
                    <div className="col" data-game-col="0"></div>
                    <div className="col" data-game-col="1"></div>
                    <div className="col" data-game-col="2"></div>
                    <div className="col" data-game-col="3"></div>
                    <div className="col" data-game-col="4"></div>
                    <div className="col" data-game-col="5"></div>
                    <div className="col" data-game-col="6"></div>
                    <div className="col" data-game-col="7"></div>
                    <div className="col" data-game-col="8"></div>
                    <div className="col" data-game-col="9"></div>
                </div>
                <div className="row" data-game-row="13">
                    <div className="col" data-game-col="0"></div>
                    <div className="col" data-game-col="1"></div>
                    <div className="col" data-game-col="2"></div>
                    <div className="col" data-game-col="3"></div>
                    <div className="col" data-game-col="4"></div>
                    <div className="col" data-game-col="5"></div>
                    <div className="col" data-game-col="6"></div>
                    <div className="col" data-game-col="7"></div>
                    <div className="col" data-game-col="8"></div>
                    <div className="col" data-game-col="9"></div>
                </div>
                <div className="row" data-game-row="14">
                    <div className="col" data-game-col="0"></div>
                    <div className="col" data-game-col="1"></div>
                    <div className="col" data-game-col="2"></div>
                    <div className="col" data-game-col="3"></div>
                    <div className="col" data-game-col="4"></div>
                    <div className="col" data-game-col="5"></div>
                    <div className="col" data-game-col="6"></div>
                    <div className="col" data-game-col="7"></div>
                    <div className="col" data-game-col="8"></div>
                    <div className="col" data-game-col="9"></div>
                </div>
                <div className="character hide" id="character"></div>
            </div>
        </div>
    </>
}

class Game {
    private character: HTMLElement;
    private viewbox: Element | any;
    private map: string[][];
    private allowance: number;
    private space: number;
    private columns: number;
    private rows: number;
    private charWidth: number;
    private width: number;
    private height: number;
    private fps: number;
    private left: number;
    private top: number;
    private activeKeyX: any;
    private activeKeyY: any;
    private onLand: boolean;
    private position: { x: number; y: number };
    private jumpSpeed: number;
    private hasEvent: boolean;
    private scroll: number;
    private animation: null;
    private won: boolean;
    private dead: boolean;
    constructor(character: HTMLElement, viewbox: Element | any, map: string[][], allowance: number, space: number, columns: number, rows: number, charWidth: number, width: number, height: number, fps: number) {
        this.character  = character;
        this.viewbox    = viewbox;
        this.map        = map;
        this.allowance  = allowance;
        this.space      = space;
        this.columns    = columns;
        this.rows       = rows;
        this.charWidth  = charWidth;
        this.width      = width;
        this.height     = height;
        this.fps        = fps;
        this.left       = 0;
        this.top        = 0;
        this.activeKeyX = null;
        this.activeKeyY = null;
        this.onLand     = true;
        this.position   = {x: 0, y: 0};
        this.jumpSpeed  = 0;
        this.hasEvent   = false;
        this.scroll     = 0;
        this.animation  = null;
        this.won        = false;
        this.dead       = false;
    }

    gameWin() {
        if (this.won === false) {
            this.won = true;

            setTimeout(() => {
                alert('You won the game!\nPress the \'Run\' button to try again.');
            }, 1000);
        }
    }

    die() {
        if (this.dead === false) {
            this.character.classList.add('dead');
            this.dead = true;

            setTimeout(() => {
                alert('You died...\nPress the \'Run\' button to try again.');
            }, 1000);
        }
    }


    changeLvl() {
        this.position.x+=38;
    }

    collidable(o: string) {
        if (o === '*' || o === '#' || o === 'H') {
            return true;
        }
        else {
            return false;
        }
    }

    collision(c: number, d: string) {
        let x = this.position.x;
        let y = this.position.y;
        let m = this.map;
        let w = this.width;
        let h = this.height;
        let a = this.allowance;
        let s = this.space;
        let i = 0;
        let j = 0;
        let k = 0;
        let l = 0;

        if (d === 'u') {
            i = Math.floor((y + h - (s * 2) + 2 + c) / h);
            k = Math.floor((y + h - (s * 2) + 2 + c) / h);
        }
        else if (d === 'd') {
            i = Math.floor((y + h + c) / h);
            k = Math.floor((y + h + c) / h);
        }
        else if (d === 'l') {
            j = Math.floor((x + c + (a * 2)) / w);
            l = Math.floor((x + c + (a * 2)) / w);
        }
        else if (d === 'r') {
            j = Math.floor((x + w + c - (a * 2)) / w);
            l = Math.floor((x + w + c - (a * 2)) / w);
        }

        if (d === 'l' || d === 'r') {
            i = Math.floor((y + h - (s * 2) + 2) / h);
            k = Math.floor((y + h - 1) / h);
        }
        else if (d === 'u' || d === 'd') {
            j = Math.floor((x + (a * 2)) / w);
            l = Math.floor((x + w - (a * 2) - 1) / w);
        }

        try {
            let o = m[i][j];
            let p = m[k][l];


            if (this.collidable(o) || this.collidable(p)) {
                return {
                    x: (j * w),
                    y: (i * h)
                };
            }
            else if (o === 'X') {
                this.die();
            }
            else if (o === 'O') {
                this.gameWin();
            }
            else {
                return null;
            }
        }
        catch (e) {
            return null;
        }
        return 0;
    }

    moveCharacter(d: number, e: string) {
        let a = this.allowance;
        let w = this.width;
        let o = this.collision(d, e);

        if (o === null) {
            this.position.x += Math.floor(d);
        }
        else {
            if (e === 'l') {
                if (typeof o !== "number") {
                    this.position.x = Math.floor(o.x) + w - (a * 2);
                }
            }
            else if (e === 'r') {
                if (typeof o !== "number") {
                    this.position.x = Math.floor(o.x) - w + (a * 2);
                }
            }
        }
    }

    gravity() {
        let h = this.height;
        let s = this.space;
        let f = Math.floor(h * 0.2);
        let g = (this.jumpSpeed >= 0) ? f : this.jumpSpeed;
        let p = this.collision(g, 'd') ? this.collision(g, 'd') : 0;

        if (p === null) {
            this.onLand = false;

            this.position.y += g;
        }
        else {
            if (typeof p !== "number") {
                this.position.y = p.y - h;
            }
            this.jumpSpeed  = 0;
            this.onLand     = true;
        }

        if (this.activeKeyY !== null && g < 0) {
            let o = this.collision(g, 'u');

            if (o === null) {
                this.jumpSpeed += (f / 2);
            }
            else {
                this.jumpSpeed  = 0;
                if (typeof o !== "number") {
                    this.position.y = o.y + h - (s * 2) + 2;
                }
            }
        }
    }

    renderCharacter() {
        let c = this.character;

        c.style.top  = this.position.y + 'px';
        c.style.left = this.position.x + 'px';
    }

    animateCharacter(mode: string) {
        let c = this.character;

        if (mode === 'show') {
            c.classList.add('move');

            let a = this.activeKeyX;

            if (a === 37) {
                c.classList.add('flip');
            }
            else if (a === 39) {
                c.classList.remove('flip');
            }
        }
        else if (mode === 'hide') {
            c.classList.remove('move');
        }
    }

    createControls() {
        if (this.hasEvent === false) {
            this.hasEvent = true;

            let b = document.body;

            b.addEventListener('keydown', (e) => {
                 if (e.keyCode === 40) {
                    this.position.y += 38;
                    this.jumpSpeed  = Math.floor(this.height * -0.7);
                }
                else if ((e.keyCode === 37 || e.keyCode === 39) && this.activeKeyX === null) {
                    this.activeKeyX = e.keyCode;
                    this.jumpSpeed  = Math.floor(this.height * -0.7);
                    this.animateCharacter('show');
                }
            });

            b.addEventListener('keyup', (e) => {
                this.animateCharacter('hide');
                if (e.keyCode === 37 || e.keyCode === 39) {
                    this.activeKeyX = null;
                }
                else if (e.keyCode === 38) {
                    this.activeKeyY = null;
                    this.jumpSpeed  = 0;
                }
            });
        }
    }

    createMap() {
        let m = this.map;
        let v = this.viewbox;
        let s;
        if ("children" in v) {
            s = v.children;
        }
        let w = this.width;
        let h = this.height;

        for (let r of s) {
            let d = r.children;
            let i = +r.dataset.gameRow;

            for (let c of d) {
                let j = +c.dataset.gameCol;

                if (m[i][j] === '#') {
                    c.classList.add('lawn');
                }
                else if (m[i][j] === 'H') {
                    c.classList.add('ground');
                }
                else if (m[i][j] === 'O') {
                    c.classList.add('finish');
                }
                else if (m[i][j] === '*' || m[i][j] === 'L') {
                    c.classList.add('block');
                }
                else if (m[i][j] === ' ') {
                    c.classList.add('space');
                }
                else if(m[i][j] === 'X') {
                    c.classList.add('lvl');
                }
                else if (m[i][j] === 'S') {
                    this.position = {x: j * w, y: i * h};
                }
            }
        }
    }

    initializeCharacter() {
        let i = this.position.y;
        let j = this.position.x;
        let c = this.character;
        let u = this.charWidth;

        c.classList.remove('hide');

        this.renderCharacter();
    }

    render() {
        let m = this;
        let a = m.activeKeyX;
        let x = m.position.x;
        let y = m.position.y;
        window.requestAnimationFrame(m.render.bind(m));
        setTimeout(() => {

        }, 1000 / m.fps);

        if (a !== null) {
            let u = m.charWidth;
            let c = m.character;

            if (this.won === false && this.dead === false) {
                if (a === 37) {
                    m.moveCharacter(Math.floor(u * -0.15), 'l');
                }
                else if (a === 39) {
                    m.moveCharacter(Math.floor(u * 0.15), 'r');
                }
            }
        }

        m.gravity();

        m.viewbox.style.top = (y > (m.height * 9)) ? ((m.height * -5) + 'px') : '0';

        m.renderCharacter();
    }

    initialize() {
        this.won  = false;
        this.dead = false;

        this.viewbox.classList.add('active');

        if (this.hasEvent === false) {
            this.render();
        }

        this.createControls();
        this.createMap();
        this.initializeCharacter();
    }
}
