import Image from 'next/image'
import about from '../assets/about-us.jpg'

const AboutUs = () => {
  return (
    <div>
      <div className='pt-5 padding-X'>
        <h1 className='absolute max-w-[500] text-white text-5xl borderRadius bg-lime-600'>
          About Us
        </h1>
        <Image
          src={about}
          alt='aboutus image'
          width={500}
          className='borderRadius'
        />
      </div>

    </div>
  )
}

export default AboutUs