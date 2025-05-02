// let etudiant = [
//   {
//     nom: "tayeb",
//     notes: [10, 11, 10, 10],
//   },
//   {
//     nom: "khalid",
//     notes: [20, 20, 20, 20],
//   },
//   {
//     nom: "ali",
//     notes: [11, 11, 11, 11],
//   }
// ];

// let moyEtudia = [];
// for (let i = 0; i < etudiant.length; i++) {
//   let moy;
//   let som = 0;
//   for (let j = 0; j < etudiant[i].notes.length; j++) {
//     som += etudiant[i].notes[j];

//   }
//   moy = som / etudiant[i].notes.length;
//   moyEtudia.push([moy, etudiant[i].nom]);
// }

// let temp;
// let temp1;
// let temp2;
// for (let i = 0; i < moyEtudia.length; i++) {
//   for (let j = i + 1; j < moyEtudia.length; j++) {
//     if (moyEtudia[i][0] > moyEtudia[j][0]){

//       // temp = moyEtudia[i][0];
//       // temp1 = moyEtudia[i][1];
//       // moyEtudia[i][0] = moyEtudia[j][0];
//       // moyEtudia[i][1] = moyEtudia[j][1];
//       // moyEtudia[j][0] = temp;
//       // moyEtudia[j][1] = temp1;
//       temp2=moyEtudia[i];
//       moyEtudia[i]=moyEtudia[j];
//       moyEtudia[j]=temp2;
//     }
//   }
// }
// console.log(moyEtudia)

// ==========================================================
// ==========================================================
// ==========================================================
let numberR;

function start() {
  numberR = Math.floor(Math.random() * 100 + 1);
  return numberR;
}

start();
console.log(numberR);
let count = 0;
let number = document.getElementById("number");

function randoom() {
  num = number.value;
  // let numberR=Math.floor(Math.random() * 10 +1);
  // let number=6

  if (count < 7) {
    if (num < numberR) {
      console.log("lesthan");
    } else if (num > numberR) {
      console.log("morethan");
    } else {
      console.log("correct");
      console.log(`vous ${count}`);
      count = 0;
      start();
    }
  } else {
    console.log("vous depassez le nombre maximal du tentes");
    start();
    count = 0;
    return;
  }

  count++;
}

// randoom()
// console.log(n);

// ======================================
// ======================================
// ======================================
// ======================================
// ======================================

