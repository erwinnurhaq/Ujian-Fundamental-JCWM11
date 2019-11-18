
//---------------------------------------USERMANAGER
function UserManager(database, tools) {

    let userList = database.userList;
    let userName = tools.loginForm.elements[0];
    let password = tools.loginForm.elements[1];
    this.logoutBtn = tools.loginForm.elements[4];

    // Find User on Database
    findUser = (user, pass) => {
        let indexUser = userList.findIndex(a => a.userName === user && a.password === pass);
        return userList[indexUser];
    }

    this.currentUser; //<-- This is the current user

    this.login = () => {

        this.currentUser = findUser(userName.value, password.value);

        if (this.currentUser) {
            if (this.currentUser.role === 'admin') {
                alert(`Welcome ADMIN!`);
                welcomeHeader(this.currentUser.userName.toUpperCase());
                tools.adminForm.hidden = false;
                this.logoutBtn.hidden = false;
                tools.loginBox.hidden = true;
                tools.alertForm.hidden = true;
                tools.printItem('admin');
            } else {
                alert(`Welcome ${this.currentUser.userName.toUpperCase()}!`);
                welcomeHeader(this.currentUser.userName.toUpperCase());
                tools.userForm.hidden = false;
                this.logoutBtn.hidden = false;
                tools.loginBox.hidden = true;
                tools.alertForm.hidden = true;
                tools.printItem('user');
            }
        } else {
            alert('Username or password is wrong!');
            tools.alertForm.hidden = false;
            tools.alertForm.innerHTML = `<h1>Username or password is wrong!<h1>`
        }

        userName.value = "";
        password.value = "";
    }

    this.logout = () => {
        this.currentUser = null;
        this.logoutBtn.hidden = true;
        tools.loginBox.hidden = false;
        userName.value = '';
        password.value = '';
        tools.adminForm.hidden = true;
        tools.userForm.hidden = true;
        tools.welcomeForm.innerHTML = `Please insert your username and password:`;
    }

    this.register = () => {
        let newUser = userName.value;
        let newPass = password.value;
        if (newUser && newPass) {
            let existingUser = userList[userList.findIndex(a => a.userName === newUser)];
            if (existingUser) {
                alert('Username has already exist, choose another username!');
            } else {
                database.userPush(newUser, newPass, 'user');
                alert('Congratulation! You have been registered!');
            }
        } else {
            alert('Please fill the form!');
        }
        tools.alertForm.hidden = true;
        userName.value = "";
        password.value = "";
    }

    welcomeHeader = text => {
        tools.welcomeForm.innerHTML = `Welcome, ${text}!`;
    }

}

