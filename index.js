const { error } = require('console');
const fs = require('fs');
const inquirer = require('inquirer');
const generateReadme = require('./utils/markdownGen.js');
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Provide a project description.',
        name: 'description'
    },
    {
        type: 'input',
        message: 'What steps are needed to install?',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'How should this project be used?',
        name: 'usage'
    },
    {
        type: 'list',
        message: 'What type of license will you need?',
        name: 'license',
        choices: ['MIT', 'ISC', 'MPL', 'None']
    },
    {
        type: 'input',
        message: 'What must others do to contribute to your project?',
        name: 'contributing'
    },
    {
        type: 'input',
        message: 'How do you test it?',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email'
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github'
    }
];

function writeToFileName(content){
    return new Promise((resolve, reject) => {
        fs.writeFile('./README.md', content, err => {
            if(err){
                reject(err);
                return;
            }
            resolve({ok: true});
        });
    });
};

function init(){
    return inquirer.prompt(questions)
        .then((data) => {
            let content = generateReadme(data)
            writeToFileName(content)
            console.log('You have successfully created a README file.')
        })
        .catch((error) => {
            console.log(error)
        })
};

init();