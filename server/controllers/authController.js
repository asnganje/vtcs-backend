const createUser = (req,res) => {
    res.send('Create user')
}

const login = (req,res) => {
    res.send('Login user')
}

const logout = (req,res) => {
    res.send('Logout user')
}

module.exports = {createUser, login, logout}