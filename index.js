    // Move JavaScript code to a separate JS file

    document.addEventListener("DOMContentLoaded", function () {
      const quoteTextElement = document.getElementById("quoteText");
      const quoteAuthorElement = document.getElementById("quoteAuthor");
      const newQuoteBtn = document.getElementById("newQuoteBtn");

      // Fetch a new quote from the API
      function fetchQuote() {
        fetch("https://quotes-api-self.vercel.app/quote")
          .then(response => response.json())
          .then(data => {
            const { quote, author } = data;
            quoteTextElement.textContent = quote;
            quoteAuthorElement.textContent = `- ${author}`;
          })
          .catch(error => {
            console.error("Error fetching quote:", error);
          });
      }

      // Generate a new quote on button click
      newQuoteBtn.addEventListener("click", fetchQuote);

      // Fetch an initial quote on page load
      fetchQuote();
    });
