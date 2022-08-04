import React from "react";
import ReactDOM from "react-dom/client";
import Nav from "./Navbar";
import  "./CardStyle.css";
import Layout from "./Layout";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
  <Nav/>
  <Layout/>
  </>
);

//Class Components
// class Car extends React.Component {
//   constructor() {
//     super();
//     console.log("Hello, I,m constructor");
//   }
//   render() {
//     return (
//       <>
//         <div className="justify-content-md-center px-5 my-5">
//           <div className="card" style={{ width: "18rem" }}>
//             <img
//               src="https://w0.peakpx.com/wallpaper/542/411/HD-wallpaper-blue-rose.jpg"
//               className="card-img-top"
//               alt="..."
//             />
//             <div>
//               <h2 className="card-title">Title</h2>
//               <p className="card-text">Descriprion</p>
//               <a href="/" className="btn btn-sm">
//                 Read more
//               </a>
//             </div>
//           </div>
//         </div>
//       </>
//     );
//   }
// }


// ReactDOM.render(
//   <>
//   <Car />
//   {/* <Card/> */}
//   </>,document.getElementById('root'));
