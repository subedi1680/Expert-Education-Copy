import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { House } from "lucide-react";
import Director from "../assets/director.png";

function Message() {
  return (
    <>
      <div className="bg-[#1877f2] h-[350px] text-white">
        <Navbar />
        <div className="flex flex-row items-center ">
          <div className="flex flex-col flex-1 ml-44 mt-25">
            <p className="text-5xl font-bold">Message from Director</p>
          </div>
          <div className="flex flex-row flex-1 justify-end items-center mt-25 mr-50 space-x-2">
            <House size="20" />
            <p>→ About Us</p>
            <p>→ Message from director</p>
          </div>
        </div>
      </div>

      <div className="flex flex-row w-300 ml-44 mt-27 mb-45 space-x-5">
        <div className="flex flex-1">
          <img src={Director} className="rounded-sm"></img>
        </div>
        <div className="flex flex-1 flex-col">
          <p className="text-[#344871] text-2xl mt-6">Welcome to Expert Education – the leading one-stop solution provider for international students from Nepal to study and live abroad. At Expert Education, we passionately strive to provide authentic and professional counselling to students from Nepal. We always keep every international student’s academic goals as the foremost objective while assisting them to fulfil their dreams to study abroad.</p>
          <p className="text-[#4d4d4d] text-lg mt-4">We embrace the spirit of transparency and trustworthiness in all our services offered from our global offices spanning 23 countries. It is this spirit that has earned us respect and appreciation from the 150,000+ clients we have assisted and have been able to position ourselves as the experts in the industry.</p>
          <p className="text-[#4d4d4d] text-lg mt-4">Driven by our passion for assisting genuine international students in selecting high-in-demand professional courses, enroll in world-class educational institutions, and to advance their professional ambitions abroad. We have expanded our service portfolio to include services that an international student from Nepal may require to study abroad.</p>
          <p className="text-[#4d4d4d] text-lg mt-4">We would like to express our gratitude to all our clients, well-wishers, and our partner institutions in Australia and across the world for appreciating our values and for being part of our mission. We would also like to assure our students and partners that we will continue to strive to keep our commitment to make Australian education accessible to deserving students across the globe.</p>
          <p className="text-[#4d4d4d] font-bold mt-10">Regards,</p>
          <p className="text-[#4d4d4d] font-bold">Badri Aryal</p>
        </div>
      </div>

      <Footer />
    </>
  );
}
export default Message;