const employees = [
  {
    id: 1,
    firstName: "Jean",
    lastName: "Dupont",
    age: 32,
    department: "Développement",
    position: "Développeur Fullstack",
    salary: 55000,
    skills: ["JavaScript", "React", "Node.js", "MongoDB"],
    joinDate: "2019-05-15",
    email: "jean.dupont@company.com",
    projects: ["Project Alpha", "Project Gamma"],
    isActive: true,
    languages: ["French", "English"],
  },
  {
    id: 2,
    firstName: "Marie",
    lastName: "Martin",
    age: 28,
    department: "Design",
    position: "UI/UX Designer",
    salary: 48000,
    skills: ["Figma", "Adobe XD", "Photoshop", "User Research"],
    joinDate: "2020-02-10",
    email: "marie.martin@company.com",
    projects: ["Project Beta", "Project Gamma"],
    isActive: true,
    languages: ["French", "Spanish"],
  },
  {
    id: 3,
    firstName: "Pierre",
    lastName: "Bernard",
    age: 45,
    department: "Management",
    position: "Chef de projet",
    salary: 65000,
    skills: ["Agile", "Scrum", "JIRA", "Project Planning"],
    joinDate: "2017-11-22",
    email: "pierre.bernard@company.com",
    projects: ["Project Alpha", "Project Beta", "Project Delta"],
    isActive: true,
    languages: ["French", "English", "German"],
  },
  {
    id: 4,
    firstName: "Thomas",
    lastName: "Petit",
    age: 29,
    department: "Développement",
    position: "Développeur Frontend",
    salary: 52000,
    skills: ["React", "TypeScript", "CSS", "Jest"],
    joinDate: "2020-08-14",
    email: "thomas.petit@company.com",
    projects: ["Project Gamma", "Project Epsilon"],
    isActive: true,
    languages: ["French", "English"],
  },
  {
    id: 5,
    firstName: "Camille",
    lastName: "Leroux",
    age: 35,
    department: "Marketing",
    position: "Chef de produit",
    salary: 58000,
    skills: ["Market Research", "Product Strategy", "Roadmapping"],
    joinDate: "2018-06-03",
    email: "camille.leroux@company.com",
    projects: ["Project Alpha", "Project Delta"],
    isActive: false,
    languages: ["French", "English", "Spanish"],
  },
  {
    id: 6,
    firstName: "Antoine",
    lastName: "Moreau",
    age: 27,
    department: "Développement",
    position: "Développeur Backend",
    salary: 53000,
    skills: ["Python", "Django", "PostgreSQL", "Docker"],
    joinDate: "2021-03-18",
    email: "antoine.moreau@company.com",
    projects: ["Project Beta", "Project Delta"],
    isActive: true,
    languages: ["French", "English"],
  },
  {
    id: 7,
    firstName: "Élodie",
    lastName: "Simon",
    age: 31,
    department: "Design",
    position: "Graphiste",
    salary: 45000,
    skills: ["Illustrator", "InDesign", "Branding"],
    joinDate: "2019-09-22",
    email: "elodie.simon@company.com",
    projects: ["Project Gamma"],
    isActive: true,
    languages: ["French"],
  },
  {
    id: 8,
    firstName: "Nicolas",
    lastName: "Laurent",
    age: 40,
    department: "Management",
    position: "Directeur Technique",
    salary: 75000,
    skills: ["Architecture", "Team Leadership", "Cloud Computing"],
    joinDate: "2016-04-05",
    email: "nicolas.laurent@company.com",
    projects: [
      "Project Alpha",
      "Project Beta",
      "Project Gamma",
      "Project Delta",
    ],
    isActive: true,
    languages: ["French", "English"],
  },
  {
    id: 9,
    firstName: "Laura",
    lastName: "Michel",
    age: 26,
    department: "Marketing",
    position: "Chargée de communication",
    salary: 42000,
    skills: ["Social Media", "Content Writing", "Community Management"],
    joinDate: "2021-07-30",
    email: "laura.michel@company.com",
    projects: ["Project Epsilon"],
    isActive: true,
    languages: ["French", "English", "German"],
  },
  {
    id: 10,
    firstName: "Alexandre",
    lastName: "Dubois",
    age: 33,
    department: "Développement",
    position: "DevOps Engineer",
    salary: 60000,
    skills: ["AWS", "Terraform", "CI/CD", "Kubernetes"],
    joinDate: "2018-11-12",
    email: "alexandre.dubois@company.com",
    projects: ["Project Beta", "Project Delta"],
    isActive: true,
    languages: ["French", "English"],
  },
  {
    id: 11,
    firstName: "Sarah",
    lastName: "Lefevre",
    age: 29,
    department: "Design",
    position: "UX Researcher",
    salary: 49000,
    skills: ["User Testing", "Data Analysis", "Prototyping"],
    joinDate: "2020-05-19",
    email: "sarah.lefevre@company.com",
    projects: ["Project Alpha", "Project Gamma"],
    isActive: true,
    languages: ["French", "English"],
  },
  {
    id: 12,
    firstName: "Maxime",
    lastName: "Roux",
    age: 38,
    department: "Management",
    position: "Responsable RH",
    salary: 58000,
    skills: ["Recrutement", "Gestion de carrière", "Formation"],
    joinDate: "2017-02-28",
    email: "maxime.roux@company.com",
    projects: [],
    isActive: false,
    languages: ["French", "English", "Spanish"],
  },
  {
    id: 13,
    firstName: "Julie",
    lastName: "Fournier",
    age: 24,
    department: "Développement",
    position: "Développeuse Junior",
    salary: 38000,
    skills: ["JavaScript", "HTML/CSS", "Git"],
    joinDate: "2022-01-10",
    email: "julie.fournier@company.com",
    projects: ["Project Epsilon"],
    isActive: true,
    languages: ["French", "English"],
  },
  {
    id: 14,
    firstName: "David",
    lastName: "Girard",
    age: 42,
    department: "Développement",
    position: "Architecte Logiciel",
    salary: 72000,
    skills: ["Microservices", "Design Patterns", "Java"],
    joinDate: "2015-08-15",
    email: "david.girard@company.com",
    projects: ["Project Alpha", "Project Delta"],
    isActive: true,
    languages: ["French", "English", "Portuguese"],
  },
  {
    id: 15,
    firstName: "Chloé",
    lastName: "Blanc",
    age: 30,
    department: "Marketing",
    position: "Responsable SEO",
    salary: 51000,
    skills: ["SEO", "Google Ads", "Analytics"],
    joinDate: "2019-04-03",
    email: "chloe.blanc@company.com",
    projects: ["Project Beta", "Project Epsilon"],
    isActive: true,
    languages: ["French", "English"],
  },
  {
    id: 16,
    firstName: "Kevin",
    lastName: "Lemoine",
    age: 25,
    department: "Design",
    position: "Motion Designer",
    salary: 43000,
    skills: ["After Effects", "Cinema 4D", "Animation"],
    joinDate: "2021-09-27",
    email: "kevin.lemoine@company.com",
    projects: ["Project Gamma"],
    isActive: true,
    languages: ["French"],
  },
  {
    id: 17,
    firstName: "Amandine",
    lastName: "Perrot",
    age: 36,
    department: "Management",
    position: "Directrice Marketing",
    salary: 68000,
    skills: ["Brand Strategy", "Digital Marketing", "Team Management"],
    joinDate: "2016-07-11",
    email: "amandine.perrot@company.com",
    projects: ["Project Alpha", "Project Epsilon"],
    isActive: true,
    languages: ["French", "English", "Italian"],
  },
  {
    id: 18,
    firstName: "Romain",
    lastName: "Chevalier",
    age: 27,
    department: "Développement",
    position: "Développeur Mobile",
    salary: 50000,
    skills: ["React Native", "Swift", "Firebase"],
    joinDate: "2020-10-05",
    email: "romain.chevalier@company.com",
    projects: ["Project Beta"],
    isActive: false,
    languages: ["French", "English"],
  },
  {
    id: 19,
    firstName: "Céline",
    lastName: "Barbier",
    age: 33,
    department: "Design",
    position: "Directrice Artistique",
    salary: 62000,
    skills: ["Art Direction", "Creative Strategy", "Brand Identity"],
    joinDate: "2018-03-14",
    email: "celine.barbier@company.com",
    projects: ["Project Alpha", "Project Gamma", "Project Epsilon"],
    isActive: true,
    languages: ["French", "English", "Spanish"],
  },
  {
    id: 20,
    firstName: "Julien",
    lastName: "Arnaud",
    age: 29,
    department: "Développement",
    position: "Ingénieur QA",
    salary: 48000,
    skills: ["Testing", "Automation", "Selenium"],
    joinDate: "2020-06-22",
    email: "julien.arnaud@company.com",
    projects: ["Project Beta", "Project Delta"],
    isActive: true,
    languages: ["French", "English"],
  },
  {
    id: 21,
    firstName: "Manon",
    lastName: "Royer",
    age: 31,
    department: "Marketing",
    position: "Chargée de projet événementiel",
    salary: 45000,
    skills: ["Event Planning", "Logistics", "Partnerships"],
    joinDate: "2019-08-19",
    email: "manon.royer@company.com",
    projects: ["Project Epsilon"],
    isActive: true,
    languages: ["French", "English"],
  },
  {
    id: 22,
    firstName: "Fabien",
    lastName: "Colin",
    age: 34,
    department: "Développement",
    position: "Data Engineer",
    salary: 59000,
    skills: ["Python", "SQL", "ETL", "Big Data"],
    joinDate: "2017-12-01",
    email: "fabien.colin@company.com",
    projects: ["Project Delta"],
    isActive: true,
    languages: ["French", "English"],
  },
  {
    id: 23,
    firstName: "Elise",
    lastName: "Mercier",
    age: 26,
    department: "Design",
    position: "UI Designer",
    salary: 44000,
    skills: ["Sketch", "Prototyping", "Design Systems"],
    joinDate: "2021-04-15",
    email: "elise.mercier@company.com",
    projects: ["Project Beta", "Project Gamma"],
    isActive: true,
    languages: ["French", "English"],
  },
  {
    id: 24,
    firstName: "Hugo",
    lastName: "Bourgeois",
    age: 41,
    department: "Management",
    position: "Directeur Financier",
    salary: 80000,
    skills: ["Financial Planning", "Budgeting", "Forecasting"],
    joinDate: "2015-05-09",
    email: "hugo.bourgeois@company.com",
    projects: [],
    isActive: true,
    languages: ["French", "English", "German"],
  },
  {
    id: 25,
    firstName: "Clara",
    lastName: "Henry",
    age: 28,
    department: "Développement",
    position: "Développeuse Fullstack",
    salary: 54000,
    skills: ["Vue.js", "Laravel", "MySQL"],
    joinDate: "2020-01-27",
    email: "clara.henry@company.com",
    projects: ["Project Alpha", "Project Epsilon"],
    isActive: true,
    languages: ["French", "English"],
  },
  {
    id: 26,
    firstName: "Mathieu",
    lastName: "Da silva",
    age: 30,
    department: "Marketing",
    position: "Growth Hacker",
    salary: 52000,
    skills: ["A/B Testing", "Conversion Optimization", "Digital Analytics"],
    joinDate: "2019-11-08",
    email: "mathieu.dasilva@company.com",
    projects: ["Project Beta", "Project Gamma"],
    isActive: true,
    languages: ["French", "English", "Portuguese"],
  },
  {
    id: 27,
    firstName: "Océane",
    lastName: "Leroy",
    age: 27,
    department: "Design",
    position: "UX Designer",
    salary: 47000,
    skills: ["User Flows", "Wireframing", "Usability Testing"],
    joinDate: "2021-02-14",
    email: "oceane.leroy@company.com",
    projects: ["Project Alpha"],
    isActive: true,
    languages: ["French", "English"],
  },
  {
    id: 28,
    firstName: "Quentin",
    lastName: "Sanchez",
    age: 35,
    department: "Développement",
    position: "Tech Lead",
    salary: 67000,
    skills: ["Code Review", "Mentoring", "System Design"],
    joinDate: "2017-06-30",
    email: "quentin.sanchez@company.com",
    projects: ["Project Alpha", "Project Delta"],
    isActive: true,
    languages: ["French", "English"],
  },
  {
    id: 29,
    firstName: "Léa",
    lastName: "Nguyen",
    age: 24,
    department: "Marketing",
    position: "Assistante Marketing",
    salary: 35000,
    skills: ["Office Suite", "Market Research", "Reporting"],
    joinDate: "2022-03-01",
    email: "lea.nguyen@company.com",
    projects: ["Project Epsilon"],
    isActive: true,
    languages: ["French", "English", "Vietnamese"],
  },
  {
    id: 30,
    firstName: "Baptiste",
    lastName: "Meyer",
    age: 37,
    department: "Management",
    position: "Directeur des Opérations",
    salary: 78000,
    skills: ["Process Optimization", "Supply Chain", "Vendor Management"],
    joinDate: "2016-09-18",
    email: "baptiste.meyer@company.com",
    projects: ["Project Alpha", "Project Beta", "Project Delta"],
    isActive: true,
    languages: ["French", "English", "German"],
  },
  {
    id: 31,
    firstName: "Zoé",
    lastName: "Dumont",
    age: 29,
    department: "Développement",
    position: "Développeuse Backend",
    salary: 56000,
    skills: ["Ruby on Rails", "PostgreSQL", "Redis"],
    joinDate: "2019-07-22",
    email: "zoe.dumont@company.com",
    projects: ["Project Gamma"],
    isActive: true,
    languages: ["French", "English"],
  },
  {
    id: 32,
    firstName: "Théo",
    lastName: "Noël",
    age: 26,
    department: "Design",
    position: "Product Designer",
    salary: 49000,
    skills: ["Product Thinking", "User Journey Mapping", "UI Design"],
    joinDate: "2020-12-03",
    email: "theo.noel@company.com",
    projects: ["Project Beta", "Project Epsilon"],
    isActive: true,
    languages: ["French", "English"],
  },
  {
    id: 33,
    firstName: "Anaïs",
    lastName: "Bertrand",
    age: 32,
    department: "Marketing",
    position: "Responsable Relations Publiques",
    salary: 53000,
    skills: ["Media Relations", "Crisis Communication", "Press Releases"],
    joinDate: "2018-10-17",
    email: "anais.bertrand@company.com",
    projects: ["Project Alpha", "Project Gamma"],
    isActive: true,
    languages: ["French", "English", "Spanish"],
  },
  {
    id: 34,
    firstName: "Paul",
    lastName: "Leclercq",
    age: 40,
    department: "Développement",
    position: "CTO",
    salary: 95000,
    skills: ["Technical Strategy", "Innovation", "Team Building"],
    joinDate: "2014-02-05",
    email: "paul.leclercq@company.com",
    projects: [
      "Project Alpha",
      "Project Beta",
      "Project Gamma",
      "Project Delta",
      "Project Epsilon",
    ],
    isActive: true,
    languages: ["French", "English", "Dutch"],
  },
  {
    id: 35,
    firstName: "Inès",
    lastName: "Rivière",
    age: 28,
    department: "Design",
    position: "Illustratrice",
    salary: 42000,
    skills: ["Procreate", "Digital Painting", "Character Design"],
    joinDate: "2021-05-29",
    email: "ines.riviere@company.com",
    projects: ["Project Gamma"],
    isActive: false,
    languages: ["French", "English"],
  },
  {
    id: 36,
    firstName: "Alexis",
    lastName: "Philippe",
    age: 33,
    department: "Développement",
    position: "Ingénieur Blockchain",
    salary: 71000,
    skills: ["Solidity", "Smart Contracts", "Ethereum"],
    joinDate: "2017-04-12",
    email: "alexis.philippe@company.com",
    projects: ["Project Delta"],
    isActive: true,
    languages: ["French", "English"],
  },
  {
    id: 37,
    firstName: "Louise",
    lastName: "Fontaine",
    age: 30,
    department: "Marketing",
    position: "Responsable Contenu",
    salary: 50000,
    skills: ["Content Strategy", "Copywriting", "Editing"],
    joinDate: "2019-02-25",
    email: "louise.fontaine@company.com",
    projects: ["Project Beta", "Project Epsilon"],
    isActive: true,
    languages: ["French", "English", "Chinese"],
  },
  {
    id: 38,
    firstName: "Benjamin",
    lastName: "Caron",
    age: 27,
    department: "Design",
    position: "UX Researcher",
    salary: 48000,
    skills: ["Qualitative Research", "Survey Design", "Persona Development"],
    joinDate: "2020-09-14",
    email: "benjamin.caron@company.com",
    projects: ["Project Alpha"],
    isActive: true,
    languages: ["French", "English"],
  },
  {
    id: 39,
    firstName: "Emma",
    lastName: "Perrin",
    age: 31,
    department: "Développement",
    position: "Développeuse Frontend",
    salary: 57000,
    skills: ["Angular", "TypeScript", "RxJS"],
    joinDate: "2018-07-08",
    email: "emma.perrin@company.com",
    projects: ["Project Beta", "Project Gamma"],
    isActive: true,
    languages: ["French", "English"],
  },
  {
    id: 40,
    firstName: "Nathan",
    lastName: "Giraud",
    age: 36,
    department: "Management",
    position: "Directeur Commercial",
    salary: 82000,
    skills: ["Sales Strategy", "Account Management", "Negotiation"],
    joinDate: "2016-01-20",
    email: "nathan.giraud@company.com",
    projects: ["Project Epsilon"],
    isActive: true,
    languages: ["French", "English", "Spanish"],
  },
  {
    id: 41,
    firstName: "Léna",
    lastName: "Boyer",
    age: 25,
    department: "Marketing",
    position: "Chargée de référencement",
    salary: 41000,
    skills: ["SEO", "Keyword Research", "Link Building"],
    joinDate: "2021-08-11",
    email: "lena.boyer@company.com",
    projects: ["Project Beta"],
    isActive: true,
    languages: ["French", "English"],
  },
  {
    id: 42,
    firstName: "Arthur",
    lastName: "Andre",
    age: 34,
    department: "Développement",
    position: "Ingénieur Machine Learning",
    salary: 69000,
    skills: ["Python", "TensorFlow", "Data Science"],
    joinDate: "2017-10-23",
    email: "arthur.andre@company.com",
    projects: ["Project Delta"],
    isActive: true,
    languages: ["French", "English"],
  },
  {
    id: 43,
    firstName: "Julia",
    lastName: "Clement",
    age: 29,
    department: "Design",
    position: "Directrice UX",
    salary: 63000,
    skills: ["UX Strategy", "User Centered Design", "Accessibility"],
    joinDate: "2019-06-17",
    email: "julia.clement@company.com",
    projects: ["Project Alpha", "Project Gamma"],
    isActive: true,
    languages: ["French", "English", "Italian"],
  },
  {
    id: 44,
    firstName: "Tom",
    lastName: "Fernandes",
    age: 26,
    department: "Développement",
    position: "Développeur Fullstack",
    salary: 51000,
    skills: ["PHP", "Symfony", "Vue.js"],
    joinDate: "2020-11-09",
    email: "tom.fernandes@company.com",
    projects: ["Project Epsilon"],
    isActive: true,
    languages: ["French", "English", "Portuguese"],
  },
  {
    id: 45,
    firstName: "Lina",
    lastName: "Lopez",
    age: 32,
    department: "Marketing",
    position: "Responsable Partenariats",
    salary: 55000,
    skills: ["Partnership Development", "Sponsorship", "Networking"],
    joinDate: "2018-05-30",
    email: "lina.lopez@company.com",
    projects: ["Project Alpha", "Project Beta"],
    isActive: true,
    languages: ["French", "English", "Spanish"],
  },
  {
    id: 46,
    firstName: "Enzo",
    lastName: "Robin",
    age: 28,
    department: "Design",
    position: "Graphiste Print",
    salary: 43000,
    skills: ["InDesign", "Typography", "Print Production"],
    joinDate: "2020-04-12",
    email: "enzo.robin@company.com",
    projects: ["Project Gamma"],
    isActive: false,
    languages: ["French"],
  },
  {
    id: 47,
    firstName: "Maëlys",
    lastName: "Gauthier",
    age: 30,
    department: "Développement",
    position: "Ingénieure QA Automatisation",
    salary: 58000,
    skills: ["Cypress", "Test Automation", "CI/CD"],
    joinDate: "2019-01-15",
    email: "maelys.gauthier@company.com",
    projects: ["Project Beta", "Project Delta"],
    isActive: true,
    languages: ["French", "English"],
  },
  {
    id: 48,
    firstName: "Hugo",
    lastName: "Martinez",
    age: 38,
    department: "Management",
    position: "Directeur de Projet",
    salary: 74000,
    skills: ["Risk Management", "Stakeholder Management", "Agile Coaching"],
    joinDate: "2016-08-22",
    email: "hugo.martinez@company.com",
    projects: ["Project Alpha", "Project Gamma"],
    isActive: true,
    languages: ["French", "English", "Spanish"],
  },
  {
    id: 49,
    firstName: "Léonie",
    lastName: "Dufour",
    age: 27,
    department: "Marketing",
    position: "Community Manager",
    salary: 40000,
    skills: ["Social Media", "Influencer Marketing", "Brand Voice"],
    joinDate: "2021-02-28",
    email: "leonie.dufour@company.com",
    projects: ["Project Epsilon"],
    isActive: true,
    languages: ["French", "English"],
  },
  {
    id: 50,
    firstName: "Sophie",
    lastName: "Leroy",
    age: 31,
    department: "Marketing",
    position: "Responsable marketing digital",
    salary: 52000,
    skills: ["SEO", "Google Analytics", "Content Marketing", "Social Media"],
    joinDate: "2021-01-05",
    email: "sophie.leroy@company.com",
    projects: ["Project Epsilon"],
    isActive: false,
    languages: ["French", "English", "Italian"],
  },
];

