let valgt1 = "";
let valgt2 = "";
let teller = 0;

const brikker = document.querySelectorAll(".brikker .kort");

brikker.forEach((kort) => {
    kort.addEventListener("click", () => {
        if (!kort.classList.contains("sjekket") && !kort.classList.contains("valgt")) { // Passer på at ikke brukeren trykker på samme kort to ganger
            kort.classList.toggle("valgt");

            if (teller === 0) {
                valgt1 = kort.getAttribute("bilde");
                teller++;
            } else {
                valgt2 = kort.getAttribute("bilde");
                teller = 0;

                if (valgt1 === valgt2) {
                    const riktigkort = document.querySelectorAll(`.kort[bilde="${valgt1}"]`);
                    riktigkort.forEach((riktigkort) => {
                        riktigkort.classList.add("sjekket");
                        riktigkort.classList.remove("valgt");
                    });
                } else {
                    const kortfeil = document.querySelectorAll(".kort.valgt");

                    kortfeil.forEach((feilkort) => {
                        feilkort.classList.add("feil");
                    });

                    setTimeout(() => {
                        kortfeil.forEach((feilkort) => {
                            feilkort.classList.remove("feil");
                            feilkort.classList.remove("valgt");
                        });
                    }, 500);
                }
            }
        }
    });
});
