class Guest {
    constructor(table, id, name, email, phone) {
        this.table = table;
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
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