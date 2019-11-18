//---------------------------------------DATABASE
function Database() {

    // User Database
    this.userList = [
        new User('admin', 'admin', 'admin'),
        new User('erwin', 'erwin', 'user'),
        new User('user', 'user', 'user')
    ]

    // Item Database
    this.menu = [
        new Activity('Running', 'Monday', './img/default_pic.jpg'),
        new Activity('Estafet', 'Tuesday', './img/default_pic.jpg'),
        new Activity('Swimming', 'Thursday', './img/default_pic.jpg'),
        new Activity('Jogging', 'Friday', './img/default_pic.jpg'),
        new Activity('Hiking', 'Saturday', './img/default_pic.jpg'),
    ];

    // User Constructor
    function User(userName, password, role) {
        this.userName = userName;
        this.password = password;
        this.role = role;
    }

    // Item Constructor
    function Activity(activity, day, poster) {
        this.activity = activity;
        this.day = day;
        this.poster = poster;
    }

    this.menuPush = (activity, day, poster) => this.menu.push(new Activity(activity, day, poster));
    this.userPush = (userName, password, role) => this.userList.push(new User(userName, password, role));
}


