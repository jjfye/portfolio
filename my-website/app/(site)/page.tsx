import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='text-center'>
      Hi I'm Jason.
      <div className="py-4 text-xl">
        <Link href="/about">
          <div className='group relative hover:text-green-300 transition'>
            Learn more
            <span className="arrow rotate-[135deg] absolute top-[50%] left-full transform -translate-y-1/2 translate-x-[-70px] group-hover">
              <span className="block w-3 h-3 border-r-2 border-b-2 border-green-300 animate-moving-arrow"></span>
            </span>
          </div>
        </Link>
      </div>
    </div>
  )
}
