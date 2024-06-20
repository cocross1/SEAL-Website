// "use client";

// import React, { useEffect } from "react";
// import { FcGoogle } from "react-icons/fc";
// import { useCallback, useState } from "react";
// import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
// import Modal from "./Modal";
// // import Heading from "../Heading";
// import { toast } from "react-hot-toast";
// import { useRouter } from "next/navigation";
// import Button from "../Button";
// import useInitiative from "@/app/hooks/useBio";

// interface BioModalProps {
//     name?:string,
//     bio?:string[]
// }

// const BioModal: React.FC<BioModalProps> = ({ name, bio }) => {
//   const router = useRouter();
//   const initiativeModal = useInitiative();
//   const [isLoading, setIsLoading] = useState(false);



  
  
//   const bodyContent = (
//     <div className="flex flex-col gap-4">
//       <div className="flex flex-col gap-4 mt-3">
//         {initiativeModal.bio.map((bioItem, index) => (
//           <div key={index}>{bioItem}</div>
//         ))}
//       </div>
//     </div>
//   );
  
//   return (
//     <Modal
//       allowClose={true}
//       disabled={isLoading}
//       isOpen={initiativeModal.isOpen}
//       title={initiativeModal.name}
//       onClose={initiativeModal.onClose}
//       onSubmit={() => {}}
//       body={bodyContent}
//     />
//   );
// };

// export default BioModal;


// "use client";

// import React, { useState } from "react";
// import { FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa';
// import Modal from "./Modal";
// import { useRouter } from "next/navigation";
// import useInitiative from "@/app/hooks/useBio";

// const GoogleScholarIcon: React.FC<{ size?: number, className?: string }> = ({ size = 24, className = "" }) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 24 24"
//     width={size}
//     height={size}
//     className={className}
//     fill="currentColor"
//   >
//     {/* <path d="M12 2C8.13 2 5 5.13 5 9c0 3.54 2.61 6.43 6 6.92V21h2v-5.08c3.39-.49 6-3.38 6-6.92 0-3.87-3.13-7-7-7zm0 2c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5z"/> */}
//   </svg>
// );

// const BioModal: React.FC = () => {
//   const router = useRouter();
//   const initiativeModal = useInitiative();
//   const [isLoading, setIsLoading] = useState(false);

//   const bodyContent = (
//     <div className="flex flex-col gap-4">
//       <div className="flex items-center gap-2">
//         <h2>{initiativeModal.name}</h2>
//         <div className="flex gap-2">
//           {initiativeModal.linkedIn && (
//             <a href={initiativeModal.linkedIn} target="_blank" rel="noopener noreferrer">
//               <FaLinkedin size={24}  />
//             </a>
//           )}
//           {initiativeModal.email && (
//             <a href={`mailto:${initiativeModal.email}`} target="_blank" rel="noopener noreferrer">
//               <FaEnvelope size={24}  />
//             </a>
//           )}
//           {initiativeModal.googleScholar && (
//             <a href={initiativeModal.googleScholar} target="_blank" rel="noopener noreferrer">
//               <GoogleScholarIcon size={24} className="text-blue-700 hover:text-blue-900 transition-colors duration-200" />
//             </a>
//           )}
//           {initiativeModal.gitHub && (
//             <a href={initiativeModal.gitHub} target="_blank" rel="noopener noreferrer">
//               <FaGithub size={24} />
//             </a>
//           )}
//         </div>
//       </div>
//       <div className="flex flex-col gap-4 mt-3">
//         {initiativeModal.bio.map((bioItem, index) => (
//           <div key={index}>{bioItem}</div>
//         ))}
//       </div>
//     </div>
//   );

//   return (
//     <Modal
//       allowClose={true}
//       disabled={isLoading}
//       isOpen={initiativeModal.isOpen}
//       title=""
//       onClose={initiativeModal.onClose}
//       onSubmit={() => {}}
//       body={bodyContent}
//     />
//   );
// };

// export default BioModal;

// "use client";

// import React, { useState } from "react";
// import { FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa';
// import Modal from "./Modal";
// import { useRouter } from "next/navigation";
// import useInitiative from "@/app/hooks/useBio";

// const GoogleScholarIcon: React.FC<{ size?: number, className?: string }> = ({ size = 24, className = "" }) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 30 30"
//     width={size}
//     height={size}
//     className={className}
//     fill="currentColor"
//   >
//   </svg>
// );

// const BioModal: React.FC = () => {
//   const router = useRouter();
//   const initiativeModal = useInitiative();
//   const [isLoading, setIsLoading] = useState(false);
  
//   const bodyContent = (
//     <div className="flex flex-col gap-4">
//       <div className="flex flex-col gap-4 mt-3">
//         {initiativeModal.bio.map((bioItem, index) => (
//           <div key={index}>{bioItem}</div>
//         ))}
//       </div>
//     </div>
//   );

