export class Character {
    constructor(name) {
        if ( name !== 'string' || name.lenght < 2 || name.lenght > 10 ) {
            throw new Error("Wrong name")
        }

        const validTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie']
        if ( !validTypes.includes(type) ) {
            throw new Error("Wrong type")
        }

        this.name = name // - имя
        this.type // - тип
        this.health // - уровень жизни
        this.level // - уровень персонажа
        this.attack // - атака
        this.defence // - защита
    }

    levelUp() {
        if ( this.health > 0 ) {
            this.level++
            this.attack = this.attack + this.attack*0.2
            this.defence = this.defence + this.defence*0.2
            this.health = 100
        } else {
            return "error";
        }
    }

    damage( points ) {
        if ( this.health >= 0 ) {
            this.health -= points * (1 - this.defence / 100)
        }
    }
}