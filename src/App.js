import './App.css';
import First from './First';
import logo from './assets/logo.svg'
import skull from './assets/skull.svg'
import cbutton from './assets/cbutton.svg'
import arrow from './assets/arrow.svg'
import seeall from './assets/seeall.svg'
import support from './assets/support.svg'

function App() {
  return ( <>
   
    <header>
      <div className='headerlogo'>
        <img src={logo}/>
      </div>
            <div className='menucontainer'>
              <div className="menu" >Graveyard</div>
              <div className="menu" >Track Record</div>
              <div className="menu" >Services</div>
              <div className="menu" >Know More</div>
              <img className='support' src={support} />
            </div>
    </header>
    <div className="maincontainer">
         <div className="rightcontainer">
           <img src={skull} />
           <First/>
         </div>
         <div className='leftmain'>
                <div className="leftcontainer">
              <   div className='title2'>#3 Top Scariest Ghost 2020</div>
                    <div className='title'>UOOOO TRICK OR TREAT!! </div>
                      <p>Hi I’m Reiza, people call me “The Labu” currently I’m trying to learn something new, building my own bike with parts only made from Malaysia.</p>
                  </div>
                      <div className="buttoncontainer">
                        <img src={cbutton} />
                          <div className="arroecontainer">
                            <div className='title2'>Track Record</div>
                               <img src={arrow}/>
                           </div>
                       </div>
             </div>
                  

    </div>
         <div className='see'>
              <img src={seeall} />
           </div>
    </>

  )
}

export default App;
