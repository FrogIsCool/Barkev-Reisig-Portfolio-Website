import React, { useEffect } from "react";

/**
 * A button that when clicked sends the user back to the top
 * of the page. Only is visible when the user has scrolled
 * down some.
 */
function ToTopButton() { /* Controlled Componenet 1/2 */
  const [offset, setOffset] = React.useState(0);

  // Returns to top of page
  const handleClick = (e) => { /* Event handler 1/5 */
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    setOffset(0);
  }

  // Sets offset on scroll
  const onScroll = (e) => { /* Event handler 1/5 */
    setOffset(window.pageYOffset);
  }

  // Runs when the user scrolls and sets offset to amount scrolled down
  useEffect(() => {
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Renders button if scrolled 200px down from top
  if(offset > 200) {
    return <button onClick={() => handleClick()} className='ToTopButton'>Top</button>;
  } else {
    return <button></button>
  }
}

export default ToTopButton;