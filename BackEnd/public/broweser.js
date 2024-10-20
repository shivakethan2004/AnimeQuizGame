const questionDom = document.querySelector('.Question');

const showQuestion = async () => {
    questionDom.innerHTML = '<p>Loading question...</p>'; // Show loading state
    try {
        const response = await fetch('/api/v1/questions/level1');
    

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json(); // Parse the JSON response
console.log({data})
        // const { level1 } = data; // Adjust based on your API structure

        // Destructure the question properties
        const { words, description, type, hint } = data;

        const questionHtml = `<div class="single-question">
                                <h5>Question: ${description}</h5> 
                                <h5>Answer: ${words}</h5> <!-- Join array for display -->
                                <h5>Type: ${type}</h5>
                                <h5>Hint: ${hint}</h5> 
                              </div>`;
        
        questionDom.innerHTML = questionHtml; // Insert the question's HTML into the webpage
    } catch (error) {
        questionDom.innerHTML = '<p>Error fetching the question. Please try again later.</p>'; // User-friendly error message
        console.error('Error fetching the question:', error);
    }
};

document.addEventListener('DOMContentLoaded', showQuestion); // Call the function after the DOM is loaded
