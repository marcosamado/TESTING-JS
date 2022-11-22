
const {suma, resta, multiplicacion, division} = require("../calc.js");

describe("Test de sumas", () => {
    
        test("sumando valores", () => {
            expect(suma(5,5)).toBe(10);
        })
        test("sumando Letras", () => {
            expect(suma("a",10)).toBe(0);
        })
        test("sumando Letras", () => {
            expect(suma(10,"c")).toBe(0);
        })
        test("sumando Letras", () => {
            expect(suma(null,10)).toBe(0);
        })
        test("sumando Letras", () => {
            expect(suma(10)).toBe(0);
        })
});

describe("Test de resta", () => {
    
    test("restando valores", () => {
        expect(resta(15,5)).toBe(10);
    })
    test("restando valores negativos", () => {
        expect(resta(-5,10)).toBe(-15);
    })
    test("restando Letras", () => {
        expect(resta("a",10)).toBe(0);
    })
    test("restando Letras", () => {
        expect(resta(10,"c")).toBe(0);
    })
    test("restando Letras", () => {
        expect(resta(null,10)).toBe(0);
    })
    test("restando Letras", () => {
        expect(resta(10)).toBe(0);
    })
})