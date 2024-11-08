import { useState } from 'react'
import './App.css'
import Stories from './Components/Stories'
import beLL from '/beLL.png'
import { Swiper } from 'swiper/react'

import 'swiper/css';
import 'swiper/css/pagination';
import { SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules';

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='h-[100dvh] w-screen bg-green-400'>
      <header className='h-[7%] bg-slate-100 flex items-center'>
        <div className='  flex justify-between  py-1 px-5 w-full'>
          <div>
            <img src={beLL} className='h-8' />
          </div>
          <div className='rounded-full overflow-hidden border-2 border-primaryPink'>
            <img className='h-8' src="https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp" />
          </div>
        </div>
      </header>
      <Swiper
        direction={'vertical'}
        modules={[Pagination]}
        style={{height : '86%'}}
      >
        <SwiperSlide className='h-full'>
          <div className='w-fit mx-auto'>
            <Stories />
          </div>
        </SwiperSlide>
        <SwiperSlide className='h-full'>
          <div className='w-fit mx-auto'>
            <Stories />
          </div>
        </SwiperSlide>
      </Swiper>
      <div className='bg-slate-100 h-[7%] flex items-center'>
        <div className='  flex justify-between  py-1 px-5 w-full'>
          <div>
            <img src={beLL} className='h-8' />
          </div>
          <div className='rounded-full overflow-hidden border-2 border-primaryPink'>
            <img className='h-8' src="https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp" />
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
