import { skillsData } from "./skills-data"

export const projectsData = [
  {
    img: '../../../assets/moveit.png',
    title: 'MoveIt!',
    details:
      'In this project I developed an application with login and sign up pages.',
    skills: [
      {
        name: 'Angular',
        imgUrl:
          skillsData.find((skill) => skill.name === '#Angular')?.imgUrl || '',
      },
      {
        name: 'TypeScript',
        imgUrl:
          skillsData.find((skill) => skill.name === '#TypeScript')?.imgUrl ||
          '',
      },
      {
        name: 'SCSS',
        imgUrl:
          skillsData.find((skill) => skill.name === '#SCSS')?.imgUrl || '',
      },
      {
        name: 'HTML',
        imgUrl:
          skillsData.find((skill) => skill.name === '#HTML')?.imgUrl || '',
      },
      {
        name: 'GIT',
        imgUrl: skillsData.find((skill) => skill.name === '#GIT')?.imgUrl || '',
      },
    ],
    deploy: 'https://moveit-weld-iota.vercel.app/',
    code: 'https://github.com/nicoletsingas/moveit',
  },
  {
    img: '../../../assets/burgerqueen.png',
    title: 'BurgerCooked',
    details:
      'In this project I developed an ordering system for a burger restaurant.',
    skills: [
      {
        name: 'Angular',
        imgUrl:
          skillsData.find((skill) => skill.name === '#Angular')?.imgUrl || '',
      },
      {
        name: 'TypeScript',
        imgUrl:
          skillsData.find((skill) => skill.name === '#TypeScript')?.imgUrl ||
          '',
      },
      {
        name: 'HTML',
        imgUrl:
          skillsData.find((skill) => skill.name === '#HTML')?.imgUrl || '',
      },
      {
        name: 'CSS',
        imgUrl: skillsData.find((skill) => skill.name === '#CSS')?.imgUrl || '',
      },
      {
        name: 'Insomnia',
        imgUrl:
          skillsData.find((skill) => skill.name === '#Insomnia')?.imgUrl || '',
      },
      {
        name: 'GIT',
        imgUrl: skillsData.find((skill) => skill.name === '#GIT')?.imgUrl || '',
      },
    ],
    deploy: 'https://burguer-cooked.vercel.app/',
    code: 'https://github.com/nicoletsingas/BurguerCooked',
  },
  {
    img: '../../../assets/bqapi.jpg',
    title: 'Burger Queen API',
    details:
      'I developed an API in node.js, mongoDB and JWT (json web token) for a mini burger restaurant.',
    skills: [
      {
        name: 'JavaScript',
        imgUrl:
          skillsData.find((skill) => skill.name === '#JavaScript')?.imgUrl ||
          '',
      },
      {
        name: 'NodeJS',
        imgUrl:
          skillsData.find((skill) => skill.name === '#NodeJS')?.imgUrl || '',
      },
      {
        name: 'MongoDB',
        imgUrl:
          skillsData.find((skill) => skill.name === '#MongoDB')?.imgUrl || '',
      },
      {
        name: 'Insomnia',
        imgUrl:
          skillsData.find((skill) => skill.name === '#Insomnia')?.imgUrl || '',
      },
      {
        name: 'GIT',
        imgUrl: skillsData.find((skill) => skill.name === '#GIT')?.imgUrl || '',
      },
    ],
    deploy: 'https://sap-010-burger-queen-api-seven.vercel.app/',
    code: 'https://github.com/nicoletsingas/SAP010-burger-queen-api',
  },
  {
    img: '../../../assets/petcare.png',
    title: 'PetCare LP',
    details: 'It is a landing page for a fictional pet care company.',
    skills: [
      {
        name: 'React',
        imgUrl:
          skillsData.find((skill) => skill.name === '#React')?.imgUrl || '',
      },
      {
        name: 'Next',
        imgUrl:
          skillsData.find((skill) => skill.name === '#Next')?.imgUrl || '',
      },
      {
        name: 'TypeScript',
        imgUrl:
          skillsData.find((skill) => skill.name === '#TypeScript')?.imgUrl ||
          '',
      },
      {
        name: 'Tailwind',
        imgUrl:
          skillsData.find((skill) => skill.name === '#Tailwind')?.imgUrl || '',
      },
      {
        name: 'GIT',
        imgUrl: skillsData.find((skill) => skill.name === '#GIT')?.imgUrl || '',
      },
    ],
    deploy: 'https://pet-care-lp.vercel.app/',
    code: 'https://github.com/nicoletsingas/pet-care-lp',
  },
  {
    img: '../../../assets/user-poc.png',
    title: 'Simple User POC',
    details:
      'This is a project that validates user data for educational purposes, built with React and Redux',
    skills: [
      {
        name: 'React',
        imgUrl:
          skillsData.find((skill) => skill.name === '#React')?.imgUrl || '',
      },
      {
        name: 'TypeScript',
        imgUrl:
          skillsData.find((skill) => skill.name === '#TypeScript')?.imgUrl ||
          '',
      },
      {
        name: 'Vite',
        imgUrl:
          skillsData.find((skill) => skill.name === '#Vite')?.imgUrl || '',
      },
      {
        name: 'GIT',
        imgUrl: skillsData.find((skill) => skill.name === '#GIT')?.imgUrl || '',
      },
    ],
    deploy: 'https://simple-user-poc.vercel.app/',
    code: 'https://github.com/nicoletsingas/simple-user-PoC',
  },
  {
    img: '../../../assets/calculadora imc.png',
    title: 'IMC Calculator',
    details:
      'This is a project that calculates the IMC (Body Mass Index) for educational purposes, built with React',
    skills: [
      {
        name: 'React',
        imgUrl:
          skillsData.find((skill) => skill.name === '#React')?.imgUrl || '',
      },
      {
        name: 'JavaScript',
        imgUrl:
          skillsData.find((skill) => skill.name === '#JavaScript')?.imgUrl ||
          '',
      },
      {
        name: 'Tailwind',
        imgUrl:
          skillsData.find((skill) => skill.name === '#Tailwind')?.imgUrl || '',
      },
      {
        name: 'Vite',
        imgUrl:
          skillsData.find((skill) => skill.name === '#Vite')?.imgUrl || '',
      },
      {
        name: 'GIT',
        imgUrl: skillsData.find((skill) => skill.name === '#GIT')?.imgUrl || '',
      },
    ],
    deploy: 'https://simple-user-poc.vercel.app/',
    code: 'https://github.com/nicoletsingas/simple-user-PoC',
  },
  {
    img: '../../../assets/socialnetwork.png',
    title: 'Social Network',
    details:
      'It is a gamer Social Network, where the user can register, publish a post and like a friends post.',
    skills: [
      {
        name: 'JavaScript',
        imgUrl:
          skillsData.find((skill) => skill.name === '#JavaScript')?.imgUrl ||
          '',
      },
      {
        name: 'HTML',
        imgUrl:
          skillsData.find((skill) => skill.name === '#HTML')?.imgUrl || '',
      },
      {
        name: 'CSS',
        imgUrl: skillsData.find((skill) => skill.name === '#CSS')?.imgUrl || '',
      },
      {
        name: 'GIT',
        imgUrl: skillsData.find((skill) => skill.name === '#GIT')?.imgUrl || '',
      },
    ],
    deploy: 'https://gamee-97311.web.app/',
    code: 'https://github.com/nicoletsingas/SAP010-social-network',
  },
  {
    img: '../../../assets/jogo yu-gi-oh.png',
    title: 'Yu-Gi-OH Game Card',
    details:
      'A Yu-Gi-OH Game Card, where the user can play against the computer.',
    skills: [
      {
        name: 'JavaScript',
        imgUrl:
          skillsData.find((skill) => skill.name === '#JavaScript')?.imgUrl ||
          '',
      },
      {
        name: 'HTML',
        imgUrl:
          skillsData.find((skill) => skill.name === '#HTML')?.imgUrl || '',
      },
      {
        name: 'CSS',
        imgUrl: skillsData.find((skill) => skill.name === '#CSS')?.imgUrl || '',
      },
      {
        name: 'GIT',
        imgUrl: skillsData.find((skill) => skill.name === '#GIT')?.imgUrl || '',
      },
    ],
    deploy: 'https://nicoletsingas.github.io/Yu-Gi-Oh-Game-Cards/',
    code: 'https://github.com/nicoletsingas/Yu-Gi-Oh-Game-Cards',
  },
  {
    img: '../../../assets/datalovers.png',
    title: 'Pokébox',
    details:
      'A website with 251 Pokémon, the user can filter and classify them alphabetically.',
    skills: [
      {
        name: 'JavaScript',
        imgUrl:
          skillsData.find((skill) => skill.name === '#JavaScript')?.imgUrl ||
          '',
      },
      {
        name: 'HTML',
        imgUrl:
          skillsData.find((skill) => skill.name === '#HTML')?.imgUrl || '',
      },
      {
        name: 'CSS',
        imgUrl: skillsData.find((skill) => skill.name === '#CSS')?.imgUrl || '',
      },
      {
        name: 'GIT',
        imgUrl: skillsData.find((skill) => skill.name === '#GIT')?.imgUrl || '',
      },
    ],
    deploy: 'https://nicoletsingas.github.io/SAP010-data-lovers/',
    code: 'https://github.com/nicoletsingas/SAP010-data-lovers',
  },
  {
    img: '../../../assets/faqcard.png',
    title: 'FAQ Card',
    details:
      'A FAQ (questions and answers) card with a small animation when clicking on a question.',
    skills: [
      {
        name: 'JavaScript',
        imgUrl:
          skillsData.find((skill) => skill.name === '#JavaScript')?.imgUrl ||
          '',
      },
      {
        name: 'HTML',
        imgUrl:
          skillsData.find((skill) => skill.name === '#HTML')?.imgUrl || '',
      },
      {
        name: 'CSS',
        imgUrl: skillsData.find((skill) => skill.name === '#CSS')?.imgUrl || '',
      },
      {
        name: 'GIT',
        imgUrl: skillsData.find((skill) => skill.name === '#GIT')?.imgUrl || '',
      },
    ],
    deploy: 'https://nicoletsingas.github.io/FAQ-card/',
    code: 'https://github.com/nicoletsingas/FAQ-card',
  },
  {
    img: '../../../assets/calculator.png',
    title: 'Calculator',
    details: 'In this project I developed a web calculator.',
    skills: [
      {
        name: 'JavaScript',
        imgUrl:
          skillsData.find((skill) => skill.name === '#JavaScript')?.imgUrl ||
          '',
      },
      {
        name: 'HTML',
        imgUrl:
          skillsData.find((skill) => skill.name === '#HTML')?.imgUrl || '',
      },
      {
        name: 'CSS',
        imgUrl: skillsData.find((skill) => skill.name === '#CSS')?.imgUrl || '',
      },
      {
        name: 'GIT',
        imgUrl: skillsData.find((skill) => skill.name === '#GIT')?.imgUrl || '',
      },
    ],
    deploy: 'https://nicoletsingas.github.io/Projeto-Calculadora/',
    code: 'https://github.com/nicoletsingas/Projeto-Calculadora',
  },
];