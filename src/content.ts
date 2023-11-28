export const webContent:Record<string, any> = {
  languageList:['ro','es','en'],
  language:{ro:'Română',es:'Español',en:'English'},
  flags:{ro:'/Flag_of_Romania.svg',es:'/Flag_of_Spain.svg',en:'/Flag_of_UK.svg'},
  languages:{
    ro:'Limbe',
    es:'Idiomas',
    en:'Languages'
  },
  title: {
    ro: 'Portofoliul meu',
    es: 'Mi Portfolio',
    en: 'My Portfolio'
  },
  aboutMe: {
    ro: 'Despre mine!',
    es: 'Sobre mi!',
    en: 'About me!'
  },
  aboutMeDescription: {
    ro: 'Mă numesc Mihai Popovici și am 23 de ani. Programez de la 13 ani (mici programe pentru console și jocuri). Am locuit în Spania înainte de a mă întoarce în România (țara mea natală) și, după ce am lucrat 2 ani în industria de producție, am decis că vreau să îmi continui pasiunea pentru programare și să devin dezvoltator software.',
    es: 'Me llamo Mihai Popovici y tengo 23 años. Llevo programando desde los 13 años (pequeños programas de consola y juegos). He vivido en España antes de volver a Rumanía (mi país natal) y, después de trabajar 2 años en la industria manufacturera, decidí que quería continuar con mi pasión por la programación y convertirme en desarrollador software.',
    en: 'My name is Mihai Popovici and I am 23 years old. I have been programming since I was 13 years old (small console programs and games). I have lived in Spain before returning to Romania (my native country) and after working 2 years in the manufacturing industry, I decided that I wanted to continue my passion for programming and become a software developer.'
  },
  techTitle: {
    ro: 'Tehnologii',
    es: 'Tecnologías',
    en: 'Tech'
  },
  tech:[
    {
      name:'JavaScript',
      imgUrl:'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg'
    },
    {
      name:'TypeScript',
      imgUrl:'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg'
    },
    {
      name:'Tailwind',
      imgUrl:'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg'
    },
    {
      name:'Python',
      imgUrl:'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg'
    },
    {
      name:'Flask',
      class:'bg-white',
      imgUrl:'https://upload.wikimedia.org/wikipedia/commons/3/3c/Flask_logo.svg'
    },
    {
      name:'Node.js',
      imgUrl:'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg'
    },
    {
      name:'Express.js',
      class:'bg-white',
      imgUrl:'https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png'
    },
    {
      name:'React',
      imgUrl:'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
    },
    {
      name:'Angular',
      imgUrl:'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg'
    },
    {
      name:'Next.js',
      class:'bg-white',
      imgUrl:'https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg'
    },
    {
      name:'SQL',
      imgUrl:'https://upload.wikimedia.org/wikipedia/commons/d/d7/Sql_data_base_with_logo.svg'
    },
    {
      name:'mongoDB',
      class:'bg-white',
      imgUrl:'https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg'
    },
    {
      name:'c',
      imgUrl:'https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg'
    },
    {
      name:'Bootstrap',
      imgUrl:'https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg'
    },
    {
      name:'Git',
      imgUrl:'https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg'
    },
    {
      name:'npm',
      imgUrl:'https://upload.wikimedia.org/wikipedia/commons/d/db/Npm-logo.svg'
    },
    {
      name:'jQuery',
      class:'bg-white',
      imgUrl:'https://upload.wikimedia.org/wikipedia/en/9/9e/JQuery_logo.svg'
    },
    {
      name:'Three.js',
      class:'bg-white',
      imgUrl:'https://upload.wikimedia.org/wikipedia/commons/3/3f/Three.js_Icon.svg'
    }
  ],
  projectsTitle: {
    ro: 'Proiecte',
    es: 'Proyectos',
    en: 'Projects'
  },
  projects:[
    {
      name:'Picofix',
      description:{
        ro:'Am făcut această aplicație pentru propria mea firmă de construcții pentru ca, în viitor, să public fotografii ale lucrărilor efectuate și să o folosesc pentru a câștiga mai mulți clienți.',
        es:'Hice esta aplicación para mi propia empresa de construcción con el fin de, en el futuro, publicar fotos de trabajos realizados y utilizarla para conseguir más clientes.',
        en:'I made this application for my own construction company in order to, in the future, publish photos of work done and use it to gain more customers.',
      },
      url:'https://www.picofix.ro/',
      tech:[
        'Next.js', 'Tailwind', 'Three.js', 'JavaScript'
      ]
    },
    {
      name:'TodoApp',
      description:{
        ro:'În timp ce făceam cursul Udemy. Am făcut o aplicație care folosea node.js + Express.js pentru backend și ejs pentru template-uri. Pentru baza de date am folosit mongodb, iar pentru front-end am folosit bootstrap și css.',
        es:'Mientras hacía el curso Udemy. Hice una aplicación todo que utiliza node.js + Express.js para el backend y ejs para plantillas. Para la base de datos usé mongodb y para el front-end usé bootstrap y css.',
        en:'While doing the Udemy course. I did a todo app that used node.js + Express.js for the backend and ejs for templating. For the database I used mongodb and for the front end I used bootstrap and css.',
      },
      url:'https://todoapp-g4jy.onrender.com/',
      tech:[
        'Bootstrap', 'mongoDB', 'Node.js', 'Express.js'
      ]
    }
  ],
  changeTheme: {
    ro: 'Schimbă tema',
    es: 'Cambia el tema',
    en: 'Change theme'
  },
  themes:{
    light:{
      ro:'Luminoasă',
      es:'Claro',
      en:'Light'
    },
    dark:{
      ro:'Închisă',
      es:'Oscuro',
      en:'Dark'
    },
    system:{
      ro:'Sistem',
      es:'Sistema',
      en:'System'
    }
  }
}