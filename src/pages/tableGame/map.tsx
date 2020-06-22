import React from "react";
import {StorageService} from "../../services/save.local.storage";
import {Keys} from "../../keys";

export class InitialMap {
    storageService = new StorageService();
    initialSpawn = {i: 1, j: 1};
    initialMap = [
        ['*', ' ', '*', ' ', ' ', ' ', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', ' ', ' ', ' '],
        ['*', 'S', '*', ' ', ' ', ' ', '3', ' ', ' ', ' ', ' ', ' ', '5', ' ', ' ', ' ', ' ', '6', ' ', ' ', ' ', ' ', '*'],
        ['*', ' ', '*', ' ', ' ', 'L', '*', ' ', 'L', '*', '*', ' ', '*', '*', ' ', '*', '*', '*', '*', ' ', ' ', 'L', '*'],
        ['*', ' ', '*', ' ', '*', ' ', '*', '*', ' ', '4', ' ', ' ', '*', ' ', '*', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '*'],
        ['*', ' ', '*', '2', ' ', ' ', '*', ' ', ' ', '*', '*', '*', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '*', '*'],
        ['*', ' ', '*', '*', ' ', ' ', '*', 'L', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', ' ', ' ', '*'],
        ['*', ' ', ' ', ' ', ' ', ' ', 'L', ' ', '*', ' ', 'L', ' ', '9', ' ', ' ', ' ', '8', ' ', ' ', '7', ' ', ' ', '#'],
        ['*', ' ', '1', '#', '#', 'L', 'H', ' ', '#', ' ', '#', ' ', '*', '*', ' ', '*', '*', ' ', ' ', '#', '#', 'L', 'H'],
        ['*', ' ', '#', 'H', 'H', 'L', 'H', '#', 'H', '10', 'H', ' ', ' ', ' ', '*', ' ', ' ', ' ', '#', 'H', 'H', ' ', 'H'],
        ['H', '#', 'H', 'H', 'H', 'H', 'H', 'H', 'H', '#', 'H', '#', '#', '#', 'H', '#', '#', '#', 'H', 'H', 'H', 'H', 'H']
    ];

    /**
     * Save the initial map and the initial spawn coordinates.
     * @constructor
     */
    saveInitialMap() {
        this.storageService.set(Keys.MAP, this.initialMap);
        this.storageService.set(Keys.SPAWN, this.initialSpawn);
    }

    getInitialMap() {
        return this.initialMap;
    }

    getInitialSpawn() {
        return this.initialSpawn;
    }
    saveMap(i: number, j: number, value:string){
        let map = this.storageService.get(Keys.MAP);
        map[i][j] = value;
        this.storageService.set(Keys.MAP, map);
    }
}