//   1. Get the first name of the first employee
function getFirstEmployeeFirstName() {
  return employees[0].firstName;
}

//   console.log(getFirstEmployeeFirstName())

// 2. Get the last name of the last employee

function getLastEmployeeLastName() {
  let lenth = employees.length;
  return employees[lenth - 1].lastName;
}
console.log(getLastEmployeeLastName());

//   3. Get the department of employee with ID 5
function getEmployeeDepartmentById() {
  return employees[5].department;
}
console.log(getEmployeeDepartmentById());

// 4. Count how many employees are in the array
function countEmployees() {
  return employees.length;
}
console.log(countEmployees());

// Check if any employee is inactive (isActive: false)
//  - **Function Name**: `hasInactiveEmployees`
//  - **Input**: `employees`
//  - **Output**: `true`
//  - **Expected Result**: Returns `true` if any employee is inactive, otherwise `false`.

function hasInactiveEmployees() {
  for (let i = 0; i < employees.length; i++) {
    if (employees[i].isActive == false) {
      return console.log("true");
    }
  }
}
hasInactiveEmployees();

// Calculate the average age of all employees
//  - **Function Name**: `calculateAverageAge`
//  - **Input**: `employees`
//  - **Output**: `31.2`
//  - **Expected Result**: Returns the average age of all employees.

