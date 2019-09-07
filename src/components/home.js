import React from "react";
import google from "../images/icons/icon-google.png";

const Home = () => {
  return (
    <div>
      <div class='container-login100'>
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
      </div>

      <div id='dropDownSelect1'></div>
    </div>
  );
};
export default Home;
