import Character from './Character';

export class Bowman extends Character {
    constructor () {
        this.type = 'Bowman'
        this.health = 100
        this.level = 1
        this.attack = 25
        this.defence = 25
    }
}


