class Pokemon {
    constructor(name){
        this.name = name;
    }


    sayHello(){
        console.log(`Mi pokemon ${this.name} te saluda!!`);
    }

    sayMessage(msg){
        console.log(`Mi Pokemon ${this.name} dice:  ${msg}`);
    }


}

module.exports = Pokemon