function calculateAverageAge(employees) {
  let somme = 0;
  let c = 0;
  for (let i = 0; i < employees.length; i++) {
    somme += employees[i].age;
    c++;
  }
  let moy = somme / c;
  return console.log(moy);
}
calculateAverageAge(employees);

// Find the employee with the highest salary
//  - **Function Name**: `getHighestPaidEmployee`
//  - **Input**: `employees`
//  - **Output**: `{ id: 34, firstName: "Paul", lastName: "Leclercq", ... }`
//  - **Expected Result**: Returns the employee object with the highest salary.

function getHighestPaidEmployee(employee) {
  let max = 0;
  let id;
  for (let i = 0; i < employee.length; i++) {
    if (employee[i].salary > max) {
      max = employee[i].salary;
      id = i;
    }
  }

  return console.log(employee[id]);
}
getHighestPaidEmployee(employees);

// 8. Count how many employees are in the "Développement" department
//  - **Function Name**: `countEmployeesInDepartment`
//  - **Input**: `employees, "Développement"`
//  - **Output**: `15`
//  - **Expected Result**: Returns the number of employees in the "Développement" department.

function countEmployeesInDepartment(employee) {
  let count = 0;
  for (let i = 0; i < employee.length; i++) {
    if (employee[i].department == "Développement") {
      count++;
    }
  }
  return console.log(count);
}
countEmployeesInDepartment(employees);

