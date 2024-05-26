#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

// Class representing a student with a name property
class Student {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

// Class representing a person with a list of students
class Person {
  students: Student[] = [];

  // Method to add a student to the list
  addStudent(obj: Student) {
    this.students.push(obj);
  }
}

// Creating an instance of the Person class
const person = new Person();

// Function to start the program
const programStart = async (person: Person) => {
  console.log(
    chalk.bold.rgb(
      204,
      204,
      204
    )(`* * * * * * * * * * * * * * * * * * * * * * *`)
  );
  console.log(chalk.greenBright.bold("\n\t\tGreetings!"));
  console.log(chalk.bold.blue.bold("\n\tYou are using an OOP program\n"));
  console.log(
    chalk.bold.rgb(
      204,
      204,
      204
    )(`* * * * * * * * * * * * * * * * * * * * * * *`)
  );

  do {
    // Asking user which person to talk to
    const { select } = await inquirer.prompt({
      type: "list",
      name: "select",
      message: "Select a person to talk, or you can exit.",
      choices: ["Teacher", "Student", "Exit"],
    });

    if (select === "Teacher") {
      console.log(chalk.green(`You are chatting with Teacher`));
      console.log(chalk.yellow("Hope you're doing well!"));

      // Additional messages for Teacher
      console.log(chalk.green("Teacher: How can I assist you today?"));
      console.log(
        chalk.green("Teacher: Remember to submit your assignments on time.")
      );
      console.log(
        chalk.green("Teacher: If you have any questions, feel free to ask.")
      );
      console.log(chalk.green("Teacher: Let's have a productive day!"));
    }

    // If user chooses Student
    if (select === "Student") {
      const { student } = await inquirer.prompt({
        type: "input",
        name: "student",
        message: "Which student do you want to talk?",
      });

      // Finding the student
      let selectedStudent = person.students.find(
        (value) => value.name === student
      );

      // If student not found, add new student to the list
      if (!selectedStudent) {
        selectedStudent = new Student(student);
        person.addStudent(selectedStudent);
        console.log(
          chalk.yellow(
            `I'm ${chalk.bold.cyan(selectedStudent.name)}, and I'm good.`
          )
        );
      } else {
        console.log(
          chalk.yellow(
            `I'm ${chalk.bold.green(selectedStudent.name)}, and I'm doing well.`
          )
        );
      }

      // Additional messages for Student
      console.log(chalk.yellow(`${selectedStudent.name}: How was your day?`));
      console.log(
        chalk.yellow(`${selectedStudent.name}: I finished my homework.`)
      );
      console.log(
        chalk.yellow(
          `${selectedStudent.name}: I'm excited about the upcoming project.`
        )
      );
      console.log(
        chalk.yellow(`${selectedStudent.name}: Let's study together soon!`)
      );
    }

    // If user chooses Exit
    if (select === "Exit") {
      console.log(chalk.bold.magenta("Goodbye!"));
      process.exit();
    }
  } while (true);
};

programStart(person);
