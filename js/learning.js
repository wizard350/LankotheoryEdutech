const courseData = {
JAMB: {
"Use of English": [
{
title: "Introduction to Reading Comprehension",
xp: 20,
lessons: [
"Understand the main idea of a passage.",
"Identify supporting details.",
"Learn how to answer comprehension questions."
],
quiz: [
{
question: "What is the main idea of a passage?",
options: [
"The smallest detail",
"The central point",
"The title only",
"A random sentence"
],
answer: 1
},
{
question: "What should you do before answering comprehension questions?",
options: [
"Guess immediately",
"Read the passage carefully",
"Skip the passage",
"Read only the last line"
],
answer: 1
}
]
},

```
        {
            title: "Vocabulary",
            xp: 20,
            lessons: [
                "Learn how context helps you understand words.",
                "Study synonyms and antonyms.",
                "Use unfamiliar words correctly."
            ],
            quiz: [
                {
                    question: "A synonym is a word that has:",
                    options: [
                        "The opposite meaning",
                        "A similar meaning",
                        "No meaning",
                        "A numerical meaning"
                    ],
                    answer: 1
                }
            ]
        },

        {
            title: "Sentence Structure",
            xp: 20,
            lessons: [
                "Understand subjects and predicates.",
                "Identify simple and compound sentences.",
                "Avoid common sentence errors."
            ],
            quiz: [
                {
                    question: "Which is a complete sentence?",
                    options: [
                        "Because he ran",
                        "Running quickly",
                        "John went home.",
                        "After school"
                    ],
                    answer: 2
                }
            ]
        }
    ],

    Mathematics: [
        {
            title: "Numbers and Operations",
            xp: 20,
            lessons: [
                "Review whole numbers.",
                "Work with addition, subtraction, multiplication and division.",
                "Use order of operations."
            ],
            quiz: [
                {
                    question: "What is 12 × 5?",
                    options: ["50", "55", "60", "65"],
                    answer: 2
                },
                {
                    question: "What is 20 ÷ 4?",
                    options: ["4", "5", "6", "8"],
                    answer: 1
                }
            ]
        },

        {
            title: "Algebra Basics",
            xp: 20,
            lessons: [
                "Understand variables.",
                "Solve simple equations.",
                "Check your answers."
            ],
            quiz: [
                {
                    question: "If x + 5 = 12, what is x?",
                    options: ["5", "6", "7", "8"],
                    answer: 2
                }
            ]
        }
    ],

    Physics: [
        {
            title: "Introduction to Motion",
            xp: 20,
            lessons: [
                "Understand distance and displacement.",
                "Learn speed and velocity.",
                "Understand acceleration."
            ],
            quiz: [
                {
                    question: "Speed is calculated as:",
                    options: [
                        "Time ÷ Distance",
                        "Distance ÷ Time",
                        "Distance × Time",
                        "Distance + Time"
                    ],
                    answer: 1
                }
            ]
        }
    ],

    Chemistry: [
        {
            title: "Atoms and Elements",
            xp: 20,
            lessons: [
                "Understand the structure of an atom.",
                "Identify protons, neutrons and electrons.",
                "Understand elements."
            ],
            quiz: [
                {
                    question: "Which particle has a negative charge?",
                    options: [
                        "Proton",
                        "Neutron",
                        "Electron",
                        "Nucleus"
                    ],
                    answer: 2
                }
            ]
        }
    ]
},

IJMB: {
    Mathematics: [
        {
            title: "Algebra Fundamentals",
            xp: 20,
            lessons: [
                "Understand variables and constants.",
                "Simplify algebraic expressions.",
                "Solve basic equations."
            ],
            quiz: [
                {
                    question: "Solve: x + 3 = 10",
                    options: ["5", "6", "7", "8"],
                    answer: 2
                }
            ]
        }
    ],

    Physics: [
        {
            title: "Motion",
            xp: 20,
            lessons: [
                "Define motion.",
                "Understand speed and velocity.",
                "Understand acceleration."
            ],
            quiz: [
                {
                    question: "The SI unit of speed is:",
                    options: [
                        "m/s",
                        "kg",
                        "N",
                        "J"
                    ],
                    answer: 0
                }
            ]
        }
    ],

    Chemistry: [
        {
            title: "Atomic Structure",
            xp: 20,
            lessons: [
                "Learn atomic particles.",
                "Understand atomic number.",
                "Understand mass number."
            ],
            quiz: [
                {
                    question: "The atomic number represents the number of:",
                    options: [
                        "Neutrons",
                        "Protons",
                        "Electrons and neutrons",
                        "Atoms"
                    ],
                    answer: 1
                }
            ]
        }
    ],

    Biology: [
        {
            title: "The Cell",
            xp: 20,
            lessons: [
                "Understand what a cell is.",
                "Learn major cell structures.",
                "Compare plant and animal cells."
            ],
            quiz: [
                {
                    question: "The basic unit of life is the:",
                    options: [
                        "Tissue",
                        "Organ",
                        "Cell",
                        "System"
                    ],
                    answer: 2
                }
            ]
        }
    ]
},

JUPEB: {
    Mathematics: [
        {
            title: "Sets and Logic",
            xp: 20,
            lessons: [
                "Understand sets.",
                "Use set notation.",
                "Solve basic set problems."
            ],
            quiz: [
                {
                    question: "A collection of well-defined objects is called a:",
                    options: [
                        "Set",
                        "Function",
                        "Matrix",
                        "Sequence"
                    ],
                    answer: 0
                }
            ]
        }
    ],

    Physics: [
        {
            title: "Measurement",
            xp: 20,
            lessons: [
                "Understand physical quantities.",
                "Learn SI units.",
                "Use measuring instruments."
            ],
            quiz: [
                {
                    question: "The SI unit of mass is:",
                    options: [
                        "Newton",
                        "Kilogram",
                        "Joule",
                        "Watt"
                    ],
                    answer: 1
                }
            ]
        }
    ],

    Chemistry: [
        {
            title: "Matter",
            xp: 20,
            lessons: [
                "Understand solids, liquids and gases.",
                "Learn about changes of state.",
                "Distinguish physical and chemical changes."
            ],
            quiz: [
                {
                    question: "Which state of matter has a fixed volume but no fixed shape?",
                    options: [
                        "Solid",
                        "Liquid",
                        "Gas",
                        "Plasma"
                    ],
                    answer: 1
                }
            ]
        }
    ],

    Biology: [
        {
            title: "Introduction to Biology",
            xp: 20,
            lessons: [
                "Define biology.",
                "Identify major branches of biology.",
                "Understand why biology is important."
            ],
            quiz: [
                {
                    question: "Biology is the study of:",
                    options: [
                        "Matter",
                        "Life",
                        "Numbers",
                        "Machines"
                    ],
                    answer: 1
                }
            ]
        }
    ]
},

WAEC: {
    Mathematics: [
        {
            title: "Number Bases",
            xp: 20,
            lessons: [
                "Understand different number bases.",
                "Convert between bases.",
                "Perform basic operations."
            ],
            quiz: [
                {
                    question: "Binary uses which base?",
                    options: ["2", "8", "10", "16"],
                    answer: 0
                }
            ]
        }
    ],

    "English Language": [
        {
            title: "Comprehension Skills",
            xp: 20,
            lessons: [
                "Read passages effectively.",
                "Find key information.",
                "Answer questions accurately."
            ],
            quiz: [
                {
                    question: "The main purpose of comprehension is to:",
                    options: [
                        "Memorize every sentence",
                        "Understand what you read",
                        "Read quickly",
                        "Skip difficult words"
                    ],
                    answer: 1
                }
            ]
        }
    ],

    Physics: [
        {
            title: "Energy",
            xp: 20,
            lessons: [
                "Understand kinetic energy.",
                "Understand potential energy.",
                "Understand conservation of energy."
            ],
            quiz: [
                {
                    question: "Energy of motion is called:",
                    options: [
                        "Potential energy",
                        "Kinetic energy",
                        "Chemical energy",
                        "Heat"
                    ],
                    answer: 1
                }
            ]
        }
    ],

    Chemistry: [
        {
            title: "Acids and Bases",
            xp: 20,
            lessons: [
                "Understand acids.",
                "Understand bases.",
                "Learn the pH scale."
            ],
            quiz: [
                {
                    question: "A pH below 7 is generally:",
                    options: [
                        "Acidic",
                        "Basic",
                        "Neutral",
                        "Metallic"
                    ],
                    answer: 0
                }
            ]
        }
    ],

    Biology: [
        {
            title: "Living Things",
            xp: 20,
            lessons: [
                "Identify characteristics of living things.",
                "Understand growth and reproduction.",
                "Understand response to stimuli."
            ],
            quiz: [
                {
                    question: "Which is a characteristic of living things?",
                    options: [
                        "Growth",
                        "Rusting",
                        "Melting",
                        "Breaking"
                    ],
                    answer: 0
                }
            ]
        }
    ]
},

NECO: {
    Mathematics: [
        {
            title: "Basic Algebra",
            xp: 20,
            lessons: [
                "Understand variables.",
                "Simplify expressions.",
                "Solve equations."
            ],
            quiz: [
                {
                    question: "If x = 4, what is x + 6?",
                    options: ["8", "9", "10", "12"],
                    answer: 2
                }
            ]
        }
    ],

    "English Language": [
        {
            title: "Grammar Basics",
            xp: 20,
            lessons: [
                "Learn parts of speech.",
                "Understand correct sentence structure.",
                "Avoid common grammar mistakes."
            ],
            quiz: [
                {
                    question: "Which word is a noun?",
                    options: [
                        "Run",
                        "Beautiful",
                        "Teacher",
                        "Quickly"
                    ],
                    answer: 2
                }
            ]
        }
    ],

    Physics: [
        {
            title: "Forces",
            xp: 20,
            lessons: [
                "Understand force.",
                "Learn balanced and unbalanced forces.",
                "Understand friction."
            ],
            quiz: [
                {
                    question: "The SI unit of force is:",
                    options: [
                        "Joule",
                        "Newton",
                        "Watt",
                        "Pascal"
                    ],
                    answer: 1
                }
            ]
        }
    ],

    Chemistry: [
        {
            title: "Elements and Compounds",
            xp: 20,
            lessons: [
                "Understand elements.",
                "Understand compounds.",
                "Differentiate mixtures and compounds."
            ],
            quiz: [
                {
                    question: "Water is a:",
                    options: [
                        "Element",
                        "Compound",
                        "Mixture",
                        "Metal"
                    ],
                    answer: 1
                }
            ]
        }
    ],

    Biology: [
        {
            title: "Human Biology",
            xp: 20,
            lessons: [
                "Understand major body systems.",
                "Learn basic body functions.",
                "Understand healthy living."
            ],
            quiz: [
                {
                    question: "Which organ pumps blood around the body?",
                    options: [
                        "Lungs",
                        "Kidney",
                        "Heart",
                        "Liver"
                    ],
                    answer: 2
                }
            ]
        }
    ]
},

BECE: {
    Mathematics: [
        {
            title: "Fractions",
            xp: 20,
            lessons: [
                "Understand fractions.",
                "Add and subtract fractions.",
                "Multiply and divide fractions."
            ],
            quiz: [
                {
                    question: "What is 1/2 + 1/2?",
                    options: ["1/2", "1", "2", "3/2"],
                    answer: 1
                }
            ]
        }
    ],

    "English Language": [
        {
            title: "Parts of Speech",
            xp: 20,
            lessons: [
                "Learn nouns.",
                "Learn verbs.",
                "Learn adjectives and adverbs."
            ],
            quiz: [
                {
                    question: "Which is a verb?",
                    options: [
                        "School",
                        "Run",
                        "Beautiful",
                        "Quickly"
                    ],
                    answer: 1
                }
            ]
        }
    ],

    "Basic Science": [
        {
            title: "Living and Non-living Things",
            xp: 20,
            lessons: [
                "Identify living things.",
                "Identify non-living things.",
                "Understand basic characteristics of life."
            ],
            quiz: [
                {
                    question: "Which one is living?",
                    options: [
                        "Stone",
                        "Chair",
                        "Dog",
                        "Table"
                    ],
                    answer: 2
                }
            ]
        }
    ],

    "Basic Technology": [
        {
            title: "Introduction to Technology",
            xp: 20,
            lessons: [
                "Understand technology.",
                "Identify common tools.",
                "Understand safe tool usage."
            ],
            quiz: [
                {
                    question: "Technology is mainly concerned with:",
                    options: [
                        "Solving human problems",
                        "Sleeping",
                        "Eating",
                        "Singing"
                    ],
                    answer: 0
                }
            ]
        }
    ]
}
```

};

/* =========================================
PROGRESS STORAGE
========================================= */

function getLearningProgress() {

```
return JSON.parse(
    localStorage.getItem("lankotheoryProgress") || "{}"
);
```

}

function saveLearningProgress(progress) {

```
localStorage.setItem(
    "lankotheoryProgress",
    JSON.stringify(progress)
);
```

}

/* =========================================
CREATE COURSE ID
========================================= */

function createCourseId(program, course) {

```
return `${program}__${course}`;
```

}

/* =========================================
GET COURSE PROGRESS
========================================= */

function getCourseProgress(program, course) {

```
const progress = getLearningProgress();

const id = createCourseId(program, course);

const completed = progress[id]?.completed || [];

const lessons =
    courseData[program]?.[course] || [];

if (!lessons.length) {

    return 0;

}

return Math.round(
    (completed.length / lessons.length) * 100
);
```

}

/* =========================================
GET TOTAL PROGRESS
========================================= */

function getOverallProgress(program) {

```
const courses = courseData[program];

if (!courses) {

    return 0;

}

let totalLessons = 0;
let completedLessons = 0;

Object.keys(courses).forEach(
    function (course) {

        totalLessons += courses[course].length;

        const progress =
            getLearningProgress();

        const id =
            createCourseId(program, course);

        completedLessons +=
            progress[id]?.completed?.length || 0;

    }
);

if (!totalLessons) {

    return 0;

}

return Math.round(
    (completedLessons / totalLessons) * 100
);
```

}

/* =========================================
GET XP
========================================= */

function getStudentXP() {

```
const progress = getLearningProgress();

let xp = 0;

Object.keys(progress).forEach(
    function (courseId) {

        xp += progress[courseId]?.xp || 0;

    }
);

return xp;
```

}

/* =========================================
MARK LESSON COMPLETE
========================================= */

function markLessonComplete(
program,
course,
lessonIndex,
xp
) {

```
const progress =
    getLearningProgress();

const id =
    createCourseId(program, course);

if (!progress[id]) {

    progress[id] = {
        completed: [],
        xp: 0
    };

}

if (!progress[id].completed.includes(lessonIndex)) {

    progress[id].completed.push(
        lessonIndex
    );

    progress[id].xp += xp;

}

saveLearningProgress(progress);
```

}

/* =========================================
START DASHBOARD COURSE
========================================= */

function openCourse(program, course) {

```
const url =
    `learning.html?program=${encodeURIComponent(program)}&course=${encodeURIComponent(course)}`;

window.location.href = url;
```

}

/* =========================================
DASHBOARD INITIALIZATION
========================================= */

function updateDashboardLearning() {

```
const savedStudent =
    localStorage.getItem(
        "lankotheoryCurrentUser"
    );

if (!savedStudent) {

    return;

}

const student =
    JSON.parse(savedStudent);

const program =
    student.program;

const courses =
    courseData[program] || {};

const courseList =
    document.getElementById(
        "courseList"
    );

const courseCount =
    document.getElementById(
        "courseCount"
    );

if (!courseList) {

    return;

}

courseList.innerHTML = "";

const courseNames =
    Object.keys(courses);

courseCount.textContent =
    courseNames.length;


courseNames.forEach(
    function (course) {

        const lessons =
            courses[course];

        const progress =
            getCourseProgress(
                program,
                course
            );

        const item =
            document.createElement(
                "div"
            );

        item.className =
            "course-item";


        item.innerHTML = `

            <div class="course-icon">
                <i class="fa-solid fa-book-open"></i>
            </div>

            <div class="course-information">

                <strong>
                    ${course}
                </strong>

                <span>
                    ${lessons.length} lessons
                </span>

                <div style="
                    width:100%;
                    height:8px;
                    background:#e5e7eb;
                    border-radius:20px;
                    overflow:hidden;
                    margin-top:8px;
                ">

                    <div style="
                        width:${progress}%;
                        height:100%;
                        background:#2563eb;
                        border-radius:20px;
                        transition:width .4s ease;
                    "></div>

                </div>

                <small style="
                    display:block;
                    margin-top:6px;
                    color:#64748b;
                ">
                    ${progress}% complete
                </small>

            </div>

            <button
                type="button"
                class="course-button"
                onclick="openCourse(
                    '${program}',
                    '${course.replace(/'/g, "\\'")}'
                )"
            >

                ${progress > 0 ? "Continue" : "Start"}

                <i class="fa-solid fa-arrow-right"></i>

            </button>

        `;

        courseList.appendChild(item);

    }
);


/* OVERALL PROGRESS */

const overall =
    getOverallProgress(
        program
    );

const progressElements =
    document.querySelectorAll(
        ".progress-panel strong"
    );

progressElements.forEach(
    function (element) {

        element.textContent =
            `${overall}%`;

    }
);


const progressMessage =
    document.querySelector(
        ".progress-message"
    );

if (progressMessage) {

    if (overall === 0) {

        progressMessage.textContent =
            "Start your first lesson to build your progress.";

    } else if (overall < 100) {

        progressMessage.textContent =
            "Great start! Keep learning to reach 100%.";

    } else {

        progressMessage.textContent =
            "Amazing! You completed your program courses.";

    }

}


/* PROGRESS STAT */

const statCards =
    document.querySelectorAll(
        ".dashboard-stat-card strong"
    );

if (statCards.length >= 3) {

    statCards[2].textContent =
        `${overall}%`;

}
```

}

/* =========================================
EXPORT FOR OTHER FILES
========================================= */

window.courseData = courseData;
window.getCourseProgress = getCourseProgress;
window.getOverallProgress = getOverallProgress;
window.getStudentXP = getStudentXP;
window.markLessonComplete = markLessonComplete;
window.openCourse = openCourse;
window.updateDashboardLearning =
updateDashboardLearning;
