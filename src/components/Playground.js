import './Playground.css'
import Header from './Header.js'

/**
 * This component is dedicated to testing and trying out cool things.
 * It does nothing right now as the code used was a cool feature I was
 * testing out but was not my own code. For assignment purposes the
 * features are commented out.
 */
function Playground() {
  return(
    <div>
      <Header />
      <section className='Playground'>
        <h1>This area is dedicated to testing web features</h1>
        {/* <section className='shooting-stars'>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </section> */}
      </section>
    </div>
  );
}

export default Playground;