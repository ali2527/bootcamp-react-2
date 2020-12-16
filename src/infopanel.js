import React from 'react'
import GlobalData from './globaldata'
import CountryData from './countrydata'
import Graphs from './graphs'

function infopanel({currentScreen}) {
    
    
    if(currentScreen === 0)
        return(<GlobalData />);
    else if(currentScreen === 1)
        return <CountryData />
    else return <Graphs />
  
}

export default infopanel
