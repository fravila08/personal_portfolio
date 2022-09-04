import axios from 'axios'

function SignIn() {
  function signIn(event) {
    event.preventDefault()
    let email = document.getElementById('emailSignIn').value
    let password = document.getElementById('passwordSignIn').value
    axios.post('/sign_in', {
      email: email,
      password: password
    }).then((response) => {
      console.log('response from server: ', response)
      window.location.href = '/'
    })
    
  }
  return (
      <div style={{display:"flex", justifyContent:"center", marginTop:"20vh", paddingBottom:"10vh"}}>
        <div className="signup">
          <form onSubmit={signIn}>
            <label htmlFor="email">Email</label>
            <input id='emailSignIn'
              placeholder='Email'
              className="form-control"
              required />
            <br />
            <label htmlFor="password">Password</label>
            <input id='passwordSignIn'
              type='password'
              placeholder='Password'
              className="form-control" required />
            <br />
            <button type="submit">Sign In</button>
            <h6>Already have an account?</h6>
            <a href="#/SignUp">Create New Account</a>
          </form>
        </div>
      </div>
  )
}

export default SignIn;
