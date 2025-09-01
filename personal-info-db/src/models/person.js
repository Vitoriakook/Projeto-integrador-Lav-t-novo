class Person {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }

    create() {
        // Logic to create a new person record in the database
    }

    read() {
        // Logic to read a person record from the database
    }

    update(updatedInfo) {
        // Logic to update a person record in the database
        Object.assign(this, updatedInfo);
    }

    delete() {
        // Logic to delete a person record from the database
    }
}

export default Person;