import React from "react";
import {StorageService} from "../../services/save.local.storage";
import {Keys} from "../../keys";

export class InitialMap {
    storageService = new StorageService();
    initialSpawn = {i: 1, j: 1};
    initialMap = [
        ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*'],
        ['*', 'S', ' ', 'X', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '*'],
        ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', 'X', ' ', '*'],
        ['*', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '*'],
        ['*', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '*', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '*'],
        ['*', ' ', ' ', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', 'L', '*', '*', '*', '*', ' ', ' ', '*'],
        ['*', ' ', ' ', '*', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '#', '#'],
        ['*', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '*', '*', ' ', '*', '*', ' ', ' ', '#', 'H', 'H'],
        ['*', ' ', '*', '*', '*', 'L', '*', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '*', ' ', ' ', ' ', '#', 'H', 'H', 'H'],
        ['H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'O', '#', '#', '#', '#', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H']
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
}