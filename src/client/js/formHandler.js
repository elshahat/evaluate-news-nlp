const fetch = require('node-fetch');

const loading = document.getElementById('loading');
const searchResults = document.getElementById('search-results');
const formSubmit = document.getElementById('form-submit');
const polarity = document.getElementById('polarity');
const agreement = document.getElementById("agreement");
const subjectivity = document.getElementById("subjectivity");
const confidence = document.getElementById("confidence");
const irony = document.getElementById("irony");
const inputValue = document.getElementById("url");

const handleSubmit = (event) => {
   event.preventDefault();

   const getPolarityAsText = (value) => {
      switch (value) {
         case 'P+':
            return 'Strong Positive';
         case 'P':
            return 'Positive';
         case 'NEW':
            return 'Neutral';
         case 'N':
            return 'Negative';
         case 'N+':
            return 'Strong Negative';
         case 'NONE':
            return 'No Sentiment';
         default:
            return 'No Data';
      }
   }

   if (Client.checkForURL(inputValue.value)) {
      // Show the loading and hide the results and disable the submit button
      loading.style.display = 'block';
      searchResults.style.display = 'none';
      formSubmit.setAttribute('disabled', 'true');

      fetch('http://localhost:8081/api', {
         method: 'POST',
         body: JSON.stringify({ url: inputValue.value }),
         headers: { 'Content-Type': 'application/json' }
      }).then(res => res.json()).then(data => {
         // Hide the loading and display the results and allow the submit button
         loading.style.display = 'none';
         searchResults.style.display = 'block';
         formSubmit.removeAttribute('disabled');

         polarity.innerHTML = `<div class="title">Polarity:</div><div class="result">${getPolarityAsText(data.score_tag)}</div>`;
         agreement.innerHTML = `<div class="title">Agreement:</div><div class="result">${data.agreement}</div>`;
         subjectivity.innerHTML = `<div class="title">Subjectivity:</div><div class="result">${data.subjectivity}</div>`;
         confidence.innerHTML = `<div class="title">Confidence:</div><div class="result">${data.confidence}</div>`;
         irony.innerHTML = `<div class="title">Irony:</div><div class="result">${data.irony}</div>`;
         inputValue.value = '';
      }).catch(error => console.log('error', error));
   } else {
      alert('The URL is invalid, please try again with a valid URL.');
   }
}

export { handleSubmit }
