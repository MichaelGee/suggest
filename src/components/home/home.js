import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import preview from "../../images/preview.png";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      {/* Section 1 */}
      <section className='section1'>
        <div className='contain'>
          <div className='text'>
            <h1>Make a bold suggestion</h1>
            <p className='section1-para'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae,
              excepturi veniam? Iure praesentium necessitatibus eligendi facilis
              amet velit sunt sint! Blanditiis quam harum molestias perspiciatis
              quod velit sapiente voluptatibus et.
            </p>
            <div class='container-login100-form-btn'>
              <button class='login100-form-btn'>Get Started</button>
            </div>
          </div>
          <img src={preview} alt='img' loading='lazy' />
        </div>
      </section>

      {/* Section 2 */}
      <section className='section2'>
        <div className='overlay'>
          <div className='section2-inner'>
            <h1>Make a change</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae,
              excepturi veniam? Iure praesentium necessitatibus eligendi facilis
              amet velit sunt sint! Blanditiis quam harum molestias perspiciatis
              quod velit sapiente voluptatibus et.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default Home;

{
  /* <div class='container-login100'>
  <div class='wrap-login100 p-l-55 p-r-55 p-t-80 p-b-30'>
    <form class='login100-form validate-form'>
      <span class='login100-form-title p-b-37'>Sign In</span>

      <div
        class='wrap-input100 validate-input m-b-20'
        data-validate='Enter username or email'
      >
        <input
          class='input100'
          type='text'
          name='username'
          placeholder='Username or email'
        />
        <span class='focus-input100'></span>
      </div>

      <div
        class='wrap-input100 validate-input m-b-25'
        data-validate='Enter password'
      >
        <input
          class='input100'
          type='password'
          name='pass'
          placeholder='Password'
        />
        <span class='focus-input100'></span>
      </div>

      <div class='container-login100-form-btn'>
        <button class='login100-form-btn'>Sign In</button>
      </div>

      <div class='text-center p-t-57 p-b-20'>
        <span class='txt1'>Or Login with</span>
      </div>

      <div class='flex-c p-b-112'>
        <a href='#' class='login100-social-item'>
          <i class='fa fa-facebook-f'></i>
        </a>

        <a href='#' class='login100-social-item'>
          <img src={google} alt='GOOGLE' />
        </a>
      </div>

      <div class='text-center'>
        <a href='#' class='txt2 hov1'>
          Sign Up
        </a>
      </div>
    </form>
  </div>
</div> */
}

// <div id='dropDownSelect1'></div>
