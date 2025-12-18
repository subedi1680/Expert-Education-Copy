import { House } from "lucide-react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function StudyAbroad() {
  return (
    <>
      <div className="relative bg-[url(assets/studyabroad_bg.png)] bg-cover bg-center h-[350px] text-white">
        <Navbar />
        <div className="flex flex-row items-center ">
          <div className="flex flex-col flex-1 ml-44 mt-10">
            <p className="text-5xl font-bold">Study Abroad</p>
            <p className="text-xl mt-10">Pursue Academic Excellence Overseas</p>
            <p className="text-xl">Australia | Canada | The USA | The UK</p>
          </div>
          <div className="flex flex-row flex-1 justify-end items-center mt-25 mr-50 space-x-2">
            <House size="20" />
            <p>→ Study Abroad</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-[30%_70%] w-300 mx-44 mt-15">
        {/* Sidebar Section */}
        <div>
          <Sidebar />
        </div>

        {/* Text Section */}
        <div className="text-5xl">
          Deciding to study in a country outside of your native country is a
          huge decision to make. It entails adopting new habits, learning about
          a new culture, and adjusting to a lifestyle previously unknown to you.
          When it comes to achieving your career goals, these aspects become all
          the more an adventure. Moreover, you get to broaden your scope of
          academic excellence and open your mind to the amazing possibility of
          settling abroad. That said, those who choose to study abroad are more
          sought after by employers of reputed organisations. Expert Education
          <br></br>
          is a study abroad consultancy in Nepal, equipped with the expertise
          and professional assistance to help you attain your goals to pursue a
          course overseas. We have special education counsellors and visa
          consultancy services in Nepal, located across different branches. So,
          feel free to reach out to our friendly team today! Considering your
          chances of studying abroad? The decision to study in a foreign country
          may seem daunting if you are unsure of the preparations you need to
          make. Essentially, you need to put some effort into planning as this
          will take you a long way. Firstly, you may prioritise your choice of a
          destination by picking the university, course, and of course, at the
          least, the country. If you prefer a particular education institute
          based on what you’ve heard, be sure to research as well. You can visit
          their website and check for their accreditation, the scope of the
          course being offered, its popularity, the tuition fee, scholarship
          plans offered, faculty, and accommodation. Apart from visiting the
          institute’s website, you can also check out other portals that talk
          about the graduate employability rate of the preferred institution.
          Let’s say you’ve finally selected the country to study, like Australia
          or the UK; check other factors as well. These can include your options
          to work after completing your course in that country. Additionally,
          you must check the visa regulations in the country for international
          students. It’s good to research on your end, but we recommend that you
          also seek professional advice. Our study abroad consultancy in Nepal
          can guide and assist you in understanding your chances of travelling
          overseas to pursue a course. Your academic goals are waiting to be
          achieved Choose your study destination
        </div>
      </div>
    </>
  );
}
export default StudyAbroad;
