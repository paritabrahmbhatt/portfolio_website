document.addEventListener("DOMContentLoaded", function() {
    // Display the about section by default
    document.getElementById("about").classList.remove("hidden");

    // Smooth scrolling for navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    

    // Function to update navigation links based on scroll position
    function updateNav() {
        // Get the current scroll position
        const scrollPosition = window.scrollY;

        // Get all sections
        const sections = document.querySelectorAll('main > .container > section');

        // Loop through sections to find the one in view
        for (let i = 0; i < sections.length; i++) {
            const section = sections[i];
            const sectionTop = section.offsetTop - 50; // Adjusted for navbar height
            const sectionBottom = sectionTop + section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                // Update the corresponding navigation link
                const sectionId = section.getAttribute('id');
                document.querySelectorAll('.nav-link').forEach(link => {
                    if (link.getAttribute('href').substring(1) === sectionId) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                });
                break;
            }
        }
    }


    // Update navigation on scroll
    window.addEventListener('scroll', updateNav);
    // Update navigation on page load
    updateNav();
});
document.addEventListener("DOMContentLoaded", function() {
    // Function to adjust margin based on the width of the fixed navbar (only for large screens)
    function adjustMargin() {
        const navbarWidth = document.querySelector('.navbar').offsetWidth;
        const contentSections = document.querySelectorAll('.resume-section');

        // Check if the screen width is greater than or equal to 992px (Bootstrap's lg breakpoint)
        if (window.innerWidth >= 992) {
            let marginValue = navbarWidth;
            // If the screen width is larger than a certain threshold, reduce the margin
            marginValue *= 0.5; // Adjust the reduction factor as needed
            // Loop through each content section and add left margin
            contentSections.forEach(section => {
                section.style.marginLeft = marginValue + 'px';
            });
        } else {
            // If the screen width is smaller than 992px, remove the left margin from content sections
            contentSections.forEach(section => {
                section.style.marginLeft = '0';
            });
        }
    }

    // Call the adjustMargin function when the page is loaded and when it's resized
    window.addEventListener('load', adjustMargin);
    window.addEventListener('resize', adjustMargin);
});
