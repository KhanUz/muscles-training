
const musclesContainer = document.getElementById("musclesContainer")
const path2SVG = "./img/Exewrcise API.svg";
const toggleThemeBtn = document.getElementById("toggleTheme")
const musclesNot = new Set(['front_borders', 'rear_borders', 'front', 'rear', 'face', "neck"])
// const muscles = ['obliques', 'quads', 'lower_abs', 'upper_abs', 'biceps', 'side_delts', 'front_delts', 'upper_pecs', 'rear_delts', 'lower_pecs', 'middle_pecs', 'hamstrings', 'rhomboids', 'lower_back', 'hip_abductor', 'neck', 'upper_traps', 'lower_traps', 'forearms', 'triceps', 'glutes', 'calves', 'lats', 'hip_adductor']
const muscleInfoArea = document.getElementById("muscleInfo")
let muscles = new Set([
    "abdominals",
    "quadriceps",
    "biceps",
    "shoulders",
    "chest",
    "hamstrings",
    "middle_back",
    "lower_back",
    "abductor",
    "neck",
    "traps",
    "forearms",
    "triceps",
    "glutes",
    "calves",
    "lats",
    "adductors"
])

const filterType = document.getElementById("filterType")
const filterName = document.getElementById("filterName")
const filterDifficulty = document.getElementById("filterDifficulty")


async function main() {




    async function inject2html(where, what) {
        where.innerHTML = what;
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

            let percent = 40



            for (let i = 0; i < g.children.length; i++) {
                const muscle = g.children[i]


                if (!musclesNot.has(g.id)) {
                    muscle.style.fill = muscle.style.stroke = getRedShade(percent);
                    muscle.addEventListener('click', selectMuscle)
                }
            }
        })
        console.log(muscles);

    }

    async function selectMuscle(e) {
        str = '';
        try {
            const muscleGroup = e.target.parentNode.id


            let req = `muscle=${muscleGroup}&type=${filterType.value}&name=${filterName.value}&difficulty=${filterDifficulty.value}`

            const musclesFromDb = await (await fetch(`https://api.api-ninjas.com/v1/exercises?${req}`, {
                method: "GET", headers: {
                    'X-Api-Key': 'Blu4ALbRSrWbdW989NsDJ4a3TgsHFjn9sisBvL2e'
                }
            })).json()

            str = `    <div class="p-4">
                        <div>
                            <p class="h5 text-capitalize" id="muscleName">
                                ${musclesFromDb[0].muscle}
                            </p>
                            <!-- <p class="" id="muscleDescr">
                                ${musclesFromDb[0].muscle_description}
                            </p> -->
                        </div>
                        <div class="d-grid gap-4">`

            for (const exr of musclesFromDb) {
                str +=
                    `
                            <div class="card ">
                                <div class="card-body ">
                                    <h5 class="card-title ">${exr.name}</h5>
                                    <p class="card-text m-0"><small class="text-muted">Difficulty : ${exr.difficulty ? exr.difficulty : "Not Specified"}</small></p>
                                    <p class="card-text m-0"><small class="text-muted">Equipment : ${exr.equipment ? exr.equipment : "Not Specified"}</small></p>
                                    <p class="card-text m-0"><small class="text-muted">Type : ${exr.type ? exr.type : "Not Specified"}</small></p>
                                    <p class="card-text mt-1">${exr.instructions ? exr.instructions : "Not Specified"}</p>
                                </div>
                            </div>
                            
                        `
            }
            str += `</div> </div >`
        } catch (error) {
            console.log(error);
            str = `<div class="card text-center border-secondary-subtle bg-light">
    <div class="card-body">
      <h5 class="card-title text-muted">
        <i class="bi bi-emoji-frown me-2"></i> No Exercises Found
      </h5>
      <p class="card-text text-secondary">Try adjusting your filters or search terms and try again.</p>
    </div>
  </div>`
        }
        finally {
            inject2html(muscleInfoArea, str)

        }
    }

    inject2html(musclesContainer, await (await fetch(path2SVG)).text())
    drawMuscles()



}

main()




function togleTheme() {

    toggleThemeBtn.addEventListener('click', () => {
        document.body.dataset.bsTheme = document.body.dataset.bsTheme === "light" ? "dark" : "light"
    })


}

togleTheme()
