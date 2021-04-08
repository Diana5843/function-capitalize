// Вызов ошибки THROW ...NEW
const sum = (...args) =>{
    return args.reduce((accumulator, currentValue) =>{
        if(!Number.isFinite(currentValue)){
            throw new TypeError('Error');

        }
        return accumulator + currentValue;
    }, 0);
}

//class

class Worker{
    /**
     * 
     * @param {string} name 
     * @param {string} surname 
     * @param {number} rate 
     * @param {number} workDays 
     */
    constructor(name, surname, rate, workDays){
        // if(typeof rate !== 'number' || workDays !== 'number'){
        //     throw new TypeError('Error type');
        // }
        if(workDays < 0 || workDays > 31){
            throw new RangeError('wrong days eror');
        }

        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.workDays = workDays;
    }
    set rate(newRate){
        if(typeof newRate !== 'number'){
            throw new TypeError('Error type');
        }
        this._rate = newRate;
    }

    get rate(){
        return this._rate;
    }

    set workDays(newWorkDays){
        if(typeof newWorkDays !== 'number'){
            throw new TypeError('Error type');
        }
        this._workDays = newWorkDays;
    }
    get workDays(){
        return this._workDays;
    }

    get salary(){
        return this.rate * this.workDays;
    }

}

const worker1 = new Worker('Bob', 'Smith', 100, 20);

//========================================================================================================

class Fuel{
    /**
     * 
     * @param {number} volume //get set
     * @param {number} densety //get set
     */
    constructor(volume, densety){
        this.volume = volume;
        this.densety = densety;
    }

    set volume(newVolume){
        if(typeof newVolume !== 'number'){
            throw new TypeError('Error type');
        }
        this._volume = newVolume;
    }

    get volume(){
        return this._volume;
    }

    set densety(newDensety){
        if(typeof newDensety !== 'number'){
            throw new TypeError('Error type');
        }
        this._densety = newDensety;
    }

    get densety(){
        return this._densety;
    }

    get FielAwait(){ //get
        return this.volume * this.densety;
    }

}

class Auto{
    /**
     * 
     * @param {number} model // get set
     * @param {number} ownWeight //get set
     * @param {Fuel} fuel // get set instsnseof
     */
    constructor(model, ownWeight, fuel){
        this.model = model;
        this.ownWeight = ownWeight;
        this.fuel = fuel;
    }
    set model(newModel){
        if(typeof newModel !== 'number'){
            throw new TypeError('Error type');
        }
        this._model = newModel;
    }

    get model(){
        return this._model;
    }

    set ownWeight (newOwnWeight){
        if(typeof newOwnWeight !== 'number'){
            throw new TypeError('Error type');
        }
        this._ownWeight = newOwnWeight;
    }

    get ownWeight(){
        return this._ownWeightmodel;
    }


    get FullWeight(){
        return this.ownWeight + this.fuel.getFullWeight();
    }
}

const benzin = new Fuel(50, 0.9);
const vw = new Auto('pasat', 1200, benzin);

//==========================================================================================================

class Friend{
    /**
     * 
     * @param {string} name 
     * @param {number} appleAmmount 
     * @param {friend} friend 
     */
    constructor(name, appleAmmount, friend){
        this.name = name;
        this.appleAmmount = appleAmmount;
        this.friend = friend;
     }
     countAllApple(){
         return this.appleAmmount + this.friend.appleAmmount
     }
}

const f1 = new Friend ('john', 5);
const f2 = new Friend ('nan', 10, f1);
f1.friend = f2;

//============================================================================================================