//   1. Get the first name of the first employee
function getFirstEmployeeFirstName() {
  return employees[0].firstName;
}

//   console.log(getFirstEmployeeFirstName())

// 2. Get the last name of the last employee

function getLastEmployeeLastName() {
  let lenth = employees.length;
  return employees[lenth - 1].lastName;
}
console.log(getLastEmployeeLastName());

//   3. Get the department of employee with ID 5
function getEmployeeDepartmentById() {
  return employees[5].department;
}
console.log(getEmployeeDepartmentById());

// 4. Count how many employees are in the array
function countEmployees() {
  return employees.length;
}
console.log(countEmployees());

// Check if any employee is inactive (isActive: false)
//  - **Function Name**: `hasInactiveEmployees`
//  - **Input**: `employees`
//  - **Output**: `true`
//  - **Expected Result**: Returns `true` if any employee is inactive, otherwise `false`.

function hasInactiveEmployees() {
  for (let i = 0; i < employees.length; i++) {
    if (employees[i].isActive == false) {
      return console.log("true");
    }
  }
}
hasInactiveEmployees();

// Calculate the average age of all employees
//  - **Function Name**: `calculateAverageAge`
//  - **Input**: `employees`
//  - **Output**: `31.2`
//  - **Expected Result**: Returns the average age of all employees.

