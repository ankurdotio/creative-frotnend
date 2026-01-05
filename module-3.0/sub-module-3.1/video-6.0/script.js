const user1 = {
    name: "Shubham",
    age: 23,
}

const user2 = {
    name: "Pranav",
    age: 15
}

const user3 = {
    name: "abhishek",
    age: 20,
}


function isEligible(user) {
    console.log(user.name + " of age " + user.age)
}

function sayHello() {
    console.log("Hello world from function")
}


isEligible(user1)
isEligible(user2)
isEligible(user3)

sayHello()
sayHello()
sayHello()


