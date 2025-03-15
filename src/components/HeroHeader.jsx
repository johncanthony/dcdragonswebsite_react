import logo from '../assets/images/dc_dragons_logo.png'
import kick from '../assets/images/kick.png'
import headshot from '../assets/images/headshot.png'
import overlay from '../assets/images/banner.jpg'

import { Hero } from 'react-daisyui'

function PageHeader(){
    return(
        <Hero style={{backgroundImage: `url(${overlay})` }} className="min-h-[15rem]">
          <Hero.Content className='columns-3'>
           <img src={kick} className="w-1/3 p-16 max-sm:hidden" />   
           <img src={logo} className="w-1/3" />
           <img src={headshot} className="w-1/3 p-16 max-sm:hidden"/>
          </Hero.Content>
        </Hero>
    )
}

export default PageHeader;