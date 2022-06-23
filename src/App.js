import './App.css';
import First from './First';
import logo from './assets/logo.svg'
import skull from './assets/skull.svg'
import cbutton from './assets/cbutton.svg'
import arrow from './assets/arrow.svg'
import seeall from './assets/seeall.svg'

function App() {
  return ( <>
   
    <header>
      <div>
        <img src={logo}/>
        <div className="menu" >Graveyard</div>
        <div className="menu" >Track Record</div>
        <div className="menu" >Services</div>
        <div className="menu" >Know More</div>
        <button>Support</button>
      </div>
    </header>
    <div className="maincontainer">
         <div className="rightcontainer">
           <img src={skull} />
           <First/>
         </div>
          <div className="leftcontainer">
              <div>#3 Top Scariest Ghost 2020</div>
              <div>UOOOO TRICK OR TREAT!! </div>
              <p>Hi I’m Reiza, people call me “The Labu” currently I’m trying to learn something new, building my own bike with parts only made from Malaysia.</p>
         </div>
            <div className="buttoncontainer">
                <img src={cbutton} />
                  <div className="arroecontainer">
                    <div className='title2'>Track Record</div>
                     <img src={arrow}/>
                  </div>
              </div>
              <div>
                 <img src={seeall} />
              </div>

    </div>
    </>

  )
}

export default App;
