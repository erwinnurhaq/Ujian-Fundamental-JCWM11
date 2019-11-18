//---------------------------------------FORM TOOLS
function Tools(database) {

    this.welcomeForm = document.getElementById('welcome-message');
    this.loginForm = document.getElementById('login-form');
    this.loginBox = document.getElementById('login-box');
    this.adminForm = document.getElementById('admin-form');
    this.userForm = document.getElementById('user-form');
    this.alertForm = document.getElementById('alert-wrong');

    let listAdmin = document.getElementById('menu-list-admin');
    let addForm = document.getElementById('menu-add-form').rows[0];
    let listUser = document.getElementById('menu-list-user');

    this.printItem = role => {
        let output = ``;
        if (role === "admin") {
            for (i = 0; i < database.menu.length; i++) {
                database.menu[i].id = i;
                output += `<tr>
                        <td>${i + 1}</td>
                        <td>${database.menu[i].activity}</td>
                        <td>${database.menu[i].day}</td>
                        <td><img src="${database.menu[i].poster}"></img></td>
                        <td><input type="button" class="btn" value="REMOVE" onclick="act.removeItem(${i})"><input type="button" class="btn" value="EDIT" onclick="act.editItem(${i})"></td>
                        </tr>`
            }
            listAdmin.innerHTML = output;

        } else if (role === "user") {
            for (i = 0; i < database.menu.length; i++) {
                database.menu[i].id = i;
                output += `<tr>
                        <td>${i + 1}</td>
                        <td>${database.menu[i].activity}</td>
                        <td>${database.menu[i].day}</td>
                        <td><img src="${database.menu[i].poster}"></img></td>
                        <td></td>
                        </tr>`
            }
            listUser.innerHTML = output;
        }

    }

    this.removeItem = index => {
        this.printItem('admin');
        let selected = listAdmin.rows[index];
        selected.cells[4].innerHTML = `
                                        <td><input type="button" class="btn" value="YES" onclick="act.removeYes(${index})"><input type="button" class="btn" value="NO" onclick="act.cancelEdit()"></td>`
    }

    this.removeYes = index => {
        database.menu.splice(index, 1);
        this.printItem('admin');
    }

    this.editItem = index => {
        this.printItem('admin');
        let selected = listAdmin.rows[index];
        let selectedMenu = database.menu[index];
        selected.innerHTML = `<tr>
                                <td>${index + 1}</td>
                                <td><input type="text" placeholder="${selectedMenu.activity}"></td>
                                <td><select id="day-list">
                                    <option value="Sunday">Sunday</option>
                                    <option value="Monday">Monday</option>
                                    <option value="Tuesday">Tuesday</option>
                                    <option value="Wednesday">Wednesday</option>
                                    <option value="Thursday">Thursday</option>
                                    <option value="Friday">Friday</option>
                                    <option value="Saturday">Saturday</option>
                                    </select></td>
                                <td><input type="text" placeholder="New Poster Image URL"></td>
                                <td><input type="button" class="btn" value="CANCEL" onclick="act.cancelEdit()"><input type="button" class="btn" value="SAVE" onclick="act.saveItem(${index})"></td>
                                </tr>`
    }

    this.saveItem = index => {
        let selected = listAdmin.rows[index];
        let selectedMenu = database.menu[index];
        selectedMenu.activity = selected.cells[1].children[0].value || selectedMenu.activity;
        selectedMenu.day = selected.cells[2].children[0].value || selectedMenu.day;
        selectedMenu.poster = selected.cells[3].children[0].value || selectedMenu.poster;
        this.printItem('admin');
    }

    this.cancelEdit = () => {
        this.printItem('admin');
    }

    this.addItem = () => {
        let newActivity = addForm.cells[1].children[0];
        let newDay = addForm.cells[2].children[0];
        let newPoster = addForm.cells[3].children[0];
        newActivity.value && newDay.value && newPoster.value ? database.menuPush(newActivity.value, newDay.value, newPoster.value) : alert('Please fill the form!');
        newActivity.value = ""; newDay.value = "Sunday"; newPoster.value = "";
        this.printItem('admin');
    }

}