import { Hero, ProductHome, SpecialOffer, AboutUs } from '@/constants';

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
        <div>
          <AboutUs/>
        </div>
        
      </div> 
    </div>

  )

}
