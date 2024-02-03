import './homepage.css'
import img from "./editLogo.jpg"
const Homepage = () => {

  return (
    <div className=' homepage-container p-3 '>
      {/* <h1 className='display-1'>हरितदीपः</h1> */}
      <p className='lead p-1'>
      <img src={img} alt='logo' className='images'></img>
      </p>
    </div>
  )
}

export default Homepage