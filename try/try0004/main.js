class User {
    constructor(name) {
      this.name = name;
    }
  
    printName() {
      console.log(this.name);
    }
  }
  
  const user = new User('田中');
  document.getElementById('userNameButton').addEventListener('click', function () {
    user.printName();
  }.bind(user),
  );
  // document.getElementById('userNameButton').addEventListener('click', () => {
  //   user.printName();
  // });
  // document.getElementById('userNameButton').addEventListener('click', user.printName);