import { Hero, ProductHome, SpecialOffer } from '@/constants';

export default function Home() {

  return (
    <div >
      <Hero />
      <div className='max-w-[1440px] mx-auto justify-center'>
        <div>
          <ProductHome/>
        </div>
        <div>
          <SpecialOffer/> 
        </div>
      </div> 
    </div>

  )

}
