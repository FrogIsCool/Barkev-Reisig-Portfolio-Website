
/**
 * A component contain contact info and links to
 * relevant sites.
 */
function Contact() {
  const imagePath = './images/icons/';

  const handleClick = (e) => { /* Event handler 1/5 */
    window.location = e;
  };

  return(
    <section className='Contact' id='contact'>
      <h1>Contact and Links</h1>
      <img 
        src={require('' + imagePath + 'LinkedIn_icon.png')}
        heigh={50}
        width={50}
        onClick={() => handleClick('https://www.linkedin.com/in/barkev-reisig/')}
      />
      <img 
        src={require('' + imagePath + 'GitHub_icon.png')}
        heigh={50}
        width={50}
        onClick={() => handleClick('https://github.com/FrogIsCool')}
      />
    </section>
  );
}

export default Contact;