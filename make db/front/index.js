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
async function sendValues(bodyValues) {
    console.log(bodyValues);

    await fetch("/api/addExercise", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(bodyValues)
    })
}



sendBtn.addEventListener("click", sendValues)

const obj = [
    {
        "category": "strength",
        "instructions": "1. Stand with your feet shoulder-width apart, holding a dumbbell in one hand down by your side and the other hand behind your head or on your hip.\n2. Keeping your back straight and your core engaged, slowly bend sideways at your waist towards the side holding the dumbbell. Lower the dumbbell as far as comfortable, feeling a stretch in your opposite oblique.\n3. Avoid leaning forward or backward; the movement should be a lateral bend only.\n4. Contract your obliques to return to the upright starting position.\n5. Repeat for the desired number of repetitions on one side, then switch the dumbbell to the other hand and repeat on the opposite side.",
        "difficulty": "beginner",
        "equipment": "dumbbell",
        "exercise_name": "Dumbbell Side Bend",
        "muscle_description": "The dumbbell side bend primarily targets the obliques (internal and external), which are responsible for lateral flexion (bending sideways) and rotation of the torso. This exercise helps to strengthen these muscles, contributing to core stability, improved posture, and a more defined waistline. It also engages other core muscles for stabilization.",
        "muscle": "obliques"
    },
    {
        "category": "strength",
        "instructions": "1. Lie on your back with your knees bent and feet flat on the floor. Place your hands behind your head with your elbows out to the sides.\n2. Engage your core and lift your shoulders off the floor, similar to a regular crunch.\n3. As you crunch up, twist your torso so that your right elbow moves towards your left knee.\n4. Lower back down to the starting position with control.\n5. On the next repetition, twist your torso so that your left elbow moves towards your right knee.\n6. Continue alternating sides for the desired number of repetitions, maintaining a controlled movement and focusing on squeezing your obliques.",
        "difficulty": "beginner",
        "equipment": "bodyweight",
        "exercise_name": "Bicycle Crunch",
        "muscle_description": "The bicycle crunch is a dynamic bodyweight exercise that effectively targets both the upper and lower abdominal muscles, with a significant emphasis on the obliques. The twisting motion engages the obliques to a greater extent than a standard crunch, helping to build rotational strength and definition in the sides of your core. It's a compound movement that also improves core stability and coordination.",
        "muscle": "obliques"
    },
    {
        "category": "strength",
        "instructions": "1. Sit on the floor with your knees bent and feet flat on the ground. Lean back slightly, keeping your back straight and engaging your core. You can keep your arms extended straight out in front of you or hold a weight plate or dumbbell with both hands.\n2. Rotate your torso to one side as far as comfortable, keeping your hips facing forward.\n3. Pause briefly, feeling the contraction in your obliques on the side you're rotating towards.\n4. Slowly rotate your torso back to the center.\n5. Repeat the rotation to the other side.\n6. Continue alternating sides for the desired number of repetitions, maintaining a controlled movement and focusing on the oblique engagement.",
        "difficulty": "beginner",
        "equipment": "bodyweight",
        "exercise_name": "Russian Twist",
        "muscle_description": "The Russian twist is a core exercise that heavily targets the obliques, responsible for torso rotation. It also engages the rectus abdominis (abs) and other core stabilizers. This exercise is excellent for developing rotational strength, improving core stability, and sculpting the waistline. Adding weight can increase the intensity.",
        "muscle": "obliques"
    },
    {
        "category": "strength",
        "instructions": "1. Stand with your feet shoulder-width apart, holding a weight plate with both hands in front of your chest.\n2. Keeping your back straight and your core engaged, slowly lower the weight plate down towards one hip by bending sideways at your waist. Maintain control and avoid leaning forward or backward.\n3. Feel the stretch in your opposite oblique as you lower the weight.\n4. Contract your obliques to return to the upright starting position.\n5. Repeat the movement, lowering the weight plate towards the other hip.\n6. Continue alternating sides for the desired number of repetitions, focusing on a controlled lateral bend.",
        "difficulty": "beginner",
        "equipment": "bodyweight",
        "exercise_name": "Weight Plate Side Bend",
        "muscle_description": "The weight plate side bend is similar to the dumbbell side bend but uses a weight plate held in front of the chest to provide resistance. It primarily targets the obliques, strengthening the muscles responsible for lateral flexion of the torso. This exercise also engages other core muscles for stability and helps in developing a stronger and more defined core.",
        "muscle": "obliques"
    },
    {
        "category": "strength",
        "instructions": "1. Find a stable vertical bar or pole. Stand with the bar to one side of your body, feet shoulder-width apart.\n2. Reach up with both hands and grip the bar as high as you comfortably can.\n3. Keeping your arms straight, lean your body away from the bar, feeling a stretch in your obliques on the side opposite the bar.\n4. Engage your obliques on the side closest to the bar to pull your torso back up to a vertical position.\n5. Repeat the leaning and pulling motion for the desired number of repetitions on one side, then switch sides so the bar is on the other side of your body.",
        "difficulty": "intermediate",
        "equipment": "bodyweight",
        "exercise_name": "Standing Oblique Crunch with Bar",
        "muscle_description": "The standing oblique crunch with a bar is a bodyweight exercise that effectively targets the obliques through a controlled lateral flexion movement against your own body weight. By gripping the bar high and leaning away, you create resistance that your obliques must overcome to pull you back upright. This exercise helps to build strength and definition in the obliques, contributing to core stability and a sculpted waistline.",
        "muscle": "obliques"
    },
    {
        "category": "strength",
        "instructions": "1. Stand with your feet shoulder-width apart, chest up, and core engaged. You can hold dumbbells at your sides or a barbell across your upper back.\n2. Initiate the movement by pushing your hips back as if you're sitting down in a chair.\n3. Continue lowering your hips until your thighs are parallel to the floor or as low as comfortable while maintaining good form. Ensure your knees track over your toes and don't go past them excessively.\n4. Keep your weight on your heels and the middle of your feet.\n5. Push through your heels to return to the standing starting position, squeezing your glutes at the top.\n6. Repeat for the desired number of repetitions.",
        "difficulty": "beginner",
        "equipment": "bodyweight",
        "exercise_name": "Squat",
        "muscle_description": "The squat is a fundamental compound exercise that primarily targets the quadriceps (rectus femoris, vastus lateralis, vastus medialis, and vastus intermedius) in the front of the thighs. It also significantly engages the glutes and hamstrings, as well as the core muscles for stabilization. Squats are essential for building lower body strength, power, and muscle mass, and they have functional benefits for everyday activities.",
        "muscle": "quads"
    },
    {
        "category": "strength",
        "instructions": "1. Stand with your feet hip-width apart, holding a dumbbell in each hand down by your sides.\n2. Step forward with one leg, lowering your hips until both knees are bent at approximately a 90-degree angle. Your front knee should be directly over your ankle, and your back knee should hover just above the floor.\n3. Keep your chest up, shoulders back, and core engaged throughout the movement.\n4. Push off with your front foot to return to the starting position.\n5. Repeat the movement, stepping forward with the other leg.\n6. Continue alternating legs for the desired number of repetitions.",
        "difficulty": "beginner",
        "equipment": "dumbbell",
        "exercise_name": "Dumbbell Lunge",
        "muscle_description": "The dumbbell lunge is a unilateral (single-leg) exercise that effectively targets the quadriceps of the front leg, as well as the glutes and hamstrings. It also engages the muscles of the back leg for balance and stability. Lunges are excellent for improving lower body strength, balance, coordination, and muscle definition. They can also help address strength imbalances between legs.",
        "muscle": "quads"
    },
    {
        "category": "strength",
        "instructions": "1. Sit on a leg extension machine with your lower legs positioned under the padded lever. Adjust the machine so that the pivot point aligns with your knee joint.\n2. Grip the side handles for stability.\n3. Extend your legs forward and upward by contracting your quadriceps muscles.\n4. Continue extending until your legs are fully straight (but avoid locking your knees).\n5. Pause briefly at the top, feeling the contraction in your quads.\n6. Slowly lower the weight back to the starting position, controlling the movement.\n7. Repeat for the desired number of repetitions.",
        "difficulty": "beginner",
        "equipment": "machine",
        "exercise_name": "Leg Extension",
        "muscle_description": "The leg extension is an isolation exercise that primarily targets the quadriceps muscles. It's effective for building strength and definition in the front of the thighs. While it isolates the quads, it's often used in conjunction with compound exercises like squats and lunges for comprehensive leg development. It can also be helpful for rehabilitation purposes under proper guidance.",
        "muscle": "quads"
    },
    {
        "category": "strength",
        "instructions": "1. Stand with your feet hip-width apart, holding a barbell across your upper back. You can also perform this exercise with dumbbells held at your sides.\n2. Step backward with one leg, placing the ball of your foot on an elevated surface behind you (like a bench or step).\n3. Lower your hips by bending your front knee, keeping your front shin relatively vertical and tracking your knee over your ankle.\n4. Lower down until your front thigh is parallel to the floor or as low as comfortable while maintaining good form. Your back knee will naturally bend towards the floor but should not touch it.\n5. Push through the heel of your front foot to return to the starting position.\n6. Repeat for the desired number of repetitions on one leg, then switch legs.",
        "difficulty": "intermediate",
        "equipment": "barbell",
        "exercise_name": "Bulgarian Split Squat",
        "muscle_description": "The Bulgarian split squat is a challenging unilateral exercise that intensely targets the quadriceps of the front leg, as well as the glutes and hamstrings. The elevated back foot increases the range of motion and the demand on balance and stability. This exercise is excellent for building lower body strength, improving balance and coordination, and addressing strength imbalances between legs.",
        "muscle": "quads"
    },
    {
        "category": "strength",
        "instructions": "1. Stand with your feet hip-width apart, holding a dumbbell in each hand down by your sides.\n2. Step to the side with one leg, keeping that foot flat on the ground and bending your knee. Keep your other leg straight but not locked.\n3. Lower your hips down and back, feeling a stretch in the inner thigh of your straight leg and the outer thigh of your bent leg. Your torso should remain relatively upright.\n4. Push off with your bent leg to return to the starting position.\n5. Repeat the movement, stepping to the side with the other leg.\n6. Continue alternating sides for the desired number of repetitions.",
        "difficulty": "beginner",
        "equipment": "dumbbell",
        "exercise_name": "Lateral Lunge",
        "muscle_description": "The lateral lunge is a variation of the lunge that primarily targets the quadriceps, glutes, and adductors (inner thighs) of the working leg. It also engages the hamstrings and abductors (outer thighs) of the stabilizing leg. Lateral lunges are excellent for improving lateral strength, balance, and flexibility, which are important for various athletic movements and everyday activities.",
        "muscle": "quads"
    },
    {
        "category": "strength",
        "instructions": "1. Lie on your back with your legs extended straight up towards the ceiling. Keep your arms by your sides with your palms facing down.\n2. Engage your lower abdominal muscles and lift your hips slightly off the floor, as if you're trying to push your feet towards the ceiling.\n3. Focus on using your lower abs to initiate the movement rather than swinging your legs.\n4. Hold the lifted position briefly, feeling the contraction in your lower abs.\n5. Slowly lower your hips back down to the floor with control.\n6. Repeat for the desired number of repetitions. Keep your legs straight throughout the exercise.",
        "difficulty": "beginner",
        "equipment": "bodyweight",
        "exercise_name": "Leg Raises",
        "muscle_description": "Leg raises primarily target the lower portion of the rectus abdominis (lower abs), as well as the hip flexors. By lifting your legs towards the ceiling while keeping your back pressed against the floor, you engage the lower abdominal fibers to stabilize and control the movement. This exercise is effective for building strength and definition in the lower abs and improving core stability.",
        "muscle": "lower_abs"
    },
    {
        "category": "strength",
        "instructions": "1. Lie on your back with your knees bent at a 90-degree angle and your hips flexed at 90 degrees, so your shins are parallel to the ceiling (tabletop position). Place your hands behind your head or by your sides.\n2. Engage your lower abdominal muscles and lift your hips slightly off the floor, bringing your knees towards your chest.\n3. Focus on using your lower abs to initiate the movement, curling your hips up and off the bench or floor.\n4. Hold the lifted position briefly, feeling the contraction in your lower abs.\n5. Slowly lower your hips back down to the starting position with control.\n6. Repeat for the desired number of repetitions. Keep the movement controlled and avoid swinging your legs.",
        "difficulty": "beginner",
        "equipment": "bodyweight",
        "exercise_name": "Reverse Crunch",
        "muscle_description": "The reverse crunch is a targeted exercise for the lower portion of the rectus abdominis. By bringing your knees towards your chest and lifting your hips off the ground, you specifically engage the lower abdominal fibers. This exercise is excellent for building strength and definition in the lower abs and can be more effective for some individuals in targeting this area compared to traditional crunches.",
        "muscle": "lower_abs"
    },
    {
        "category": "strength",
        "instructions": "1. Lie on your back on a flat bench with your legs hanging off the end. Grip the sides of the bench behind your head for stability.\n2. Keeping your legs straight, engage your lower abdominal muscles and lift your legs up towards the ceiling.\n3. Once your legs are vertical, continue the movement by lifting your hips slightly off the bench, as if you're trying to touch your toes to the ceiling.\n4. Focus on using your lower abs to lift your hips.\n5. Hold the lifted position briefly, feeling the contraction in your lower abs.\n6. Slowly lower your hips back down to the bench, then slowly lower your legs back down with control.\n7. Repeat for the desired number of repetitions.",
        "difficulty": "intermediate",
        "equipment": "bodyweight",
        "exercise_name": "Hanging Leg/Hip Raise (on bench)",
        "muscle_description": "The hanging leg/hip raise performed on a bench targets the lower rectus abdominis and hip flexors. The added element of lifting the hips off the bench increases the activation of the lower abs. This exercise helps build strength, definition, and control in the lower abdominal region and improves core stability.",
        "muscle": "lower_abs"
    },
    {
        "category": "strength",
        "instructions": "1. Hang from a pull-up bar with an overhand grip, slightly wider than shoulder-width apart. Let your body hang straight down.\n2. Engage your lower abdominal muscles and lift your legs straight up in front of you, keeping them together. Aim to lift them until your thighs are parallel to the floor or higher if possible.\n3. Focus on using your lower abs to initiate and control the movement.\n4. Hold the lifted position briefly, feeling the contraction in your lower abs.\n5. Slowly lower your legs back down to the starting hanging position with control.\n6. Repeat for the desired number of repetitions. If straight leg raises are too difficult, you can perform bent knee raises.",
        "difficulty": "intermediate",
        "equipment": "bodyweight",
        "exercise_name": "Hanging Leg Raise",
        "muscle_description": "The hanging leg raise is a more advanced exercise that effectively targets the lower rectus abdominis and hip flexors. Hanging adds an element of instability, requiring greater core engagement for stabilization. This exercise is excellent for building strength, definition, and functional core strength, as it mimics movements used in various athletic activities.",
        "muscle": "lower_abs"
    },
    {
        "category": "strength",
        "instructions": "1. Lie on your back with your knees bent and feet flat on the floor. Place your hands by your sides or under your lower back for support.\n2. Engage your lower abdominal muscles and slowly lift your legs off the floor, keeping your knees bent at a 90-degree angle.\n3. Once your thighs are perpendicular to the floor and your shins are parallel (tabletop position), maintain this angle.\n4. Slowly lower your legs towards the floor by extending at your hips, keeping your lower back pressed into the ground. Only lower as far as you can while maintaining contact between your lower back and the floor.\n5. Once you feel your lower back starting to arch, stop lowering and slowly bring your knees back to the tabletop position using your lower abs.\n6. Repeat for the desired number of repetitions. This exercise emphasizes controlled movement and lower abdominal engagement to prevent lower back strain.",
        "difficulty": "beginner",
        "equipment": "bodyweight",
        "exercise_name": "Dead Bug",
        "muscle_description": "The dead bug is a fundamental core stability exercise that effectively engages the lower rectus abdominis while minimizing stress on the lower back. By maintaining a stable lower back and controlling the movement of the legs, you strengthen the deep core muscles responsible for preventing excessive spinal movement. This exercise is crucial for building a strong foundation for more advanced abdominal exercises and improving overall core control.",
        "muscle": "lower_abs"
    },
    {
        "category": "strength",
        "instructions": "1. Lie on your back with your knees bent and feet flat on the floor, hip-width apart. Place your hands behind your head with your elbows out to the sides, or cross your arms over your chest.\n2. Engage your abdominal muscles and lift your head and shoulders off the floor, curling your torso towards your knees.\n3. Focus on bringing your rib cage towards your pelvis, squeezing your upper abs at the top of the movement.\n4. Keep your lower back pressed into the floor throughout the exercise.\n5. Slowly lower your head and shoulders back down to the starting position with control.\n6. Repeat for the desired number of repetitions. Avoid pulling on your neck with your hands.",
        "difficulty": "beginner",
        "equipment": "bodyweight",
        "exercise_name": "Crunch",
        "muscle_description": "The crunch is a classic exercise that primarily targets the upper portion of the rectus abdominis (upper abs). By lifting your shoulders off the floor while keeping your lower back grounded, you engage the upper abdominal fibers to flex the spine. This exercise is effective for building strength and definition in the upper abs and is a fundamental movement for core training.",
        "muscle": "upper_abs"
    },
    {
        "category": "strength",
        "instructions": "1. Lie on your back with your knees bent at a 90-degree angle and your hips flexed at a 90-degree angle, so your shins are parallel to the ceiling (tabletop position). Place your hands behind your head or by your sides.\n2. Engage your upper abdominal muscles and lift your head and shoulders off the floor, curling your torso towards your knees.\n3. Maintain the 90-degree angle in your knees and hips throughout the movement.\n4. Focus on bringing your rib cage towards your pelvis, feeling the contraction in your upper abs.\n5. Slowly lower your head and shoulders back down to the starting position with control.\n6. Repeat for the desired number of repetitions. This variation can sometimes help isolate the upper abs more by limiting hip flexor involvement.",
        "difficulty": "beginner",
        "equipment": "bodyweight",
        "exercise_name": "Tabletop Crunch",
        "muscle_description": "The tabletop crunch is a variation of the standard crunch that can place a slightly different emphasis on the upper abdominal muscles. By starting with the legs in a tabletop position, you may reduce the activation of the hip flexors, allowing for a more focused contraction in the upper rectus abdominis. This exercise is effective for building strength and definition in the upper abs.",
        "muscle": "upper_abs"
    },
    {
        "category": "strength",
        "instructions": "1. Lie on your back on an exercise mat with your legs extended straight up towards the ceiling. Place your hands behind your head or by your sides.\n2. Engage your upper abdominal muscles and lift your head and shoulders off the floor, reaching your hands towards your feet.\n3. Keep your legs straight and vertical throughout the movement.\n4. Focus on curling your upper torso towards your legs, feeling the contraction in your upper abs.\n5. Slowly lower your head and shoulders back down to the starting position with control.\n6. Repeat for the desired number of repetitions. This variation increases the lever arm, making the exercise slightly more challenging for the upper abs.",
        "difficulty": "intermediate",
        "equipment": "bodyweight",
        "exercise_name": "Vertical Leg Crunch",
        "muscle_description": "The vertical leg crunch is an effective variation that emphasizes the upper portion of the rectus abdominis. By keeping the legs straight and vertical, you alter the angle of the movement, which can lead to greater activation of the upper abdominal fibers. This exercise helps build strength and definition in the upper abs and improves core control.",
        "muscle": "upper_abs"
    },
    {
        "category": "strength",
        "instructions": "1. Lie on your back on a decline bench with your feet secured at the foot rests. Place your hands behind your head or cross them over your chest.\n2. Engage your abdominal muscles and lift your head and shoulders off the bench, curling your torso upwards.\n3. The decline angle increases the range of motion and the resistance provided by gravity, making the exercise more challenging for the upper abs.\n4. Focus on bringing your rib cage towards your pelvis, squeezing your upper abs at the top.\n5. Slowly lower your head and shoulders back down to the bench with control.\n6. Repeat for the desired number of repetitions.",
        "difficulty": "intermediate",
        "equipment": "bodyweight",
        "exercise_name": "Decline Crunch",
        "muscle_description": "The decline crunch is a more challenging variation of the standard crunch that intensifies the work on the upper rectus abdominis. The decline angle increases the range of motion and the gravitational pull, requiring greater upper abdominal strength to perform the movement. This exercise is excellent for building strength and definition in the upper abs.",
        "muscle": "upper_abs"
    },
    {
        "category": "strength",
        "instructions": "1. Attach a rope attachment to a high pulley cable machine. Kneel facing the machine and grasp the ends of the rope with an overhand grip.\n2. Position your hands near your forehead.\n3. Engage your abdominal muscles and pull the rope downwards by flexing your torso, bringing your elbows towards your knees.\n4. Focus on contracting your upper abs as you crunch down.\n5. Keep your hips relatively stable throughout the movement.\n6. Slowly return to the starting upright kneeling position with control, allowing your upper abs to stretch.\n7. Repeat for the desired number of repetitions.",
        "difficulty": "intermediate",
        "equipment": "cable",
        "exercise_name": "Cable Crunch",
        "muscle_description": "The cable crunch provides consistent resistance throughout the movement, making it an effective exercise for targeting the entire rectus abdominis, with a strong emphasis on the upper abs. The ability to add weight allows for progressive overload, leading to increased strength and muscle growth in the abdominal region. This exercise helps build a strong and defined upper abdominal area.",
        "muscle": "upper_abs"
    },
    {
        "category": "strength",
        "instructions": "1. Stand with your feet shoulder-width apart, holding a dumbbell in each hand with a supinated grip (palms facing forward).\n2. Keeping your elbows tucked in close to your sides, slowly curl the dumbbells up towards your shoulders by flexing your elbows.\n3. Focus on squeezing your biceps at the top of the movement.\n4. Slowly lower the dumbbells back down to the starting position with control, fully extending your elbows.\n5. Repeat for the desired number of repetitions. Avoid swinging your body or using momentum.",
        "difficulty": "beginner",
        "equipment": "dumbbell",
        "exercise_name": "Dumbbell Bicep Curl",
        "muscle_description": "The dumbbell bicep curl is a fundamental isolation exercise that primarily targets the biceps brachii, the main muscle responsible for flexing the elbow and supinating the forearm. It also engages the brachialis and brachioradialis to a lesser extent. This exercise is essential for building strength and size in the biceps, contributing to a more defined upper arm.",
        "muscle": "biceps"
    },
    {
        "category": "strength",
        "instructions": "1. Stand with your feet shoulder-width apart, holding a barbell with a supinated grip (palms facing forward), hands shoulder-width apart.\n2. Keeping your elbows tucked in close to your sides, slowly curl the barbell up towards your shoulders by flexing your elbows.\n3. Focus on squeezing your biceps at the top of the movement.\n4. Slowly lower the barbell back down to the starting position with control, fully extending your elbows.\n5. Repeat for the desired number of repetitions. Maintain a stable torso and avoid using momentum. This exercise allows you to lift heavier weight compared to dumbbell curls.",
        "difficulty": "beginner",
        "equipment": "barbell",
        "exercise_name": "Barbell Bicep Curl",
        "muscle_description": "The barbell bicep curl is a classic compound exercise that effectively targets the biceps brachii, as well as the brachialis and brachioradialis. The straight bar allows for maximum weight to be lifted, which can lead to significant strength and muscle mass gains in the biceps. It's a staple exercise for building powerful and well-developed biceps.",
        "muscle": "biceps"
    },
    {
        "category": "strength",
        "instructions": "1. Sit on a preacher curl bench with your upper arms resting on the pad. Hold a dumbbell or the preacher curl bar with a supinated grip (palms facing upward).\n2. Keeping your upper arms stable on the pad, curl the weight up towards your shoulders by flexing your elbows.\n3. Focus on squeezing your biceps at the top of the movement.\n4. Slowly lower the weight back down to the starting position with control, fully extending your elbows. Maintain contact between your upper arms and the pad throughout the exercise.\n5. Repeat for the desired number of repetitions. The preacher curl isolates the biceps by limiting the involvement of other muscles.",
        "difficulty": "intermediate",
        "equipment": "dumbbell",
        "exercise_name": "Preacher Curl",
        "muscle_description": "The preacher curl is an isolation exercise that effectively targets the lower portion of the biceps brachii. The preacher bench helps to stabilize the upper arms, preventing cheating and ensuring that the biceps are doing the majority of the work. This exercise is excellent for building peak and definition in the biceps.",
        "muscle": "biceps"
    },
    {
        "category": "strength",
        "instructions": "1. Stand with your feet shoulder-width apart, holding a dumbbell in each hand with a neutral grip (palms facing your body).\n2. Keeping your elbows tucked in close to your sides, curl the dumbbells up towards your shoulders. As you curl, supinate your wrists so that your palms are facing forward at the top of the movement.\n3. Focus on squeezing your biceps at the top.\n4. Slowly lower the dumbbells back down, pronating your wrists back to the neutral grip as you extend your elbows.\n5. Repeat for the desired number of repetitions. This exercise works both the biceps and the brachialis effectively.",
        "difficulty": "intermediate",
        "equipment": "dumbbell",
        "exercise_name": "Hammer Curl",
        "muscle_description": "The hammer curl is a variation of the bicep curl that primarily targets the brachialis and brachioradialis muscles in the upper arm, as well as the biceps brachii. The neutral grip emphasizes these muscles, contributing to overall arm thickness and strength. It's a great exercise for developing the 'peak' of the biceps and the muscles in the forearm.",
        "muscle": "biceps"
    },
    {
        "category": "strength",
        "instructions": "1. Sit on a bench with your feet flat on the floor. Hold a dumbbell in one hand and rest your elbow on the inside of your thigh, just above your knee. Your palm should be facing upward (supinated grip).\n2. Keeping your upper arm stable on your thigh, curl the dumbbell up towards your shoulder by flexing your elbow.\n3. Focus on squeezing your biceps at the top of the movement.\n4. Slowly lower the dumbbell back down to the starting position with control, fully extending your elbow. Maintain contact between your upper arm and thigh throughout the exercise.\n5. Repeat for the desired number of repetitions on one arm, then switch to the other arm.",
        "difficulty": "beginner",
        "equipment": "dumbbell",
        "exercise_name": "Concentration Curl",
        "muscle_description": "The concentration curl is an isolation exercise that allows for a very focused contraction of the biceps brachii. By stabilizing your upper arm against your inner thigh, you minimize the involvement of other muscles and can concentrate fully on squeezing your biceps. This exercise is excellent for building peak and definition in the biceps.",
        "muscle": "biceps"
    },
    {
        "category": "strength",
        "instructions": "1. Stand with your feet shoulder-width apart, holding a dumbbell in each hand down by your sides with a neutral grip (palms facing your body).\n2. Keeping a slight bend in your elbows, raise your arms out to the sides in a controlled arc until they are parallel to the floor.\n3. Focus on using your side deltoids to lift the weight, and avoid shrugging your shoulders.\n4. Pause briefly at the top, feeling the contraction in your side deltoids.\n5. Slowly lower the dumbbells back down to the starting position with control.\n6. Repeat for the desired number of repetitions. Maintain a stable torso and avoid swinging your body.",
        "difficulty": "beginner",
        "equipment": "dumbbell",
        "exercise_name": "Dumbbell Lateral Raise",
        "muscle_description": "The dumbbell lateral raise is a primary isolation exercise for the lateral (side) deltoid muscle, which is responsible for shoulder abduction (moving the arm away from the midline of the body). Strengthening the side deltoids contributes to shoulder width and a more three-dimensional shoulder appearance. It also engages the anterior and posterior deltoids to a lesser extent for stabilization.",
        "muscle": "side_delts"
    },
    {
        "category": "strength",
        "instructions": "1. Stand with your feet shoulder-width apart, holding a dumbbell in each hand down by your sides with a neutral grip.\n2. Lean forward slightly at your hips, keeping your back straight and core engaged.\n3. Keeping a slight bend in your elbows, raise your arms out to the sides in a controlled arc until they are parallel to the floor or slightly higher.\n4. This variation can sometimes emphasize the middle deltoids more effectively by altering the angle of pull.\n5. Focus on using your side deltoids to lift the weight and avoid shrugging.\n6. Pause briefly at the top, feeling the contraction.\n7. Slowly lower the dumbbells back down with control.",
        "difficulty": "intermediate",
        "equipment": "dumbbell",
        "exercise_name": "Leaning Dumbbell Lateral Raise",
        "muscle_description": "The leaning dumbbell lateral raise is a variation that can further isolate the side deltoids by reducing the ability to use momentum and potentially increasing the range of motion. By leaning slightly to the opposite side of the working arm, you can achieve a greater stretch and contraction in the lateral deltoid. This exercise is excellent for building width and definition in the shoulders.",
        "muscle": "side_delts"
    },
    {
        "category": "strength",
        "instructions": "1. Stand next to a low cable machine with a D-handle attachment. Attach the handle to the ankle strap and secure it around the wrist of the arm you want to work (the arm furthest from the machine).\n2. Stand with your feet shoulder-width apart, slightly away from the machine to create tension on the cable.\n3. Keeping a slight bend in your elbow, raise your arm out to the side in a controlled arc until it is parallel to the floor or slightly higher.\n4. Focus on using your side deltoid to lift the weight and avoid shrugging your shoulder or leaning excessively.\n5. Pause briefly at the top, feeling the contraction in your side deltoid.\n6. Slowly lower your arm back down to the starting position with control, resisting the pull of the cable.\n7. Repeat for the desired number of repetitions, then switch arms.",
        "difficulty": "beginner",
        "equipment": "cable",
        "exercise_name": "Cable Lateral Raise",
        "muscle_description": "The cable lateral raise provides constant tension throughout the entire range of motion, which can lead to greater muscle activation in the side deltoids compared to dumbbell variations. The cable also helps to control the movement and prevents the use of momentum. This exercise is effective for building strength and definition in the lateral deltoids, contributing to shoulder width.",
        "muscle": "side_delts"
    },
    {
        "category": "strength",
        "instructions": "1. Sit on a bench with a dumbbell in each hand down by your sides with a neutral grip.\n2. Keeping a slight bend in your elbows, raise your arms out to the sides in a controlled arc until they are parallel to the floor.\n3. Focus on using your side deltoids to lift the weight and avoid shrugging your shoulders.\n4. Pause briefly at the top, feeling the contraction in your side deltoids.\n5. Slowly lower the dumbbells back down to the starting position with control.\n6. Repeat for the desired number of repetitions. Sitting can help to minimize the use of momentum and isolate the side deltoids more effectively.",
        "difficulty": "beginner",
        "equipment": "dumbbell",
        "exercise_name": "Seated Dumbbell Lateral Raise",
        "muscle_description": "The seated dumbbell lateral raise is a variation that helps to isolate the side deltoids by eliminating the ability to use leg drive or significant torso movement to assist with the lift. This focused approach can lead to better muscle activation and development in the lateral deltoids, contributing to shoulder width and definition.",
        "muscle": "side_delts"
    },
    {
        "category": "strength",
        "instructions": "1. Stand with your feet shoulder-width apart, holding a resistance band with both hands, palms facing your body and hands about hip-width apart. Step on the middle of the band with one or both feet to create tension.\n2. Keeping your arms straight (but not locked) and core engaged, raise your arms out to the sides in a controlled arc until they are parallel to the floor or slightly higher.\n3. Focus on using your side deltoids to lift against the resistance of the band, and avoid shrugging your shoulders.\n4. Pause briefly at the top, feeling the contraction in your side deltoids.\n5. Slowly lower your arms back down to the starting position with control, maintaining tension on the band.\n6. Repeat for the desired number of repetitions. Adjust your foot placement to increase or decrease the resistance.",
        "difficulty": "beginner",
        "equipment": "bodyweight",
        "exercise_name": "Resistance Band Lateral Raise",
        "muscle_description": "The resistance band lateral raise is a great exercise for targeting the side deltoids with lighter resistance, making it suitable for warm-ups, higher rep sets, or when dumbbells are not available. The band provides consistent tension throughout the movement, helping to activate and strengthen the lateral deltoids, contributing to shoulder width and endurance.",
        "muscle": "side_delts"
    },
    {
        "category": "strength",
        "instructions": "1. Stand with your feet shoulder-width apart, holding a dumbbell in each hand down in front of your thighs with a neutral grip (palms facing your body).\n2. Keeping a slight bend in your elbows, raise the dumbbells forward and upward in a controlled arc until your arms are parallel to the floor or slightly higher.\n3. Focus on using your front deltoids to lift the weight and avoid swinging your body.\n4. Pause briefly at the top, feeling the contraction in your front deltoids.\n5. Slowly lower the dumbbells back down to the starting position with control.\n6. Repeat for the desired number of repetitions.",
        "difficulty": "beginner",
        "equipment": "dumbbell",
        "exercise_name": "Dumbbell Front Raise",
        "muscle_description": "The dumbbell front raise is a primary isolation exercise for the anterior (front) deltoid muscle, which is responsible for shoulder flexion (raising the arm forward). It also engages the side deltoids and upper chest to a lesser extent. Strengthening the front deltoids contributes to overall shoulder development and strength in pressing movements.",
        "muscle": "front_delts"
    },
    {
        "category": "strength",
        "instructions": "1. Stand with your feet shoulder-width apart, holding a barbell with an overhand grip, slightly wider than shoulder-width, resting in front of your thighs.\n2. Keeping a slight bend in your elbows and your back straight, raise the barbell forward and upward in a controlled arc until your arms are parallel to the floor or slightly higher.\n3. Focus on using your front deltoids to lift the weight and avoid using momentum.\n4. Pause briefly at the top, feeling the contraction in your front deltoids.\n5. Slowly lower the barbell back down to the starting position with control.\n6. Repeat for the desired number of repetitions. This exercise allows you to lift heavier weight compared to dumbbell front raises.",
        "difficulty": "intermediate",
        "equipment": "barbell",
        "exercise_name": "Barbell Front Raise",
        "muscle_description": "The barbell front raise is an effective exercise for building strength and mass in the anterior deltoids. The barbell allows for a heavier load, which can lead to greater muscle fiber recruitment in the front shoulders. It also engages the side deltoids and upper chest as secondary movers, contributing to overall shoulder development.",
        "muscle": "front_delts"
    },
    {
        "category": "strength",
        "instructions": "1. Stand facing a low cable machine with a straight bar attachment. Grasp the bar with an overhand grip, slightly wider than shoulder-width.\n2. Step back slightly to create tension on the cable.\n3. Keeping a slight bend in your elbows and your back straight, raise the bar forward and upward in a controlled arc until your arms are parallel to the floor or slightly higher.\n4. Focus on using your front deltoids to lift the weight, maintaining tension on the cable throughout the movement.\n5. Pause briefly at the top, feeling the contraction in your front deltoids.\n6. Slowly lower the bar back down to the starting position with control, resisting the pull of the cable.\n7. Repeat for the desired number of repetitions.",
        "difficulty": "beginner",
        "equipment": "cable",
        "exercise_name": "Cable Front Raise",
        "muscle_description": "The cable front raise provides constant tension on the anterior deltoids throughout the entire range of motion, which can lead to greater muscle activation compared to free weight variations. The cable also helps to control the movement and prevents the use of momentum. This exercise is effective for building strength and definition in the front shoulders.",
        "muscle": "front_delts"
    },
    {
        "category": "strength",
        "instructions": "1. Sit on a bench with a dumbbell in each hand down by your sides with a neutral grip.\n2. Keeping a slight bend in your elbows, raise the dumbbells forward and upward in a controlled arc until your arms are parallel to the floor or slightly higher.\n3. Focus on using your front deltoids to lift the weight and avoid swinging your body.\n4. Pause briefly at the top, feeling the contraction in your front deltoids.\n5. Slowly lower the dumbbells back down to the starting position with control.\n6. Repeat for the desired number of repetitions. Sitting can help to minimize the use of momentum and isolate the front deltoids more effectively.",
        "difficulty": "beginner",
        "equipment": "dumbbell",
        "exercise_name": "Seated Dumbbell Front Raise",
        "muscle_description": "The seated dumbbell front raise is a variation that helps to isolate the anterior deltoids by eliminating the ability to use leg drive or significant torso movement to assist with the lift. This focused approach can lead to better muscle activation and development in the front shoulders.",
        "muscle": "front_delts"
    },
    {
        "category": "strength",
        "instructions": "1. Stand with your feet shoulder-width apart, holding a weight plate with both hands in front of your thighs with an overhand grip.\n2. Keeping a slight bend in your elbows and your back straight, raise the weight plate forward and upward in a controlled arc until your arms are parallel to the floor or slightly higher.\n3. Focus on using your front deltoids to lift the weight and avoid using momentum.\n4. Pause briefly at the top, feeling the contraction in your front deltoids.\n5. Slowly lower the weight plate back down to the starting position with control.\n6. Repeat for the desired number of repetitions. The weight plate can provide a different feel and distribution of weight compared to dumbbells or a barbell.",
        "difficulty": "beginner",
        "equipment": "bodyweight",
        "exercise_name": "Weight Plate Front Raise",
        "muscle_description": "The weight plate front raise is a variation that effectively targets the anterior deltoids. The solid, often larger, surface of the weight plate can sometimes make it easier to control the movement for beginners while still providing adequate resistance for building strength and definition in the front shoulders.",
        "muscle": "front_delts"
    },
    {
        "category": "strength",
        "instructions": "1. Lie face down on an incline bench set at approximately a 30-45 degree angle. Ensure your chest and stomach are fully supported.\n2. Hold a light dumbbell in each hand with a neutral grip (palms facing each other), letting them hang straight down towards the floor.\n3. Keeping your arms straight (but not locked), raise the dumbbells out to the sides in a controlled arc, squeezing your rear deltoids and upper back muscles.\n4. Focus on bringing your shoulder blades together and slightly down your back.\n5. Continue raising until your arms are parallel to the floor or slightly higher.\n6. Pause briefly at the top, feeling the contraction in your rear deltoids.\n7. Slowly lower the dumbbells back to the starting position with control.\n8. Repeat for the desired number of repetitions. The incline helps isolate the rear deltoids.",
        "difficulty": "intermediate",
        "equipment": "dumbbell",
        "exercise_name": "Incline Dumbbell Rear Delt Fly",
        "muscle_description": "The incline dumbbell rear delt fly is an effective isolation exercise for the posterior (rear) deltoid muscles and also engages the upper back muscles like the rhomboids and traps. The incline bench helps to minimize momentum and allows for a more focused contraction of the rear deltoids, contributing to shoulder thickness and definition.",
        "muscle": "rear_delts"
    },
    {
        "category": "strength",
        "instructions": "1. Sit on a bench with your feet flat on the floor, leaning forward at your hips until your chest is close to your thighs. Let your arms hang straight down with a dumbbell in each hand, palms facing each other.\n2. Keeping a slight bend in your elbows, raise the dumbbells out to the sides in a controlled arc, squeezing your rear deltoids and upper back muscles.\n3. Focus on bringing your shoulder blades together.\n4. Continue raising until your arms are parallel to the floor or slightly higher.\n5. Pause briefly at the top, feeling the contraction in your rear deltoids.\n6. Slowly lower the dumbbells back to the starting position with control.\n7. Repeat for the desired number of repetitions. Maintaining a stable torso is key.",
        "difficulty": "beginner",
        "equipment": "dumbbell",
        "exercise_name": "Bent-Over Dumbbell Rear Delt Fly",
        "muscle_description": "The bent-over dumbbell rear delt fly is a classic exercise for isolating the posterior deltoids and engaging the upper back muscles. The bent-over position helps to minimize the involvement of other shoulder muscles, allowing for a more direct focus on the rear deltoids, which contributes to a well-rounded shoulder development and improved posture.",
        "muscle": "rear_delts"
    },
    {
        "category": "strength",
        "instructions": "1. Stand facing a cable machine with a double rope attachment fixed at chest height. Grab the ends of the rope with an overhand grip (palms facing down).\n2. Step back slightly to create tension on the cables.\n3. Keeping a slight bend in your elbows, pull the rope towards your face, separating your hands as you pull. Focus on squeezing your rear deltoids and bringing your hands past the sides of your head.\n4. Imagine you are trying to pull the rope apart.\n5. Pause briefly at the peak contraction, feeling the squeeze in your rear deltoids.\n6. Slowly return your hands to the starting position with control, resisting the pull of the cables.\n7. Repeat for the desired number of repetitions.",
        "difficulty": "intermediate",
        "equipment": "cable",
        "exercise_name": "Face Pull",
        "muscle_description": "The face pull is an excellent exercise for targeting the posterior deltoids, as well as the upper traps, rhomboids, and external rotators of the shoulder. It's crucial for shoulder health, posture correction, and balancing the muscles of the shoulder joint. This exercise helps to build strength and stability in the rear shoulders and upper back.",
        "muscle": "rear_delts"
    },
    {
        "category": "strength",
        "instructions": "1. Lie face down on a flat bench with your arms hanging down towards the floor, holding a dumbbell in each hand with a neutral grip (palms facing each other).\n2. Keeping a slight bend in your elbows, raise the dumbbells out to the sides in a controlled arc, squeezing your rear deltoids and upper back muscles.\n3. Focus on bringing your shoulder blades together.\n4. Continue raising until your arms are parallel to the floor or slightly higher.\n5. Pause briefly at the top, feeling the contraction in your rear deltoids.\n6. Slowly lower the dumbbells back to the starting position with control.\n7. Repeat for the desired number of repetitions. The flat bench provides good support and isolation.",
        "difficulty": "beginner",
        "equipment": "dumbbell",
        "exercise_name": "Prone Dumbbell Rear Delt Fly",
        "muscle_description": "The prone dumbbell rear delt fly is a variation that provides excellent isolation for the posterior deltoids by eliminating the ability to use momentum from the lower body. Lying face down on the bench allows you to focus solely on the movement of the shoulders and upper back, leading to a more effective contraction of the rear deltoids.",
        "muscle": "rear_delts"
    },
    {
        "category": "strength",
        "instructions": "1. Sit on a reverse fly machine, adjusting the seat height so that your chest is against the pad and your arms are extended forward to grasp the handles. Your elbows should be slightly bent.\n2. Keeping your chest pressed against the pad, pull your arms back and out to the sides in a controlled arc, squeezing your rear deltoids and upper back muscles.\n3. Focus on bringing your shoulder blades together behind you.\n4. Continue pulling until your arms are parallel to your shoulders or slightly behind.\n5. Pause briefly at the peak contraction.\n6. Slowly return your arms to the starting position with control, resisting the pull of the machine.\n7. Repeat for the desired number of repetitions. The machine provides consistent resistance and support.",
        "difficulty": "beginner",
        "equipment": "machine",
        "exercise_name": "Reverse Fly Machine",
        "muscle_description": "The reverse fly machine offers a supported and controlled way to target the posterior deltoids and upper back muscles. The machine helps to isolate these muscles and maintain proper form throughout the exercise. It's a great option for both beginners and experienced lifters to build strength and definition in the rear shoulders.",
        "muscle": "rear_delts"
    },
    {
        "category": "strength",
        "instructions": "1. Lie on a flat bench with your feet flat on the floor. Hold a dumbbell in each hand directly over your chest with your palms facing each other.\n2. Slowly lower the dumbbells straight down towards the sides of your chest, keeping a slight bend in your elbows. Focus on feeling a stretch across your chest muscles.\n3. Continue lowering until your elbows are slightly below your shoulders or you feel a comfortable stretch in your chest.\n4. Squeeze your pectoral muscles to bring the dumbbells back up in the same controlled arc, maintaining the slight bend in your elbows.\n5. Bring the dumbbells back to the starting position above your chest, briefly contracting your pecs.\n6. Repeat for the desired number of repetitions. Maintain control throughout the movement and avoid using momentum.",
        "difficulty": "beginner",
        "equipment": "dumbbell",
        "exercise_name": "Dumbbell Fly",
        "muscle_description": "The dumbbell fly is an isolation exercise that primarily targets the pectoralis major (chest muscles). It helps to stretch and contract the chest fibers, contributing to chest width and definition. It also engages the anterior deltoids and serratus anterior to a lesser extent for stabilization and assistance.",
        "muscle": "middle_pecs"
    },
    {
        "category": "strength",
        "instructions": "1. Lie on a flat bench with your feet flat on the floor. Grip the barbell with an overhand grip, slightly wider than shoulder-width apart.\n2. Unrack the barbell and hold it directly over your chest with your arms fully extended.\n3. Slowly lower the barbell towards your middle chest, keeping your elbows slightly tucked in and maintaining control.\n4. Continue lowering until the barbell lightly touches your chest.\n5. Push the barbell back up in a controlled manner, focusing on contracting your pectoral muscles.\n6. Lock out your elbows at the top but avoid hyperextension.\n7. Repeat for the desired number of repetitions. Ensure a spotter is present, especially with heavier weights.",
        "difficulty": "beginner",
        "equipment": "barbell",
        "exercise_name": "Barbell Bench Press",
        "muscle_description": "The barbell bench press is a compound exercise that primarily targets the pectoralis major (middle chest), as well as the anterior deltoids and triceps. It's a fundamental exercise for building overall upper body pushing strength and muscle mass in the chest, shoulders, and arms.",
        "muscle": "middle_pecs"
    },
    {
        "category": "strength",
        "instructions": "1. Set up a cable machine with pulleys positioned high. Attach D-handles to each cable.\n2. Grab the right handle with your right hand and the left handle with your left hand, stepping forward so there is tension on the cables. Your arms should be extended out to the sides, slightly above shoulder height.\n3. Keeping a slight bend in your elbows, bring your hands together in front of your chest in a controlled arc, focusing on squeezing your chest muscles as you pull.\n4. Continue pulling until your hands meet or slightly overlap in front of your chest.\n5. Pause briefly at the peak contraction, squeezing your pecs.\n6. Slowly return to the starting position, controlling the resistance of the cables.\n7. Repeat for the desired number of repetitions. Maintain a stable torso and avoid using momentum.",
        "difficulty": "beginner",
        "equipment": "cable",
        "exercise_name": "High Pulley Cable Crossover",
        "muscle_description": "The high pulley cable crossover is an isolation exercise that effectively targets the lower and inner fibers of the pectoralis major. The angle of pull from the high pulleys allows for a strong contraction in the lower chest as you bring your hands together and down. This exercise is excellent for shaping and defining the chest muscles and enhancing the mind-muscle connection.",
        "muscle": "middle_pecs"
    },
    {
        "category": "strength",
        "instructions": "1. Lie on a flat bench holding a dumbbell in each hand with a neutral grip (palms facing each other) directly above your chest.\n2. Slowly lower the dumbbells straight down towards the sides of your chest, keeping a slight bend in your elbows.\n3. Continue lowering until you feel a comfortable stretch across your chest.\n4. Squeeze your pectoral muscles to bring the dumbbells back up in the same controlled arc, maintaining the slight bend in your elbows.\n5. Bring the dumbbells back to the starting position above your chest, briefly contracting your pecs.\n6. Repeat for the desired number of repetitions. Focus on controlled movement and feeling the stretch and contraction in your chest.",
        "difficulty": "beginner",
        "equipment": "dumbbell",
        "exercise_name": "Flat Neutral Grip Dumbbell Press",
        "muscle_description": "The flat neutral grip dumbbell press is a variation that can be more comfortable for some individuals' shoulders while still effectively targeting the middle chest. The neutral grip may also engage the triceps slightly differently. This exercise is a good way to build strength and mass in the chest with a potentially reduced risk of shoulder discomfort.",
        "muscle": "middle_pecs"
    },
    {
        "category": "strength",
        "instructions": "1. Perform a standard push-up with your hands positioned shoulder-width apart or slightly wider, flat on the floor directly beneath your shoulders.\n2. Lower your chest towards the floor, keeping your body in a straight line from head to heels. Maintain control throughout the descent.\n3. Push back up to the starting position by extending your elbows, focusing on engaging your chest muscles.\n4. Repeat for the desired number of repetitions. If regular push-ups are too difficult, you can perform them on your knees.",
        "difficulty": "beginner",
        "equipment": "bodyweight",
        "exercise_name": "Push-Up",
        "muscle_description": "The push-up is a fundamental bodyweight exercise that primarily targets the pectoralis major (middle chest), as well as the anterior deltoids and triceps. It's a versatile exercise that can be modified to adjust the difficulty level and emphasizes upper body pushing strength and endurance. It also engages the core muscles for stability.",
        "muscle": "middle_pecs"
    },
    {
        "category": "strength",
        "instructions": "1. Lie on a decline bench set at approximately a 15-30 degree angle with your feet secured. Hold a dumbbell in each hand and extend them straight below your chest with your palms facing each other.\n2. Slowly lower the dumbbells out to the sides in a controlled arc, keeping a slight bend in your elbows. Focus on feeling a stretch in your lower chest muscles.\n3. Continue lowering until your elbows are slightly below your shoulders or you feel a comfortable stretch in your chest.\n4. Squeeze your lower chest muscles to bring the dumbbells back up in the same controlled arc, maintaining the slight bend in your elbows.\n5. Bring the dumbbells back to the starting position below your chest, briefly contracting your pecs.\n6. Repeat for the desired number of repetitions. Maintain control throughout the movement and avoid using momentum.",
        "difficulty": "intermediate",
        "equipment": "dumbbell",
        "exercise_name": "Decline Dumbbell Fly",
        "muscle_description": "The decline dumbbell fly is an isolation exercise that specifically targets the lower portion of the pectoralis major. The decline angle allows for a greater stretch and contraction of the lower chest fibers compared to flat or incline dumbbell flyes. This exercise is excellent for developing lower chest definition and contributing to overall chest thickness.",
        "muscle": "lower_pecs"
    },
    {
        "category": "strength",
        "instructions": "1. Lie on a decline bench set at a 15-30 degree angle with your feet secured. Grip the barbell with an overhand grip, slightly wider than shoulder-width apart.\n2. Unrack the barbell and hold it directly below your chest with your arms fully extended.\n3. Slowly lower the barbell towards your lower chest, keeping your elbows slightly tucked in and maintaining control.\n4. Continue lowering until the barbell lightly touches your lower chest.\n5. Push the barbell back up in a controlled manner, focusing on contracting your lower pectoral muscles.\n6. Lock out your elbows at the top but avoid hyperextension.\n7. Repeat for the desired number of repetitions. Ensure a spotter is present, especially with heavier weights.",
        "difficulty": "intermediate",
        "equipment": "barbell",
        "exercise_name": "Decline Barbell Bench Press",
        "muscle_description": "The decline barbell bench press is a compound exercise that primarily targets the lower fibers of the pectoralis major (lower pecs), as well as the anterior deltoids and triceps. The decline angle emphasizes the activation of the lower chest muscles, contributing to lower chest development and overall chest thickness. It's a valuable exercise for building a complete chest.",
        "muscle": "lower_pecs"
    },
    {
        "category": "strength",
        "instructions": "1. Set up a cable machine with pulleys positioned high. Attach D-handles to each cable.\n2. Grab the right handle with your right hand and the left handle with your left hand, stepping forward so there is tension on the cables. Your arms should be extended out to the sides, slightly above shoulder height.\n3. Keeping a slight bend in your elbows, bring your hands down and inward in a wide arc, focusing on contracting your lower chest muscles as you pull.\n4. Continue pulling until your hands meet or slightly overlap in front of your lower chest.\n5. Pause briefly at the peak contraction, squeezing your lower pecs.\n6. Slowly return to the starting position, controlling the resistance of the cables.\n7. Repeat for the desired number of repetitions. Maintain a stable torso and avoid using momentum.",
        "difficulty": "intermediate",
        "equipment": "cable",
        "exercise_name": "High to Low Cable Crossover",
        "muscle_description": "The high to low cable crossover is an effective isolation exercise for targeting the lower portion of the pectoralis major. The downward angle of pull emphasizes the lower chest fibers, helping to develop definition and separation in this area. The constant tension provided by the cables throughout the movement maximizes muscle fiber recruitment.",
        "muscle": "lower_pecs"
    },
    {
        "category": "strength",
        "instructions": "1. Lie on a decline bench set at a 15-30 degree angle with your feet secured. Hold a dumbbell in each hand with a neutral grip (palms facing each other) directly below your chest.\n2. Slowly lower the dumbbells straight down towards the sides of your lower chest, keeping a slight bend in your elbows.\n3. Continue lowering until you feel a comfortable stretch across your lower chest.\n4. Squeeze your lower pectoral muscles to bring the dumbbells back up in the same controlled arc, maintaining the slight bend in your elbows.\n5. Bring the dumbbells back to the starting position below your chest, briefly contracting your pecs.\n6. Repeat for the desired number of repetitions. Focus on controlled movement and feeling the stretch and contraction in your lower chest.",
        "difficulty": "beginner",
        "equipment": "dumbbell",
        "exercise_name": "Decline Neutral Grip Dumbbell Press",
        "muscle_description": "The decline neutral grip dumbbell press is a variation that effectively targets the lower pectoralis major while potentially being more comfortable for the shoulders. The neutral grip can also engage the triceps slightly differently. This exercise is a good way to build strength and mass in the lower chest with a potentially reduced risk of shoulder discomfort for some individuals.",
        "muscle": "lower_pecs"
    },
    {
        "category": "strength",
        "instructions": "1. Perform a standard push-up, but position your hands wider than shoulder-width apart. This wider grip can place more emphasis on the outer chest and lower chest muscles for some individuals.\n2. Lower your chest towards the floor, keeping your body in a straight line from head to heels. Maintain control throughout the descent.\n3. Push back up to the starting position by extending your elbows, focusing on engaging your chest muscles.\n4. Repeat for the desired number of repetitions. Experiment with hand placement to find what feels most effective for your lower chest.",
        "difficulty": "beginner",
        "equipment": "bodyweight",
        "exercise_name": "Wide-Grip Push-Up",
        "muscle_description": "The wide-grip push-up is a variation that can shift some of the emphasis from the triceps to the chest muscles, and for some, it can lead to greater activation of the outer and lower chest fibers. The wider hand placement provides a different angle of push, which can contribute to overall chest development.",
        "muscle": "lower_pecs"
    },
    {
        "category": "strength",
        "instructions": "1. Lie face down on a hyperextension bench with your hips positioned just below the top pad, allowing your legs to hang freely. Secure your ankles under the lower pads.\n2. Cross your arms over your chest or place your hands behind your head.\n3. Keeping your back straight, slowly lower your torso towards the floor by bending at your waist. Go down as far as comfortable, feeling a stretch in your hamstrings and glutes.\n4. Engage your hamstrings and glutes to raise your torso back up to the starting position, maintaining a straight line from your head to your heels.\n5. Avoid arching your back excessively at the top of the movement.\n6. Repeat for the desired number of repetitions. Focus on controlled movement and squeezing your hamstrings and glutes during the ascent.",
        "difficulty": "beginner",
        "equipment": "bodyweight",
        "exercise_name": "Hamstring Extension (Hyperextension Focus)",
        "muscle_description": "While primarily targeting the lower back, the back extension on a hyperextension bench also significantly engages the hamstrings and glutes as synergistic muscles to control the movement and extend the hips. By focusing on squeezing these muscles during the upward phase, you can effectively strengthen the posterior chain.",
        "muscle": "hamstrings"
    },
    {
        "category": "strength",
        "instructions": "1. Stand with your feet hip-width apart, holding a dumbbell in each hand down by your sides.\n2. Keeping your legs relatively straight (with a slight bend in the knees), hinge at your hips, lowering the dumbbells towards the floor. Keep your back straight and your core engaged throughout the movement.\n3. Lower the dumbbells as far as comfortable, typically until you feel a significant stretch in your hamstrings and your torso is nearly parallel to the floor.\n4. Squeeze your glutes and hamstrings to return to the upright starting position, maintaining a straight back.\n5. Repeat for the desired number of repetitions. Focus on controlled movement and feeling the engagement of your hamstrings and glutes.",
        "difficulty": "beginner",
        "equipment": "dumbbell",
        "exercise_name": "Dumbbell Romanian Deadlift (RDL)",
        "muscle_description": "The dumbbell Romanian deadlift is a highly effective exercise for targeting the hamstrings and glutes. It emphasizes the eccentric (lowering) phase, which is crucial for muscle growth and strength development in the posterior chain. Maintaining proper form with a straight back is essential to maximize hamstring engagement and prevent injury.",
        "muscle": "hamstrings"
    },
    {
        "category": "strength",
        "instructions": "1. Lie face down on a hamstring curl machine with the pad positioned just above your heels. Your legs should be straight.\n2. Grip the handles on the machine for stability.\n3. Curl your legs upward towards your glutes by flexing your knees, contracting your hamstring muscles.\n4. Continue curling as far as comfortable, typically until your heels are close to your buttocks.\n5. Pause briefly at the top, squeezing your hamstrings.\n6. Slowly lower the weight back to the starting position with control, allowing your hamstrings to stretch.\n7. Repeat for the desired number of repetitions.",
        "difficulty": "beginner",
        "equipment": "machine",
        "exercise_name": "Lying Leg Curl",
        "muscle_description": "The lying leg curl is an isolation exercise that directly targets the hamstring muscles (biceps femoris, semitendinosus, and semimembranosus) at the back of the thighs. It's an effective way to build strength and definition in the hamstrings, which are crucial for knee flexion and hip extension. This exercise helps to balance the development of the thigh muscles.",
        "muscle": "hamstrings"
    },
    {
        "category": "strength",
        "instructions": "1. Stand with your feet hip-width apart, holding a barbell across your upper back. You can also perform this exercise with dumbbells held at your sides.\n2. Keeping your legs relatively straight (with a slight bend in the knees), hinge at your hips, lowering your torso towards the floor. Keep your back straight and your core engaged throughout the movement.\n3. Lower the barbell or dumbbells as far as comfortable, typically until you feel a significant stretch in your hamstrings and your torso is nearly parallel to the floor.\n4. Squeeze your glutes and hamstrings to return to the upright starting position, maintaining a straight back.\n5. Repeat for the desired number of repetitions. The barbell allows for heavier loading compared to dumbbells.",
        "difficulty": "intermediate",
        "equipment": "barbell",
        "exercise_name": "Barbell Romanian Deadlift (RDL)",
        "muscle_description": "The barbell Romanian deadlift allows for a heavier load than the dumbbell version, making it excellent for building significant strength and muscle mass in the hamstrings and glutes. It emphasizes the posterior chain and is crucial for improving hip hinge mechanics and overall lower body power. Proper form is paramount to avoid lower back injury.",
        "muscle": "hamstrings"
    },
    {
        "category": "strength",
        "instructions": "1. Stand facing a low cable machine with an ankle strap attachment. Secure the strap around one ankle.\n2. Step back slightly to create tension on the cable. You can hold onto a stable object for balance.\n3. Keeping your standing leg slightly bent, curl the strapped leg backward towards your glutes by flexing your knee, contracting your hamstring muscles.\n4. Continue curling as far as comfortable, feeling the squeeze in your hamstrings.\n5. Pause briefly at the top.\n6. Slowly return your leg to the starting position with control, resisting the pull of the cable.\n7. Repeat for the desired number of repetitions on one leg, then switch to the other leg.",
        "difficulty": "beginner",
        "equipment": "cable",
        "exercise_name": "Standing Cable Leg Curl",
        "muscle_description": "The standing cable leg curl provides a constant tension on the hamstring muscles throughout the entire range of motion, which can lead to effective muscle activation and development. It also allows for unilateral training, helping to address any strength imbalances between legs. This exercise is a good alternative to machine leg curls and can be incorporated into various leg workouts.",
        "muscle": "hamstrings"
    },
    {
        "category": "strength",
        "instructions": "1. Sit on a rowing machine with your feet secured on the footrests. Grab the handles with an overhand grip.\n2. Initiate the movement by extending your legs fully, pushing off the footrests. Keep your back straight and lean forward slightly.\n3. Once your legs are extended, pull the handles towards your upper abdomen by bending your elbows and squeezing your shoulder blades together. Lean back slightly at your hips.\n4. Focus on using your back and arm muscles to pull, while your legs provide the initial power.\n5. Extend your arms straight forward, then bend your knees and slide the seat forward to return to the starting position with control.\n6. Repeat the rowing motion for the desired number of repetitions or for a set duration.",
        "difficulty": "beginner",
        "equipment": "machine",
        "exercise_name": "Rowing Machine",
        "muscle_description": "The rowing machine is a full-body exercise that engages numerous muscle groups. For the back, it primarily works the rhomboids and middle trapezius during the pull phase when you retract your shoulder blades. These muscles are crucial for posture and upper back strength. The lats also contribute to the pull-down motion of the arms.",
        "muscle": "rhomboids"
    },
    {
        "category": "strength",
        "instructions": "1. Stand with your feet shoulder-width apart, holding a dumbbell in each hand down by your sides with a neutral grip (palms facing your body).\n2. Hinge at your hips, keeping your back straight and your core engaged, until your torso is nearly parallel to the floor. Allow the dumbbells to hang straight down.\n3. Keeping a slight bend in your elbows, row the dumbbells upwards towards your chest. Focus on squeezing your shoulder blades together as you pull.\n4. Pull the dumbbells until your elbows are slightly above your back.\n5. Slowly lower the dumbbells back to the starting position with control.\n6. Repeat for the desired number of repetitions. This exercise directly targets the rhomboids and middle traps.",
        "difficulty": "beginner",
        "equipment": "dumbbell",
        "exercise_name": "Bent-Over Dumbbell Row",
        "muscle_description": "The bent-over dumbbell row is an excellent exercise for targeting the rhomboids and middle trapezius, which are responsible for retracting the scapula (pulling the shoulder blades together). It also engages the lats, posterior deltoids, and biceps as secondary movers. This exercise is crucial for building back thickness and improving posture.",
        "muscle": "rhomboids"
    },
    {
        "category": "strength",
        "instructions": "1. Lie face down on an incline bench set at approximately a 30-45 degree angle. Ensure your chest and stomach are fully supported.\n2. Hold a light dumbbell in each hand with a neutral grip (palms facing each other), letting them hang straight down towards the floor.\n3. Keeping your arms straight (but not locked), raise the dumbbells out to the sides in a controlled arc, squeezing your shoulder blades together.\n4. Focus on the contraction between your shoulder blades.\n5. Continue raising until your arms are parallel to the floor or slightly higher.\n6. Pause briefly at the top, feeling the squeeze in your rhomboids and middle traps.\n7. Slowly lower the dumbbells back to the starting position with control.\n8. Repeat for the desired number of repetitions. The incline helps isolate the upper back muscles.",
        "difficulty": "intermediate",
        "equipment": "dumbbell",
        "exercise_name": "Incline Dumbbell Row",
        "muscle_description": "The incline dumbbell row provides excellent isolation for the rhomboids and middle trapezius by minimizing the involvement of the lower back and other larger back muscles. The incline bench supports the torso, allowing you to focus on the retraction of the shoulder blades, which is key for strengthening these upper back muscles and improving posture.",
        "muscle": "rhomboids"
    },
    {
        "category": "strength",
        "instructions": "1. Sit at a cable row machine with your feet firmly planted on the footrests. Attach a straight bar or V-bar to the low pulley and grab it with an overhand or neutral grip.\n2. Keeping your back straight and core engaged, pull the bar towards your lower chest or upper abdomen by squeezing your shoulder blades together.\n3. Focus on retracting your scapula (pulling your shoulder blades towards each other).\n4. Maintain a slight lean back, hinging from your hips.\n5. Slowly allow the cable to pull your arms back to the starting position with control, keeping tension in your back muscles.\n6. Repeat for the desired number of repetitions. Avoid using momentum or rounding your back.",
        "difficulty": "beginner",
        "equipment": "machine",
        "exercise_name": "Seated Cable Row",
        "muscle_description": "The seated cable row is a versatile exercise that effectively targets the rhomboids and middle trapezius when performed with a focus on squeezing the shoulder blades together. It also engages the lats, biceps, and posterior deltoids. This exercise is excellent for building back thickness, improving posture, and strengthening the muscles responsible for scapular retraction.",
        "muscle": "rhomboids"
    },
    {
        "category": "strength",
        "instructions": "1. Lie face down on the floor with your arms extended straight out to the sides, forming a 'T' shape with your body. Your palms should be facing down.\n2. Keeping your chest and forehead lightly touching the floor, engage your upper back muscles and lift your arms and upper back slightly off the floor.\n3. Focus on squeezing your shoulder blades together and slightly down your back, actively engaging your rhomboids and lower traps.\n4. Hold the contracted position briefly at the top.\n5. Slowly lower your arms and upper back back down to the starting position with control.\n6. Repeat for the desired number of repetitions. This bodyweight exercise emphasizes upper back activation.",
        "difficulty": "beginner",
        "equipment": "bodyweight",
        "exercise_name": "Prone 'T' Raise",
        "muscle_description": "The prone 'T' raise is a bodyweight exercise that effectively targets the rhomboids and middle trapezius, as well as the posterior deltoids. By focusing on squeezing the shoulder blades together as you lift your arms, you strengthen the muscles responsible for scapular retraction, which is crucial for good posture and upper back health.",
        "muscle": "rhomboids"
    },
    {
        "category": "strength",
        "instructions": "1. Lie face down on the floor with your arms extended overhead in a 'Y' shape. Your palms should be facing down.\n2. Keeping your chest and forehead lightly touching the floor, engage your upper back muscles and lift your arms and upper back slightly off the floor.\n3. Focus on squeezing your shoulder blades down and back, engaging your lower traps and rhomboids.\n4. Hold the contracted position briefly at the top.\n5. Slowly lower your arms and upper back back down to the starting position with control.\n6. Repeat for the desired number of repetitions. This variation emphasizes the lower traps and rhomboids.",
        "difficulty": "beginner",
        "equipment": "bodyweight",
        "exercise_name": "Prone 'Y' Raise",
        "muscle_description": "The prone 'Y' raise is a bodyweight exercise that effectively targets the lower trapezius and rhomboids. The 'Y' arm position encourages scapular depression and retraction, which are the primary movements for these muscles. This exercise is excellent for improving posture, shoulder stability, and overall upper back strength.",
        "muscle": "rhomboids"
    },
    {
        "category": "strength",
        "instructions": "1. Lie face down on the floor with your arms extended straight out to the sides, forming a 'T' shape with your body. Your palms should be facing down.\n2. Keeping your chest and forehead lightly touching the floor, engage your upper back muscles and lift your arms and upper back slightly off the floor.\n3. Focus on squeezing your shoulder blades together, actively engaging your middle traps and rhomboids.\n4. Rotate your arms externally so your thumbs point towards the ceiling as you lift.\n5. Hold the contracted position briefly at the top.\n6. Slowly lower your arms and upper back back down to the starting position with control.\n7. Repeat for the desired number of repetitions. The external rotation adds emphasis to the lower traps and rear deltoids.",
        "difficulty": "beginner",
        "equipment": "bodyweight",
        "exercise_name": "Prone 'T' Raise with External Rotation",
        "muscle_description": "The prone 'T' raise with external rotation targets the middle traps and rhomboids, with added activation of the lower traps and posterior deltoids due to the external rotation of the arms. This exercise is beneficial for improving posture, shoulder stability, and overall upper back strength and health.",
        "muscle": "rhomboids"
    },
    {
        "category": "strength",
        "instructions": "1. Stand with your feet shoulder-width apart, holding a resistance band with both hands, palms facing each other and hands wider than shoulder-width apart.\n2. Keeping your arms straight, pull the band apart, moving your hands away from each other in a horizontal motion.\n3. As you pull, focus on squeezing your shoulder blades together, engaging your rhomboids and middle traps.\n4. Continue pulling until you feel a stretch across your upper back and a contraction between your shoulder blades.\n5. Pause briefly at the peak stretch.\n6. Slowly return your hands to the starting position with control, maintaining tension on the band.\n7. Repeat for the desired number of repetitions. This is a great exercise for improving scapular control and activating the upper back muscles.",
        "difficulty": "beginner",
        "equipment": "bodyweight",
        "exercise_name": "Resistance Band Pull-Apart",
        "muscle_description": "The resistance band pull-apart is an excellent exercise for activating and strengthening the rhomboids and middle trapezius, the muscles responsible for retracting the shoulder blades. It's a simple yet effective way to improve posture, enhance shoulder stability, and counteract the effects of prolonged sitting. The resistance band provides constant tension throughout the movement.",
        "muscle": "rhomboids"
    },
    {
        "category": "strength",
        "instructions": "1. Lie face down on the floor with your arms extended straight out to the sides, forming a 'T' shape with your body. Your palms should be facing down.\n2. Keeping your chest and forehead lightly touching the floor, engage your upper back muscles and lift your arms and upper back slightly off the floor.\n3. Focus on squeezing your shoulder blades together and slightly down your back, actively engaging your lower traps.\n4. Hold the contracted position briefly at the top.\n5. Slowly lower your arms and upper back back down to the starting position with control.\n6. Repeat for the desired number of repetitions. This exercise emphasizes lower trap activation.",
        "difficulty": "beginner",
        "equipment": "bodyweight",
        "exercise_name": "Superman (Lower Trap Focus)",
        "muscle_description": "While the standard Superman exercise targets the lower back, consciously focusing on squeezing the shoulder blades down and back during the movement shifts more emphasis to the lower trapezius muscles. This variation helps to improve shoulder stability, posture, and overall upper back strength.",
        "muscle": "lower_traps"
    },
    {
        "category": "strength",
        "instructions": "1. Kneel on all fours with your hands shoulder-width apart and your knees hip-width apart. Your back should be flat and your core engaged.\n2. Slowly round your back towards the ceiling, tucking your chin towards your chest (like a cat stretching).\n3. Hold this stretched position for a few seconds, feeling the release in your lower back.\n4. Slowly reverse the movement, arching your back slightly and lifting your head and tailbone towards the ceiling (like a cow).\n5. Hold this position for a few seconds, feeling a gentle contraction in your lower back.\n6. Continue alternating between the cat and cow positions for the desired number of repetitions. This is a mobility exercise that can also help improve lower back awareness and flexibility.",
        "difficulty": "beginner",
        "equipment": "bodyweight",
        "exercise_name": "Cat-Cow Stretch (Lower Back)",
        "muscle_description": "The cat-cow stretch is a gentle mobility exercise that improves flexibility and circulation in the spine, including the lower back. While not a strength exercise, it helps to increase awareness and control of the lower back muscles and can alleviate stiffness and tension. It's often used as part of a warm-up or cool-down routine.",
        "muscle": "lower_back"
    },
    {
        "category": "strength",
        "instructions": "1. Lie on your stomach with your arms extended straight overhead, palms facing down. Your legs should be extended straight back.\n2. Engage your lower back muscles and simultaneously lift your chest, arms, and legs off the floor.\n3. Aim to create a gentle arch in your lower back, like Superman flying. Keep your head in a neutral position, looking down at the floor.\n4. Hold the lifted position briefly, feeling the contraction in your lower back.\n5. Slowly lower your chest, arms, and legs back down to the starting position with control.\n6. Repeat for the desired number of repetitions. This is a bodyweight exercise that directly targets the lower back muscles.",
        "difficulty": "beginner",
        "equipment": "bodyweight",
        "exercise_name": "Superman",
        "muscle_description": "The superman exercise is a bodyweight movement that directly targets the erector spinae muscles of the lower back. It helps to strengthen these muscles, improve posture, and enhance core stability. It's a great exercise for counteracting the effects of prolonged sitting and can be incorporated into warm-ups or as part of a back and core routine.",
        "muscle": "lower_back"
    },
    {
        "category": "strength",
        "instructions": "1. Lie on your stomach with your forearms on the floor, elbows directly beneath your shoulders. Your legs should be extended straight back.\n2. Engage your core and gently lift your chest and head off the floor by pressing down through your forearms.\n3. Keep your lower body relaxed and on the floor. Focus on creating a gentle arch in your lower back without straining.\n4. Hold this position for a few seconds, feeling a mild contraction in your lower back muscles.\n5. Slowly lower your chest and head back down to the starting position with control.\n6. Repeat for the desired number of repetitions. This exercise helps to strengthen the lower back muscles and improve spinal extension.",
        "difficulty": "beginner",
        "equipment": "bodyweight",
        "exercise_name": "Cobra Pose (Modified)",
        "muscle_description": "The modified cobra pose is a gentle bodyweight exercise that helps to strengthen the erector spinae muscles of the lower back and improve spinal extension. It also stretches the abdominal muscles and chest. This exercise is beneficial for improving posture and can help to alleviate mild lower back discomfort. It's important to perform it with controlled movement and avoid overextending the lower back.",
        "muscle": "lower_back"
    },
    {
        "category": "strength",
        "instructions": "1. Stand with your feet hip-width apart, holding onto a stable object for balance if needed.\n2. Keeping your leg straight (but not locked) and your core engaged, slowly lift one leg out to the side, away from your body.\n3. Lift as high as comfortable while maintaining good form and balance. Focus on using the muscles on the outside of your hip to initiate the movement.\n4. Pause briefly at the top, feeling the contraction in your hip abductors.\n5. Slowly lower your leg back down to the starting position with control.\n6. Repeat for the desired number of repetitions on one leg, then switch to the other leg.",
        "difficulty": "beginner",
        "equipment": "bodyweight",
        "exercise_name": "Standing Leg Abduction",
        "muscle_description": "The standing leg abduction is a bodyweight exercise that primarily targets the hip abductor muscles, including the gluteus medius and gluteus minimus, located on the outer side of the hip. These muscles are crucial for stabilizing the pelvis during walking and running, as well as for overall hip stability and balance. Strengthening the hip abductors can help prevent knee and hip injuries.",
        "muscle": "hip_abductor"
    },
    {
        "category": "strength",
        "instructions": "1. Lie on your side with your legs stacked on top of each other. Your bottom leg can be slightly bent for stability. Rest your head on your lower arm or support it with your hand.\n2. Keeping your top leg straight (but not locked) and your core engaged, slowly lift your top leg upwards towards the ceiling.\n3. Lift as high as comfortable while maintaining good form. Avoid rotating your hips forward or backward; the movement should be purely from the hip joint.\n4. Pause briefly at the top, feeling the contraction in your outer hip (gluteus medius).\n5. Slowly lower your top leg back down to meet your bottom leg with control.\n6. Repeat for the desired number of repetitions on one side, then roll over and repeat on the other side.",
        "difficulty": "beginner",
        "equipment": "bodyweight",
        "exercise_name": "Side-Lying Leg Raise",
        "muscle_description": "The side-lying leg raise is an effective bodyweight exercise for isolating and strengthening the hip abductor muscles, particularly the gluteus medius. This exercise is important for improving hip stability, pelvic alignment, and preventing injuries to the hips and knees. It's often recommended for rehabilitation and prehab routines.",
        "muscle": "hip_abductor"
    },
    {
        "category": "strength",
        "instructions": "1. Sit on a hip abduction machine with your knees positioned against the outer pads. Adjust the machine so that the pads are comfortably against the outside of your thighs.\n2. Place your feet flat on the footrests and grip the handles for stability.\n3. Keeping your back pressed against the pad, push your legs outward against the resistance of the machine, moving your knees away from each other.\n4. Continue moving your legs apart as far as comfortable, feeling the contraction in your outer hips and glutes.\n5. Pause briefly at the peak contraction.\n6. Slowly return your legs to the starting position, controlling the resistance.\n7. Repeat for the desired number of repetitions.",
        "difficulty": "beginner",
        "equipment": "machine",
        "exercise_name": "Hip Abduction Machine",
        "muscle_description": "The hip abduction machine provides a controlled way to target the hip abductor muscles, primarily the gluteus medius and gluteus minimus. This exercise is excellent for building strength and endurance in these muscles, which are vital for hip stability, pelvic control, and proper gait mechanics. It's a common exercise for both fitness and rehabilitation purposes.",
        "muscle": "hip_abductor"
    },
    {
        "category": "strength",
        "instructions": "1. Loop a resistance band around your ankles, standing with your feet hip-width apart to create tension on the band.\n2. Keeping your legs relatively straight (but not locked) and your core engaged, slowly step one leg out to the side, away from your body, against the resistance of the band.\n3. Step as far as comfortable while maintaining good form and balance. Focus on using the muscles on the outside of your hip to move your leg.\n4. Bring your leg back to the starting position with control, maintaining tension on the band.\n5. Repeat for the desired number of repetitions on one leg, then switch to the other leg.",
        "difficulty": "beginner",
        "equipment": "bodyweight",
        "exercise_name": "Banded Lateral Walk",
        "muscle_description": "The banded lateral walk is a dynamic exercise that effectively engages the hip abductor muscles, particularly the gluteus medius. The resistance band provides constant tension as you step sideways, strengthening the muscles responsible for hip stabilization and pelvic control. This exercise is excellent for improving functional strength, balance, and preventing lower body injuries.",
        "muscle": "hip_abductor"
    },
    {
        "category": "strength",
        "instructions": "1. Kneel on all fours with your hands shoulder-width apart and your knees hip-width apart. Your back should be flat and your core engaged.\n2. Keeping your knee bent at a 90-degree angle, lift one leg out to the side and upward, so your thigh is parallel to the floor.\n3. Focus on using your outer hip muscles (gluteus medius and minimus) to lift your leg.\n4. Avoid rotating your hips or arching your back excessively.\n5. Pause briefly at the top, feeling the contraction in your hip abductors.\n6. Slowly lower your leg back down to the starting position with control.\n7. Repeat for the desired number of repetitions on one leg, then switch to the other leg.",
        "difficulty": "beginner",
        "equipment": "bodyweight",
        "exercise_name": "Fire Hydrant",
        "muscle_description": "The fire hydrant exercise is a bodyweight movement that effectively isolates and strengthens the hip abductor muscles, especially the gluteus medius. The bent knee position helps to target these muscles specifically. This exercise is beneficial for improving hip stability, pelvic control, and overall lower body function. It's often used in warm-ups and rehabilitation programs.",
        "muscle": "hip_abductor"
    },
    {
        "category": "strength",
        "instructions": "1. Sit or stand with good posture, looking straight ahead. Place one hand on the side of your head, just above your ear.\n2. Gently push your head sideways towards your shoulder, resisting the movement with your neck muscles. You should feel a stretch on the opposite side of your neck.\n3. Hold this isometric contraction for a few seconds, maintaining a steady resistance with your hand.\n4. Slowly return your head to the neutral starting position.\n5. Repeat for the desired number of repetitions on one side, then switch hands and repeat on the other side.", "difficulty": "beginner",
        "equipment": "bodyweight",
        "exercise_name": "Isometric Neck Flexion (Side)",
        "muscle_description": "Isometric neck flexion (side) strengthens the lateral neck muscles (sternocleidomastoid, scalenes) responsible for side bending and rotation of the head. By resisting the manual pressure, you engage these muscles without movement, improving strength and stability in the neck.",
        "muscle": "neck"
    },
    {
        "category": "strength",
        "instructions": "1. Sit or stand with good posture, looking straight ahead. Place your palm on your forehead.\n2. Gently push your head forward, resisting the movement with your neck muscles. You should feel a contraction in the front of your neck.\n3. Hold this isometric contraction for a few seconds, maintaining a steady resistance with your hand.\n4. Slowly return your head to the neutral starting position.\n5. Repeat for the desired number of repetitions.",
        "difficulty": "beginner",
        "equipment": "bodyweight",
        "exercise_name": "Isometric Neck Flexion (Front)",
        "muscle_description": "Isometric neck flexion (front) strengthens the anterior neck muscles (sternocleidomastoid, longus capitis, longus colli) responsible for bending the head forward. By resisting the manual pressure, you engage these muscles without movement, improving strength and stability in the front of the neck.",
        "muscle": "neck"
    },
    {
        "category": "strength",
        "instructions": "1. Sit or stand with good posture, looking straight ahead. Place your hands behind your head, interlacing your fingers.\n2. Gently push your head backward into your hands, resisting the movement with your neck muscles. You should feel a contraction in the back of your neck.\n3. Hold this isometric contraction for a few seconds, maintaining a steady resistance with your hands.\n4. Slowly return your head to the neutral starting position.\n5. Repeat for the desired number of repetitions.",
        "difficulty": "beginner",
        "equipment": "bodyweight",
        "exercise_name": "Isometric Neck Extension",
        "muscle_description": "Isometric neck extension strengthens the posterior neck muscles (trapezius, splenius capitis, semispinalis capitis) responsible for extending the head backward. By resisting the manual pressure, you engage these muscles without movement, improving strength and stability in the back of the neck.",
        "muscle": "neck"
    },
    {
        "category": "strength",
        "instructions": "1. Lie on your back on a bench with your head hanging off the edge. Hold a light weight plate or dumbbell on your forehead with both hands.\n2. Slowly lower your head towards the floor, allowing your neck to extend gently.\n3. Using your neck muscles, slowly lift your head back up to the neutral position, then continue to flex your chin towards your chest.\n4. Perform the movement slowly and with control throughout the full range of motion.\n5. Repeat for the desired number of repetitions with a light weight. This exercise works both the neck flexors and extensors.",
        "difficulty": "intermediate",
        "equipment": "bodyweight",
        "exercise_name": "Neck Extension and Flexion (Weighted)",
        "muscle_description": "Weighted neck extension and flexion strengthens both the anterior and posterior neck muscles through a controlled range of motion. The added weight increases the resistance, leading to greater strength gains in the neck flexors and extensors, which are important for neck stability and injury prevention.",
        "muscle": "neck"
    },
    {
        "category": "strength",
        "instructions": "1. Lie on your back on a bench with your head hanging off the edge. Place one hand on the side of your head, just above your ear.\n2. Slowly lower your head towards the side, allowing your neck to laterally flex gently.\n3. Using your lateral neck muscles, slowly lift your head back up to the neutral position, then continue to flex your ear towards your shoulder on the opposite side.\n4. Perform the movement slowly and with control through a comfortable range of motion.\n5. Repeat for the desired number of repetitions on one side, then switch hands and repeat on the other side. This exercise targets the lateral neck muscles.",
        "difficulty": "intermediate",
        "equipment": "bodyweight",
        "exercise_name": "Lateral Neck Flexion (Weighted)",
        "muscle_description": "Weighted lateral neck flexion strengthens the lateral neck muscles (sternocleidomastoid, scalenes) responsible for side bending of the head. The added weight increases the resistance, leading to greater strength gains in these muscles, which contribute to neck stability and reducing the risk of lateral neck strain.",
        "muscle": "neck"
    },
    {
        "category": "strength",
        "instructions": "1. Stand with your feet shoulder-width apart, holding a dumbbell in each hand down by your sides with a neutral grip.\n2. Keeping your arms straight, shrug your shoulders straight up towards your ears as high as you can.\n3. Focus on lifting with your upper trapezius muscles.\n4. Hold the shrugged position briefly at the top, squeezing your traps.\n5. Slowly lower your shoulders back down to the starting position with control.\n6. Repeat for the desired number of repetitions.",
        "difficulty": "beginner",
        "equipment": "dumbbell",
        "exercise_name": "Dumbbell Shrug",
        "muscle_description": "The dumbbell shrug is a fundamental exercise for targeting the upper trapezius muscles, located at the top of the shoulders and neck. Strengthening these muscles can improve neck and upper back stability, contribute to shoulder aesthetics, and enhance performance in exercises like deadlifts and rows.",
        "muscle": "upper_traps"
    },
    {
        "category": "strength",
        "instructions": "1. Stand with your feet shoulder-width apart, holding a barbell in front of your thighs with an overhand grip, hands slightly wider than shoulder-width apart.\n2. Keeping your arms straight, shrug your shoulders straight up towards your ears as high as you can.\n3. Focus on lifting with your upper trapezius muscles.\n4. Hold the shrugged position briefly at the top, squeezing your traps.\n5. Slowly lower the barbell back down to the starting position with control.\n6. Repeat for the desired number of repetitions. The barbell allows for heavier loads compared to dumbbells.",
        "difficulty": "intermediate",
        "equipment": "barbell",
        "exercise_name": "Barbell Shrug",
        "muscle_description": "The barbell shrug is a compound exercise that effectively targets the upper trapezius muscles. The barbell allows for the use of heavier weights, which can lead to greater strength and muscle mass gains in the upper traps. It's a staple exercise for building a thick and powerful upper back and neck region.",
        "muscle": "upper_traps"
    },
    {
        "category": "strength",
        "instructions": "1. Stand with your feet shoulder-width apart, holding a trap bar (hex bar) with the handles at your sides, using a neutral grip.\n2. Keeping your arms straight, shrug your shoulders straight up towards your ears as high as you can.\n3. Focus on lifting with your upper trapezius muscles.\n4. Hold the shrugged position briefly at the top, squeezing your traps.\n5. Slowly lower your shoulders back down to the starting position with control.\n6. Repeat for the desired number of repetitions. The trap bar can offer a more neutral spine position and potentially allow for heavier loads compared to a standard barbell shrug.",
        "difficulty": "intermediate",
        "equipment": "barbell",
        "exercise_name": "Trap Bar Shrug",
        "muscle_description": "The trap bar shrug is a variation of the shrug that targets the upper trapezius muscles while potentially reducing stress on the lower back due to the more neutral hand position and weight distribution around the body. It's an effective way to build upper trap strength and mass.",
        "muscle": "upper_traps"
    },
    {
        "category": "strength",
        "instructions": "1. Sit on a bench or stand with your feet shoulder-width apart, holding a dumbbell in each hand down by your sides with a neutral grip.\n2. Keeping your arms straight, shrug your shoulders straight up towards your ears as high as you can.\n3. Focus on lifting with your upper trapezius muscles.\n4. Hold the shrugged position briefly at the top, squeezing your traps.\n5. Slowly lower your shoulders back down to the starting position with control.\n6. Repeat for the desired number of repetitions. Sitting can help to eliminate any potential leg drive or body sway.",
        "difficulty": "beginner",
        "equipment": "dumbbell",
        "exercise_name": "Seated Dumbbell Shrug",
        "muscle_description": "The seated dumbbell shrug isolates the upper trapezius muscles by removing the ability to use leg drive or other lower body movements to assist with the lift. This focused approach can lead to better muscle activation and development in the upper traps.",
        "muscle": "upper_traps"
    },
    {
        "category": "strength",
        "instructions": "1. Attach a low pulley cable machine with a straight bar attachment. Stand facing away from the machine and grasp the bar with an overhand grip, hands shoulder-width apart.\n2. Step forward slightly to create tension on the cable. Your arms should be straight down.\n3. Keeping your arms straight, shrug your shoulders straight up towards your ears as high as you can, pulling the cable upwards.\n4. Focus on lifting with your upper trapezius muscles.\n5. Hold the shrugged position briefly at the top, squeezing your traps.\n6. Slowly lower your shoulders back down to the starting position with control, resisting the pull of the cable.\n7. Repeat for the desired number of repetitions. The cable provides constant tension throughout the movement.",
        "difficulty": "intermediate",
        "equipment": "cable",
        "exercise_name": "Cable Shrug",
        "muscle_description": "The cable shrug offers a consistent line of resistance, which can provide a different stimulus to the upper trapezius muscles compared to free weights. The constant tension throughout the entire range of motion can lead to effective upper trap development and strength gains.",
        "muscle": "upper_traps"
    },
    {
        "category": "strength",
        "instructions": "1. Lie face down on an incline bench set at approximately a 30-45 degree angle. Ensure your chest and stomach are fully supported.\n2. Hold a light dumbbell in each hand with a neutral grip (palms facing each other), letting them hang straight down towards the floor.\n3. Keeping your arms straight (but not locked), squeeze your shoulder blades together and slightly down your back, as if you're trying to tuck them into your back pockets. This movement will cause the dumbbells to lift slightly.\n4. Focus on the contraction in your lower traps and middle back.\n5. Hold the contracted position briefly.\n6. Slowly lower the dumbbells back to the starting position with control.\n7. Repeat for the desired number of repetitions. This exercise emphasizes scapular retraction and depression.",
        "difficulty": "intermediate",
        "equipment": "dumbbell",
        "exercise_name": "Incline Dumbbell Scapular Retraction",
        "muscle_description": "The incline dumbbell scapular retraction specifically targets the lower trapezius and rhomboids. The incline bench helps to isolate these muscles by reducing the involvement of other back muscles. Strengthening the lower traps is crucial for posture, shoulder stability, and overall upper back health, counteracting the tendency for rounded shoulders.",
        "muscle": "lower_traps"
    },
    {
        "category": "strength",
        "instructions": "1. Stand with your feet shoulder-width apart, holding a light resistance band with both hands, palms facing each other and hands wider than shoulder-width apart.\n2. Keeping your arms straight, pull the band apart, moving your hands away from each other in a horizontal motion.\n3. As you pull, focus on squeezing your shoulder blades together and slightly down your back, engaging your lower traps.\n4. Continue pulling until you feel a stretch across your upper back and a contraction between and slightly below your shoulder blades.\n5. Pause briefly at the peak stretch.\n6. Slowly return your hands to the starting position with control, maintaining tension on the band.\n7. Repeat for the desired number of repetitions. This is a great exercise for improving scapular control and activating the lower traps.",
        "difficulty": "beginner",
        "equipment": "bodyweight",
        "exercise_name": "Resistance Band Pull-Apart (Lower Trap Focus)",
        "muscle_description": "The resistance band pull-apart, when performed with a focus on squeezing the shoulder blades down and back, effectively targets the lower trapezius and middle traps. This exercise is excellent for improving posture, shoulder stability, and upper back health. The resistance band provides constant tension and allows for controlled movement.",
        "muscle": "lower_traps"
    },
    {
        "category": "strength",
        "instructions": "1. Lie face down on the floor with your arms extended straight out to the sides, forming a 'T' shape with your body. Your palms should be facing down.\n2. Keeping your chest and forehead lightly touching the floor, engage your upper back muscles and lift your arms and upper back slightly off the floor.\n3. Focus on squeezing your shoulder blades together and slightly down your back, actively engaging your lower traps.\n4. Hold the contracted position briefly at the top.\n5. Slowly lower your arms and upper back back down to the starting position with control.\n6. Repeat for the desired number of repetitions. This bodyweight exercise emphasizes lower trap activation.",
        "difficulty": "beginner",
        "equipment": "bodyweight",
        "exercise_name": "Prone 'T' Raise (Lower Trap Focus)",
        "muscle_description": "The prone 'T' raise, when performed with a conscious effort to retract and depress the scapula, effectively targets the lower trapezius and middle traps. This exercise helps to improve posture, strengthen the upper back, and enhance shoulder stability without the need for external weights.",
        "muscle": "lower_traps"
    },
    {
        "category": "strength",
        "instructions": "1. Stand with your feet shoulder-width apart, holding a dumbbell in each hand down by your sides with a neutral grip.\n2. Keeping your arms straight, shrug your shoulders slightly back and down, as if trying to tuck your shoulder blades into your back pockets.\n3. Focus on the subtle movement and contraction in your lower and middle traps.\n4. Hold the retracted and depressed position briefly.\n5. Slowly return your shoulders to the neutral starting position with control.\n6. Repeat for the desired number of repetitions. This is a smaller, more controlled movement than a traditional shrug.",
        "difficulty": "intermediate",
        "equipment": "dumbbell",
        "exercise_name": "Dumbbell Scapular Depression",
        "muscle_description": "The dumbbell scapular depression exercise specifically targets the lower trapezius muscles, which are responsible for depressing and retracting the scapula. Strengthening these muscles is vital for good posture, shoulder stability, and preventing shoulder impingement issues. This exercise focuses on the downward and backward movement of the shoulder blades.",
        "muscle": "lower_traps"
    },
    {
        "category": "strength",
        "instructions": "1. Attach a resistance band to a stable anchor point at around chest height. Hold the other end of the band with both hands, palms facing down.\n2. Step back to create tension on the band.\n3. Keeping your arms straight, pull your hands straight back towards your body, focusing on squeezing your shoulder blades together and slightly down your back.\n4. Imagine you are trying to pinch a pencil between your shoulder blades and tuck them down towards your waist.\n5. Hold the contracted position briefly.\n6. Slowly return your arms to the starting position with control, maintaining tension on the band.\n7. Repeat for the desired number of repetitions. This exercise emphasizes horizontal pulling with scapular retraction and depression.",
        "difficulty": "beginner",
        "equipment": "bodyweight",
        "exercise_name": "Banded Row (Lower Trap Focus)",
        "muscle_description": "The banded row, when performed with a focus on squeezing the shoulder blades down and back, is an effective exercise for engaging the lower trapezius and middle traps. The resistance band provides constant tension and allows for controlled movement, promoting strength and endurance in these postural muscles.",
        "muscle": "lower_traps"
    },
    {
        "category": "strength",
        "instructions": "1. Sit on a bench with your forearms resting on your thighs, palms facing upward and wrists extending beyond your knees. Hold a dumbbell in each hand.\n2. Keeping your forearms pressed against your thighs, curl your wrists upward, lifting the dumbbells as high as comfortable by flexing your wrist joint.\n3. Focus on the contraction in your forearm muscles (wrist flexors).\n4. Slowly lower the dumbbells back down to the starting position by extending your wrists.\n5. Repeat for the desired number of repetitions.",
        "difficulty": "beginner",
        "equipment": "dumbbell",
        "exercise_name": "Wrist Curl (Palms Up)",
        "muscle_description": "The wrist curl with palms facing up primarily targets the wrist flexor muscles on the underside of your forearm. These muscles are responsible for bending the wrist forward. Strengthening them can improve grip strength and forearm development.",
        "muscle": "forearms"
    },
    {
        "category": "strength",
        "instructions": "1. Sit on a bench with your forearms resting on your thighs, palms facing downward and wrists extending beyond your knees. Hold a dumbbell in each hand.\n2. Keeping your forearms pressed against your thighs, let your wrists drop down, then extend them upward, lifting the dumbbells as high as comfortable by extending your wrist joint.\n3. Focus on the contraction in your forearm muscles (wrist extensors) on the top of your forearm.\n4. Slowly lower the dumbbells back down to the starting position by flexing your wrists.\n5. Repeat for the desired number of repetitions.",
        "difficulty": "beginner",
        "equipment": "dumbbell",
        "exercise_name": "Wrist Extension (Palms Down)",
        "muscle_description": "The wrist extension with palms facing down primarily targets the wrist extensor muscles on the top of your forearm. These muscles are responsible for bending the wrist backward. Strengthening them can improve grip strength and forearm development.",
        "muscle": "forearms"
    },
    {
        "category": "strength",
        "instructions": "1. Stand with your feet shoulder-width apart, holding a dumbbell in each hand down by your sides with a neutral grip (palms facing your body).\n2. Keeping your elbows close to your sides, curl the dumbbells up towards your shoulders. Maintain the neutral grip throughout the movement.\n3. Focus on the contraction in your brachialis and brachioradialis muscles in your forearms and upper arms.\n4. Slowly lower the dumbbells back down to the starting position with control.\n5. Repeat for the desired number of repetitions. This grip emphasizes the forearm muscles more than a standard bicep curl.",
        "difficulty": "beginner",
        "equipment": "dumbbell",
        "exercise_name": "Hammer Curl",
        "muscle_description": "While primarily a bicep exercise, the hammer curl with a neutral grip significantly engages the brachialis and brachioradialis muscles in the forearms, contributing to forearm thickness and grip strength. It's an excellent exercise for overall arm development.",
        "muscle": "forearms"
    },
    {
        "category": "strength",
        "instructions": "1. Stand with your feet shoulder-width apart, holding a barbell with an overhand grip (palms facing down), hands shoulder-width apart.\n2. Keeping your elbows close to your sides, curl the barbell up towards your shoulders by flexing your elbows. This grip shifts more emphasis to the brachialis and brachioradialis compared to a supinated grip curl.\n3. Focus on the contraction in your upper forearms and biceps.\n4. Slowly lower the barbell back down to the starting position with control.\n5. Repeat for the desired number of repetitions.",
        "difficulty": "intermediate",
        "equipment": "barbell",
        "exercise_name": "Reverse Barbell Curl",
        "muscle_description": "The reverse barbell curl with an overhand grip heavily targets the brachialis and brachioradialis muscles in the forearms, as well as the biceps brachii. It's a great exercise for building strength and size in the upper forearms and can contribute to improved grip strength and overall arm development.",
        "muscle": "forearms"
    },
    {
        "category": "strength",
        "instructions": "1. Sit on a bench with your forearms resting on your thighs, palms facing upward. Hold a barbell with an underhand grip, hands shoulder-width apart, with your wrists extending beyond your knees.\n2. Keeping your forearms pressed against your thighs, curl the barbell upward by flexing your wrists as high as comfortable.\n3. Focus on the contraction in your wrist flexors.\n4. Slowly lower the barbell back down to the starting position by extending your wrists.\n5. Repeat for the desired number of repetitions.",
        "difficulty": "beginner",
        "equipment": "barbell",
        "exercise_name": "Barbell Wrist Curl",
        "muscle_description": "The barbell wrist curl is an effective exercise for building strength and mass in the wrist flexor muscles of the forearms. The barbell allows for a heavier load compared to dumbbells, which can lead to greater muscle fiber recruitment and development in the forearm flexors, improving grip strength.",
        "muscle": "forearms"
    },
    {
        "category": "strength",
        "instructions": "1. Lie on your back with your knees bent and feet flat on the floor, hip-width apart. Your arms can be by your sides with palms facing down.\n2. Engage your glutes and lift your hips off the floor until your body forms a straight line from your shoulders to your knees.\n3. Squeeze your glutes tightly at the top of the movement.\n4. Hold this position briefly.\n5. Slowly lower your hips back down to the starting position with control.\n6. Repeat for the desired number of repetitions. This is a fundamental exercise for glute activation.",
        "difficulty": "beginner",
        "equipment": "bodyweight",
        "exercise_name": "Glute Bridge",
        "muscle_description": "The glute bridge is a fundamental exercise that primarily targets the gluteus maximus, the largest muscle in the buttocks. It also engages the gluteus medius and minimus, as well as the hamstrings and core muscles. Glute bridges are excellent for building glute strength, improving hip extension, and enhancing core stability.",
        "muscle": "glutes"
    },
    {
        "category": "strength",
        "instructions": "1. Stand with your feet hip-width apart, holding a barbell across your upper back. You can also perform this exercise with dumbbells held at your sides.\n2. Initiate the movement by pushing your hips back as if you're sitting down in a chair.\n3. Continue lowering your hips until your thighs are parallel to the floor or as low as comfortable while maintaining good form. Ensure your knees track over your toes.\n4. Keep your weight on your heels and the middle of your feet.\n5. Push through your heels to return to the standing starting position, squeezing your glutes at the top.\n6. Repeat for the desired number of repetitions. Squats are a compound exercise heavily engaging the glutes.",
        "difficulty": "beginner",
        "equipment": "barbell",
        "exercise_name": "Squat",
        "muscle_description": "The squat is a compound exercise that significantly targets the gluteus maximus, medius, and minimus, along with the quadriceps and hamstrings. It's a foundational movement for building lower body strength, power, and muscle mass. Proper form is crucial to maximize glute activation and prevent injury.",
        "muscle": "glutes"
    },
    {
        "category": "strength",
        "instructions": "1. Stand with your feet hip-width apart, holding a dumbbell in each hand down by your sides.\n2. Step forward with one leg, lowering your hips until both knees are bent at approximately a 90-degree angle. Your front knee should be directly over your ankle, and your back knee should hover just above the floor.\n3. Keep your chest up, shoulders back, and core engaged.\n4. Push off with your front foot, focusing on squeezing the glutes of your front leg to return to the starting position.\n5. Repeat the movement, stepping forward with the other leg.\n6. Continue alternating legs for the desired number of repetitions. Lunges are excellent for unilateral glute work.",
        "difficulty": "beginner",
        "equipment": "dumbbell",
        "exercise_name": "Dumbbell Lunge",
        "muscle_description": "The dumbbell lunge is a unilateral exercise that effectively targets the gluteus maximus, medius, and minimus of the front leg, as well as the quadriceps and hamstrings. It also engages the muscles of the back leg for balance and stability. Lunges are great for improving lower body strength, balance, and coordination.",
        "muscle": "glutes"
    },
    {
        "category": "strength",
        "instructions": "1. Stand with your feet hip-width apart, holding a barbell across your upper back. Position your feet slightly wider than shoulder-width, with your toes pointed out slightly.\n2. Initiate the movement by pushing your hips back and bending your knees, lowering the barbell straight down.\n3. Keep your back straight and your chest up. Lower until your thighs are parallel to the floor or as low as comfortable.\n4. Focus on pushing through your heels and squeezing your glutes as you return to the starting position.\n5. Repeat for the desired number of repetitions. The wider stance and slight toe-out can emphasize glute activation.",
        "difficulty": "intermediate",
        "equipment": "barbell",
        "exercise_name": "Barbell Wide-Stance Squat",
        "muscle_description": "The wide-stance squat, often referred to as a sumo squat, places a greater emphasis on the gluteus maximus and the inner thighs (adductors) compared to a traditional squat. It's an effective variation for targeting the glutes from a different angle and can be beneficial for individuals with certain body types or mobility limitations.",
        "muscle": "glutes"
    },
    {
        "category": "strength",
        "instructions": "1. Set up a barbell on a padded bar across your hips while sitting on the floor with your legs extended. Position yourself near a bench.\n2. Lean back and place your upper back on the bench, keeping your knees bent and feet flat on the floor.\n3. Lower your hips towards the floor with control.\n4. Engage your glutes and push your hips back up until your body forms a straight line from your shoulders to your knees, lifting the barbell with your hips.\n5. Squeeze your glutes tightly at the top.\n6. Slowly lower the barbell back down to the starting position.\n7. Repeat for the desired number of repetitions. This exercise isolates the glutes effectively.",
        "difficulty": "intermediate",
        "equipment": "barbell",
        "exercise_name": "Barbell Hip Thrust",
        "muscle_description": "The barbell hip thrust is a highly effective exercise for isolating and strengthening the gluteus maximus. The horizontal force vector directly targets the glutes, leading to significant muscle activation and growth. It's an excellent exercise for improving hip extension power and developing strong, well-defined glutes.",
        "muscle": "glutes"
    },
    {
        "category": "strength",
        "instructions": "1. Stand with the balls of your feet on an elevated surface (like a step or weight plate), allowing your heels to hang off the edge. Hold dumbbells in your hands or a barbell across your upper back for added resistance.\n2. Keeping your legs straight (but not locked), rise up onto the balls of your feet by contracting your calf muscles (gastrocnemius and soleus).\n3. Lift as high as comfortable, feeling a strong contraction in your calves.\n4. Hold the contracted position briefly.\n5. Slowly lower your heels back down below the level of the elevated surface, feeling a stretch in your calves.\n6. Repeat for the desired number of repetitions.",
        "difficulty": "beginner",
        "equipment": "bodyweight",
        "exercise_name": "Standing Calf Raise",
        "muscle_description": "The standing calf raise primarily targets the gastrocnemius muscle, the larger, more visible muscle of the calf, because it's more active when the knee is extended. This exercise is essential for building calf size, strength, and definition, and it also improves ankle stability and plantarflexion power.",
        "muscle": "calves"
    },
    {
        "category": "strength",
        "instructions": "1. Sit on a seated calf raise machine with the balls of your feet on the platform and the resistance pad resting on your lower thighs, just above your knees.\n2. Keeping your feet flat on the platform, lift your heels as high as comfortable by contracting your calf muscles (primarily the soleus, as the gastrocnemius is less active when the knee is bent).\n3. Focus on the contraction in your lower calf muscle.\n4. Hold the contracted position briefly.\n5. Slowly lower your heels back down to the starting position, feeling a stretch in your soleus.\n6. Repeat for the desired number of repetitions.",
        "difficulty": "beginner",
        "equipment": "machine",
        "exercise_name": "Seated Calf Raise",
        "muscle_description": "The seated calf raise primarily targets the soleus muscle, which lies underneath the gastrocnemius. The bent knee position isolates the soleus more effectively. Developing the soleus contributes to overall calf thickness and strength endurance.",
        "muscle": "calves"
    },
    {
        "category": "strength",
        "instructions": "1. Find a sturdy ledge or step that you can safely stand on with one foot, allowing your heel to hang off the edge. You can hold a dumbbell in the hand on the same side as the working leg for added resistance.\n2. Keeping your leg straight (but not locked), rise up onto the ball of your foot by contracting your calf muscles.\n3. Lift as high as comfortable, feeling a strong contraction.\n4. Hold briefly, then slowly lower your heel down below the level of the step, feeling a stretch.\n5. Repeat for the desired number of repetitions on one leg, then switch to the other leg. This allows for focused unilateral calf training.",
        "difficulty": "beginner",
        "equipment": "bodyweight",
        "exercise_name": "Single-Leg Calf Raise",
        "muscle_description": "The single-leg calf raise increases the intensity on the calf muscles compared to a two-legged version, as you are lifting your entire body weight (plus any added weight) on one leg. This exercise effectively targets both the gastrocnemius and soleus and can help improve balance and ankle stability.",
        "muscle": "calves"
    },
    {
        "category": "strength",
        "instructions": "1. Stand with your feet flat on the floor, shoulder-width apart. Hold dumbbells in your hands or a barbell across your upper back.\n2. Keeping your knees slightly bent throughout the movement, rise up onto the balls of your feet by contracting your calf muscles.\n3. Lift as high as comfortable, feeling the contraction.\n4. Hold briefly, then slowly lower your heels back down to the floor with control.\n5. Repeat for the desired number of repetitions. The slightly bent knee position engages both the gastrocnemius and soleus.",
        "difficulty": "beginner",
        "equipment": "bodyweight",
        "exercise_name": "Donkey Calf Raise (Simulated)",
        "muscle_description": "The donkey calf raise (simulated with weight on the back or dumbbells) targets both the gastrocnemius and soleus, with a slight emphasis shift compared to straight-leg raises due to the bent-over position (historically). This variation helps to build overall calf mass and strength.",
        "muscle": "calves"
    },
    {
        "category": "strength",
        "instructions": "1. Loop a resistance band around the balls of both feet. Stand with your feet hip-width apart to create tension on the band.\n2. Keeping your legs straight (but not locked), rise up onto the balls of your feet by contracting your calf muscles against the resistance of the band.\n3. Lift as high as comfortable, feeling the burn in your calves.\n4. Hold briefly, then slowly lower your heels back down to the floor with control, maintaining tension on the band.\n5. Repeat for the desired number of repetitions. Resistance bands provide a different type of resistance throughout the movement.",
        "difficulty": "beginner",
        "equipment": "bodyweight",
        "exercise_name": "Banded Calf Raise",
        "muscle_description": "The banded calf raise provides a constant level of resistance throughout the movement, which can be beneficial for muscle activation and endurance. It's a good option for warm-ups, higher rep sets, or when weights are not available. This exercise targets both the gastrocnemius and soleus.",
        "muscle": "calves"
    },
    {
        "category": "strength",
        "instructions": "1. Sit at a lat pulldown machine with your thighs secured under the pads. Grab the wide bar with an overhand grip, slightly wider than shoulder-width.\n2. Keeping your back straight and core engaged, pull the bar down towards your upper chest by contracting your lats. Focus on bringing your elbows down and back.\n3. Continue pulling until the bar reaches your upper chest or just below your chin.\n4. Squeeze your lats at the bottom of the movement.\n5. Slowly allow the bar to return to the starting position with control, keeping tension in your lats.\n6. Repeat for the desired number of repetitions. Avoid using momentum or leaning back excessively.",
        "difficulty": "beginner",
        "equipment": "machine",
        "exercise_name": "Lat Pulldown (Wide Grip)",
        "muscle_description": "The wide-grip lat pulldown is a primary exercise for the latissimus dorsi (lats), the large, fan-shaped muscles on the sides of your back. It also engages the biceps, traps, and rhomboids as secondary movers. This exercise is crucial for building upper back width and strength, contributing to the V-taper physique.",
        "muscle": "lats"
    },
    {
        "category": "strength",
        "instructions": "1. Grab a pull-up bar with an overhand grip, slightly wider than shoulder-width. Hang freely with your arms fully extended.\n2. Engage your lats and pull your body up towards the bar by flexing your elbows and adducting your shoulder blades (pulling them down and back).\n3. Continue pulling until your chin clears the bar.\n4. Squeeze your lats at the top.\n5. Slowly lower your body back down to the starting hanging position with control.\n6. Repeat for the desired number of repetitions. If you cannot perform a full pull-up, you can use an assisted pull-up machine or resistance bands for assistance.",
        "difficulty": "intermediate",
        "equipment": "bodyweight",
        "exercise_name": "Pull-Up (Wide Grip)",
        "muscle_description": "The wide-grip pull-up is a compound bodyweight exercise that is highly effective for targeting the latissimus dorsi. It also works the biceps, traps, rhomboids, and other back and shoulder muscles. Pull-ups are a fundamental exercise for building upper body pulling strength and muscle mass.",
        "muscle": "lats"
    },
    {
        "category": "strength",
        "instructions": "1. Stand with your feet shoulder-width apart, holding a dumbbell in each hand with a neutral grip (palms facing your body).\n2. Hinge at your hips, keeping your back straight and your core engaged, until your torso is nearly parallel to the floor. Allow the dumbbells to hang straight down.\n3. Keeping a slight bend in your elbows, row the dumbbells upwards towards your chest. Focus on squeezing your shoulder blades together and pulling with your lats (imagine pulling from your elbows).\n4. Pull the dumbbells until your elbows are slightly above your back.\n5. Slowly lower the dumbbells back to the starting position with control.\n6. Repeat for the desired number of repetitions.",
        "difficulty": "beginner",
        "equipment": "dumbbell",
        "exercise_name": "Bent-Over Dumbbell Row",
        "muscle_description": "The bent-over dumbbell row is an excellent exercise for targeting the latissimus dorsi, as well as the rhomboids, traps, and biceps. The bent-over position allows for a good stretch of the lats and a strong contraction during the pull. It's a great exercise for building back thickness and overall back strength.",
        "muscle": "lats"
    },
    {
        "category": "strength",
        "instructions": "1. Sit at a cable row machine with your feet firmly planted on the footrests. Attach a wide grip bar to the low pulley and grab it with an overhand grip, wider than shoulder-width.\n2. Keeping your back straight and core engaged, pull the bar towards your upper abdomen by squeezing your shoulder blades together and pulling with your lats.\n3. Focus on bringing your elbows wide and back.\n4. Maintain a slight lean back, hinging from your hips.\n5. Slowly allow the cable to pull your arms back to the starting position with control, keeping tension in your back muscles.\n6. Repeat for the desired number of repetitions. Avoid using momentum or rounding your back.",
        "difficulty": "beginner",
        "equipment": "machine",
        "exercise_name": "Seated Cable Row (Wide Grip)",
        "muscle_description": "The wide-grip seated cable row effectively targets the latissimus dorsi, as well as the middle traps and rhomboids. The cable provides constant tension throughout the movement, allowing for a controlled contraction and stretch of the back muscles. This exercise is great for building back thickness and improving posture.",
        "muscle": "lats"
    },
    {
        "category": "strength",
        "instructions": "1. Kneel on a bench or stand with one knee and one hand on a bench for support, keeping your back parallel to the floor. Let the dumbbell hang straight down from your other hand with a neutral grip.\n2. Keeping your back straight and core engaged, pull the dumbbell upwards towards your chest by contracting your lats. Focus on bringing your elbow up and back towards your hip.\n3. Pull the dumbbell until your elbow is slightly above your back.\n4. Squeeze your lats at the top of the movement.\n5. Slowly lower the dumbbell back down to the starting position with control.\n6. Repeat for the desired number of repetitions on one arm, then switch sides.",
        "difficulty": "beginner",
        "equipment": "dumbbell",
        "exercise_name": "Single-Arm Dumbbell Row",
        "muscle_description": "The single-arm dumbbell row is an excellent exercise for isolating the latissimus dorsi on each side of the back. It also engages the rhomboids, traps, and biceps. The support provided by the bench helps to stabilize the torso and allows for a focused contraction of the lat muscles. This exercise is great for building back strength and addressing any strength imbalances between sides.",
        "muscle": "lats"
    },
    {
        "category": "strength",
        "instructions": "1. Stand with your feet hip-width apart, holding onto a stable object for balance if needed.\n2. Keeping one leg straight (but not locked) and your core engaged, slowly slide your other leg inward towards the midline of your body.\n3. Focus on using the muscles on your inner thigh to initiate the movement.\n4. Move as far as comfortable while maintaining balance and good form.\n5. Pause briefly at the peak contraction in your inner thigh.\n6. Slowly slide your leg back out to the starting position with control.\n7. Repeat for the desired number of repetitions on one leg, then switch to the other leg.",
        "difficulty": "beginner",
        "equipment": "bodyweight",
        "exercise_name": "Standing Hip Adduction",
        "muscle_description": "The standing hip adduction is a bodyweight exercise that primarily targets the hip adductor muscles located on the inner thigh (adductor magnus, adductor longus, adductor brevis, pectineus, and gracilis). These muscles are responsible for bringing the leg towards the midline of the body and play a role in hip stability and balance.",
        "muscle": "hip_adductor"
    },
    {
        "category": "strength",
        "instructions": "1. Lie on your side with your bottom leg extended straight and your top leg bent at the knee, with your foot placed on the floor in front of your straight leg for stability. Rest your head on your lower arm.\n2. Keeping your bottom leg straight (but not locked) and your core engaged, slowly lift your bottom leg upwards towards the ceiling using your inner thigh muscles.\n3. Lift as high as comfortable while maintaining good form. Avoid rolling your hips forward or backward.\n4. Pause briefly at the top, feeling the contraction in your inner thigh.\n5. Slowly lower your bottom leg back down to the floor with control.\n6. Repeat for the desired number of repetitions on one side, then roll over and repeat with the other leg.",
        "difficulty": "beginner",
        "equipment": "bodyweight",
        "exercise_name": "Side-Lying Leg Raise (Adductor Focus)",
        "muscle_description": "The side-lying leg raise with the top leg bent emphasizes the activation of the hip adductor muscles of the bottom leg. This exercise is effective for strengthening the inner thighs and improving hip stability and control. It's often used in rehabilitation and prehab programs.",
        "muscle": "hip_adductor"
    },
    {
        "category": "strength",
        "instructions": "1. Sit on a hip adduction machine with your knees positioned against the inner pads. Adjust the machine so that the pads are comfortably against the inside of your thighs.\n2. Place your feet flat on the footrests and grip the handles for stability.\n3. Keeping your back pressed against the pad, squeeze your legs inward against the resistance of the machine, moving your knees towards each other.\n4. Continue moving your legs inward as far as comfortable, feeling the contraction in your inner thighs.\n5. Pause briefly at the peak contraction.\n6. Slowly return your legs to the starting wide position, controlling the resistance.\n7. Repeat for the desired number of repetitions.",
        "difficulty": "beginner",
        "equipment": "machine",
        "exercise_name": "Hip Adduction Machine",
        "muscle_description": "The hip adduction machine provides a controlled way to target the hip adductor muscles. This exercise is excellent for building strength and endurance in the inner thighs, which are important for leg stability, balance, and various athletic movements. It's a common exercise for both fitness and rehabilitation.",
        "muscle": "hip_adductor"
    },
    {
        "category": "strength",
        "instructions": "1. Loop a resistance band around your ankles, standing with your feet wider than hip-width apart to create tension on the band.\n2. Keeping your legs relatively straight (but not locked) and your core engaged, slowly step one leg inward towards the midline of your body, against the resistance of the band.\n3. Step as far as comfortable while maintaining good form and balance. Focus on using your inner thigh muscles to move your leg.\n4. Bring your leg back to the starting position with control, maintaining tension on the band.\n5. Repeat for the desired number of repetitions on one leg, then switch to the other leg.",
        "difficulty": "beginner",
        "equipment": "bodyweight",
        "exercise_name": "Banded Adductor Squeeze (Standing)",
        "muscle_description": "The banded adductor squeeze (standing) is a functional exercise that engages the hip adductor muscles while also challenging balance and stability. The resistance band provides constant tension as you bring your leg inward, strengthening the inner thighs and improving hip control.",
        "muscle": "hip_adductor"
    },
    {
        "category": "strength",
        "instructions": "1. Lie on your back with your knees bent and feet flat on the floor, hip-width apart. Place a soft ball or pillow between your knees.\n2. Engage your inner thigh muscles and squeeze the ball or pillow between your knees as hard as you can.\n3. Hold the squeezed position for a few seconds, feeling the contraction in your adductors.\n4. Release the squeeze slowly.\n5. Repeat for the desired number of repetitions. This is an isometric exercise that focuses on activating the adductor muscles without movement.",
        "difficulty": "beginner",
        "equipment": "bodyweight",
        "exercise_name": "Isometric Adductor Squeeze",
        "muscle_description": "The isometric adductor squeeze is a simple yet effective exercise for activating and strengthening the hip adductor muscles. By squeezing an object between your knees, you engage these muscles without moving through a range of motion, which can be beneficial for improving muscle activation and stability.",
        "muscle": "hip_adductor"
    }
]

for (const doc of obj) {
    doc.muscle = doc.muscle.split('_').join(' ')
    console.log(doc.muscle.charCodeAt(0));


}
console.log(obj);


async function fn() {
    for await (const doc of obj) {
        await sendValues(doc)
    }
}


// let newObj = {
//     "obliques": [],
//     "quads": [],
//     "lower_abs": [],
//     "upper_abs": [],
//     "biceps": [],
//     "side_delts": [],
//     "front_delts": [],
//     "rear_delts": [],
//     "middle_pecs": [],
//     "lower_pecs": [],
//     "hamstrings": [],
//     "rhomboids": [],
//     "lower_traps": [],
//     "lower_back": [],
//     "hip_abductor": [],
//     "neck": [],
//     "upper_traps": [],
//     "forearms": [],
//     "glutes": [],
//     "calves": [],
//     "lats": [],
//     "hip_adductor": []
// }

// for (let i = 0; i < obj.length; i++) {
//     newObj[obj[i].muscle].push(obj[i])
// }

// console.log(newObj);