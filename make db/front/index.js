const sendBtn = document.getElementById("sendBtn")

const categoryInput = document.getElementById("category")
const videoUrlInput = document.getElementById("video_url")
const instructionsInput = document.getElementById("instructions")
const difficultyInput = document.getElementById("difficulty")
const equipmentInput = document.getElementById("equipment")
const exerciseNameInput = document.getElementById("exercise_name")
const muscleDescriptionInput = document.getElementById("muscle_description")
const muscleInput = document.getElementById("muscle")

// 
async function sendValues() {
    await fetch("/api/addExercise", {
        method: "POST",
        "content-type": "application/json",
        // body: JSON.stringify({
        //     category: categoryInput.value,
        //     video_url: videoUrlInput.value,
        //     instructions: instructionsInput.value,
        //     difficulty: difficultyInput.value,
        //     equipment: equipmentInput.value,
        //     exercise_name: exerciseNameInput.value,
        //     muscle_description: muscleDescriptionInput.value,
        //     muscle: muscleInput.value
        // })
        body: JSON.stringify({
            category: "Strength",
            instructions: "Perform 3 sets of 10 reps with proper form.",
            difficulty: "Intermediate",
            equipment: "Dumbbells",
            exercise_name: "Bicep Curl",
            muscle_description: "Targets the biceps brachii muscles in the upper arm.",
            muscle: "biceps"

        })
    })
}



sendBtn.addEventListener("click", sendValues)




