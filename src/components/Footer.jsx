import { Facebook } from "lucide-react";
import { Instagram } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Twitter } from "lucide-react";
import expertLogo from "../assets/expert_logo.png";
function Footer() {
  return (
    <>
      <div className="bg-[url(assets/footer.png)] h-163 bg-cover bg-center text-white pt-20 px-45">
        <div className="w-300 flex flex-row justify-between">
          <div className="flex flex-col">
            <div className="text-3xl font-bold">STUDENT SERVICES</div>
            <div className="flex flex-col mt-10 space-y-5">
              <p className="text-[#9faebe] font-semibold font-sm">
                Overseas University Enrollment
              </p>
              <p className="text-[#9faebe] font-semibold font-sm">
                Visa Application
              </p>
              <p className="text-[#9faebe] font-semibold font-sm">
                PTE Test Preparation
              </p>
              <p className="text-[#9faebe] font-semibold font-sm">
                IELTS Training
              </p>
              <p className="text-[#9faebe] font-semibold font-sm">
                Study Abroad Accomodation
              </p>
              <p className="text-[#9faebe] font-semibold font-sm">
                Student Health Insurance
              </p>
              <p className="text-[#9faebe] font-semibold font-sm">
                Banking in Australia
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="text-3xl font-bold">ABOUT</div>
            <div className="flex flex-col mt-10 space-y-5">
              <p className="text-[#9faebe] font-semibold font-sm">About Us</p>
              <p className="text-[#9faebe] font-semibold font-sm">
                Message from Director
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="text-3xl font-bold">QUICK LINKS</div>
            <div className="flex flex-col mt-10 space-y-5">
              <p className="text-[#9faebe] font-semibold font-sm">Events</p>
              <p className="text-[#9faebe] font-semibold font-sm">Blog</p>
              <p className="text-[#9faebe] font-semibold font-sm">Contact Us</p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row space-x-5 justify-between">
              <Facebook
                fill="white"
                size="35"
                className="border rounded-xl p-2"
              />
              <Instagram size="35" className="border rounded-sm p-2" />
              <Linkedin
                fill="white"
                size="35"
                className="border rounded-xl p-2"
              />
              <Twitter
                fill="white"
                size="35"
                className="border rounded-xl p-2"
              />
            </div>
            <div className="mt-10">
              <img src={expertLogo} className="w-60 h-18"></img>
            </div>
          </div>
        </div>
        <hr className="mt-18 text-[#3a3f54]"></hr>
        <div className="text-[#98a7b7] flex flex-row">
          <div className="mt-10 flex flex-col justify-between">
            <p>Copyright © 2025. Expert Education & Visa Services.</p>
            <p>All Rights Reserved | MARN: 0852737</p>
          </div>
          <div className="flex flex-row justify-between items-center p-10 space-x-10">
            <p>Privacy Policy</p>
            <p>Code of Conduct</p>
            <p>Modern Slavery Policy</p>
            <p>Under 18 Policy and Procedure</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
