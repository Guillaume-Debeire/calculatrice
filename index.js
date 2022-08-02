class User {
  constructor(email, nom, prenom, age) {
    this.email = email;
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
  }

  getEmail() {
    return this.email;
  }
  getLastName() {
    return this.nom;
  }
  getFirstName() {
    return this.prenom;
  }
  getAge() {
    return this.age;
  }
  isValid() {
    if (this.email) {
      if (this.nom) {
        if (this.prenom) {
          if (this.age >= 13) {
            console.log(this.nom, this.prenom, "TEST OK");
          } else {
            console.log(this.nom, this.prenom, "TEST NOK");
          }
        } else {
          console.log(this.nom, this.prenom, "TEST NOK");
        }
      } else {
        console.log(this.nom, this.prenom, "TEST NOK");
      }
    } else {
      console.log(this.nom, this.prenom, "TEST NOK");
    }
  }
}

const user = new User("guillaume@adresse.com", "DEBEIRE", "Guillaume", "29");
const userFalse = new User("benjamin@adresse.com", "LEPETIT", "Benjamin", "12");
user.isValid();
userFalse.isValid();
