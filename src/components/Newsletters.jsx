import { Tilt }from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { github, hyperlink } from '../assets';
import { SectionWrapper } from '../hoc';
import { newsletters, projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const NewsletterCard = ({index, name, description, tags, image, source_code_link, website_link}) => {
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
            <div onClick={() => window.open (website_link, "_blank")} className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
              <img 
                src={hyperlink}
                alt="hyperlink"
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

const Newsletters = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <div className='h-10'></div>
        <h2 className={styles.sectionHeadText}>
          Newsletter.
        </h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        During my leisure hours, I passionately curate compelling articles, contributing to both my Personal Newsletter and my university&apos;s Blockchain at NTU Club Newsletter. ✍🏼 <br />
        <br />
        This dual commitment reflects my dedication to fostering knowledge and engagement within the blockchain community. 😆
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {newsletters.map((newsletters, index) => (
            <NewsletterCard key={`newsletters-${index}`} index={index} {...newsletters} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Newsletters, "newsletters");