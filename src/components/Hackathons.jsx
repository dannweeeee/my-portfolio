import { Tilt }from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { github, hyperlink, submission } from '../assets';
import { SectionWrapper } from '../hoc';    
import { hackathons } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const HackathonCard = ({index, name, description, tags, image, source_code_link, submission_link, website_link}) => {
  return (
    <motion.div variants={fadeIn("up", "sprint", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max:45,
          scale:1,
          speed:450
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img 
            src={image}
            alt={image}
            className='w-full h-full object-cover rounded-2xl'
          />
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div onClick={() => window.open (submission_link, "_blank")} className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
              <img 
                src={submission}
                alt="submission"
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
            <div onClick={() => window.open (website_link, "_blank")} className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
              <img 
                src={hyperlink}
                alt="hyperlink"
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
            <div onClick={() => window.open (source_code_link, "_blank")} className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
              <img 
                src={github}
                alt="github"
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div> 
        </div>
        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>
            {name}
          </h3>
          <p className='mt-2 text-secondary text-[14px]'>
            {description}
          </p>
        </div>
        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}


const Hackathons = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>
          Hackathons.
        </h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        Passionate about hackathons, I thrive as a builder in these dynamic events where I immerse myself in the latest tools & frameworks, 
        while connecting with talented individuals worldwide who share a fervor for hacking and building. 🛠️ <br />
        <br />
        Each project is a unique adventure 🗺️ racing against time to master the art of delivering Minimum Viable Products (MVPs) 
        so as to captivate hackathon judges 🤩 <br />
        <br />
        Check out the hackathons I&apos;ve been a part of – each project really tells a story of the blood, sweat, and tears that have been put in. 🔥
        This is a journey that&apos;s always growing! 🚀
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {hackathons.map((project, index) => (
            <HackathonCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Hackathons, "hackathons");