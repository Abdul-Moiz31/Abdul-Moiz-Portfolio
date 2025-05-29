'use client';

import { useState } from 'react';
import CardProject from './CardProject';
import AnimationContainer from '../utils/AnimationContainer';
import { CardProjectProps } from '@/types';

const allProjectsInfo = [
  {
    id: '1',
    title: 'Quickstart-ai',
    des: 'Saas Product based on business model to create chat within the website by integrating single line of code  .',
    category: 'javascript- Next.js',
    repo: 'https://github.com/Abdul-Moiz31/QuickStart-ai',
    link: 'https://www.quickstart-ai.me/'
  },
  {
    id: '2',
    title: 'Learn Mate',
    des: 'LearnMate is a platform dedicated to transforming the way students and professionals create, study, and master complex subjects. ',
    category: 'javascript - jquery',
    repo: 'https://github.com/Abdul-Moiz31/learn-mate',
    link: 'https://learn-mate-ai.vercel.app/'
  },
  {
    id: '3',
    title: 'Mock-Off',
    des: 'Mockoff is an interview preparation tool that provides AI feedback on your mock interviews.',
    category: 'javascript',
    repo: 'https://github.com/Abdul-Moiz31/Mockoff',
    link: 'https://mockofff.vercel.app/'
  },
  {
    id: '5',
    title: 'Pantry Tracker',
    des: 'Manage your pantry items efficiently.',
    category: 'JavaScript',
    repo: 'https://github.com/Abdul-Moiz31/Pantry-Tracker',
    link: 'https://pantrytracker-app.vercel.app/'
  },
  {
    id: '6',
    title: 'Bankify',
    des: 'Web app for seamless banking. Includes authentication, account management, fund transfers, bill payments, and responsive UI.',
    category: 'React',
    repo: 'https://github.com/Abdul-Moiz31/Bankify',
    link: 'https://bankifyapp.netlify.app/'
  },
  
  // {
  //   id: '8',
  //   title: 'Github Issues',
  //   des: 'First project using TanStack Query with Github API, I learned what it is for, how to use it and when to use it.',
  //   category: 'typescript - react - react query',
  //   repo: 'https://github.com/jeandv/react-query/tree/main/02-react-query-issues-main',
  //   link: 'https://github.com/jeandv/react-query/tree/main/02-react-query-issues-main'
  // },
  // {
  //   id: '9',
  //   title: 'MERN Events Ecommerce',
  //   des: 'Event registration app is a project test to evaluate my skills of the MERN stack using Redux and Stripe.',
  //   category: 'react - node - express - mongodb',
  //   repo: 'https://github.com/jeandv/events-test-mern',
  //   link: 'https://github.com/jeandv/events-test-mern'
  // },
  // {
  //   id: '10',
  //   title: 'Ecommerce Challenge',
  //   des: 'I did this challenge with the purpose of learning how to manage a shopping cart and to get to know ChakraUI.',
  //   category: 'typescript - next.js - chakraui',
  //   repo: 'https://github.com/jeandv/basement-challenge',
  //   link: 'https://basement-challenge-jeandv.vercel.app'
  // },
  // {
  //   id: '11',
  //   title: 'Pokédex Next.js (ISR)',
  //   des: 'Search and save your pokémons favs! I learned the use of GetStaticProps, Paths, the Incremental Static Generation and the Regeneration.',
  //   category: 'typescript - next.js - axios',
  //   repo: 'https://github.com/jeandv/pokedex-next',
  //   link: 'https://pokedex-jeandv.vercel.app'
  // },
  // {
  //   id: '12',
  //   title: 'Open Jira',
  //   des: 'MERN project using TypeScript to learn how to do the main functionality of Jira.',
  //   category: 'next.js - node - express - mongodb',
  //   repo: 'https://github.com/jeandv/open-jira',
  //   link: 'https://open-jira-jeandv.vercel.app'
  // },
  // {
  //   id: '13',
  //   title: 'Clon Mercado Libre',
  //   des: 'This is one of the Angular challenges done in CADIF1 Academy.',
  //   category: 'typescript - angular - bootstrap',
  //   repo: 'https://github.com/jeandv/mercadolibre-des4',
  //   link: 'https://mercadolibre-des4.vercel.app'
  // },
  // {
  //   id: '14',
  //   title: 'Cadif1 App',
  //   des: 'This is one of the Ionic challenges done in CADIF1 Academy.',
  //   category: 'typescript - ionic - angular - scss',
  //   repo: 'https://github.com/jeandv/pract-ionic',
  //   link: 'https://www.youtube.com/watch?v=ysIM5sAkdAY'
  // },
  // {
  //   id: '15',
  //   title: 'Electron.js Projects',
  //   des: 'All my projects using Electron.',
  //   category: 'electron.js',
  //   repo: 'https://github.com/jeandv/pract-electronjs',
  //   link: 'https://github.com/jeandv/pract-electronjs'
  // },
  // {
  //   id: '16',
  //   title: 'Node Backend Projects',
  //   des: 'Terminal projects (console), rest servers, api rests, etc.',
  //   category: 'node - express - mongodb',
  //   repo: 'https://github.com/jeandv/pract-nodejs',
  //   link: 'https://github.com/jeandv/pract-nodejs'
  // },
  // {
  //   id: '17',
  //   title: 'JavaScript Algorithms',
  //   des: 'Practice, exercises and algorithmic challenges using JavaScript and TypeScript.',
  //   category: 'javascript - typescript',
  //   repo: 'https://github.com/jeandv/algorithms-js',
  //   link: 'https://github.com/jeandv/algorithms-js'
  // },
  // {
  //   id: '18',
  //   title: 'PHP Ecommerce',
  //   des: 'Freelancer Ecommerce Project using PHP and MySQL database.',
  //   category: 'php - mysql - bootstrap',
  //   repo: 'https://github.com/jeandv/shopphp-paypal',
  //   link: 'https://github.com/jeandv/shopphp-paypal'
  // },
];

const SearchAllProjects = () => {

  const [projectSearch, setProjectSearch] = useState<string>('');

  const resultSearch: CardProjectProps[] = allProjectsInfo.filter(project => project.category.includes(projectSearch.toLowerCase()))

  return (
    <>
      <AnimationContainer customClassName='w-full group flex flex-col justify-center items-center mb-8'>

        <div className='w-full flex items-center lg:w-3/6 h-12 rounded shadow-lg bg-black border border-gray-800 group-hover:border-gray-500 transition-all ease'>

          <div className='grid place-items-center h-full w-12 text-gray-500'>
            <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='1' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
            </svg>
          </div>

          <input
            className='peer h-full w-full outline-none rounded text-sm text-white bg-black px-2 group-hover:border-gray-500 transition-all ease'
            type='text'
            id='search'
            placeholder='Languages, frameworks, libraries, etc...'
            onChange={e => setProjectSearch(e.target.value)} />
        </div>

      </AnimationContainer>

      <article className='w-full flex justify-center items-center content-center flex-wrap gap-6 mx-auto'>
        {
          resultSearch.map(({ id, title, des, category, repo, link }) => <CardProject key={id} title={title} des={des} category={category} repo={repo} link={link} />)
        }
      </article>
    </>
  )

}

export default SearchAllProjects;