
// JavaScript for "Les mer"
document.addEventListener("DOMContentLoaded", function () {

    var variationSections = document.querySelectorAll('.variation2');
    var variationSections = document.querySelectorAll('.variation2');

    variationSections.forEach(function (section) {
        var paragraphs = section.querySelectorAll('p.hidden');

        paragraphs.forEach(function (paragraph) {
            var button = document.createElement('button');
            button.innerText = 'Les mer';
            button.addEventListener('click', function () {
                // Endre visningsstatus
                paragraph.classList.toggle('hidden');
                // Endre knapptekst
                button.innerText = paragraph.classList.contains('hidden') ? 'Les mer' : 'Les mindre';
            });

            // Ny knapp etter hvert avsnitt
            paragraph.insertAdjacentElement('afterend', button);
        });
    });
});
