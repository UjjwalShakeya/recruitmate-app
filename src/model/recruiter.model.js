// model for recruiters
export default class recruiterModel {
  static users = [
    {
      id: 1,
      name: "Ujjwal Shakeya",
      email: "ujjwalshakeya1@gmail.com",
      password: "123",
    },
  ];

  constructor(id, name, email, password) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
  }
  //   adding recruiters
  static add(Userdata) {
    const { name, email, password } = Userdata;

    // check if user already exist
    const existUser = this.users.find((u) => u.email == email);
    if (!existUser) {
      const newrecruiter = new recruiterModel(
        this.users.length,
        name,
        email,
        password
      );
      this.users.push(newrecruiter);
      return newrecruiter;
    }
    return;
  }

  //   checking user
  static isValidUser(email, password) {
    const result = this.users.find(
      (r) => r.email == email && r.password == password
    );
    if (result) {
      return result;
    }
  }
}
