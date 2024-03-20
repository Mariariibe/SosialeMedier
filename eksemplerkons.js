document.addEventListener("DOMContentLoaded", function () {
    var timelineComponents = document.querySelectorAll('.timeline__component');

// Sjekker om elementene er synlig hos brukeren
// getBoundingClient tar tak i rektangelene rundt elementet

    function isInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
// Gjør elementet synlig hvis isInViewport er true
    function animateTimelineComponents() {
        timelineComponents.forEach(function (component) {
            if (isInViewport(component)) {
                component.style.opacity = 1;
                component.style.transform = 'translateY(0)';
            }
        });
    }

    animateTimelineComponents();

    window.addEventListener('scroll', function () {
        animateTimelineComponents();
    });
});


// Ikke i bruk, ta i bruk hvis vi skal lage sånn at det popper opp et bildet 
/*
timelineComponents.addEventListener("onclick", function(){
    
})
*/

