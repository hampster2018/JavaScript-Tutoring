// Navigate to a different HTML page
window.location.href = "new-page.html";

// Get the element with the ID "myHeading"
let myHeading = document.getElementById("myHeading");

// Change the text of the element
myHeading.textContent = "New heading text";


// Get a reference to the form element
let form = document.querySelector("form");

// Attach an event listener to the form's "submit" event
form.addEventListener("submit", function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the form data
  let formData = new FormData(form);

  // Send an HTTP POST request to the server
  fetch("/api/submit-form", {
    method: "POST",
    body: formData
  })
  .then(response => {
    if (response.ok) {
      // Handle the successful response
      console.log("Form submitted successfully");
    } else {
      // Handle the error response
      console.error("Error submitting form");
    }
  })
  .catch(error => {
    // Handle the network error
    console.error("Network error:", error);
  });
});


// Get a reference to the image element
let img = document.querySelector("img");

// Fetch the image from the API
fetch("https://example.com/api/image")
  .then(response => {
    if (response.ok) {
      // Convert the response body to a Blob object
      return response.blob();
    } else {
      throw new Error("Failed to fetch image");
    }
  })
  .then(blob => {
    // Create a URL for the Blob object
    let url = URL.createObjectURL(blob);

    // Set the image source to the URL
    img.src = url;
  })
  .catch(error => {
    console.error(error);
  });
