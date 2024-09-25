document.getElementById('blog-btn') 
  .addEventListener('click',function(event){
    event.preventDefault();
     console.log('Blog button clicked ! ');
     window.location.href = '/home.html'
  })