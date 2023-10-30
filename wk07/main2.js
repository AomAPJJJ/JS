class Person {
  constructor(firstname, lastname, dateofBirth) {
    this.firstname = firstname
    this.lastname = lastname
    this.dateofBirth = dateofBirth
  }

  getFullName() {
    return `FullName: ${this.firstname}, ${this.lastname}`
  }

  getAge(){
    const milliToday = Date.now() //number of milliseconds of today
    //The getTime() method of Date instances returns the number of milliseconds
    const milliBirthdate = this.dateofBirth.getTime() //number of milliseconds of this.dateOfBirth
    const diffMilli = milliToday - milliBirthdate
    const dateOfDiffMilli = new Date(diffMilli)
    return dateOfDiffMilli.getFullYear() - 1970 //getFullYear() returns the year for this date
  }

  isEqual(anotherPerson) {
    return (
      this.firstname?.toLowerCase() ===
        anotherPerson?.firstname?.toLowerCase() &&
      this.lastname?.toLowerCase() === anotherPerson?.lastname?.toLowerCase()
    )
  }
  toString() {
    return `${this.firstname} , ${this.lastname} , ${this.getAge()}`
  }
}

const me = new Person('Aom', 'Jong', new Date(2003, 10, 14))


console.log(me.getFullName())
console.log(me.getAge())