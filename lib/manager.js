const Employee = require('./employee')

class Manager {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber
    }
    getRole() {
        return 'Manager'
    }
}

module.exports = manager