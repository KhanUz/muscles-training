const musclesContainer = document.getElementById("musclesContainer")
const path2SVG = "./img/Muscles-simplified.svg";
const toggleThemeBtn = document.getElementById("toggleTheme")
const musclesNot = ['front_borders', 'rear_borders', 'front', 'rear', 'face']
const muscles = ['obliques', 'quads', 'lower_abs', 'upper_abs', 'biceps', 'side_delts', 'front_delts', 'upper_pecs', 'rear_delts', 'lower_pecs', 'middle_pecs', 'hamstrings', 'rhomboids', 'lower_back', 'hip_abductor', 'neck', 'upper_traps', 'lower_traps', 'forearms', 'triceps', 'glutes', 'calves', 'lats', 'hip_adductor']
async function main() {

    let muscleProperties = {
        "obliques": 92,
        "quads": 32,
        "lower_abs": 100,
        "upper_abs": 40,
        "biceps": 27,
        "side_delts": 62,
        "front_delts": 84,
        "upper_pecs": 26,
        "rear_delts": 52,
        "lower_pecs": 82,
        "middle_pecs": 57,
        "hamstrings": 80,
        "rhomboids": 44,
        "lower_back": 44,
        "hip_abductor": 81,
        "neck": 97,
        "upper_traps": 35,
        "lower_traps": 39,
        "forearms": 54,
        "triceps": 96,
        "glutes": 85,
        "calves": 44,
        "lats": 64,
        "hip_adductor": 92,
    }


    async function inject2html(where, what) {
        where.innerHTML = await (await fetch(what)).text();
    }
    function drawMuscles() {
        function getRedShade(percent) {
            function map(x, inMin, inMax, outMin, outMax) {
                return ((x - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
            }
            let sat = map(percent, 0, 100, 10, 100);
            let opacity = map(percent, 0, 100, 0.1, 1);
            return `hsla(0, ${sat}%, 50%, ${opacity})`;
        }
        musclesContainer.querySelectorAll("g").forEach(g => {

            let percent = muscleProperties[g.id]


            for (let i = 0; i < g.children.length; i++) {
                const muscle = g.children[i]
                muscle.style.fill = muscle.style.stroke = getRedShade(percent);

                if (!musclesNot.includes(g.id)) {
                    muscle.addEventListener('click', (e) => {
                        console.log(g.children);
                        Array.from(g.children).forEach(child => {
                            child.classList.toggle('selectedMuscle')
                            if (child.classList.contains('selectedMuscle')) {
                                child.style.fill = child.style.stroke = 'hsla(235, 73%, 60%, 1)';
                            }
                            else {
                                child.style.fill = child.style.stroke = getRedShade(percent);
                            }
                        });
                    })
                }
            }
        })
    }

    await inject2html(musclesContainer, path2SVG)
    drawMuscles()



}

main()




function events() {

    toggleThemeBtn.addEventListener('click', () => {
        document.body.dataset.bsTheme = document.body.dataset.bsTheme === "light" ? "dark" : "light"
    })
    console.log(document.body.dataset.bsTheme);


}

events()
