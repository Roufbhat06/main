//  CSS FOR NAVBAR------------------------
const navbarToggle = document.querySelector('.navbar-toggle');
const navbarNav = document.querySelector('.navbar-nav');

navbarToggle.addEventListener('click', function() {
  navbarNav.classList.toggle('active');
});
//  CSS FOR NAVBAR------------------------




// FOR NEWS PAGE-------------------------------------------
// Simulated array of posts
var posts = [
    {
        title: "Article Title 1",
        image: "post_image_1.jpg",
        content: "Article content goes here...",
        author: "John Doe",
        published: "May 27, 2023"
    },
    {
        title: "Article Title 2",
        image: "post_image_2.jpg",
        content: "Article content goes here...",
        author: "Jane Smith",
        published: "May 26, 2023"
    },
    // Add more post objects here as needed
];

// Function to dynamically generate the post HTML
function generatePostHTML(post) {
    var postHTML = '<article>';
    postHTML += '<h3>' + post.title + '</h3>';
    postHTML += '<img src="' + post.image + '" alt="Post Image">';
    postHTML += '<p>' + post.content + '</p>';
    postHTML += '<p>Author: ' + post.author + ' | Published: ' + post.published + '</p>';
    postHTML += '</article>';
    return postHTML;
}

// Function to insert posts into the HTML
function insertPosts() {
    var postSection = document.getElementById('post-section');
    for (var i = 0; i < posts.length; i++) {
        var postHTML = generatePostHTML(posts[i]);
        postSection.innerHTML += postHTML;
    }
}

// Call the insertPosts function to load the posts
insertPosts();

// FOR NEWS PAGE-------------------------------------------






// ---------------FOR UNLIMITED POSTS-----------------------------------------------------
 // Array of posts
 var posts = [
    {
      title: "Getting Started with HTML",
      content: "HTML stands for HyperText Markup Language..."
    },
    {
      title: "Introduction to CSS",
      content: "CSS stands for Cascading Style Sheets..."
    },
    {
      title: "JavaScript Basics",
      content: "JavaScript is a programming language..."
    }
    // Add more posts here
  ];
  
  // Function to create and append posts
  function createPosts() {
    var container = document.getElementById("posts-container");
    
    posts.forEach(function(post) {
      var postElement = document.createElement("div");
      postElement.className = "post";
      
      var titleElement = document.createElement("h2");
      titleElement.textContent = post.title;
      
      var contentElement = document.createElement("p");
      contentElement.textContent = post.content;
      
      postElement.appendChild(titleElement);
      postElement.appendChild(contentElement);
      
      container.appendChild(postElement);
    });
  }
  
  // Call the function to create posts
  createPosts();
//   FOR NEWS Page--------------------------------------------------------------
 // Array of news articles
 var newsArticles = [
    {
      category: "Breaking News",
      title: "News Article Title 1",
      content: "Article content goes here..."
    },
    {
      category: "Breaking News",
      title: "News Article Title 2",
      content: "Article content goes here..."
    },
    {
      category: "Latest News",
      title: "News Article Title 3",
      content: "Article content goes here..."
    },
    {
      category: "Latest News",
      title: "News Article Title 4",
      content: "Article content goes here..."
    },
    // Add more news articles here
  ];

  // Function to create and append news articles
  function createNewsArticles() {
    var container = document.getElementById("news-container");

    newsArticles.forEach(function (article) {
      var categorySection = container.querySelector(
        'section[data-category="' + article.category + '"]'
      );

      if (!categorySection) {
        // Create a new section for the category if it doesn't exist
        categorySection = document.createElement("section");
        categorySection.setAttribute("data-category", article.category);
        categorySection.innerHTML = "<h1>" + article.category + "</h1>";
        container.appendChild(categorySection);
      }

      var articleElement = document.createElement("article");
      articleElement.innerHTML = `
        <h2>${article.title}</h2>
        <p>${article.content}</p>
        <a href="#">Read more</a>
      `;

      categorySection.appendChild(articleElement);
    });
  }

  // Call the function to create news articles
  createNewsArticles();
//   for job------------------------------------------------
// Function to handle click event on "View Details" links
function handleViewDetails(event) {
    event.preventDefault();
    // Get the job details or perform any desired action
    console.log("View Details clicked");
  }

  // Add event listeners to "View Details" links
  var viewDetailsLinks = document.querySelectorAll(".job-listings li a");
  viewDetailsLinks.forEach(function (link) {
    link.addEventListener("click", handleViewDetails);
  });

  // Function to handle testimonial slideshow
  function testimonialSlideshow() {
    var testimonials = document.querySelectorAll(".testimonial");
    var currentTestimonial = 0;

    function showTestimonial(index) {
      testimonials.forEach(function (testimonial) {
        testimonial.style.display = "none";
      });

      testimonials[index].style.display = "block";
    }

    function nextTestimonial() {
      currentTestimonial = (currentTestimonial + 1) % testimonials.length;
      showTestimonial(currentTestimonial);
    }

    setInterval(nextTestimonial, 5000); // Change testimonial every 5 seconds
  }

  // Call the testimonial slideshow function
  testimonialSlideshow();



  
  // java for index---------------------------------------------
  // Sample data for posts (replace with your actual data source)
  const posts = [
    { title: "Article Title 1", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { title: "Article Title 2", content: "Curabitur pellentesque, elit ut lacinia tristique, ligula velit euismod elit." },
    // Add more posts as needed
  ];
  
  // Function to generate post elements dynamically
  function generatePosts() {
    const postContainer = document.getElementById("postContainer");
    
    posts.forEach((post) => {
      const article = document.createElement("div");
      article.classList.add("article");
      
      const title = document.createElement("h3");
      title.textContent = post.title;
      
      const content = document.createElement("p");
      content.textContent = post.content;
      
      article.appendChild(title);
      article.appendChild(content);
      
      postContainer.appendChild(article);
    });
  }
  
  // Call the function to generate the posts
  generatePosts();