import { MetodosCondicionales } from "./Metodos-etc";

describe('Testing conditional methods', ()=>{
    let component : MetodosCondicionales;

    beforeEach(()=>{
        component = new MetodosCondicionales();
    })

    it('Testing method contitionals, var is zero', ()=>{
        component.var1 = 0;
        expect(component.testingConditionals()).toBe('Var 1 is 0');   
    })

    it('Testing method contitionals, var is possitive', ()=>{
        component.var1 = 2
        expect(component.testingConditionals()).toBe('Var 1 is possitive');   
    })

    it('Testing method contitionals, var is negative', ()=>{
        component.var1 = -2
        expect(component.testingConditionals()).toBe('Var 1 is negative');   
    })

    it('Testing string method', ()=>{
        expect(component.testingStrings("wow")).toBe('Your word contains vowels');   
    })

    it('Testing string method', ()=>{
        expect(component.testingStrings("xxx")).toBe('That´s not a word!!!');   
    })

    
    it('Testing if number is even or odd', ()=>{
        expect(component.testingEven(2)).toBe('Number is even');   
    })

    it('Testing if number is even or odd', ()=>{
        expect(component.testingEven(1)).toBe('Number is odd');   
    })

});