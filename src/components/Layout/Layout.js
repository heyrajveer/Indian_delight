import React from 'react'
import Header from './Header'
import Footer from '../../pages/Footer'

const Layout = ({children}) => {
  return (
 
   <div >
     <Header/>
   {children}
   <Footer/>
   </div>
  )
}

export default Layout