function calculateAverageAge(employees) {
  let somme = 0;
  let c = 0;
  for (let i = 0; i < employees.length; i++) {
    somme += employees[i].age;
    c++;
  }
  let moy = somme / c;
  return console.log(moy);
}
calculateAverageAge(employees);

// Find the employee with the highest salary
//  - **Function Name**: `getHighestPaidEmployee`
//  - **Input**: `employees`
//  - **Output**: `{ id: 34, firstName: "Paul", lastName: "Leclercq", ... }`
//  - **Expected Result**: Returns the employee object with the highest salary.

function getHighestPaidEmployee(employee) {
  let max = 0;
  let id;
  for (let i = 0; i < employee.length; i++) {
    if (employee[i].salary > max) {
      max = employee[i].salary;
      id = i;
    }
  }

  return console.log(employee[id]);
}
// getHighestPaidEmployee(employees)

// 8. Count how many employees are in the "Développement" department
//  - **Function Name**: `countEmployeesInDepartment`
//  - **Input**: `employees, "Développement"`
//  - **Output**: `15`
//  - **Expected Result**: Returns the number of employees in the "Développement" department.

function countEmployeesInDepartment(employee) {
  let count = 0;
  for (let i = 0; i < employee.length; i++) {
    if (employee[i].department == "Développement") {
      count++;
    }
  }
  return console.log(count);
}
// countEmployeesInDepartment(employees)

