function employees() {
    class Employee {
        constructor(name, age) {
            if (new.target === Employee) {
                throw new Error("Cannot make instance of abstract class Employee.");
            }
            [this.name, this.age, this.salary, this.tasks] = [name, age, 0, []];
        }
        work() {
            let current = this.tasks.shift();
            console.log(`${this.name} ${current}`);
            this.tasks.push(current);
        }
        getSalary() {
            return this.salary;
        }
        collectSalary = () =>
            console.log(`${this.name} received ${this.getSalary()} this month.`);
    }
    class Junior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks = ["is working on a simple task."];
        }
    }
    class Senior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks = [
                "is working on a complicated task.",
                "is taking time off work.",
                "is supervising junior workers.",
            ];
        }
    }
    class Manager extends Employee {
        constructor(name, age) {
            super(name, age);
            this.dividend = 0;
            this.tasks = ["scheduled a meeting.", "is preparing a quarterly report."];
        }

        getSalary() {
            return super.getSalary() + this.dividend;
        }
    }
    return {Junior, Senior, Manager };
}

const employeesReturn=employees()
const Junior=employeesReturn.Junior
const Senior=employeesReturn.Senior
const Manager=employeesReturn.Manager
function junior(){
const peterJ=new Junior('Peter',14)
peterJ.work()
peterJ.salary=1000
peterJ.collectSalary()
}
function senior(){
    const peterS=new Senior('Peter',20)
    for(let i=0;i<3;i++){
        peterS.work()
    }
    peterS.salary=10000
    peterS.collectSalary()
    peterS.getSalary()
}
function manager(){
    const peterM=new Manager('Peter',24)
    for(let i=0;i<2;i++){
        peterM.work()
    }
    peterM.salary=20000
    peterM.dividend=10000
    peterM.collectSalary()
}
function invokations(){
    junior()
    console.log(`-`.repeat(20))
    senior()
    console.log(`-`.repeat(20))
    manager()
}
invokations()