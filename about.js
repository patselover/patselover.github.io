const resumeDisplay = document.querySelector('pre');

// fetch resume 
function updateDisplay(resume) {

    // Call `fetch()`, passing in the URL.
    fetch('/assets/resume.json')
        // fetch() returns a promise. When we have received a response from the server,
        // the promise's `then()` handler is called with the response.
        .then( response => {
        // Our handler throws an error if the request did not succeed.
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        // Otherwise (if the response succeeded), our handler fetches the response
        // as json by calling response.json(), and immediately returns the promise
        // returned by `response.json()`.
        return response.json();
        })
        // When response.text() has succeeded, the `then()` handler is called with
        // the text, and we copy it into the `resumeDisplay` box.
        .then( text => resumeDisplay.textContent = text )
        // Catch any errors that might happen, and display a message
        // in the `resumeDisplay` box.
        .catch( error => resumeDisplay.textContent = `Could not fetch resume: ${error}`);

}

