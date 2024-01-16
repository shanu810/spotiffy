
import React from 'react'
import './Login.css'
function Login() {
  return (
    <div><>

      
    {/* <link href="./spotsign.css" rel="stylesheet" /> */}
    <div>
      <div className="navbar">
        <div className="img1"><img className="img2" src="./image/spotify.png" alt="Spotify Logo" /></div>
        <div classNAme="mark">
        <h2 className="edit1">Spotify</h2>
        </div>
          
      
      </div>
      <div className="main">
        <div className="sec2">
          <div className="items">
            <h1 className="edit2">Log into Spotify</h1>
            <button className="but1"><img className="img3" src="./image/google3.png" alt="Google Logo" />Continue with Google</button>
            <br />
            <button className="but1"><img className="img4" src="./image/facebook.png" alt="Facebook Logo" />Continue with Facebook</button>
            <br />
            <button className="but1"><img className="img5" src="./image/apple.png" alt="Apple Logo" />Continue with Apple</button>
            <br />
            <button className="but1">Continue with phone number</button>
            <div className="line"></div>
            <label className="edit4">Email or username</label>
            <input className="edit3" type="text" placeholder="Email or username" />
            <br />
            <label className="edit5">Password</label>
            <input className="edit6" type="password" placeholder="********" />
            <div className="box">
              <input className="edit7" type="checkbox" value="Remember me" />Remember me
              <br />
              <button className="but2">Log In</button>
              <br />
              <a className="edit8" href="./list.html">Forgot Your Password</a>
              <div className="line1"></div>
              <p className="p">Don't have an account?
                <a href="login form.html" title="Sign up"> Sign up for Spotify</a>
              </p>
              <p className="edit9">This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  </div>
  )
}

export default Login