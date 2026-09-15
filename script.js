```javascript
/* =========================================================
   SKILLVERSE v1.2
   Main JavaScript
   Fixed Lecture System
   ========================================================= */


/* =========================================================
   COURSE DATA
   ========================================================= */

const courses = [
  {
    id: "roblox",
    title: "Roblox Development",
    category: "Technology",
    icon: "🎮",
    description: "Learn the foundations of creating your own Roblox experiences.",
    level: "Beginner",
    lessons: 5,
    color1: "#6d5dfc",
    color2: "#31d5ff",

    lectures: [
      {
        title: "Welcome to Roblox Development",
        duration: "8 min",
        description:
          "Learn what Roblox Studio is and how game development works on Roblox."
      },
      {
        title: "Exploring Roblox Studio",
        duration: "11 min",
        description:
          "Get familiar with the Explorer, Properties, Toolbox, and workspace."
      },
      {
        title: "Building Your First Map",
        duration: "14 min",
        description:
          "Learn the basics of placing and organizing objects in your world."
      },
      {
        title: "Introduction to Lua",
        duration: "16 min",
        description:
          "Understand the basics of scripting with Lua in Roblox Studio."
      },
      {
        title: "Your First Game Mechanic",
        duration: "18 min",
        description:
          "Put your new skills together and create a simple interactive mechanic."
      }
    ]
  },

  {
    id: "coding",
    title: "Coding Fundamentals",
    category: "Technology",
    icon: "💻",
    description: "Build a strong foundation in programming concepts.",
    level: "Beginner",
    lessons: 5,
    color1: "#3478f6",
    color2: "#42d9c8",

    lectures: [
      {
        title: "What Is Programming?",
        duration: "7 min",
        description:
          "Discover what programming is and how computers follow instructions."
      },
      {
        title: "Variables",
        duration: "10 min",
        description:
          "Learn how variables store and organize information."
      },
      {
        title: "Conditions",
        duration: "12 min",
        description:
          "Learn how programs make decisions using conditions."
      },
      {
        title: "Loops",
        duration: "13 min",
        description:
          "Understand how loops can repeat actions efficiently."
      },
      {
        title: "Putting It Together",
        duration: "15 min",
        description:
          "Use several programming concepts together in a small project."
      }
    ]
  },

  {
    id: "design",
    title: "Digital Design",
    category: "Creative",
    icon: "🎨",
    description: "Learn the principles behind great digital designs.",
    level: "Beginner",
    lessons: 5,
    color1: "#ff5ca8",
    color2: "#845dfc",

    lectures: [
      {
        title: "Introduction to Design",
        duration: "8 min",
        description:
          "Learn what makes a digital design clear, useful, and attractive."
      },
      {
        title: "Color Theory",
        duration: "12 min",
        description:
          "Understand colors, contrast, and how colors work together."
      },
      {
        title: "Typography",
        duration: "10 min",
        description:
          "Learn how fonts and text choices affect a design."
      },
      {
        title: "Layouts",
        duration: "14 min",
        description:
          "Discover how to organize information using strong layouts."
      },
      {
        title: "Create a Design",
        duration: "17 min",
        description:
          "Combine the principles you've learned into a complete design."
      }
    ]
  },

  {
    id: "video",
    title: "Video Editing",
    category: "Creative",
    icon: "🎬",
    description: "Learn the fundamentals of creating better videos.",
    level: "Beginner",
    lessons: 5,
    color1: "#ff7b54",
    color2: "#ffca3a",

    lectures: [
      {
        title: "Video Editing Basics",
        duration: "9 min",
        description:
          "Understand the basic workflow behind editing a video."
      },
      {
        title: "Cutting and Trimming",
        duration: "11 min",
        description:
          "Learn how to remove unwanted sections and improve pacing."
      },
      {
        title: "Transitions",
        duration: "9 min",
        description:
          "Learn when and how to use transitions effectively."
      },
      {
        title: "Audio",
        duration: "13 min",
        description:
          "Understand music, sound effects, and basic audio balancing."
      },
      {
        title: "Exporting Your Video",
        duration: "8 min",
        description:
          "Learn the important settings to consider when exporting a finished video."
      }
    ]
  },

  {
    id: "ai",
    title: "AI Essentials",
    category: "Technology",
    icon: "🤖",
    description: "Understand the basics of artificial intelligence.",
    level: "Beginner",
    lessons: 5,
    color1: "#00b894",
    color2: "#00cec9",

    lectures: [
      {
        title: "What Is AI?",
        duration: "8 min",
        description:
          "Learn what artificial intelligence means and where it is used."
      },
      {
        title: "Machine Learning",
        duration: "12 min",
        description:
          "Understand the basic idea behind machine learning."
      },
      {
        title: "AI and Data",
        duration: "10 min",
        description:
          "Learn why data is important to modern AI systems."
      },
      {
        title: "Generative AI",
        duration: "13 min",
        description:
          "Explore how AI systems can generate text, images, and other content."
      },
      {
        title: "Using AI Responsibly",
        duration: "10 min",
        description:
          "Learn important principles for using AI thoughtfully and responsibly."
      }
    ]
  },

  {
    id: "science",
    title: "Science Explorer",
    category: "Science",
    icon: "🔬",
    description: "Explore fascinating ideas from the world of science.",
    level: "Beginner",
    lessons: 5,
    color1: "#3498db",
    color2: "#9b59b6",

    lectures: [
      {
        title: "How Science Works",
        duration: "8 min",
        description:
          "Learn about observation, questions, experiments, and evidence."
      },
      {
        title: "Our Planet",
        duration: "11 min",
        description:
          "Explore some of the systems that make Earth unique."
      },
      {
        title: "Space",
        duration: "14 min",
        description:
          "Take a quick journey through our solar system and beyond."
      },
      {
        title: "Energy",
        duration: "12 min",
        description:
          "Understand different forms of energy and how they interact."
      },
      {
        title: "The Scientific Mindset",
        duration: "9 min",
        description:
          "Learn how curiosity and evidence can help us understand the world."
      }
    ]
  }
];


/* =========================================================
   STORAGE
   ========================================================= */

const STORAGE_KEY = "skillverse_v12_progress";

const defaultState = {
  completed: {},
  xp: 0,
  streak: 0,
  lastStudyDate: null
};

let state = loadState();

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (!saved) {
      return {
        ...defaultState,
        completed: {}
      };
    }

    const parsed = JSON.parse(saved);

    return {
      ...defaultState,
      ...parsed,
      completed: parsed.completed || {}
    };
  } catch (error) {
    console.warn("Could not load SkillVerse progress.", error);

    return {
      ...defaultState,
      completed: {}
    };
  }
}

function saveState() {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(state)
    );
  } catch (error) {
    console.warn("Could not save SkillVerse progress.", error);
  }
}


/* =========================================================
   DOM ELEMENTS
   ========================================================= */

const courseGrid =
  document.getElementById("courseGrid");

const searchInput =
  document.getElementById("searchInput");

const categoryFilter =
  document.getElementById("categoryFilter");

const courseModal =
  document.getElementById("courseModal");

const modalContent =
  document.getElementById("modalContent");

const toast =
  document.getElementById("toast");

const menuButton =
  document.getElementById("menuButton");

const mobileMenu =
  document.getElementById("mobileMenu");

const xpBar =
  document.getElementById("xpBar");

const xpValue =
  document.getElementById("xpValue");

const xpNext =
  document.getElementById("xpNext");

const heroProgress =
  document.getElementById("heroProgress");

const heroProgressCircle =
  document.getElementById("heroProgressCircle");

const heroPlayButton =
  document.getElementById("heroPlayButton");


/* =========================================================
   HELPERS
   ========================================================= */

function getAllLectures() {
  return courses.flatMap(
    course => course.lectures
  );
}

function getTotalLessons() {
  return courses.reduce(
    (total, course) =>
      total + course.lectures.length,
    0
  );
}

function getCompletedCount() {
  return Object.values(state.completed)
    .filter(Boolean)
    .length;
}

function getCourseCompletedCount(course) {
  return course.lectures.filter(
    (_, index) =>
      Boolean(
        state.completed[
          `${course.id}-${index}`
        ]
      )
  ).length;
}

function getCourseProgress(course) {
  if (!course.lectures.length) {
    return 0;
  }

  return Math.round(
    (
      getCourseCompletedCount(course) /
      course.lectures.length
    ) * 100
  );
}

function getLevel() {
  return Math.floor(state.xp / 100) + 1;
}

function getLevelXP() {
  return state.xp % 100;
}

function getTodayKey() {
  const date = new Date();

  return [
    date.getFullYear(),
    date.getMonth() + 1,
    date.getDate()
  ].join("-");
}

function getYesterdayKey() {
  const date = new Date();

  date.setDate(
    date.getDate() - 1
  );

  return [
    date.getFullYear(),
    date.getMonth() + 1,
    date.getDate()
  ].join("-");
}


/* =========================================================
   STREAK
   ========================================================= */

function updateStreak() {
  const today = getTodayKey();

  if (!state.lastStudyDate) {
    state.streak = 0;
    return;
  }

  if (state.lastStudyDate === today) {
    return;
  }

  if (
    state.lastStudyDate ===
    getYesterdayKey()
  ) {
    return;
  }

  state.streak = 0;
}

function registerStudyActivity() {
  const today = getTodayKey();

  if (
    state.lastStudyDate === today
  ) {
    return;
  }

  if (
    state.lastStudyDate ===
    getYesterdayKey()
  ) {
    state.streak += 1;
  } else {
    state.streak = 1;
  }

  state.lastStudyDate = today;
}


/* =========================================================
   XP
   ========================================================= */

function addXP(amount) {
  state.xp += amount;

  registerStudyActivity();

  saveState();

  updateDashboard();
}


/* =========================================================
   COURSE FILTER
   ========================================================= */

function setupCategories() {
  if (!categoryFilter) {
    return;
  }

  const categories = [
    ...new Set(
      courses.map(
        course => course.category
      )
    )
  ];

  categoryFilter.innerHTML = `
    <option value="all">
      All categories
    </option>

    ${categories
      .map(
        category => `
          <option value="${category}">
            ${category}
          </option>
        `
      )
      .join("")}
  `;
}

function filterCourses() {
  const query =
    searchInput?.value
      .trim()
      .toLowerCase() || "";

  const category =
    categoryFilter?.value || "all";

  const filtered =
    courses.filter(course => {
      const matchesSearch =
        course.title
          .toLowerCase()
          .includes(query) ||

        course.description
          .toLowerCase()
          .includes(query) ||

        course.category
          .toLowerCase()
          .includes(query);

      const matchesCategory =
        category === "all" ||
        course.category === category;

      return (
        matchesSearch &&
        matchesCategory
      );
    });

  renderCourses(filtered);
}


/* =========================================================
   COURSE CARDS
   ========================================================= */

function renderCourses(list = courses) {
  if (!courseGrid) {
    return;
  }

  if (!list.length) {
    courseGrid.innerHTML = `
      <div class="empty-state">

        <div class="empty-icon">
          🔎
        </div>

        <h3>
          No courses found
        </h3>

        <p>
          Try another search or choose
          a different category.
        </p>

      </div>
    `;

    return;
  }

  courseGrid.innerHTML =
    list
      .map(course => {
        const progress =
          getCourseProgress(course);

        const completed =
          progress === 100;

        return `
          <article
            class="course-card"
            data-course-id="${course.id}"
            style="
              --cover1: ${course.color1};
              --cover2: ${course.color2};
            "
          >

            <div class="course-cover">

              <span class="course-icon">
                ${course.icon}
              </span>

              <span class="course-badge">
                ${
                  completed
                    ? "Completed ✓"
                    : course.level
                }
              </span>

            </div>

            <div class="course-body">

              <h3>
                ${course.title}
              </h3>

              <p>
                ${course.description}
              </p>

              <div class="meta">
                <span>
                  📚 ${course.lectures.length} lessons
                </span>

                <span>•</span>

                <span>
                  ${progress}% complete
                </span>
              </div>

              <div class="card-progress">
                <i
                  style="
                    width: ${progress}%;
                  "
                ></i>
              </div>

            </div>

          </article>
        `;
      })
      .join("");

  document
    .querySelectorAll(".course-card")
    .forEach(card => {
      card.addEventListener(
        "click",
        () => {
          openCourse(
            card.dataset.courseId
          );
        }
      );
    });
}


/* =========================================================
   COURSE MODAL
   ========================================================= */

function openCourse(courseId) {
  const course =
    courses.find(
      item => item.id === courseId
    );

  if (
    !course ||
    !courseModal ||
    !modalContent
  ) {
    return;
  }

  const progress =
    getCourseProgress(course);

  modalContent.innerHTML = `
    <div
      class="modal-cover"
      style="
        background:
          linear-gradient(
            135deg,
            ${course.color1},
            ${course.color2}
          );
      "
    >

      <span class="course-icon">
        ${course.icon}
      </span>

    </div>

    <span class="section-label">
      ${course.category}
    </span>

    <h2>
      ${course.title}
    </h2>

    <p>
      ${course.description}
    </p>

    <div
      class="meta"
      style="margin-top: 12px;"
    >

      <span>
        📚 ${course.lectures.length} lessons
      </span>

      <span>•</span>

      <span>
        ${progress}% complete
      </span>

    </div>

    <div class="card-progress">
      <i
        style="
          width: ${progress}%;
        "
      ></i>
    </div>

    <div class="lecture-list">

      ${
        course.lectures.length
          ? course.lectures
              .map(
                (lecture, index) => {
                  const key =
                    `${course.id}-${index}`;

                  const done =
                    Boolean(
                      state.completed[key]
                    );

                  return `
                    <div
                      class="
                        lecture-row
                        ${done ? "done" : ""}
                      "
                    >

                      <span class="num">
                        ${
                          done
                            ? "✓"
                            : index + 1
                        }
                      </span>

                      <div>
                        <b>
                          ${lecture.title}
                        </b>

                        <small>
                          ${lecture.duration}
                        </small>
                      </div>

                      <button
                        type="button"
                        class="
                          button
                          secondary-button
                          lecture-button
                        "
                        data-course="${course.id}"
                        data-index="${index}"
                      >
                        ${
                          done
                            ? "Review"
                            : "Learn"
                        }
                      </button>

                    </div>
                  `;
                }
              )
              .join("")
          : `
            <div class="empty-state">
              <h3>
                No lessons available
              </h3>
            </div>
          `
      }

    </div>

    <div class="panel">

      <strong>
        Your progress
      </strong>

      <p>
        ${getCourseCompletedCount(course)}
        of
        ${course.lectures.length}
        lessons completed.
      </p>

    </div>
  `;

  courseModal.classList.add("open");

  courseModal.setAttribute(
    "aria-hidden",
    "false"
  );

  document.body.style.overflow =
    "hidden";

  attachLectureButtons();
}


/* =========================================================
   LECTURE BUTTONS
   ========================================================= */

function attachLectureButtons() {
  document
    .querySelectorAll(".lecture-button")
    .forEach(button => {

      button.addEventListener(
        "click",
        event => {

          event.preventDefault();
          event.stopPropagation();

          const courseId =
            button.dataset.course;

          const index =
            Number(
              button.dataset.index
            );

          /*
             IMPORTANT:
             This ONLY opens the lecture.

             It does NOT complete it.
          */

          openLecture(
            courseId,
            index
          );
        }
      );

    });
}


/* =========================================================
   LECTURE VIEWER
   ========================================================= */

function openLecture(
  courseId,
  index
) {
  const course =
    courses.find(
      item => item.id === courseId
    );

  if (!course) {
    console.error(
      "Course not found:",
      courseId
    );

    return;
  }

  if (
    !Number.isInteger(index) ||
    index < 0 ||
    index >= course.lectures.length
  ) {
    console.error(
      "Invalid lesson index:",
      index
    );

    return;
  }

  const lecture =
    course.lectures[index];

  if (!lecture) {
    return;
  }

  if (!modalContent) {
    return;
  }

  const key =
    `${course.id}-${index}`;

  const alreadyComplete =
    Boolean(
      state.completed[key]
    );

  /*
    The lesson viewer is rendered here.

    Nothing is completed here.
    Nothing is added to XP here.
  */

  modalContent.innerHTML = `
    <div
      class="modal-cover"
      style="
        background:
          linear-gradient(
            135deg,
            ${course.color1},
            ${course.color2}
          );
      "
    >

      <span class="course-icon">
        ${course.icon}
      </span>

    </div>

    <span class="section-label">
      ${course.title}
    </span>

    <h2>
      ${lecture.title}
    </h2>

    <div class="lecture-info">

      <div class="panel">
        <strong>
          ⏱ Duration
        </strong>

        <p>
          ${lecture.duration}
        </p>
      </div>

      <div class="panel">
        <strong>
          📖 Lesson
        </strong>

        <p>
          ${index + 1}
          of
          ${course.lectures.length}
        </p>
      </div>

    </div>

    <div class="lesson-content">

      <div class="lesson-icon">
        ${course.icon}
      </div>

      <h3>
        ${lecture.title}
      </h3>

      <p class="lesson-description">
        ${lecture.description}
      </p>

      <div class="lesson-section">

        <h4>
          🎓 What you'll learn
        </h4>

        <p>
          ${lecture.description}
        </p>

      </div>

      <div class="lesson-section">

        <h4>
          💡 Lesson Goal
        </h4>

        <p>
          Take your time to understand
          the topic before completing
          this lesson.
        </p>

      </div>

    </div>

    ${
      alreadyComplete
        ? `
          <button
            type="button"
            class="
              button
              primary-button
              complete-button
            "
            disabled
          >
            ✓ Lesson Completed
          </button>
        `
        : `
          <button
            type="button"
            class="
              button
              primary-button
              complete-button
            "
            id="completeLectureButton"
          >
            Complete Lesson +20 XP
          </button>
        `
    }

    <button
      type="button"
      class="
        button
        secondary-button
      "
      id="backToCourseButton"
      style="
        width: 100%;
        margin-top: 10px;
      "
    >
      ← Back to Course
    </button>
  `;

  /*
    Make sure the modal stays open.
  */

  if (courseModal) {
    courseModal.classList.add("open");

    courseModal.setAttribute(
      "aria-hidden",
      "false"
    );
  }

  /*
    ONLY the actual Complete button
    gets the completion event.
  */

  const completeButton =
    document.getElementById(
      "completeLectureButton"
    );

  if (completeButton) {
    completeButton.addEventListener(
      "click",
      event => {

        event.preventDefault();
        event.stopPropagation();

        completeLecture(
          courseId,
          index
        );
      }
    );
  }

  const backButton =
    document.getElementById(
      "backToCourseButton"
    );

  if (backButton) {
    backButton.addEventListener(
      "click",
      event => {

        event.preventDefault();
        event.stopPropagation();

        openCourse(courseId);
      }
    );
  }
}


/* =========================================================
   COMPLETE LECTURE
   ========================================================= */

function completeLecture(
  courseId,
  index
) {
  const course =
    courses.find(
      item => item.id === courseId
    );

  if (!course) {
    return;
  }

  const key =
    `${courseId}-${index}`;

  /*
    Prevent duplicate XP.
  */

  if (state.completed[key]) {
    return;
  }

  /*
    THIS is the only place where
    a lesson becomes completed.
  */

  state.completed[key] = true;

  addXP(20);

  saveState();

  renderCourses(
    getVisibleCourses()
  );

  updateDashboard();

  updateAchievements();

  showToast(
    "Lesson completed! +20 XP 🎉"
  );

  /*
    Return to the course list so
    the new Completed ✓ status is visible.
  */

  openCourse(courseId);
}


/* =========================================================
   VISIBLE COURSES
   ========================================================= */

function getVisibleCourses() {
  const query =
    searchInput?.value
      .trim()
      .toLowerCase() || "";

  const category =
    categoryFilter?.value || "all";

  return courses.filter(course => {

    const matchesSearch =
      course.title
        .toLowerCase()
        .includes(query) ||

      course.description
        .toLowerCase()
        .includes(query) ||

      course.category
        .toLowerCase()
        .includes(query);

    const matchesCategory =
      category === "all" ||
      course.category === category;

    return (
      matchesSearch &&
      matchesCategory
    );
  });
}


/* =========================================================
   DASHBOARD
   ========================================================= */

function updateDashboard() {
  const level =
    getLevel();

  const currentXP =
    getLevelXP();

  const completed =
    getCompletedCount();

  const total =
    getTotalLessons();

  const progress =
    total
      ? Math.round(
          (completed / total) * 100
        )
      : 0;

  updateXPDisplay(
    level,
    currentXP
  );

  updateHeroProgress(
    progress
  );

  updateStatisticCards(
    completed,
    progress
  );
}

function updateXPDisplay(
  level,
  currentXP
) {
  if (xpBar) {
    xpBar.style.width =
      `${currentXP}%`;
  }

  if (xpValue) {
    xpValue.textContent =
      `${state.xp} XP`;
  }

  if (xpNext) {
    const nextLevelXP =
      100 - currentXP;

    xpNext.textContent =
      currentXP === 0
        ? `100 XP until Level ${level + 1}`
        : `${nextLevelXP} XP until Level ${level + 1}`;
  }

  document
    .querySelectorAll(
      ".level-title strong"
    )
    .forEach(element => {
      element.textContent =
        `Level ${level}`;
    });
}


/* =========================================================
   HERO PROGRESS
   ========================================================= */

function updateHeroProgress(
  progress
) {
  if (heroProgress) {
    heroProgress.textContent =
      `${progress}%`;
  }

  if (heroProgressCircle) {
    heroProgressCircle.style.background =
      `conic-gradient(
        var(--cyan)
        ${progress * 3.6}deg,
        #1b304a
        ${progress * 3.6}deg
      )`;
  }
}


/* =========================================================
   STATISTICS
   ========================================================= */

function updateStatisticCards(
  completed,
  progress
) {
  const cards =
    document.querySelectorAll(
      ".statistic-card"
    );

  if (cards.length >= 3) {

    const first =
      cards[0].querySelector(
        "strong"
      );

    const second =
      cards[1].querySelector(
        "strong"
      );

    const third =
      cards[2].querySelector(
        "strong"
      );

    if (first) {
      first.textContent =
        completed;
    }

    if (second) {
      second.textContent =
        `${progress}%`;
    }

    if (third) {
      third.textContent =
        state.streak;
    }
  }
}


/* =========================================================
   ACHIEVEMENTS
   ========================================================= */

function getAchievements() {
  const completed =
    getCompletedCount();

  return [
    {
      icon: "🚀",
      title: "First Step",
      description:
        "Complete your first lesson.",
      unlocked:
        completed >= 1
    },

    {
      icon: "📚",
      title: "Getting Started",
      description:
        "Complete 5 lessons.",
      unlocked:
        completed >= 5
    },

    {
      icon: "🔥",
      title: "On a Roll",
      description:
        "Build a 3-day learning streak.",
      unlocked:
        state.streak >= 3
    },

    {
      icon: "🏆",
      title: "Scholar",
      description:
        "Complete 10 lessons.",
      unlocked:
        completed >= 10
    },

    {
      icon: "⭐",
      title: "XP Hunter",
      description:
        "Earn 100 XP.",
      unlocked:
        state.xp >= 100
    },

    {
      icon: "🎓",
      title: "Course Graduate",
      description:
        "Complete an entire course.",
      unlocked:
        courses.some(
          course =>
            getCourseProgress(course) === 100
        )
    },

    {
      icon: "💎",
      title: "Dedicated Learner",
      description:
        "Earn 250 XP.",
      unlocked:
        state.xp >= 250
    },

    {
      icon: "🌟",
      title: "SkillVerse Master",
      description:
        "Complete 25 lessons.",
      unlocked:
        completed >= 25
    }
  ];
}

function updateAchievements() {
  const grid =
    document.getElementById(
      "achievementGrid"
    );

  if (!grid) {
    return;
  }

  grid.innerHTML =
    getAchievements()
      .map(
        achievement => `
          <div
            class="
              achievement
              ${
                achievement.unlocked
                  ? ""
                  : "locked"
              }
            "
          >

            <div class="badge">
              ${achievement.icon}
            </div>

            <h3>
              ${achievement.title}
            </h3>

            <p>
              ${achievement.description}
            </p>

            <small>
              ${
                achievement.unlocked
                  ? "✓ Unlocked"
                  : "🔒 Locked"
              }
            </small>

          </div>
        `
      )
      .join("");
}


/* =========================================================
   ORDINAL
   ========================================================= */

function getOrdinal(number) {
  const mod100 =
    number % 100;

  if (
    mod100 >= 11 &&
    mod100 <= 13
  ) {
    return "th";
  }

  switch (number % 10) {

    case 1:
      return "st";

    case 2:
      return "nd";

    case 3:
      return "rd";

    default:
      return "th";
  }
}


/* =========================================================
   MODAL CONTROLS
   ========================================================= */

function closeModal() {
  if (!courseModal) {
    return;
  }

  courseModal.classList.remove(
    "open"
  );

  courseModal.setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.style.overflow =
    "";
}

document
  .querySelectorAll(
    "[data-close]"
  )
  .forEach(element => {

    element.addEventListener(
      "click",
      event => {

        event.preventDefault();

        closeModal();
      }
    );

  });

document.addEventListener(
  "keydown",
  event => {

    if (
      event.key === "Escape" &&
      courseModal?.classList.contains(
        "open"
      )
    ) {
      closeModal();
    }

  }
);


/* =========================================================
   MOBILE MENU
   ========================================================= */

if (
  menuButton &&
  mobileMenu
) {

  menuButton.addEventListener(
    "click",
    () => {

      mobileMenu.classList.toggle(
        "open"
      );

      menuButton.textContent =
        mobileMenu.classList.contains(
          "open"
        )
          ? "✕"
          : "☰";

    }
  );
}

document
  .querySelectorAll(
    ".mobile-menu a"
  )
  .forEach(link => {

    link.addEventListener(
      "click",
      () => {

        if (mobileMenu) {
          mobileMenu.classList.remove(
            "open"
          );
        }

        if (menuButton) {
          menuButton.textContent =
            "☰";
        }

      }
    );

  });


/* =========================================================
   HERO BUTTONS
   ========================================================= */

document
  .querySelectorAll(
    '[href="#courses"]'
  )
  .forEach(button => {

    button.addEventListener(
      "click",
      () => {

        setTimeout(
          () => {
            searchInput?.focus();
          },
          500
        );

      }
    );

  });

if (heroPlayButton) {

  heroPlayButton.addEventListener(
    "click",
    event => {

      event.preventDefault();

      const firstCourse =
        courses[0];

      if (firstCourse) {
        openCourse(
          firstCourse.id
        );
      }

    }
  );

}


/* =========================================================
   SEARCH
   ========================================================= */

if (searchInput) {

  searchInput.addEventListener(
    "input",
    filterCourses
  );

}

if (categoryFilter) {

  categoryFilter.addEventListener(
    "change",
    filterCourses
  );

}


/* =========================================================
   TOAST
   ========================================================= */

let toastTimer;

function showToast(
  message
) {
  if (!toast) {
    return;
  }

  toast.textContent =
    message;

  toast.classList.add(
    "show"
  );

  clearTimeout(
    toastTimer
  );

  toastTimer =
    setTimeout(
      () => {

        toast.classList.remove(
          "show"
        );

      },
      2500
    );
}


/* =========================================================
   EXTRA STYLES
   ========================================================= */

const extraStyles =
  document.createElement(
    "style"
  );

extraStyles.textContent = `

  .empty-state {
    grid-column: 1 / -1;
    padding: 55px 25px;
    text-align: center;
    border: 1px solid var(--border);
    border-radius: 20px;
    background: var(--card);
  }

  .empty-icon {
    font-size: 40px;
    margin-bottom: 10px;
  }

  .empty-state h3 {
    margin-bottom: 5px;
  }

  .empty-state p {
    color: var(--muted);
    font-size: 13px;
  }

  .panel {
    padding: 16px;
    margin-top: 15px;
    border: 1px solid var(--border);
    border-radius: 14px;
    background: rgba(255,255,255,0.025);
  }

  .panel strong {
    display: block;
    margin-bottom: 4px;
  }

  .panel p {
    margin: 0;
    font-size: 12px;
    color: var(--muted);
  }

  .lecture-info {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    margin-top: 20px;
  }

  .lecture-info .panel {
    margin: 0;
  }

  .lesson-content {
    margin-top: 20px;
    padding: 25px;
    border: 1px solid var(--border);
    border-radius: 18px;
    text-align: center;
    background:
      linear-gradient(
        145deg,
        rgba(109,93,252,0.08),
        rgba(49,213,255,0.04)
      );
  }

  .lesson-icon {
    font-size: 55px;
    margin-bottom: 10px;
  }

  .lesson-content h3 {
    margin-bottom: 10px;
  }

  .lesson-description {
    max-width: 600px;
    margin: 0 auto 20px;
    line-height: 1.7;
  }

  .lesson-section {
    max-width: 600px;
    margin: 15px auto 0;
    padding: 15px;
    text-align: left;
    border-radius: 12px;
    border: 1px solid var(--border);
    background: rgba(255,255,255,0.025);
  }

  .lesson-section h4 {
    margin: 0 0 6px;
  }

  .lesson-section p {
    margin: 0;
    font-size: 13px;
    line-height: 1.6;
  }

  .complete-button:disabled {
    opacity: 0.6;
    cursor: default;
  }

  .lecture-row {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .lecture-row > div {
    flex: 1;
    min-width: 0;
  }

  .lecture-row b {
    display: block;
  }

  .lecture-row small {
    display: block;
    margin-top: 3px;
    color: var(--muted);
  }

  .lecture-button {
    flex-shrink: 0;
  }

  @media (max-width: 500px) {

    .lecture-info {
      grid-template-columns: 1fr;
    }

    .lecture-row {
      flex-wrap: wrap;
    }

    .lecture-button {
      width: 100%;
    }

  }

`;

document.head.appendChild(
  extraStyles
);


/* =========================================================
   INITIALIZE
   ========================================================= */

updateStreak();

setupCategories();

renderCourses();

updateDashboard();

updateAchievements();

saveState();


/* =========================================================
   STARTUP
   ========================================================= */

console.log(
  "SkillVerse v1.2 loaded successfully 🚀"
);
```
