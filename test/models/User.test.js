// importamos nuestra clase user
const User = require('../../app/user')

describe('Unit Tests for User Class', () => {
    test('1. Create an User Object', () => {
        // creamos un objeto de nuestra clase User
        const newUser = new User(1,"Mikael","Miguel","Bio")

        // generamos las pruebas
        expect(newUser.id).toBe(1)
        expect(newUser.username).toBe("Mikael")
        expect(newUser.name).toBe("Miguel")
        expect(newUser.bio).toBe("Bio")
        expect(newUser.dateCreated).not.toBeUndefined()
        expect(newUser.lastUpdated).not.toBeUndefined()
    });

    test('2. Create methods getters', () => {
        // creamos un objeto de nuestra clase User
        const newUser = new User(2,"Kevinpt2","Kevin","Bio")

        // pruebas de nuestros metodos get
        expect(newUser.getUsername).toBe("Kevinpt2")
        expect(newUser.getBio).toBe("Bio")
        expect(newUser.getDateCreated).not.toBeUndefined()
        expect(newUser.getLastUpdated).not.toBeUndefined()
    })

    test('3. Create methods setters', () => {
        // creamos un objeto de nuestra clase User
        const newUser = new User(3,"PilotoTaquito","Valente","Bio")

        // hacemos uso de los setters
        newUser.setUsername = "Taco"
        newUser.setBio = "New Bio"

        // pruebas de nuestros metodos set
        expect(newUser.username).toBe("Taco")
        expect(newUser.bio).toBe("New Bio")
    })

})