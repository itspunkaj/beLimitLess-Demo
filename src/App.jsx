import { useRef, useState, lazy, Suspense } from 'react'
import './App.css'
import Stories from './Components/Stories'
import beLL from '/beLL.png'
import { Swiper } from 'swiper/react'

import 'swiper/css';
import 'swiper/css/pagination';
import { SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules';
import { MdCall } from 'react-icons/md'
import { FaNoteSticky, FaPlus } from 'react-icons/fa6'
import { FaSearch, FaShareSquare } from 'react-icons/fa'
const Stories2 = lazy(() => import('./Components/Stories2'));




function App() {
  const storiesRef1 = useRef(null);
  const storiesRef2 = useRef(null);

  const handleSlideChange = (swiper) => {
    const activeIndex = swiper.activeIndex;
    if (activeIndex !== 0 && storiesRef1.current) {
      storiesRef1.current.pauseVideos();
    }

    // Play videos in the first slide if active
    if (activeIndex === 0 && storiesRef1.current) {
      storiesRef1.current.playVideos();
    }

    // Pause videos in the second slide if not active
    if (activeIndex !== 1 && storiesRef2.current) {
      storiesRef2.current.pauseVideos();
    }

    // Play videos in the second slide if active
    if (activeIndex === 1 && storiesRef2.current) {
      storiesRef2.current.playVideos();
    }
  };

  return (
    <main className='h-[100dvh] w-screen bg-gray-700'>
      <header className='h-[7%] bg-slate-100 flex items-center'>
        <div className='  flex justify-between  py-1 px-5 w-full h-fit'>
          <div className='h-fit w-fit'>
            <img src={beLL} className='h-8' />
          </div>
          <div className='rounded-full overflow-hidden border-2 border-primaryPink h-fit w-fit'>
            <img className='h-8 ' src="https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp" />
          </div>
        </div>
      </header>
      <Swiper
        direction={'vertical'}
        modules={[Pagination]}
        style={{ height: '86%' }}
        onSlideChange={handleSlideChange}
      >
        <SwiperSlide className='h-full'>
          <Stories ref={storiesRef1} className='h-full' />
        </SwiperSlide>
        <SwiperSlide className='h-full'>
          <Suspense>

            <Stories2 ref={storiesRef2} className='h-full ' />
          </Suspense>
        </SwiperSlide>
      </Swiper>
      <div className='bg-slate-100 h-[7%] flex items-center'>
        <div className='  flex justify-between  py-1 px-5 w-full text-gray-700'>
          <MdCall className='h-6 w-6' />
          <FaNoteSticky className='h-6 w-6 ' />
          <FaSearch className='h-6 w-6' />
          <FaPlus className='h-6 w-6' />
          <FaShareSquare className='h-6 w-6' />
        </div>
      </div>
    </main>
  )
}

export default App
