'use client'
import Loader from '@/components/sections/Loader'
import Cursor from '@/components/cursor/Cursor'
import Nav from '../components/Nav'
import Hero from '../components/sections/Hero'
import Footer from '@/components/Footer'

import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import ImageColumn from '@/components/sections/ImageColumn'
import Separator from '@/components/sections/Separator'

export default function Home() {
  const [loading, setLoading] = useState(true)
  return (
    <main>
      <AnimatePresence>
        {loading && <Loader setLoading={setLoading} />}
      </AnimatePresence>
      <Cursor />
      <Nav />
      <Hero />
      <Separator />
      <ImageColumn />
      <Footer />
    </main>
  )
}
