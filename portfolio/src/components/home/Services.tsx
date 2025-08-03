import { GrDeploy } from "react-icons/gr";
import { FaBuysellads } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";

const services = [
  {
    name: "Custom Website Development",
    para: "I build responsive, fast, and scalable websites tailored to your brand and business needs using modern frameworks like React.js, Next.js. and Express.js",
    icon: <FaGlobe />,
  },
  {
    name: "Full Stack Web Application Development",
    para: "From frontend interfaces to backend logic, I deliver robust full-stack solutions using the MERN stack or PostgreSQL + Express setups.",
    icon: <FaGlobe />,
  },
  {
    name: "E-commerce Website Development",
    para: "I create secure and feature-rich online stores with product management, shopping cart, user authentication, and payment integrations.",
    icon: <FaShoppingCart />,
  },
  {
    name: "CMS or Admin Dashboard Development",
    para: "Build scalable and user-friendly dashboards for managing content, users, analytics, and more.",
    icon: <FaBuysellads />,
  },
  {
    name: "Hosting and Deployment",
    para: "I handle end-to-end deployment using platforms like Vercel, Netlify, Render, or custom VPS setups (Linux-based) with GitHub Actions.",
    icon: <GrDeploy />,
  },
];

const Services = () => {
  return (
    <div
      id="services"
      className="min-h-screen flex flex-col text-center justify-center"
    >
      <h4 className="text-lg mb-2">What I Offer</h4>
      <h1 className="text-5xl mb-6">My services</h1>
      <p className="text-gray-500 mb-6">
        I am a full stack mern developer from Kathmandu, Nepal with years of
        experience in multiple <br /> companies like Tech Box Tec, Nepalayan
        Software Solutions and CodSoft.
      </p>
      <div className="flex items-center flex-wrap justify-center gap-6 mt-6">
        {services.map((service, index) => (
          <div key={index}></div>
        ))}
      </div>
    </div>
  );
};

export default Services;
