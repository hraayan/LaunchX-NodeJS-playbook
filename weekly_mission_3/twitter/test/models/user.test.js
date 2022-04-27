const User = require('./../../app/models/user')

describe("unit testing for user class", () => {

    test('Create an user object', () => {
        const user = new User(1, "hraayan" , "Harry", "Bio", "dateCreated","lastUpdated")

        expect(user.id).toBe(1)
        expect(user.username).toBe("hraayan")
        expect(user.name).toBe("Harry")
        expect(user.bio).toBe("Bio")
        expect(user.dateCreated).not.toBeUndefined()
        expect(user.lastUpdated).not.toBeUndefined()


    });
});

describe("unit testing for user class", () => {

    test('add getters', () => {
        const user = new User(1, "hraayan" , "Harry", "Bio")

        expect(user.id).toBe(1)
        //expect(user.getUsername).toBe("hraayan")
        expect(user.name).toBe("Harry")
        expect(user.getBio).toBe("Bio")
        expect(user.getDateCreated).not.toBeUndefined()
        expect(user.getLastUpdated).not.toBeUndefined()


    });
});

describe("unit testing for user class", () => {

    test('add setters', () => {
        const user = new User(1, "hraayan" , "Harry", "Bio")
        user.setUsername = "morro"
        expect(user.id).toBe(1)
        expect(user.getUsername).toBe("morro")
        user.setBio = "New Bio"
        expect(user.name).toBe("Harry")
        expect(user.getBio).toBe("New Bio")
        expect(user.getDateCreated).not.toBeUndefined()
        expect(user.getLastUpdated).not.toBeUndefined()


    });
});