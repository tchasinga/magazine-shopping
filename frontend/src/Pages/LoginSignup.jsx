
export default function LoginSignup() {
  return (
     <div className="mt-5">
    <div className="loginSingup">
      <div className="loginsignup-container">
         <h1>Sign Up</h1>
         <div className="loginSignup-fields">
            <input type="text" placeholder="First Name" />
            <input type="email" placeholder="Email adress" />
            <input type="password" placeholder="Password" />
         </div>
          <button className="mybtn">Sign Up</button>
          <p className="loginSignup-login">Already have an account <span>login here</span></p>
          <div className="loginsingup-agree">
            <input type="checkbox"  name="" id=""/>
            <p>I agree to the Terms of Service and Privacy Policy</p>
          </div>
      </div>
    </div>
    </div>
  )
}
