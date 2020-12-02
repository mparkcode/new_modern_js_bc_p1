class Pet{
	constructor(name, age){
		this.name = name;
		this.age = age;
	}
	eat(){
		return `${this.name} is eating`
	}
}

class Cat extends Pet{
	constructor(name, age, livesLeft = 9){
		super(name, age);
		this.livesLeft = livesLeft;
	}
	meow(){
		return'Meowww'
	}
}

class Dog extends Pet{
	woof(){
		return "Woof"
	}
	eat(){
		return `${this.name} scarfs his food!`
	}
}