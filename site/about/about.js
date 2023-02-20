fetch('/assets/resume.json')
  .then( response => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then( json => initialize(json) )
  .catch( err => console.error(`Fetch problem: ${err.message}`) );


function initialize(resume) {
    const resumeDisplay = document.querySelector('pre');
    const resumeParse = JSON.parse(resume)

    updateDisplay();
}

function updateDisplay() {
    resumeDisplay.innerHTML = resumeParse.title;
  }