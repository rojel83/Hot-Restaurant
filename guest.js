class Guest {
    constructor(name, phone, email, id) {
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.id = id;
    }
    getTable() {
        return this.table;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getEmail() {
        return this.email;
    }
    getPhone() {
        return this.phone;
    }

}

module.exports = Guest;

// Table
    // ID
    // Name
    // Email
    // Phone