//   9. List all unique department names
//    - **Function Name**: `getUniqueDepartments`
//    - **Input**: `employees`
//    - **Output**: `["Développement", "Design", "Management", "Marketing"]`
//    - **Expected Result**: Returns an array of unique department names.

function getUniqueDepartments(employees) {
  let tabl = [];
  for (let i = 0; i < employees.length; i++) {
    let count = 0;
    for (let j = i + 1; j < employees.length; j++) {
      if (employees[i].department == employees[j].department) {
        count = 1;
        break;
      }
    }
    if (count == 0) {
      tabl.push(employees[i].department);
    }
  }
  return tabl;
}

// console.log (getUniqueDepartments(employees))

// 10. Check if any employee has no projects assigned
//     - **Function Name**: `hasEmployeesWithoutProjects`
//     - **Input**: `employees`
//     - **Output**: `true`
//     - **Expected Result**: Returns `true` if any employee has no projects assigned, otherwise `false`.

function hasEmployeesWithoutProjects(employee) {
  for (let i = 0; i < employee.length; i++) {
    if (employee[i].projects == "") {
      //employee[i].projects==false

      return true;
    }
  }
}
// console.log(hasEmployeesWithoutProjects(employees));

// 11. Count how many employees speak English
// languages: ["French", "English", "Italian"]
//     - **Function Name**: `countEnglishSpeakingEmployees`
//     - **Input**: `employees`
//     - **Output**: `45`
//     - **Expected Result**: Returns the number of employees who speak English.

