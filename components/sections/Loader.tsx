import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Loader({ setLoading }) {
  return (
    <motion.div
      className='fixed bottom-0 left-0 right-0 top-0 z-50 flex h-screen w-full items-center justify-center overflow-hidden bg-stone-100'
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        ease: 'easeInOut',
        delay: 1.5,
        duration: 0.3,
      }}
      onAnimationComplete={() => setLoading(false)}
    >
      <motion.div
        className='z-10'
        initial={{ opacity: 0, x: 0 }}
        animate={{ opacity: [0, 1, 1], scale: [0, 1.2, 1.2], x: [0, 0, -20] }}
        transition={{
          ease: 'backInOut',
          times: [0, 0.5, 1],
          duration: 3,
        }}
      >
        <Image src='logomark.svg' width={60} height={30} alt='logo mark' />
      </motion.div>
      <motion.div
        className='z-0'
        initial={{ opacity: 0, scale: 0.5, x: -50 }}
        animate={{ opacity: 1, scale: 1, x: 5 }}
        transition={{
          ease: 'backInOut',
          delay: 2,
          duration: 0.75,
        }}
      >
        <Image
          src='/fulhaus_logo.svg'
          width={500}
          height={500}
          className='inline-block h-8 w-auto'
          alt='Fulhaus Logo'
        />
      </motion.div>
    </motion.div>
  )
}