const obj = [
    {
        "category": "strength",
        "instructions": "To target your biceps, perform a dumbbell bicep curl exercise. Stand with your feet shoulder-width apart and hold a dumbbell in each hand with your palms facing forward. Keeping your upper arms still, bend your elbows to curl the dumbbells up towards your shoulders. Lower the dumbbells back down to the starting position and repeat for12-15 reps.",
        "difficulty": "beginner",
        "equipment": "dumbbell",
        "exercise_name": "Dumbbell Bicep Curls",
        "muscle_description": "The biceps are a pair of muscles located in the front of your upper arm, consisting of the biceps brachii and brachialis. These muscles are responsible for elbow flexion, forearm supination, and shoulder flexion.",
        "muscle": "biceps"
    },
    {
        "category": "strength",
        "instructions": "To target your biceps, perform a barbell curl exercise. Stand with your feet shoulder-width apart and hold a barbell with your hands shoulder-width apart. Keeping your upper arms still, bend your elbows to curl the barbell up towards your shoulders. Lower the barbell back down to the starting position and repeat for12-15 reps.",
        "difficulty": "intermediate",
        "equipment": "barbell",
        "exercise_name": "Barbell Curls",
        "muscle_description": "The biceps play a key role in movements like curling, lifting, and pulling, and are essential for forearm supination and elbow flexion.",
        "muscle": "biceps"
    },
    {
        "category": "strength",
        "instructions": "To target your biceps, perform a preacher curl exercise. Sit on a preacher curl bench with your arms resting on the pad. Hold a dumbbell in each hand with your palms facing forward. Keeping your upper arms still, bend your elbows to curl the dumbbells up towards your shoulders. Lower the dumbbells back down to the starting position and repeat for12-15 reps.",
        "difficulty": "intermediate",
        "equipment": "dumbbell",
        "exercise_name": "Preacher Curls",
        "muscle_description": "The biceps are responsible for movements like flexion of the elbow and supination of the forearm, making them essential for grip strength and forearm stability.",
        "muscle": "biceps"
    },
    {
        "category": "strength",
        "instructions": "To target your biceps, perform a hammer curl exercise. Stand with your feet shoulder-width apart and hold a dumbbell in each hand with your palms facing towards your body. Keeping your upper arms still, bend your elbows to curl the dumbbells up towards your shoulders. Lower the dumbbells back down to the starting position and repeat for12-15 reps.",
        "difficulty": "intermediate",
        "equipment": "dumbbell",
        "exercise_name": "Hammer Curls",
        "muscle_description": "The biceps help to control the movement of your forearm and elbow, and are essential for movements like lifting and curling.",
        "muscle": "biceps"
    },
    {
        "category": "strength",
        "instructions": "To target your biceps, perform a concentration curl exercise. Sit on a bench with your legs apart and hold a dumbbell in one hand with your arm resting on your thigh. Keeping your upper arm still, bend your elbow to curl the dumbbell up towards your shoulder. Lower the dumbbell back down to the starting position and repeat on the other arm.",
        "difficulty": "beginner",
        "equipment": "dumbbell",
        "exercise_name": "Concentration Curls",
        "muscle_description": "The biceps are a critical component of your upper arm muscles, and play a key role in movements like curling and lifting.",
        "muscle": "biceps"
    }
    , {
        "category": "strength",
        "instructions": "To target your upper abs, perform a crunch exercise. Lie on your back with your knees bent and feet flat. Lift your shoulders off the ground, curling up towards your knees. Hold for a brief moment and then lower back down to the starting position. Repeat for12-15 reps.",
        "difficulty": "beginner",
        "equipment": "bodyweight",
        "exercise_name": "Crunches",
        "muscle_description": "The upper abs are a part of the rectus abdominis muscle, which runs along the front of your abdomen. These muscles help to stabilize your core and maintain good posture.",
        "muscle": "upper_abs"
    },
    {
        "category": "strength",
        "instructions": "To target your upper abs, perform an incline bench crunch exercise. Lie on an incline bench with your knees bent and feet flat. Lift your shoulders off the bench, curling up towards your knees. Hold for a brief moment and then lower back down to the starting position. Repeat for12-15 reps.",
        "difficulty": "intermediate",
        "equipment": "incline bench",
        "exercise_name": "Incline Bench Crunches",
        "muscle_description": "The upper abs play a key role in movements like crunches, sit-ups, and planks, and are essential for core stability and strength.",
        "muscle": "upper_abs"
    },
    {
        "category": "strength",
        "instructions": "To target your upper abs, perform a Russian twist exercise. Sit on the floor with your knees bent and feet flat. Lean back slightly and hold a weight or medicine ball in front of your chest. Twist your torso to the left, touching the weight to the ground beside you. Twist to the right, touching the weight to the ground on the other side. Continue alternating sides for12-15 reps.",
        "difficulty": "intermediate",
        "equipment": "dumbbell or medicine ball",
        "exercise_name": "Russian Twist",
        "muscle_description": "The upper abs help to control the movement of your torso and maintain good posture, especially during rotational movements.",
        "muscle": "upper_abs"
    },
    {
        "category": "strength",
        "instructions": "To target your upper abs, perform a bicycle crunch exercise. Lie on your back with your hands behind your head and legs lifted and bent at a 90-degree angle. Alternate bringing your elbow to the opposite knee, as if pedaling a bicycle. Continue for12-15 reps on each side.",
        "difficulty": "beginner",
        "equipment": "bodyweight",
        "exercise_name": "Bicycle Crunches",
        "muscle_description": "The upper abs are responsible for movements like flexion, extension, and rotation of the torso, making them essential for core stability and strength.",
        "muscle": "upper_abs"
    },
    {
        "category": "strength",
        "instructions": "To target your upper abs, perform a decline bench crunch exercise. Lie on a decline bench with your knees bent and feet flat. Lift your shoulders off the bench, curling up towards your knees. Hold for a brief moment and then lower back down to the starting position. Repeat for12-15 reps.",
        "difficulty": "intermediate",
        "equipment": "decline bench",
        "exercise_name": "Decline Bench Crunches",
        "muscle_description": "The upper abs help to control the movement of your torso and maintain good posture, especially during movements that involve flexion and extension.",
        "muscle": "upper_abs"
    }
    ,

    {
        "category": "strength",
        "instructions": "To target your lower abs, perform a reverse crunch exercise. Lie on your back with your arms extended overhead and legs straight. Lift your hips off the ground, squeezing your lower abs. Hold for a brief moment and then lower back down to the starting position. Repeat for12-15 reps.",
        "difficulty": "beginner",
        "equipment": "bodyweight",
        "exercise_name": "Reverse Crunch",
        "muscle_description": "The lower abs are a part of the rectus abdominis muscle, which runs along the front of your abdomen. These muscles help to stabilize your core and maintain good posture.",
        "muscle": "lower_abs"
    },
    {
        "category": "strength",
        "instructions": "To target your lower abs, perform a hanging leg raise exercise. Hang from a pull-up bar with your hands shoulder-width apart. Lift your legs straight up towards the ceiling, then lower them back down to the starting position. Repeat for12-15 reps.",
        "difficulty": "intermediate",
        "equipment": "pull-up bar",
        "exercise_name": "Hanging Leg Raise",
        "muscle_description": "The lower abs play a key role in movements like crunches, leg raises, and planks, and are essential for core stability and strength.",
        "muscle": "lower_abs"
    },
    {
        "category": "strength",
        "instructions": "To target your lower abs, perform a draw-ins exercise. Lie on your back with your knees bent and feet flat. Engage your lower abs by drawing your belly button towards your spine. Hold for5-10 seconds and release. Repeat for12-15 reps.",
        "difficulty": "beginner",
        "equipment": "bodyweight",
        "exercise_name": "Draw-Ins",
        "muscle_description": "The lower abs help to control the movement of your pelvis and lower back, and are essential for maintaining good posture and preventing lower back pain.",
        "muscle": "lower_abs"
    },
    {
        "category": "strength",
        "instructions": "To target your lower abs, perform a flutter kick exercise. Lie on your back with your arms extended overhead and legs straight. Lift your legs off the ground and perform a fluttering motion, keeping your lower abs engaged. Repeat for12-15 reps.",
        "difficulty": "intermediate",
        "equipment": "bodyweight",
        "exercise_name": "Flutter Kicks",
        "muscle_description": "The lower abs are a critical component of your core muscles, and play a key role in maintaining stability and balance.",
        "muscle": "lower_abs"
    },
    {
        "category": "strength",
        "instructions": "To target your lower abs, perform a pelvic tilt exercise. Lie on your back with your knees bent and feet flat. Tilt your pelvis upwards, squeezing your lower abs. Hold for a brief moment and then release. Repeat for12-15 reps.",
        "difficulty": "beginner",
        "equipment": "bodyweight",
        "exercise_name": "Pelvic Tilt",
        "muscle_description": "The lower abs help to control the movement of your pelvis and lower back, and are essential for maintaining good posture and preventing lower back pain.",
        "muscle": "lower_abs"
    }
    , {
        "category": "strength",
        "instructions": "To target your obliques, perform a Russian twist exercise. Sit on the floor with your knees bent and feet flat. Lean back slightly and lift your feet off the ground. Hold a weight or medicine ball in front of your chest. Twist your torso to the left, touching the weight to the ground beside you. Twist to the right, touching the weight to the ground on the other side. Continue alternating sides for12-15 reps.",
        "difficulty": "intermediate",
        "equipment": "dumbbell or medicine ball",
        "exercise_name": "Russian Twist",
        "muscle_description": "The obliques are a group of muscles that run along the sides of your abdomen, consisting of the internal and external obliques. These muscles play a crucial role in rotational movements, such as twisting and turning.",
        "muscle": "obliques"
    }, {
        "category": "strength",
        "instructions": "To target your obliques, perform a side plank exercise. Lie on your side with your feet stacked and your hands under your shoulders. Lift your hips off the ground and balance on your forearm and the side of your foot. Hold for30-60 seconds and repeat on the other side. Focus on engaging your obliques to maintain stability.",
        "difficulty": "intermediate",
        "equipment": "bodyweight",
        "exercise_name": "Side Plank",
        "muscle_description": "The obliques help to stabilize your core and maintain good posture, especially during rotational movements.",
        "muscle": "obliques"
    },
    {
        "category": "strength",
        "instructions": "To target your obliques, perform a woodchopper exercise. Hold a weight or cable handle in both hands and stand with your feet shoulder-width apart. Twist your torso to the left, keeping your arms straight, and then twist to the right. Continue alternating sides for12-15 reps.",
        "difficulty": "advanced",
        "equipment": "cable or dumbbell",
        "exercise_name": "Woodchopper",
        "muscle_description": "The obliques are responsible for movements like lateral flexion, rotation, and compression of the abdominal contents.",
        "muscle": "obliques"
    },
    {
        "category": "strength",
        "instructions": "To target your obliques, perform bicycle crunches. Lie on your back with your hands behind your head and alternate bringing your elbow to the opposite knee, as if pedaling a bicycle. Continue for12-15 reps on each side.",
        "difficulty": "beginner",
        "equipment": "bodyweight",
        "exercise_name": "Bicycle Crunches",
        "muscle_description": "The internal and external obliques work together to facilitate movements like rotation and lateral flexion.",
        "muscle": "obliques"
    },
    {
        "category": "mobility",
        "instructions": "To target your obliques, perform side bends. Stand with your feet shoulder-width apart and hold a weight or dumbbell in one hand. Bend to the side, keeping your arms straight, and then return to the starting position. Continue on the other side. Repeat for12-15 reps on each side.",
        "difficulty": "beginner",
        "equipment": "dumbbell",
        "exercise_name": "Side Bends",
        "muscle_description": "The obliques help to maintain good posture and stability, especially during movements that involve rotation or lateral flexion.",
        "muscle": "obliques"
    }.
    {
        "category": "strength",
        "instructions": "To target your quads, perform a squat exercise. Stand with your feet shoulder-width apart and your hands by your sides. Lower your body down into a squat, keeping your back straight and your knees behind your toes. Push through your heels to return to the starting position and repeat for12-15 reps.",
        "difficulty": "beginner",
        "equipment": "bodyweight",
        "exercise_name": "Squats",
        "muscle_description": "The quads are a group of four muscles located in the front of your thigh, consisting of the rectus femoris, vastus lateralis, vastus medialis, and vastus intermedius. These muscles are responsible for knee extension, straightening, and stabilization.",
        "muscle": "quads"
    },
    {
        "category": "strength",
        "instructions": "To target your quads, perform a leg press exercise. Sit in a leg press machine with your feet shoulder-width apart on the platform. Push the platform away from you, extending your legs. Lower the platform back down to the starting position and repeat for12-15 reps.",
        "difficulty": "intermediate",
        "equipment": "leg press machine",
        "exercise_name": "Leg Press",
        "muscle_description": "The quads play a crucial role in movements like walking, running, and jumping, and are essential for knee stability and extension.",
        "muscle": "quads"
    },
    {
        "category": "strength",
        "instructions": "To target your quads, perform a lunge exercise. Stand with your feet together and take a large step forward with one foot. Lower your body down into a lunge, keeping your back straight and your front knee behind your toes. Push through your front heel to return to the starting position and repeat on the other leg.",
        "difficulty": "beginner",
        "equipment": "bodyweight",
        "exercise_name": "Lunges",
        "muscle_description": "The quads help to control knee movement and stability, especially during movements that involve flexion and extension.",
        "muscle": "quads"
    }, {
        "category": "strength",
        "instructions": "To target your quads, perform a leg extension exercise. Sit in a leg extension machine with your legs extended out in front of you. Lift the weight up off the ground, straightening your legs. Lower the weight back down to the starting position and repeat for12-15 reps.",
        "difficulty": "beginner",
        "equipment": "leg extension machine",
        "exercise_name": "Leg Extensions",
        "muscle_description": "The quads are responsible for knee extension and straightening, making them essential for movements like walking, running, and climbing.",
        "muscle": "quads"
    }, {
        "category": "strength",
        "instructions": "To target your quads, perform a step-up exercise. Stand in front of a step or platform with your right foot on the step and your left foot on the ground. Step up onto the step with your left foot and bring your right foot up to meet it. Step back down to the starting position and repeat on the other leg.",
        "difficulty": "intermediate",
        "equipment": "step or platform",
        "exercise_name": "Step-Ups",
        "muscle_description": "The quads help to control knee movement and stability, especially during movements that involve flexion and extension, such as climbing stairs or stepping up.",
        "muscle": "quads"
    },

]