//   return (
//     <Modal
//       allowClose={true}
//       disabled={isLoading}
//       isOpen={initiativeModal.isOpen}
//       title={initiativeModal.name}
//       onClose={initiativeModal.onClose}
//       onSubmit={() => {}}
//       body={
//         <div>
//           <div className="flex justify-between items-center mb-4">
//             <div className="flex gap-2">
//               {initiativeModal.linkedIn && (
//                 <a href={initiativeModal.linkedIn} target="_blank" rel="noopener noreferrer">
//                   <FaLinkedin size={30} />
//                 </a>
//               )}
//               {initiativeModal.email && (
//                 <a href={`mailto:${initiativeModal.email}`} target="_blank" rel="noopener noreferrer">
//                   <FaEnvelope size={30} />
//                 </a>
//               )}
//               {initiativeModal.googleScholar && (
//                 <a href={initiativeModal.googleScholar} target="_blank" rel="noopener noreferrer">
//                   <GoogleScholarIcon size={30} className="text-blue-700 hover:text-blue-900 transition-colors duration-200" />
//                 </a>
//               )}
//               {initiativeModal.gitHub && (
//                 <a href={initiativeModal.gitHub} target="_blank" rel="noopener noreferrer">
//                   <FaGithub size={30} />
//                 </a>
//               )}
//             </div>
//           </div>
//           {bodyContent}
//         </div>
//       }
//     />
//   );
// };

// export default BioModal;

// "use client";

// import React, { useState } from "react";
// import { FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa';
// import Modal from "./Modal";
// import { useRouter } from "next/navigation";
// import useInitiative from "@/app/hooks/useBio";

// const GoogleScholarIcon: React.FC<{ size?: number, className?: string }> = ({ size = 24, className = "" }) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 30 30"
//     width={size}
//     height={size}
//     className={className}
//     fill="currentColor"
//   >
//   </svg>
// );

// const BioModal: React.FC = () => {
//   const router = useRouter();
//   const initiativeModal = useInitiative();
//   const [isLoading, setIsLoading] = useState(false);

//   const bodyContent = (
//     <div className="flex flex-col gap-4">
//       <div className="flex flex-col gap-4 mt-3">
//         {initiativeModal.bio.map((bioItem, index) => (
//           <div key={index}>{bioItem}</div>
//         ))}
//       </div>
//     </div>
//   );

//   return (
//     <Modal
//       allowClose={true}
//       disabled={isLoading}
//       isOpen={initiativeModal.isOpen}
//       title={initiativeModal.name}
//       onClose={initiativeModal.onClose}
//       onSubmit={() => {}}
//       body={
//         <div>
//           <div className="flex justify-center items-center mb-4">
//             <div className="flex gap-8">
//               {initiativeModal.linkedIn && (
//                 <a href={initiativeModal.linkedIn} target="_blank" rel="noopener noreferrer">
//                   <FaLinkedin size={30}  />
//                 </a>
//               )}
//               {initiativeModal.email && (
//                 <a href={`mailto:${initiativeModal.email}`} target="_blank" rel="noopener noreferrer">
//                   <FaEnvelope size={30}  />
//                 </a>
//               )}
//               {initiativeModal.googleScholar && (
//                 <a href={initiativeModal.googleScholar} target="_blank" rel="noopener noreferrer">
//                   <GoogleScholarIcon size={30}  />
//                 </a>
//               )}
//               {initiativeModal.gitHub && (
//                 <a href={initiativeModal.gitHub} target="_blank" rel="noopener noreferrer">
//                   <FaGithub size={30} />
//                 </a>
//               )}
//             </div>
//           </div>
//           {bodyContent}
//         </div>
//       }
//     />
//   );
// };

// export default BioModal;


"use client";

import React, { useState } from "react";
import { FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa';
import Image from 'next/image';
import Modal from "./Modal";
import { useRouter } from "next/navigation";
import useInitiative from "@/app/hooks/useBio";

const BioModal: React.FC = () => {
  const router = useRouter();
  const initiativeModal = useInitiative();
  const [isLoading, setIsLoading] = useState(false);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4 mt-3">
        {initiativeModal.bio.map((bioItem, index) => (
          <div key={index}>{bioItem}</div>
        ))}
      </div>
    </div>
  );

  return (
    <Modal
      allowClose={true}
      disabled={isLoading}
      isOpen={initiativeModal.isOpen}
      title={initiativeModal.name}
      onClose={initiativeModal.onClose}
      onSubmit={() => {}}
      body={
        <div>
          <div className="flex justify-center items-center mb-4">
            <div className="flex gap-4">
              {initiativeModal.linkedIn && (
                <a href={initiativeModal.linkedIn} target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size={30} />
                </a>
              )}
              {initiativeModal.email && (
                <a href={`mailto:${initiativeModal.email}`} target="_blank" rel="noopener noreferrer">
                  <FaEnvelope size={30} />
                </a>
              )}
              {initiativeModal.googleScholar && (
                <a href={initiativeModal.googleScholar} target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/images/research.png"
                    alt="Google Scholar"
                    width={45}
                    height={45}
                    className="hover:scale-110 transition-transform duration-200"
                  />
                </a>
              )}
              {initiativeModal.gitHub && (
                <a href={initiativeModal.gitHub} target="_blank" rel="noopener noreferrer">
                  <FaGithub size={30} />
                </a>
              )}
            </div>
          </div>
          {bodyContent}
        </div>
      }
    />
  );
};

export default BioModal;
