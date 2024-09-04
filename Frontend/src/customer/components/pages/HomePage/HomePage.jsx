import React from 'react'
import MainCarosel from '../../HomeCarosel/MainCarosel'
import HomeSectionCarosel from '../../HomeSectionCarosel/HomeSectionCarosel'
import { mens_kurta } from '../../../../Data/Men/men_kurta'
import { men_shirt } from '../../../../Data/Men/men_shirt'
import { men_jeans } from '../../../../Data/Men/men_jeans'
import { men_shoes } from '../../../../Data/Shoes/shoes'
import { Women_Dress } from '../../../../Data/dress/page1'
import { women_saree } from '../../../../Data/Saree/women_saree'

function HomePage() {
  return (
    <div>
        <MainCarosel/>

        <div className='space-y-10 py-8 flex flex-col justify-center px-5 lg:px-10' >
            <HomeSectionCarosel data={mens_kurta} sectionName={"Men's Kurta"}/>
            <HomeSectionCarosel data={Women_Dress} sectionName={"Women's Dress"}/>
            <HomeSectionCarosel data={men_jeans} sectionName={"Men's Jeans"}/>
            <HomeSectionCarosel data={women_saree} sectionName={"Women's Saree"}/>
            <HomeSectionCarosel data={men_shirt} sectionName={"Men's Shirt"}/>
            <HomeSectionCarosel data={men_shoes} sectionName={"Men's Shoes"}/>

        </div>
    </div>
  )
}

export default HomePage