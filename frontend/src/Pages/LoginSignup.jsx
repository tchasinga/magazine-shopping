
export default function LoginSignup() {
  return (
    <div className="loginSingup">
      <div className="loginsignup-container">
         <h1>Sign Up</h1>
         <div className="loginSignup-fields">
            <input type="text" placeholder="First Name" />
            <input type="email" placeholder="Email adress" />
            <input type="password" placeholder="Password" />
         </div>
          <button>Sign Up</button>
          <p className="loginSignup-login">Already have an account</p>
      </div>
    </div>
  )
}
