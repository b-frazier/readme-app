// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license){
    let badge = '';
    if(license === 'MIT'){
      badge = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
    } else if (license === 'ISC'){
      badge = '![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)'
    } else if (license === 'MPL'){
      badge = '![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)'
    } else {
      badge = ''
    }
    return badge
  };
  
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license){
    let link = '';
    if(license === 'MIT'){
      link = 'https://opensource.org/licenses/MIT'
    } else if (license === 'ISC'){
      link = 'https://opensource.org/licenses/ISC'
    } else if (license === 'MPL'){
      link = 'https://opensource.org/licenses/MPL-2.0'
    } else {
      link = ''
    }
    return link
  }
  
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license){
    let licenseSection = '';
    if(licenseSection === 'None'){
      licenseSection = '';
    } else {
      licenseSection = `${license}`
    }
    return licenseSection
  };
  
  // TODO: Create a function to generate markdown for README
  function generateReadme(data){
    return `# ${data.title}
  
    ## Description
    ${data.description}
  
    ## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)
  
    ## Installation
    ${data.installation}
  
    ## Usage
    ${data.usage}
  
    ## License
    ${renderLicenseSection(data.license)} ${renderLicenseBadge(data.license)}<br>
    ${renderLicenseLink(data.license)}
  
    ## Contributing
    ${data.contributing}
  
    ## Tests
    ${data.tests}
  
    ## Questions
    Contact information for any questions:<br>
    ${data.email}<br>
    https://github.com/${data.github}/
  `;
  } 
  
  module.exports = generateReadme;