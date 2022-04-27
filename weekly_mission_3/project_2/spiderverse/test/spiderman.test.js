const Spiderman = require('./../app/spiderman')
describe("Test spiderman test", () => {
    test('1) create an spiderman object', () => {
        const andrewGarField = new Spiderman("Spiderman Sony",31, "Andrew Garfield", 2, "Sony");
        expect(andrewGarField.name).toBe("Spiderman Sony")
        expect(andrewGarField.age).toBe(31)
        expect(andrewGarField.actor).toBe("Andrew Garfield")
        


    });
  })
describe("Unit test for Tom Holland Marvel", () => {
  test('2) Use the method getInfo()', () =>{
    const tomHolland = new Spiderman("Spiderman Marvel", 25, "Tom Holland", "Marvel")
    expect(tomHolland.getInfo()).toBe("Hey, I 'm Tom Holland from Marvel studio")


  });
});