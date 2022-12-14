import img1 from '../../Images/img1.png'
import img3 from '../../Images/img3.png'
import img4 from '../../Images/img4.png'

//uses bootstrap and not working

function Homepage() {
  return (
      <>
          <div>
              <div className='p-5 container d-flex flex-wrap 'style={{ backgroundColor: "#29283e" }}>
                  <div className=' col-lg-6 col-sm-12' style={{ position: "relative" }}>
                      <img className='homeimg3' src={img3} alt='home-img-3' />
                      <h5 className='text-primary fs-6 py-3  fw-light'>IEEE NSUT</h5>
                      <h1 className='text-light fs-1 font fw-bold title'>
                          We're here <br />
                          to build <br />
                          your career
                      </h1>
                      <h5 className='text-light fs-6 font fw-light lh-lg pt-2'>
                          Agency provides a full service range including technical skills,{" "}
                          <br />
                          design, business understanding.
                      </h5>
                      <div>
                          <button type='button' className=' btn my-3 fs-6'>
                              READ MORE
                          </button>
                          <button type='button' className='btn my-3 mx-3 fs-6'>
                              Contact Us
                          </button>
                      </div>
                      <div className='text-start py-4'>
                          <img src={img4} alt='' className='img-fluid' />
                          <h5 className='text-light fs-6 font fw-light lh-lg pt-2'>
                              "Put themselves in the merchant's shoes" <br />
                              Meta Inc.
                          </h5>
                      </div>
                  </div>
                  <div className='col-lg-6 col-sm-12'>
                      <img src={img1} alt='' className='img-fluid  right-img' />
                  </div>
              </div>
          </div>
      </>
  )
}

export default Homepage