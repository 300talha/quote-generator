document.addEventListener('DOMContentLoaded', function() {
  const generateBtn = document.getElementById('generateBtn');
  const quoteElement = document.getElementById('quote');

  generateBtn.addEventListener('click', function() {
    fetch('https://quotes-api-self.vercel.app/quote')
      .then(response => response.json())
      .then(data => {
        quoteElement.textContent = data.quote;
      })
      .catch(error => {
        console.log(error);
        quoteElement.textContent = 'Failed to fetch a quote.';
      });
  });
});
