async function sendRequest() {
    const url = "https://jsonplaceholder.typicode.com/posts";
  
    // Send POST request to create a new post
    const postData = {
      title: "Example post title",
      body: "This is an example post body.",
      userId: 1
    };
  
    await fetch(url, {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log("New post created:", data);
  
      // Send GET request to retrieve all posts
      fetch(url)
      .then(response => response.json())
      .then(posts => {
        console.log("All posts:", posts);
        document.getElementById("demo").innerHTML = posts[0]['title'];
      })
      .catch(error => console.error(error));
    })
    .catch(error => console.error(error));
  }

  sendRequest();