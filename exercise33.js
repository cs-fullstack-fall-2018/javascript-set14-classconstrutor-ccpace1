class Dog{
    constructor (name, breed, color,gender) {
        this.name = name;
        this.breed = breed;
        this.color= color;
        this.gender = gender;
    }
}


function main(){
    var newDog = new Dog("Fiddo", "Lab", "Brown", "Male");
    alert(newDog.name);
    alert(newDog.breed);
    alert(newDog.color);
    alert(newDog.gender);
}

main();