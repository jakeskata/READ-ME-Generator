// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenselink=""
  if(license === "MIT"){
    licenselink="[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }else if (license === "Apache 2.0"){
    licenselink= "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  }else if (license === "bsd"){
    licenselink = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
  }
  return licenselink
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # TITLE
  ## ${data.title}
  ${renderLicenseBadge(data.license)}
  
  # DESCRIPTION
  ## ${data.description}

  # INSTALLATION
  ## ${data.installation}

  # USAGE
  ## ${data.usage}

  # TEST
  ## ${data.test}

  # Contribution
  ## ${data.contribution}

  # license
  ## ${renderLicenseBadge(data.license)}

  # Concerns:
  ## [E-mail]($mailto:${data.email})
  ## [Github](https://github.com/${data.github})
`;
}

module.exports = generateMarkdown;
