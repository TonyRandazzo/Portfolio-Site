function addFadeInAnimation(elementId) {
    const heading = document.querySelector(elementId);
    heading.classList.add('fadeInLeft');

    setTimeout(() => {
        heading.classList.remove('fadeInLeft');
    }, 1000);
}

// Seleziona i pulsanti "up" per ciascuna sezione e aggiungi l'evento di click
const upButtons = document.querySelectorAll('a[href="#Front-End"], a[href="#Back-End"], a[href="#Game Dev"]');
upButtons.forEach((button) => {
    button.addEventListener('click', function(event) {
        // Ottieni l'ID dell'elemento corrispondente al pulsante cliccato
        const sectionId = event.target.getAttribute('href');
        addFadeInAnimation(sectionId);
    });
});

const barElements = document.querySelectorAll('.elements [class*=bar]');
const textContents = {
    'html-bar': 'HTML',
    'css-bar': 'CSS',
    'js-bar': 'JavaScript',
    'php-bar': 'PHP',
    'mySQL-bar': 'MySQL',
    'Godot-bar': 'Godot',
    'UE-bar': 'Unreal Engine',
    'Blender-bar': 'Blender'
};

barElements.forEach(bar => {
    const className = bar.classList[0];
    const text = document.createElement('div');
    text.textContent = textContents[className];
    text.classList.add('bar-text');
    bar.parentNode.insertBefore(text, bar);
});

document.addEventListener("DOMContentLoaded", function () {
    var buttons = document.querySelectorAll("button");

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            buttons.forEach(function (b) {
                b.parentNode.classList.remove("button-expanded");
            });

            this.parentNode.classList.add("button-expanded");
        });
    });
});
