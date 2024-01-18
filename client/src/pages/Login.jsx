// import React, { useEffect } from 'react';
// import '../assets/css/Login.scss';

// function Login() {

// let prism
//   useEffect(()=>{
//      prism = document.querySelector(".rec-prism"); 
//   },[])
 
//   function showSignup() {
//     prism.style.transform = "translateZ(-100px) rotateY( -90deg)";
//   }

//   function showLogin() {
//     prism.style.transform = "translateZ(-100px)";
//   }

//   function showForgotPassword() {
//     prism.style.transform = "translateZ(-100px) rotateY( -180deg)";
//   }

//   function showSubscribe() {
//     prism.style.transform = "translateZ(-100px) rotateX( -90deg)";
//   }

//   function showContactUs() {
//     prism.style.transform = "translateZ(-100px) rotateY( 90deg)";
//   }

//   function showThankYou() {
//     prism.style.transform = "translateZ(-100px) rotateX( 90deg)";
//   }
//   return (
//     <div className='container'>
//       <ul className="nav">
//         <li onClick={showLogin}>Login</li>
//         <li onClick={showSignup}>Sign up</li>
//         <li onClick={showForgotPassword}>Forgot password</li>
//         <li onClick={showSubscribe}>Subscribe</li>
//         <li onClick={showContactUs}>Contact us</li>
//       </ul>
//       <div className="wrapper">
//         <div className="rec-prism">
//           <div className="face face-top">
//             <div className="content">
//               <h2>Subscribe</h2>
//               <small>Enter your email so we can send you the latest updates!</small>
//               <form>
//                 <div className="field-wrapper">
//                   <input type="text" name="email" placeholder="email" />
//                   <label>e-mail</label>
//                 </div>
//                 <div className="field-wrapper">
//                   <input type="submit" onClick={showThankYou} />
//                 </div>
//               </form>
//             </div>
//           </div>
//           <div className="face face-front">
//             <div className="content">
//               <h2>Sign in</h2>
//               <form>
//                 <div className="field-wrapper">
//                   <input type="text" name="username" placeholder="username" />
//                   <label>username</label>
//                 </div>
//                 <div className="field-wrapper">
//                   <input type="password" name="password" placeholder="password" autoComplete="new-password" />
//                   <label>password</label>
//                 </div>
//                 <div className="field-wrapper">
//                   <input type="submit" onClick={showThankYou} />
//                 </div>
//                 <span className="psw" onClick={showForgotPassword}>Forgot Password? </span>
//                 <span className="signup" onClick={showSignup}>Not a user? Sign up</span>
//               </form>
//             </div>
//           </div>
//           <div className="face face-back">
//             <div className="content">
//               <h2>Forgot your password?</h2>
//               <small>Enter your email so we can send you a reset link for your password</small>
//               <form>
//                 <div className="field-wrapper">
//                   <input type="text" name="email" placeholder="email" />
//                   <label>e-mail</label>
//                 </div>
//                 <div className="field-wrapper">
//                   <input type="submit" onClick={showThankYou} />
//                 </div>
//               </form>
//             </div>
//           </div>
//           <div className="face face-right">
//             <div className="content">
//               <h2>Sign up</h2>
//               <form>
//                 <div className="field-wrapper">
//                   <input type="text" name="email" placeholder="email" />
//                   <label>e-mail</label>
//                 </div>
//                 <div className="field-wrapper">
//                   <input type="password" name="password" placeholder="password" autoComplete="new-password" />
//                   <label>password</label>
//                 </div>
//                 <div className="field-wrapper">
//                   <input type="password" name="password2" placeholder="password" autoComplete="new-password" />
//                   <label>re-enter password</label>
//                 </div>
//                 <div className="field-wrapper">
//                   <input type="submit" onClick={showThankYou} />
//                 </div>
//                 <span className="singin" onClick={showLogin}>Already a user? Sign in</span>
//               </form>
//             </div>
//           </div>
//           <div className="face face-left">
//             <div className="content">
//               <h2>Contact us</h2>
//               <form>
//                 <div className="field-wrapper">
//                   <input type="text" name="name" placeholder="name" />
//                   <label>Name</label>
//                 </div>
//                 <div className="field-wrapper">
//                   <input type="text" name="email" placeholder="email" />
//                   <label>e-mail</label>
//                 </div>
//                 <div className="field-wrapper">
//                   <textarea placeholder="your message"></textarea>
//                   <label>your message</label>
//                 </div>
//                 <div className="field-wrapper">
//                   <input type="submit" onClick={showThankYou} />
//                 </div>
//               </form>
//             </div>
//           </div>
//           <div className="face face-bottom">
//             <div className="content">
//               <div className="thank-you-msg">
//                 Thank you!
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Login
