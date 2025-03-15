import { useState } from 'react'
import './App.css'
import './index.css'
import './assets/css/dcdragons.css'

import TopNavBar from './components/TopThing'
import PageHeader from './components/HeroHeader'
import WelcomeInfoPanel from './components/WelcomeInfoPanel'
import Classes from './components/Classes'
import ClassSchedule from './components/ClassSchedule'
import RecentEvents from './components/RecentEvents'
import ContactFooter from './components/ContactFooter'

function App(props) {

  return (
    <>

    <TopNavBar />

      <div class="grid grid-cols-1">
    
      <PageHeader />
      <WelcomeInfoPanel />
      <Classes />
      <ClassSchedule />
      <RecentEvents />
      <ContactFooter />

      
      </div>


    </>
  )
}

export default App
