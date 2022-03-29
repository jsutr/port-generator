// this file will generate the markdown for the READme
function generateMarkdown(data) {
    return `# ${data.title}

    ---

    <a href="https://img.shields.io/badge/License-${data.license[0]}-brightgreen"><img src="https://img.shields.io/badge/License-${data.license[0]}-brightgreen"></a>

    ## Table of Contents
    - [Description](#description)
    - [Installation](#install)
    - [Usage](#usage)
    - [Contribution](#contribution)
    - [Test Procedure](#test-procedure)
    - [Contact Info](#contact-info)

    ### Description
    ${data.descripiton}

    ### Install
    ${data.install}

    ### Usage
    ${data.usage}

    ### Contribution
    ${data.contribution}

    ### Test-Procedure
    ${data.testing}

    ### Contact-Info
    [Github Profile](https://github.com/${data.username})
    ${data.email}

    `;
}

//export 
module.exports = generateMarkdown;