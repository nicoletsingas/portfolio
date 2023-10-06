import { skillsData } from "./skills-data"

export const projectsData = [
  {
    img: '../../../assets/burgerqueen.png',
    title: 'BurgerCooked',
    details: 'In this project I developed an ordering system for a burger restaurant.',
    skills: [
      {
        name: 'Angular',
        imgUrl: skillsData.find(skill => skill.name === 'Angular')?.imgUrl || '',
      },
      {
        name: 'TypeScript',
        imgUrl: skillsData.find(skill => skill.name === 'TypeScript')?.imgUrl || '',
      },
      {
        name: 'HTML',
        imgUrl: skillsData.find(skill => skill.name === 'HTML')?.imgUrl || '',
      },
      {
        name: 'CSS',
        imgUrl: skillsData.find(skill => skill.name === 'CSS')?.imgUrl || '',
      },
      {
        name: 'Insomnia',
        imgUrl: skillsData.find(skill => skill.name === 'Insomnia')?.imgUrl || '',
      },
      {
        name: 'GIT',
        imgUrl: skillsData.find(skill => skill.name === 'GIT')?.imgUrl || '',
      },
    ],
    deploy: 'https://burguer-cooked.vercel.app/',
    code: 'https://github.com/nicoletsingas/BurguerCooked',
  },
  {
    img: '../../../assets/bqapi.jpg',
    title: 'Burger Queen API',
    details: 'I developed an API in node.js, mongoDB and JWT (json web token) for a mini burger restaurant.',
    skills: [
      {
        name: 'JavaScript',
        imgUrl: skillsData.find(skill => skill.name === 'JavaScript')?.imgUrl || '',
      },
      {
        name: 'NodeJS',
        imgUrl: skillsData.find(skill => skill.name === 'NodeJS')?.imgUrl || '',
      },
      {
        name: 'MongoDB',
        imgUrl: skillsData.find(skill => skill.name === 'MongoDB')?.imgUrl || '',
      },
      {
        name: 'Insomnia',
        imgUrl: skillsData.find(skill => skill.name === 'Insomnia')?.imgUrl || '',
      },
      {
        name: 'GIT',
        imgUrl: skillsData.find(skill => skill.name === 'GIT')?.imgUrl || '',
      },
    ],
    deploy: 'https://sap-010-burger-queen-api-seven.vercel.app/',
    code: 'https://github.com/nicoletsingas/SAP010-burger-queen-api',
  },
  {
    img: '../../../assets/socialnetwork.png',
    title: 'Social Network <Gamee>',
    details: 'It is a gamer Social Network, where the user can register, publish a post and like a friends post.',
    skills: [
      {
        name: 'JavaScript',
        imgUrl: skillsData.find(skill => skill.name === 'JavaScript')?.imgUrl || '',
      },
      {
        name: 'HTML',
        imgUrl: skillsData.find(skill => skill.name === 'HTML')?.imgUrl || '',
      },
      {
        name: 'CSS',
        imgUrl: skillsData.find(skill => skill.name === 'CSS')?.imgUrl || '',
      },
      {
        name: 'GIT',
        imgUrl: skillsData.find(skill => skill.name === 'GIT')?.imgUrl || '',
      },
    ],
    deploy: 'https://burguer-cooked.vercel.app/',
    code: 'https://github.com/nicoletsingas/SAP010-social-network',
  },
  {
    img: '../../../assets/mdlinks.jpg',
    title: 'MD Links',
    details: 'In this project I developed a library that reads .md (markdown) files and validates the links in this file.',
    skills: [
      {
        name: 'JavaScript',
        imgUrl: skillsData.find(skill => skill.name === 'JavaScript')?.imgUrl || '',
      },
      {
        name: 'NodeJS',
        imgUrl: skillsData.find(skill => skill.name === 'NodeJS')?.imgUrl || '',
      },
      {
        name: 'GIT',
        imgUrl: skillsData.find(skill => skill.name === 'GIT')?.imgUrl || '',
      },
    ],
    deploy: 'https://github.com/nicoletsingas/SAP010-md-links',
    code: 'https://github.com/nicoletsingas/SAP010-md-links',
  },
  {
    img: '../../../assets/datalovers.png',
    title: 'Pokébox',
    details: 'A website with 251 Pokémon, the user can filter and classify them alphabetically.',
    skills: [
      {
        name: 'JavaScript',
        imgUrl: skillsData.find(skill => skill.name === 'JavaScript')?.imgUrl || '',
      },
      {
        name: 'HTML',
        imgUrl: skillsData.find(skill => skill.name === 'HTML')?.imgUrl || '',
      },
      {
        name: 'CSS',
        imgUrl: skillsData.find(skill => skill.name === 'CSS')?.imgUrl || '',
      },
      {
        name: 'GIT',
        imgUrl: skillsData.find(skill => skill.name === 'GIT')?.imgUrl || '',
      },
    ],
    deploy: 'https://nicoletsingas.github.io/SAP010-data-lovers/',
    code: 'https://github.com/nicoletsingas/SAP010-data-lovers',
  },
  {
    img: '../../../assets/cardvalidation.png',
    title: 'Card Validator',
    details: 'I developed a website with the aim of validating the users credit card number.',
    skills: [
      {
        name: 'JavaScript',
        imgUrl: skillsData.find(skill => skill.name === 'JavaScript')?.imgUrl || '',
      },
      {
        name: 'HTML',
        imgUrl: skillsData.find(skill => skill.name === 'HTML')?.imgUrl || '',
      },
      {
        name: 'CSS',
        imgUrl: skillsData.find(skill => skill.name === 'CSS')?.imgUrl || '',
      },
      {
        name: 'GIT',
        imgUrl: skillsData.find(skill => skill.name === 'GIT')?.imgUrl || '',
      },
    ],
    deploy: 'https://nicoletsingas.github.io/SAP010-card-validation/',
    code: 'https://github.com/nicoletsingas/SAP010-card-validation',
  },
  {
    img: '../../../assets/trivia.png',
    title: 'Trivia',
    details: 'Its a mini Trivia game about pets (trivia is a game where you answer questions to test your knowledge).',
    skills: [
      {
        name: 'JavaScript',
        imgUrl: skillsData.find(skill => skill.name === 'JavaScript')?.imgUrl || '',
      },
      {
        name: 'HTML',
        imgUrl: skillsData.find(skill => skill.name === 'HTML')?.imgUrl || '',
      },
      {
        name: 'CSS',
        imgUrl: skillsData.find(skill => skill.name === 'CSS')?.imgUrl || '',
      },
      {
        name: 'GIT',
        imgUrl: skillsData.find(skill => skill.name === 'GIT')?.imgUrl || '',
      },
    ],
    deploy: 'https://nicoletsingas.github.io/Trivia-Nic-Helo/',
    code: 'https://github.com/nicoletsingas/Trivia-Nic-Helo',
  },
  {
    img: '../../../assets/faqcard.png',
    title: 'FAQ Card',
    details: 'A FAQ (questions and answers) card with a small animation when clicking on a question.',
    skills: [
      {
        name: 'JavaScript',
        imgUrl: skillsData.find(skill => skill.name === 'JavaScript')?.imgUrl || '',
      },
      {
        name: 'HTML',
        imgUrl: skillsData.find(skill => skill.name === 'HTML')?.imgUrl || '',
      },
      {
        name: 'CSS',
        imgUrl: skillsData.find(skill => skill.name === 'CSS')?.imgUrl || '',
      },
      {
        name: 'GIT',
        imgUrl: skillsData.find(skill => skill.name === 'GIT')?.imgUrl || '',
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
        imgUrl: skillsData.find(skill => skill.name === 'JavaScript')?.imgUrl || '',
      },
      {
        name: 'HTML',
        imgUrl: skillsData.find(skill => skill.name === 'HTML')?.imgUrl || '',
      },
      {
        name: 'CSS',
        imgUrl: skillsData.find(skill => skill.name === 'CSS')?.imgUrl || '',
      },
      {
        name: 'GIT',
        imgUrl: skillsData.find(skill => skill.name === 'GIT')?.imgUrl || '',
      },
    ],
    deploy: 'https://nicoletsingas.github.io/Projeto-Calculadora/',
    code: 'https://github.com/nicoletsingas/Projeto-Calculadora',
  },
]