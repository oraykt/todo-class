const root = document.getElementById('root');

class Person{
  constructor({firstName, lastName}) {
    this.firstName = firstName
    this.lastName = lastName
  }

  get fullName() {
    return this.firstName.concat(' ', this.lastName)
  }

  greeting() {
    console.log('Hey there 👋');
  }
}

class Student extends Person{
  constructor({ firstName, lastName, subject }) {
    super({firstName, lastName})
      this.subject = subject
  }

  study() {
    console.log(`I am studying ${this.subject}`)
  }
}

class Teacher extends Person{
  constructor({ firstName, lastName, seniority }) {
    super({firstName, lastName})
    this.seniority = seniority
  }
  
  teach() {
    console.log(`I am teaching ${this.seniority}`)
  }
}

const p1 = new Student({ firstName: "Oray", lastName: "Kurt", subject: 'Math' })
p1.study()
const p2 = new Teacher({firstName: "tfName", lastName: 'tlName', seniority: 'Math' })
p2.teach()
// const template = <h1>Hello World</h1>

// // ReactDOM
// ReactDOM.render(template, root);