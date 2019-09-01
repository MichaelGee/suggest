import React from "react";
import google from "../images/icons/google.png";

const Home = () => {
  return (
    <div>
      <div className='limiter'>
        <div className='container-login100'>
          <div className='wrap-login100'>
            <form className='login100-form validate-form'>
              <span className='login100-form-title p-b-43'>
                Login to continue
              </span>
              <h3 className='email-title'>Email</h3>
              <div
                className='wrap-input100 validate-input'
                data-validate='Valid email is required: ex@abc.xyz'
              >
                <input
                  className='input100'
                  type='text'
                  name='email'
                  validate='required'
                />
                <span className='focus-input100' />
              </div>
              <h3 className='password-title'>Password</h3>
              <div
                className='wrap-input100 validate-input'
                data-validate='Password is required'
              >
                <input
                  className='input100'
                  type='password'
                  name='pass'
                  validate='required'
                />
                <span className='focus-input100' />
              </div>

              <div className='flex-sb-m w-full p-t-3 p-b-32'>
                <div>
                  <a href='#' className='txt1'>
                    Forgot Password?
                  </a>
                </div>
              </div>

              <div className='container-login100-form-btn'>
                <button className='login100-form-btn'>Login</button>
              </div>

              <div className='text-center p-t-46 p-b-20'>
                <span className='txt2'>or sign up using</span>
              </div>
              <div className='oauth'>
                <a href='#' class='btn-face m-b-20'>
                  <i className='fa fa-facebook-official'></i>
                  Facebook
                </a>
                <a href='#' className='btn-google m-b-20'>
                  <img src={google} />
                  Google
                </a>
              </div>
            </form>

            <div className='login100-more' />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
