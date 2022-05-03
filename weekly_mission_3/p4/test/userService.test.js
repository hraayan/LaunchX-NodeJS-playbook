const UserService = require('../app/services/userService')

describe("Test for userservice", () =>{

    test("1. crear un usuario nuevo usando el user service", () =>{
        const user = UserService.create(1,"hraayan", "harry baez")
        expect(user.username).toBe("hraayan")
        expect(user.name).toBe("harry baez")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    })
})