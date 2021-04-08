// Реализовать класс RangeValidator, со следующими свойствами:
// ■ from (number);
// ■ to (number);
// Реализовать getter'ы и setter'ы для обоих свойств
// Реализовать getter range, который будет возвращать массив с двумя числами диапазона
// Реализовать метод validate, который будет принимать число и проверить входит ли число в указанный диапазон. 
// Возвращает число, если оно входит в диапазон. Выкидывает ошибку, если не входит в диапазон


class RangeValidator{
    /**
     * 
     * @param {number} from 
     * @param {number} to 
     */
    constructor(from, to){
        this.from = from;
        this.to = to;
    }
    set from(newFrom){
        if(typeof newFrom !== 'number'){
            throw new TypeError('Error type');
        }
        this._from = newFrom;
    }

    get from(){
        return this._from;
    }
    set to(newTo){
        if(typeof newTo !== 'number'){
            throw new TypeError('Error type');
        }
        this._to = newTo;
    }

    get to(){
        return this._to;
    }

    get range(){
        return [from, to];
    }
    validate(number){
        if( number > this.from && number < this.to){
        return number;
        }else{
            throw new TypeError('Error, number is not in range!');
        }
    }
}

const span = new RangeValidator(10, 15);
const numberValidate = span.validate(+prompt('Enter the number you want to check in the range: '));
console.log(numberValidate);