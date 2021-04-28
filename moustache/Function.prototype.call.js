


const person = {
  name: 'saber',
  getName: function () {
    return this.name
  },
  doSomething: function () {
    const something = Object.values(arguments).join(' and ')
    return this.name + ' ' + something
  },
  setName: function (name) {
    this.name = name
  }
}

console.log(person.doSomething('eat food'))

const person_hu = {
  name: 'amber'
}

console.log(person.doSomething.call(person_hu, 'play football', 'eat food'))

// ES6 ...实现
Function.prototype.vcall = function () {
  const [obj, ...otherOptions] = arguments
  obj.func = this
  obj.func(...otherOptions)
  delete obj.func
}

// eval 实现
Function.prototype.vcall = function () {
  const [obj, ...otherOptions] = arguments
  obj.func = this
  obj.func(...otherOptions)
  const arg = [] //
  for (let index = 0; index < arguments.length; index++) {
    
  }
  delete obj.func
}