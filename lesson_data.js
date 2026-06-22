// LESSON DATA — edit this file OR use the visual editor in teacher.html
// To skip a lesson: set active: false
// To reorder: change the date field
// This same data file powers BOTH the slide generator and the web app

const COURSE_DATA = {
  course: "Foundations of Engineering & Technology",
  teacher: "Teacher",
  classCode: "FET-2025",

  lessons: [
    {
      id: "u1-w1-d1",
      active: true,
      date: "2025-08-18",
      unit: 1, week: 1, day: 1,
      title: "Welcome to Foundations of Engineering & Technology",
      tag: "Unit 1 · Week 1 · Day 1",
      accentColor: "#1E2D5E",

      slides: [
        {
          type: "bellringer",
          title: "What did you use before arriving at school today?",
          bullets: [
            "List three engineered items you used before arriving today.",
            "For each: what problem does it solve? Who might have designed it?"
          ],
          interaction: {
            type: "write",
            label: "Think & type",
            prompt: "List your three items and one sentence about each.",
            timerMins: 3
          }
        },
        {
          type: "minilesson",
          title: "What is engineering? (Part 1 of 3)",
          bullets: [
            "The process of designing solutions to problems using science, math, and creativity.",
            "Engineers identify needs, design solutions, build prototypes, and improve until it works.",
            "Engineering is everywhere — from phones to bridges to irrigation systems."
          ],
          interaction: {
            type: "write",
            label: "Think & type",
            prompt: "In your own words, what does an engineer do? (2–3 sentences — no copying the slide)",
            timerMins: 2
          }
        },
        {
          type: "minilesson",
          title: "Engineers ask three questions (Part 2 of 3)",
          bullets: [
            "1. What is the problem? — Understand before you design.",
            "2. Who is affected? — Engineering serves people.",
            "3. What are the limits? — Constraints shape the solution."
          ],
          interaction: {
            type: "poll",
            label: "Quick poll",
            prompt: "Which question do engineers spend the MOST time on?",
            options: ["What is the problem?", "Who is affected?", "What are the limits?"]
          }
        },
        {
          type: "activity",
          title: "Engineering scavenger hunt",
          bullets: [
            "In teams of 3 — find engineered items around the classroom.",
            "Record: item, purpose, problem it solves, which engineer designed it.",
            "Find at least 5 items. Most surprising find gets shared with the class."
          ],
          interaction: {
            type: "write",
            label: "Share out",
            prompt: "What was your team's most surprising find — and why?",
            timerMins: 12
          }
        },
        {
          type: "biblical",
          title: "Biblical integration — Genesis 1:26–28",
          bullets: [
            "\"Then God said, 'Let us make mankind in our image…'\" — Genesis 1:26",
            "Humans are uniquely created with the ability to design, build, and solve problems.",
            "Dominion means responsible stewardship — not exploitation."
          ],
          interaction: {
            type: "write",
            label: "Reflection",
            prompt: "How does your ability to create and design reflect being made in God's image? (2–3 sentences)",
            timerMins: 3
          }
        },
        {
          type: "exitticket",
          title: "Exit ticket — Day 1",
          bullets: [
            "Write 2–3 sentences.",
            "Submit before you leave."
          ],
          interaction: {
            type: "write",
            label: "Exit ticket",
            prompt: "What surprised you most about engineering today?",
            timerMins: 4
          }
        }
      ],

      teacherNotes: {
        purpose: "Set the tone for the year. Engagement and culture first, logistics second.",
        beforeClass: ["Have Engineering Notebooks on desks", "Post Google Form link in Classroom", "Day 1 Check-In form ready"],
        pacing: "Bellringer 5 min | Mini-lesson 15 min | Activity 18 min | Biblical 5 min | Exit ticket 4 min"
      }
    },

    {
      id: "u1-w1-d2",
      active: true,
      date: "2025-08-19",
      unit: 1, week: 1, day: 2,
      title: "What Engineers Do",
      tag: "Unit 1 · Week 1 · Day 2",
      accentColor: "#1A7A6E",

      slides: [
        {
          type: "bellringer",
          title: "What ONE technology could you not live without?",
          bullets: [
            "Write your answer in your Engineering Notebook.",
            "Why? What problem does it solve in your daily life?",
            "Who designed it — what type of engineer?"
          ],
          interaction: {
            type: "write",
            label: "Think & type",
            prompt: "Name ONE technology and explain why you can't live without it.",
            timerMins: 3
          }
        },
        {
          type: "minilesson",
          title: "Engineering disciplines (Part 1 of 2)",
          bullets: [
            "Civil Engineering — roads, bridges, buildings.",
            "Mechanical Engineering — engines, machines, robotics.",
            "Electrical Engineering — circuits, phones, power grids.",
            "Agricultural Engineering — irrigation, farm equipment."
          ],
          interaction: {
            type: "poll",
            label: "Quick poll",
            prompt: "Which discipline connects most to what you said in the bellringer?",
            options: ["Civil", "Mechanical", "Electrical", "Agricultural"]
          }
        },
        {
          type: "exitticket",
          title: "Exit ticket — Day 2",
          bullets: ["2–3 sentences.", "Submit before you leave."],
          interaction: {
            type: "write",
            label: "Exit ticket",
            prompt: "Which engineering field interests you most right now — and why?",
            timerMins: 4
          }
        }
      ],

      teacherNotes: {
        purpose: "Expand students' mental model of what engineering covers.",
        pacing: "Bellringer 5 min | Mini-lesson 20 min | Activity 15 min | Exit ticket 5 min"
      }
    }
  ]
};
