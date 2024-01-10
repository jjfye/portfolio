import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="w-[60%]">
      <div className='text-center'>
        Hi I'm Jason.
        <div className="py-4 text-xl">
          <Link href="/about">
            <div className='group hover:text-green-300 transition'>
              Learn more
              <span className="arrow rotate-[135deg] absolute top-[50%]transform translate-y-[8px] translate-x-[14px] group-hover">
                <span className="block w-3 h-3 border-r-2 border-b-2 border-green-300 animate-moving-arrow"></span>
              </span>
            </div>
          </Link>
        </div>
      </div>
      <div className="relative flex justify-center animate-moving-dog">
        <img src="/images/Annoying_Dog_sprite.webp" alt="Undertale Annoying Dog Sprite" className="w-[20%] sm:w-[8%] h-auto translate-y-10 " />
      </div>
    </div>
  )
}
