import React from 'react';

/**
 * NavMenu is a drop down menu to replace the Header NavBar on
 * smaller width screens.
 */
function NavMenu() { /* Controlled component 1/2 */
  const [page, setPage] = React.useState('#about');

  const handleSelection = (e) => { /* Event handler 1/5 */
    setPage(e.target.value);
    window.location.href = e.target.value;
  }

  return (
    <select value={page} onChange={handleSelection}>
      <option value='#about'>About</option>
      <option value='#skills'>Skills</option>
      <option value='#projects'>Projects</option>
      <option value='#contact'>Contact</option>
    </select>
  );
}

export default NavMenu;