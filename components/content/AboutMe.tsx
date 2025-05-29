import AnimationContainer from '../utils/AnimationContainer';
import { calculateDuration } from './CurrentTimeLineExp';

const AboutMe = () => {
  return (
    <AnimationContainer customClassName='w-full mb-16'>

      <h2 className='font-bold text-2xl tracking-tight mb-8 text-white text-center lg:text-start'>
        About me
      </h2>

      <p className='text-base text-gray-400'>
        I am a skilled MERN Stack Developer with 1.5+ years of experience in building scalable web apps and AI-powered SaaS
        solutions. By implementing lazy loading, caching, AI-driven automation, Socket.io, and webhooks for authentication, I
        improved platform speed by 20% and enhanced user engagement. I integrated AI chatbots and recommendation systems,
        streamlining workflows and boosting conversion . My problem-solving approach ensures secure, real-time experiences
        and delivers high-impact, scalable solutions tailored to business needs.

      </p>

    </AnimationContainer>
  )
}

export default AboutMe;