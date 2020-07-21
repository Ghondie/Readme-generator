// function to generate markdown for README
function generateMarkdown(data) {
  return `# 
  Title:${data.Title}
  Description:${data.description}
  Table of contents:${data.table}
  Required installed files:${data.instalation}
  Aditional licenses:${data.license}
  Any test files:${data.tests}
  Any additional questions:${data.questions}

`;
}

module.exports = generateMarkdown;
