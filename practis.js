class FamilyMember {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hi my name is ${this.name}! I am ${this.age} years old.`);
  }

  sayCiao() {
    console.log("Ciao Miau!");
  }
}

class Cat extends FamilyMember {
  constructor(name, age) {
    super(name, age);
  }

  sayHello() {
    console.log(`Hi my name is ${this.name}! I am cat ${this.age} years old.`);
  }

  sayCiao() {
    console.log("Cat saying Miaaau");
  }

  caioAsFamilyMember() {
    super.sayCiao();
  }
}

const romeo = new Cat("Romeo", 15);
romeo.sayHello();
romeo.sayCiao();
romeo.caioAsFamilyMember();
