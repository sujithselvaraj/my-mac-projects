import React from 'react'
import {useState}from 'react'
import '/Users/sujiths/vscodeprojects/Stack Overflow/client/src/AllRoutes.jsx'
import icon from '/Users/sujiths/vscodeprojects/Stack Overflow/client/src/Assests/icon.png'
import AboutAuth from '/Users/sujiths/vscodeprojects/Stack Overflow/client/src/components/Pages/Auth/AboutAuth.jsx'
import '/Users/sujiths/vscodeprojects/Stack Overflow/client/src/components/Pages/Auth/Auth.css'
import {signup,login} from '/Users/sujiths/vscodeprojects/Stack Overflow/client/src/actions/auth.js'
import { useDispatch } from 'react-redux'
import {useNavigate} from 'react-router-dom'


const Auth = () => {
   const[isSignup ,setIsSignup ]=useState(false)
   const[name,setName]=useState('')
   const[email,setEmail]=useState('')
   const[password,setPassword]=useState('')

   const dispatch= useDispatch()
   const navigate = useNavigate()


  const handleSwitch=() =>{
       setIsSignup(!isSignup)
   }  

   const handleSubmit =(e) =>{
        e.preventDefault()
        
        if(!email && !password){
            alert('Enter email and password')
        }
        if(isSignup){
            if(!name){
                alert("Enter a name to continue")
            }
                dispatch(signup({name,email,password},navigate))
        }
        else{
            dispatch(login({email,password},navigate))
        }

   }



 return (
  <section className='auth-section'>
   {
       isSignup && <AboutAuth/>
   }
       <div className='auth-container-2'>
           {!isSignup && <img src={icon} alt='stack overflow' className='login-logo'/>}
           <form onSubmit={handleSubmit}>
               {
                   isSignup && (
                       
                       <label htmlFor='name'>
                       <h4>Display Name</h4>
                       <input type="text" id='name' name='name' onChange={(e) => {setName(e.target.value)}}/>
                       </label>
                   )
               }
               <label htmlFor="email">
                   <h4>Email</h4>
                   <input type="email" name='email' id='email' onChange={(e) => {setEmail(e.target.value)}}/>
               </label>
               <label htmlFor="password">
                   <div style={{display:"flex",justifyContent:"space-between"}}>
                    <h4 >Password</h4>
                   {!isSignup && <p style={{color:"#007ac6",fontSize:'13px'}} >forgot password</p>   }
                   </div>
                   
                   <input type="password" name='password' id='password' onChange={(e) => {setPassword(e.target.value)}} />
                   {isSignup && <p style={{color:"#666767",fontSize:'13px'}}>Passwords must contain at least eight<br/> characters, including atleast 1 number<br/> and atleast 1 letter</p>}
               </label>
               {
                   isSignup && (
                       <label htmlFor='check'>
                           <input type="checkbox" id='check'/>
                           <p style={{ fontSize:'13px'}}>Opt-in to receive occasional product<br/> updates, user research invitations,<br/> company announcements, and digests.</p>
                       </label>
                   )
               }
                <button type='submit' className='auth-btn'>{ isSignup ? 'Sign up' : 'Log in'}</button>
                {
                   isSignup && (
                       <p style={{color:"#666767",fontSize:'13px'}}>
                           By clicking “Sign up”, you agree to 
                           <span style={{color:"#007ac6"}}> our terms of<br/>service</span>, 
                           <span style={{color:"#007ac6"}}> privacy policy</span> and 
                           <span style={{color:"#007ac6"}}> cookie policy</span>
                       </p>
                   )
                }
           </form>
           <p>
               {isSignup ?'Already have an account?' :"Don't have an account?"}
               <button type='button' className='handle-switch-btn' onClick={handleSwitch}>{isSignup ? "Log in" : 'sign up'}</button>
           </p>
       </div>
  </section>
 )
}

export default Auth