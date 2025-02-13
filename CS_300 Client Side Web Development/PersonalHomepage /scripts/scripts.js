// Ana Paula McCullagh 
//CS 300 Client Side Web Development
//Instructor: Yehuda Gutstein


document.addEventListener('DOMContentLoaded', (event) => {
    const aboutButton = document.getElementById('aboutButton');
    aboutButton.addEventListener('click', () => {
        alert('Hello! Thanks for visiting my about section.');
    });
});