//sliding effect
  document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.text-slide-auto');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('slide-in'); // Add class when in view
        } else {
          entry.target.classList.remove('slide-in'); // Optional: remove class when out of view
        }
      });
    });

    elements.forEach(element => {
      observer.observe(element); // Observe each element
    });
  });




//growing effect on profile image
  document.addEventListener("DOMContentLoaded", function() {
    const textContainer = document.querySelector('.profile');
    const imageElement = textContainer.querySelector('.grow-image');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          imageElement.classList.add('show'); // Add the 'show' class to trigger the grow animation
        }
      });
    });

    observer.observe(imageElement); // Observe the image element
  });


//growing effect on skills
  document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector('#scrollspyHeading4'); // The container to observe
    const columns = container.querySelectorAll('.col1'); // The columns to animate
  
    // Create Intersection Observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Trigger animation one by one with a delay
          columns.forEach((column, index) => {
            setTimeout(() => {
              column.classList.add('grow');  // Add grow class to trigger the animation
            }, index * 300);  // Delay of 300ms between each column
          });
        } else {
          // Reset the columns when they leave the viewport
          columns.forEach((column) => {
            column.classList.remove('grow');
          });
        }
      });
    }, {
      threshold: 0.5  // Trigger when 50% of the container is visible
    });
  
    // Observe the container
    observer.observe(container);
  });
  


  //Toogler Close Button
  const collapseElement = document.getElementById('navbarNavAltMarkup');
  const toggleButton = document.getElementById('toggleButton');
  const icon = document.getElementById('icon');
  
  // Add event listener for collapse show/hide events
  collapseElement.addEventListener('show.bs.collapse', () => {
      icon.classList.remove('bi-list');
      icon.classList.add('bi-x-lg'); // Change to 'close' icon
  });
  
  collapseElement.addEventListener('hide.bs.collapse', () => {
      icon.classList.remove('bi-x-lg');
      icon.classList.add('bi-list'); // Change back to 'plus' icon
  });


//closes collapse upon clicking item
  document.querySelectorAll('.nav-link').forEach(item => {
    item.addEventListener('click', () => {
        let collapseElement = document.getElementById('navbarNavAltMarkup');
        new bootstrap.Collapse(collapseElement, { toggle: false }).hide(); // Close the collapse
    });
});




