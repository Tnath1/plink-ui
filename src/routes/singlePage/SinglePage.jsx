// import React from "react";
// import "./singlePage.scss";
// import { CiLocationOn } from "react-icons/ci";
// import Slider from "../../components/slider/Slider";
// import Maps from "../../components/map/Maps";
// import { MdOutlineSaveAlt } from "react-icons/md";
// import { GiResize } from "react-icons/gi";
// import { FaBath } from "react-icons/fa";
// import { IoBedOutline } from "react-icons/io5";
//  import { TbSchool } from "react-icons/tb";
// import { MdOutlineMarkUnreadChatAlt } from "react-icons/md";
// import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";

// import { singlePostData, userData } from "../../lib/dummydata";
// const SinglePage = () => {
//   return (
//     <div className="singlePage">
//       <div className="details">
//         <div className="wrapper">
//           <Slider images={singlePostData.images} />
//           <div className="info">
//             <div className="top">
//               <div className="post">
//                 <h1>{singlePostData.title}</h1>
//                 <div className="address">
//                   <CiLocationOn className="image" />
//                   <span>{singlePostData.address}</span>
//                 </div>
//                 <div className="price">$ {singlePostData.price}</div>
//               </div>
//               <div className="user">
//                 <img src={userData.img} alt="" />
//                 <span>{userData.name}</span>
//               </div>
//             </div>
//             <div className="bottom">{singlePostData.description}</div>
//           </div>
//         </div>
//       </div>
//       <div className="features">
//         <div className="wrapper">
//           <p className="title">General</p>
//           <div className="listVertical">
//             <div className="feature">
//               <HiOutlineWrenchScrewdriver />
//               <div className="featureText">
//                 <span>Utilities</span>
//                 <p>Renter is Responsible</p>
//               </div>
//             </div>
//             <div className="feature">
//               <img src="/pet.png" alt="" />
//               <div className="featureText">
//                 <span>Pet Policy</span>
//                 <p>Pets Allowed</p>
//               </div>
//             </div>
//             <div className="feature">
//               <img src="/fee.png" alt="" />
//               <div className="featureText">
//                 <span>Property Fees</span>
//                 <p>Must have 3x the rent in total household income</p>
//               </div>
//             </div>
//           </div>
//           <p className="title">Sizes</p>
//           <div className="size">
//             <GiResize />
//             <span>80sqft</span>
//           </div>
//           <div className="size">
//             <IoBedOutline />
//             <span>2 beds</span>
//           </div>
//           <div className="size">
//             <FaBath />
//             <span> 1 bedroom</span>
//           </div>
//           <p className="title">Nearby Places</p>
//           <div className="listHorizontal">
//             <div className="feature">
//               <img src="/pet.png" alt="" />

// <TbSchool />
//                 <span>School</span>
//                 <p>250m away</p>
//               </div>
//             </div>
//             <div className="feature">
//               <img src="/pet.png" alt="" />
//               <div className="featureText">
//                 <span>Bus Stop</span>
//                 <p>100m away</p>
//               </div>
//             </div>
//             <div className="feature">
//               <img src="/fee.png" alt="" />
//               <div className="featureText">
//                 <span>Restorant</span>
//                 <p>200m away</p>
//               </div>
//             </div>
//           </div>
//           <p className="title">Location</p>
//           <div className="mapContainer">
//             <Maps items={[singlePostData]} />
//           </div>
//           <div className="buttons">
//             <button>
//               <MdOutlineMarkUnreadChatAlt /> Send a message
//             </button>
//             <button>
//               <MdOutlineSaveAlt /> Save the place
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SinglePage;

import React from "react";
import "./singlePage.scss";
import { CiLocationOn } from "react-icons/ci";
import Slider from "../../components/slider/Slider";
import Maps from "../../components/map/Maps";
import { MdOutlineSaveAlt } from "react-icons/md";
import { GiResize } from "react-icons/gi";
import { BiSolidSchool } from "react-icons/bi";
import { FaBath } from "react-icons/fa";
import { IoBedOutline } from "react-icons/io5";
import { TbSchool } from "react-icons/tb";
import { MdOutlineMarkUnreadChatAlt } from "react-icons/md";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { singlePostData, userData } from "../../lib/dummydata";

const SinglePage = () => {
  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider images={singlePostData.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{singlePostData.title}</h1>
                <div className="address">
                  <CiLocationOn className="image" />
                  <span>{singlePostData.address}</span>
                </div>
                <div className="price">$ {singlePostData.price}</div>
              </div>
              <div className="user">
                <img src={userData.img} alt="" />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className="bottom">{singlePostData.description}</div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className="title general ">General</p>
          <div className="listVertical">
            <div className="feature">
              <HiOutlineWrenchScrewdriver className="img" />
              <div className="featureText">
                <span>Utilities</span>
                <p>Renter is Responsible</p>
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="featureText">
                <span>Pet Policy</span>
                <p>Pets Allowed</p>
              </div>
            </div>
            <div className="feature">
              <img className="img" src="/fee.png" alt="" />
              <div className="featureText">
                <span>Property Fees</span>
                <p>Must have 3x the rent in total household income</p>
              </div>
            </div>
          </div>
          <p className="title">Sizes</p>
          <div className="sizes">
            <div className="size">
              <GiResize className="img" />
              <span>80sqft</span>
            </div>
            <div className="size">
              <IoBedOutline className="img" />
              <span>2 beds</span>
            </div>
            <div className="size">
              <FaBath className="img" />
              <span>1 bathroom</span>
            </div>
          </div>
          <p className="title">Nearby Places</p>
          <div className="listHorizontal">
            <div className="feature">
              <BiSolidSchool className="img" />
              <div className="featureText">
                <span>School</span>
                <p>250m away</p>
              </div>
            </div>
            <div className="feature">
              <img className="img" src="/pet.png" alt="" />
              <div className="featureText">
                <span>Bus Stop</span>
                <p>100m away</p>
              </div>
            </div>
            <div className="feature">
              <img className="img" src="/fee.png" alt="" />
              <div className="featureText">
                <span>Restaurant</span>
                <p>200m away</p>
              </div>
            </div>
          </div>
          <p className="title">Location</p>
          <div className="mapContainer">
            <Maps items={[singlePostData]} />
          </div>
          <div className="buttons">
            <button>
              <MdOutlineMarkUnreadChatAlt className="img" /> Send a message
            </button>
            <button>
              <MdOutlineSaveAlt className="img" /> Save the place
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
