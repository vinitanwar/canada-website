"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { baseurl } from "./common";



export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
const [faqs,setFaqs]=useState()
  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleModalClose = () => setIsModalOpen(false);
  const handleModalOpen = () => setIsModalOpen(true);



  const [userData, setUserData] = useState({
    S_name: "",
  
    S_email: "",
    company_name: "",
    need_service: "",
    userEmailsir:"Admin@canadawidetaxes.com"
  });

  const [loader,setloader]=useState(false)
  
  const handleData = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    });
  };

  const handelsendqueery = async (e) => {
    e.preventDefault();
    setloader(true)
    const formData = new URLSearchParams();
    for (const key in userData) {
      formData.append(key, userData[key]);
    }
  
    try {
      const response = await axios.post(
        "https://sendingmail-3.onrender.com/sendmail",
        formData,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );


      await axios.post(`${baseurl}/sendmessage`,formData)
      setUserData({
        S_name: "",
        S_email: "",
       company_name: "",
        need_service: "",
       userEmailsir:"Admin@canadawidetaxes.com"
      })

    
    } catch (error) {
      console.error("Error sending data:", error);
    }
    setloader(false)
    setIsModalOpen(false)
  };
  
const fetchfaq=async()=>{
  const response= await axios.get(`${baseurl}/getfaq`)
  setFaqs(response.data)
}

useEffect(()=>{
  fetchfaq()
},[])


  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-16 xl:px-24 py-10 flex flex-col lg:flex-row gap-8 lg:my-9 Business-domain">
      <div className="w-full lg:w-1/2">
        <p className="text-orange-500 font-semibold text-lg sm:text-xl uppercase">
          FAQ's
        </p>
        <h3 className="text-3xl sm:text-4xl font-bold leading-snug mt-2 mb-4">
          Got A Question?
          <br />
          Get Your Answers
        </h3>
        <p className="text-gray-600 text-base leading-relaxed">
          Find the answers you need below in our comprehensive FAQ section.{" "}
          <br className="hidden sm:inline" />
          We’re here to help clarify any doubts you may have.
        </p>
        <hr className="my-6 border-gray-200" />
        <button
          onClick={handleModalOpen}
          className="inline-flex items-center text-white bg-orange-500 hover:text-white px-6 py-3 rounded shadow-sm uppercase text-sm font-medium transition"
        >
          Submit Your Question
          <i className="fas fa-arrow-right ml-2"></i>
        </button>
      </div>

      {/* Right Side (Accordion) */}
      <div className="w-full lg:w-1/2">
  <div className="space-y-4">
    {faqs?.map((faq, index) => (
      <div
        key={index}
        className="border border-gray-200 rounded-md shadow-sm transition-all duration-300"
      >
        <button
          onClick={() => toggle(index)}
          className="w-full text-left p-4 flex justify-between items-center focus:outline-none"
        >
          <span className="font-semibold text-base sm:text-lg text-gray-800 flex items-center gap-2">
            <i className="fas fa-question-circle text-orange-500"></i> {index+1}. 
            {faq?.question}
          </span>
          <span className="text-xl sm:text-2xl text-orange-500 font-bold">
            {openIndex === index ? "–" : "+"}
          </span>
        </button>
        {openIndex === index && (
          <div className="p-4 pt-0 text-gray-600 text-sm sm:text-base flex items-start gap-2">
            <i className="fas fa-info-circle text-orange-500 mt-1"></i>
            <span>{faq?.answer}</span>
          </div>
        )}
      </div>
    ))}
  </div>
</div>


      {/* Modal (Popup Form) */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/60 flex justify-center items-center z-50
"
        >
          <div className="bg-white rounded-lg p-8 w-full sm:w-96 md:w-120 max-w-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-800">
                Submit Your Question
              </h3>
              <button
                onClick={handleModalClose}
                className="text-gray-600 text-xl"
              >
                &times;
              </button>
            </div>

            <form className="space-y-4" onSubmit={handelsendqueery}>
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  name="S_name"
                  value={userData.S_name}
                  onChange={(e)=>handleData(e)}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                name="S_email"
                value={userData.S_email}
                onChange={(e)=>handleData(e)}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <input
                type="text"
                placeholder="Company"
                name="company_name"
                value={userData.company_name}
                required
                onChange={(e)=>handleData(e)}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <textarea
                placeholder="Message"
                name="need_service"
                value={userData.need_service}
                required
                onChange={(e)=>handleData(e)}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                rows="4"
              ></textarea>

              <button
                type="submit"
                className="w-full py-3 bg-orange-500 text-white rounded-md font-semibold hover:bg-orange-600 transition"
              >
                 {loader?"Loading...":"Submit"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
