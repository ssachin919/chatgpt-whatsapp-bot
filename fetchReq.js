fetch('https://example.com/wp-json/wp/v2/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Basic',
  },
  body: JSON.stringify({
    title: 'My New Blog Post',
    content: 'This is the content of my new blog post',
    status: 'publish',
  }),
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error))