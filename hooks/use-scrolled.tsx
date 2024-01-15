import { useEffect, useState } from "react"
export const useScrolled = () => {
 const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
      const hendleScroll = () => {
        if(window.scrollY > 10){
            setScrolled(true)
        } else {
            setScrolled(false)
        }

      }
    
    window.addEventListener("scroll", hendleScroll);
    return () => window.removeEventListener("scroll", hendleScroll) 
    }, [])
    

 return scrolled
}