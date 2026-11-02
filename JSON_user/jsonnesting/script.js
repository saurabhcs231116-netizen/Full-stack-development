const data = [
  {
    name: "saurabh patel",
    class: "12th",
    strem: "bio",
    project: [
      {
        projectName: "abcd",
        timeline: 2,
        role: "xyz",
      },
    ],
  },
 {
    name: "prince patel",
    class: "12th",
    strem: "Maths",
    project: [
      {
        projectName: "def",
        timeline: 5,
        role: "mno",
      },
    ],
  },
  {
    name: "syamsundar singh",
    class: "12th",
    strem: "commerce",
    project: [
      {
        projectName: "flo",
        timeline: 3,
        role: "pqr",
      },
    ],
  },
];



delete data[1].name;

console.log(data[1]);
