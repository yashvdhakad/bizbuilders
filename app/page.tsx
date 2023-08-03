import Image from 'next/image'
import logo from './assets/bb-logo-green.png'

export default function Home() {
  return (
    <div className='h-screen flex flex-col justify-center items-center space-y-8'>
    <Image
      className="drop-shadow-[0_0_0.2rem_#00ff00]"
      src={logo}
      alt="Next.js Logo"
      width={200}
    />
    <div className='text-[#00ff00] text-center text-sm'>
      Websites's under construction.
      <br />
      <span className='italic'>It'll be live within 10 days.</span>
      <br />
      <br />
      Thanks for the visit!
    </div>
    </div>
  )
}
