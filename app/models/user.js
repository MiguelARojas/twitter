// Declaramos nuestra clase User
class User {
    constructor(id,username,name,bio,dateCreated,lastUpdated){
        this.id = id
        this.username = username
        this.name = name
        this.bio = bio
        this.dateCreated = new Date()
        this.lastUpdated = new Date()
    }

    // métodos get
    get getUsername(){
        return this.username
    }

    get getBio(){
        return this.bio
    }

    get getDateCreated(){
        return this.dateCreated
    }

    get getLastUpdated(){
        return this.lastUpdated
    }

    // métodos set
    set setUsername(username){
        this.username = username
    }

    set setBio(bio){
        this.bio = bio
    }
}


// Exportamos nuestra clase User
module.exports = User