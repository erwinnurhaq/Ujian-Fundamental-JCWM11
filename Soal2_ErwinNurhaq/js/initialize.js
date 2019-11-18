const act = new Act();

//---------------------------------------INITIALIZE & HTML BUTTONS FUNCTION
function Act() {
    let database = new Database();
    let tools = new Tools(database);
    let userManager = new UserManager(database, tools);

    tools.adminForm.hidden = true;
    tools.userForm.hidden = true;
    tools.alertForm.hidden = true;
    userManager.logoutBtn.hidden = true;

    this.login = () => userManager.login();
    this.logout = () => userManager.logout();
    this.register = () => userManager.register();
    this.editItem = index => tools.editItem(index);
    this.cancelEdit = () => tools.cancelEdit();
    this.saveItem = index => tools.saveItem(index);
    this.removeItem = (what, index) => tools.removeItem(what, index);
    this.removeYes = index => tools.removeYes(index);
    this.addItem = () => tools.addItem();
}