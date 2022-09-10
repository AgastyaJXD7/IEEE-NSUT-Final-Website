import ieeecs from '../../Images/ieeecs.svg'
import ieeecas from '../../Images/ieeecas.svg'
import ieeeras from '../../Images/ieeeras.svg'
import ieeewie from '../../Images/ieeewie.svg'

function Header() {
        return (
        <div className="logo_container" >        
              <img src={ieeecs} alt="IEEE COMPUTER SOCIETY" />
              <img src={ieeeras} alt="IEEE ROBOTICS AND AUTOMATION SOCIETY " />
              <img src={ieeecas} alt="IEEE CIRCUITS AND SYSTEMS SOCIETY " />
              <img src={ieeewie} alt="IEEE WOMEN IN ENGINEERING " />
        </div>
        )
}

export default Header