function countEnglishSpeakingEmployees(employee, mots) {
  let count = 0;
  for (let i = 0; i < employee.length; i++) {
    for (let j = 0; j < employee[i].languages.length; j++) {
      if (employee[i].languages[j] == mots) {
        count++;
      }
    }
  }
  return console.log(count);
}
// countEnglishSpeakingEmployees(employees,"English");

//12. Find all employees who work on "Project Gamma"
//     - **Function Name**: `getEmployeesByProject`
//     - **Input**: `employees, "Project Gamma"`
//     - **Output**: `[ { id: 1, firstName: "Jean", ... }, { id: 2, firstName: "Marie", ... }, ... ]`
//     - **Expected Result**: Returns an array of employees working on "Project Gamma".

function getEmployeesByProject(employee, project) {
  let tabl = [];
  for (let i = 0; i < employee.length; i++) {
    for (let j = 0; j < employee[i].projects.length; j++) {
      if (employee[i].projects[j] == project) {
        tabl.push(employee[i]);
        break;
      }
    }
  }
  return console.log(tabl);
}
// getEmployeesByProject(employees,"Project Gamma");
// meme exercice mais avec une seule project
function getEmployeesBySeulProject(employee, project) {
  let tabl = [];
  for (let i = 0; i < employee.length; i++) {
    if (employee[i].projects.length == 1) {
      for (let j = 0; j < employee[i].projects.length; j++) {
        if (employee[i].projects[j] == project) {
          tabl.push(employee[i]);
          break;
        }
      }
    }
  }

  return console.log(tabl);
}

// getEmployeesBySeulProject(employees,"Project Gamma");

// 13. List employees who have more than 2 skills
//     - **Function Name**: `getEmployeesWithMoreThanTwoSkills`
//     - **Input**: `employees`
//     - **Output**: `[ { id: 1, firstName: "Jean", ... }, { id: 3, firstName: "Pierre", ... }, ... ]`
//     - **Expected Result**: Returns an array of employees with more than 2 skills.

function getEmployeesWithMoreThanTwoSkills(employee) {
  let tabl = [];
  let count = 0;
  for (let i = 0; i < employee.length; i++) {
    if (employee[i].skills.length > 2) {
      tabl.push(employee[i]);
      count++;
    }
  }
  return console.log([tabl, count]);
}
// getEmployeesWithMoreThanTwoSkills(employees);

// 14. Find employees whose last name starts with 'L'
//     - **Function Name**: `getEmployeesByLastNameInitial`
//     - **Input**: `employees, 'L'`
//     - **Output**: `[ { id: 5, lastName: "Leroux", ... }, { id: 8, lastName: "Laurent", ... }, ... ]`
//     - **Expected Result**: Returns an array of employees whose last name starts with 'L'.

function getEmployeesByLastNameInitial(employee, mots) {
  let tabl = [];
  for (let i = 0; i < employee.length; i++) {
    if (employee[i].lastName[0] == mots) {
      tabl.push(employee[i]);
    }
  }
  return console.log(tabl);
}
// getEmployeesByLastNameInitial(employees,"L");

// 15. Calculate the average salary per department
//     - **Function Name**: `calculateAverageSalaryByDepartment`
//     - **Input**: `employees`
//     - **Output**: `{ "Développement": 60000, "Design": 50000, ... }`
//     - **Expected Result**: Returns an object with average salaries for each department.

function calculateAverageSalaryByDepartment(employee) {
  let tabl = [];

  for (let i = 0; i < employee.length - 1; i++) {
    let count = 1;
    let moy;
    let c = 0;
    somme = employee[i].salary;

    for (let j = 0; j < tabl.length; j++) {
      if (employee[i].department == tabl[j][0]) {
        c = 1;

        break;
      }
    }

    if (c == 1) {
      continue;
    } else {
      for (let k = i + 1; k < employee.length; k++) {
        if (employee[i].department == employee[k].department) {
          count++;
          somme += employee[k].salary;
        }
      }

      moy = somme / count;
      tabl.push([employee[i].department, moy, count]);
    }
  }
  return console.log(tabl);
}
calculateAverageSalaryByDepartment(employees);
