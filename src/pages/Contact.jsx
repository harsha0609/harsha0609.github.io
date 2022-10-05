import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { ImLocation } from 'react-icons/im'
import Section from '../components/Section'

const Contact = () => {
  const [formData, setFormData] = useState(new FormData())

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!(formData.name && formData.email && formData.message)) {
      alert('Something went wrong!')
      return
    }

    alert(`Thanks ${formData.name}, I will shortly connect with you!`)
    axios.post('https://formspree.io/f/moqbwydk', formData, {
      Accept: 'application/json',
    })
    setFormData({})
  }

  return (
    <Section id='contact' title='Contact'>
      <div className='row justify-content-between'>
        <div className='col-md-5 order-last order-lg-first' data-aos='fade-up'>
          <div className='subheading mb-3'>I'd love to hear from you</div>
          <form>
            <div className='form-group pt-1 pb-2'>
              <label htmlFor='username'>Full Name</label>
              <input
                type='text'
                className='form-control'
                id='username'
                name='name'
                aria-describedby='emailHelp'
                placeholder='Enter your name'
                value={formData.name || ''}
                onChange={handleChange}
              />
            </div>
            <div className='form-group pt-2 pb-3'>
              <label htmlFor='email'>Email address</label>
              <input
                type='email'
                className='form-control'
                name='email'
                id='email'
                aria-describedby='emailHelp'
                placeholder='Enter email'
                value={formData.email || ''}
                onChange={handleChange}
              />
            </div>
            <div className='form-group pb-4'>
              <label htmlFor='userMessage'>Message</label>
              <textarea
                className='form-control'
                id='userMessage'
                name='message'
                rows='3'
                placeholder='Enter message'
                value={formData.message || ''}
                onChange={handleChange}
              />
            </div>

            <button
              type='submit'
              className='btn btn-primary'
              onClick={handleSubmit}
            >
              Submit
            </button>
          </form>
        </div>
        <div className='col-md-6 mb-5 mb-lg-0' data-aos='fade-up'>
          <div className='subheading mb-3'>Reach out to me directly</div>
          <div className='contact-direct'>
            <div className='row'>
              <div className='col-sm-6'>
                <div className='item'>
                  <span>
                    <ImLocation />
                  </span>
                  <p>Bangalore, Karnataka, India</p>
                </div>
              </div>

              <div className='col-sm-6'>
                <div className='item'>
                  <span>
                    <FaPhoneAlt />
                  </span>
                  <p>+91 9902488769</p>
                </div>
              </div>
            </div>
          </div>
          <div className='contact-map'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8264719635495!2d77.54903201521644!3d12.982948218141038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3df211c9f48d%3A0x891231bbcb507bb5!2s951%2C%2065th%20Cross%20Rd%2C%205th%20Block%2C%20Rajajinagar%2C%20Bengaluru%2C%20Karnataka%20560010!5e0!3m2!1sen!2sin!4v1664953087739!5m2!1sen!2sin" frameBorder='0'
              allowFullScreen=''
              aria-hidden='false'
              title='Contact Me'
              tabIndex='0'></iframe>
            {/* <iframe
              src='https://www.google.com/maps/embed/v1/place?q=place_id:ChIJlwFf1LJ5AjoRvDWWviQkk_U&key=AIzaSyAfIwaJqCMa9cw8u754GeIMuDwMqQYNSa8'
              frameBorder='0'
              allowFullScreen=''
              aria-hidden='false'
              title='Contact Me'
              tabIndex='0'
            ></iframe> */}
          </div>
        </div>
      </div>

      <p className='py-3 m-0 mt-5 text-center text-secondary'>
        Made with ❤ by Harsha
      </p>
    </Section>
  )
}

export default Contact
