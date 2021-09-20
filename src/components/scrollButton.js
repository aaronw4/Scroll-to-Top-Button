import React, {useState} from 'react';
  
const ScrollButton = () =>{ 
  const [visible, setVisible] = useState(false)

  window.addEventListener("scroll", onScroll)

  function onScroll() {
      if (window.scrollY > 300) {
          setVisible(true)
      } else if (window.scrollY < 300) {
          setVisible(false)
      }
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    })
  }
    
  return (
    visible === true ? 
    <button class='topButton' onClick={scrollToTop}>
      &#10142;
    </button>
    :
    null       
  )
}
  
export default ScrollButton;