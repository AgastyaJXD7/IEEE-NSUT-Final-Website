import './AboutPage.css'
import vectorabout from '../../Images/vectorabout.svg'

function Body() {
  return (
    <section className="about">
      <div className="main">
        <img src={vectorabout} />
        <div className="about-text">
          <h4>ABOUT</h4>
          <h1 className="aboutText">An Experienced <br /> Student Branch</h1>
          <h3 className="aboutText2">Provides a full service range</h3>
          <p className="about-text-p">Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team.</p>
          <button className="about-us">ABOUT US</button>
        </div>
      </div>
    </section>
  )
}

export default Body
