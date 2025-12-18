import { CircleChevronRight, Dot, Minus } from "lucide-react";

function Sidebar() {
  return (
    <>
      {/* Menu section */}
      <div className="w-82 flex flex-col gap-y-[0.1rem]">
        <div className="flex flex-row bg-[#f5f8fb] hover:bg-[#1877f2] cursor-pointer text-[#334770] hover:text-white rounded-t-md justify-between px-6 py-4 font-semibold text-md hover:duration-300">
          <span>Study Abroad</span>
          <div>
            <CircleChevronRight />
          </div>
        </div>
        <div className="flex flex-row bg-[#f5f8fb] hover:bg-[#1877f2] cursor-pointer text-[#334770] hover:text-white  justify-between px-6 py-4 font-semibold text-md hover:duration-300">
          <span>Visa Application</span>
          <div>
            <CircleChevronRight />
          </div>
        </div>
        <div className="flex flex-row bg-[#f5f8fb] hover:bg-[#1877f2] cursor-pointer text-[#334770] hover:text-white  justify-between px-6 py-4 font-semibold text-md hover:duration-300">
          <span>PTE Test Preparation Nepal</span>
          <div>
            <CircleChevronRight />
          </div>
        </div>
        <div className="flex flex-row bg-[#f5f8fb] hover:bg-[#1877f2] cursor-pointer text-[#334770] hover:text-white justify-between px-6 py-4 font-semibold text-md hover:duration-300">
          <span>IELTS Classes in Nepal</span>
          <div>
            <CircleChevronRight />
          </div>
        </div>
        <div className="flex flex-row bg-[#f5f8fb] hover:bg-[#1877f2] cursor-pointer text-[#334770] hover:text-white  justify-between px-6 py-4 font-semibold text-md hover:duration-300">
          <span>Study Abroad Accomodation</span>
          <div>
            <CircleChevronRight />
          </div>
        </div>
        <div className="flex flex-row bg-[#f5f8fb] hover:bg-[#1877f2] cursor-pointer text-[#334770] hover:text-white rounded-b-md justify-between px-6 py-4 font-semibold text-md hover:duration-300">
          <span>Student Health Insurance</span>
          <div>
            <CircleChevronRight />
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="w-82 flex flex-col bg-[#f5f8fb] mt-7 rounded-lg px-6 pt-8">
        <span className="text-[#344871] text-3xl font-bold">
          Interested to Study Abroad?
        </span>
        <div className="flex flex-row items-center -ml-2 text-[#1877f2]">
          <span>
            <Dot size="35" />
          </span>
          <span>
            <Minus size="35" />
          </span>
        </div>
        <span className="text-[#565757]">
          Enter your details below and we’ll contact you soon.
        </span>
        <span className="text-[#565757] bg-[#cff4fc] pt-6 pb-3 pl-3 mt-6">
          "<span className="text-[#c24b31] ml-2">*</span>" indicates required
          fields
        </span>
        <form className="flex flex-col">
          <span className="text-[#4d4d4d] text-lg font-bold mt-2">
            First Name<span className="text-[#c24b31] ml-2">*</span>
          </span>
          <span>
            <input
              type="text"
              placeholder="E.g. Shesh"
              className="bg-white border border-[#e4e4e4] py-2 pl-2 focus:border-blue-600 focus:outline-none w-full rounded-md mt-2"
            ></input>
          </span>
          <span className="text-[#4d4d4d] text-lg font-bold mt-2">
            Last Name<span className="text-[#c24b31] ml-2">*</span>
          </span>
          <span>
            <input
              type="text"
              placeholder="E.g. Ghale"
              className="bg-white border border-[#e4e4e4] py-2 pl-2 focus:border-blue-600 focus:outline-none w-full rounded-md mt-2"
            ></input>
          </span>
          <span className="text-[#4d4d4d] text-lg font-bold mt-2">
            Email<span className="text-[#c24b31] ml-2">*</span>
          </span>
          <span>
            <input
              type="text"
              placeholder="E.g. ghale.shesh@gmail.com"
              className="bg-white border border-[#e4e4e4] py-2 pl-2 focus:border-blue-600 focus:outline-none w-full rounded-md mt-2"
            ></input>
          </span>
          <span className="text-[#4d4d4d] text-lg font-bold mt-2">
            Mobile<span className="text-[#c24b31] ml-2">*</span>
          </span>
          <span>
            <input
              type="text"
              placeholder="E.g. Shesh"
              className="bg-white border border-[#e4e4e4] py-2 pl-2 focus:border-blue-600 focus:outline-none w-full rounded-md mt-2"
            ></input>
          </span>
          <span className="text-[#4d4d4d] text-lg font-bold mt-2">
            Current City<span className="text-[#c24b31] ml-2">*</span>
          </span>
          <span>
            <input
              type="text"
              placeholder="E.g. Shesh"
              className="bg-white border border-[#e4e4e4] py-2 pl-2 focus:border-blue-600 focus:outline-none w-full rounded-md mt-2"
            ></input>
          </span>
          <span className="text-[#4d4d4d] text-lg font-bold mt-2">
            Country of Residence<span className="text-[#c24b31] ml-2">*</span>
          </span>
          <span>
            <input
              type="text"
              placeholder="E.g. Shesh"
              className="bg-white border border-[#e4e4e4] py-2 pl-2 focus:border-blue-600 focus:outline-none w-full rounded-md mt-2"
            ></input>
          </span>
          <span className="text-[#4d4d4d] text-lg font-bold mt-2">
            Study Destination<span className="text-[#c24b31] ml-2">*</span>
          </span>
          <span>
            <input
              type="text"
              placeholder="E.g. Shesh"
              className="bg-white border border-[#e4e4e4] py-2 pl-2 focus:border-blue-600 focus:outline-none w-full rounded-md mt-2"
            ></input>
          </span>
          <span className="text-[#4d4d4d] text-lg font-bold mt-2">
            Last Education<span className="text-[#c24b31] ml-2">*</span>
          </span>
          <span>
            <input
              type="text"
              placeholder="E.g. Shesh"
              className="bg-white border border-[#e4e4e4] py-2 pl-2 focus:border-blue-600 focus:outline-none w-full rounded-md mt-2"
            ></input>
          </span>
        </form>
      </div>
    </>
  );
}
export default Sidebar;
