import React from 'react'
import "./MobileNav.css"

export default function MobileNav() {
  return (
   <>
   <div className={'mobile-menu${isopen?"active":""}'} onClick={toggleMenu}>

   </div>
   </>
  )
}
