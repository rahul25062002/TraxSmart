import React, { useEffect, useState } from 'react'
import Datepicker from 'react-tailwindcss-datepicker'
import { Backbutton, NextButton } from './Button.js'

import FormValidator from './FormValidator'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import PersonalInfo from './PersonalInfo.js'
import AddressInfo from './AddressInfo.jsx'
import Account from './Account.jsx'

function ProgressiveForm() {


  const handleButtonClick = () => {
    setStage({ ...stage, stage2: false, stage1: true })
  };
  const [stage, setStage] = useState({
    stage1: false,
    stage2: true,
    stage3: false,
  })
  let initialState = {
    fullName: '',
    emailAddress: '',
    dateOfBirth: '',
    streetAddress: '',
    city: '',
    state: '',
    zipCode: '',
    userName: '',
    password: '',
    confirmPassword: ''
  }
  
  const [employeeinfo, setEmployeeinfo] = useState(initialState)
  useEffect(() => {
    console.log((new Date()).toLocaleDateString('en-GB').replace(/\//g, '-'));
    console.log(employeeinfo.dateOfBirth);
  }, [employeeinfo.dateOfBirth])

  //to validate stage 1
  const updatestage1 = () => {
    const mandatoryFields = [
      "fullName",
      "emailAddress",
      "dateOfBirth",
    ]
    if (FormValidator({ formData: employeeinfo, mandatoryFields })) {

      if (employeeinfo.fullName.length < 3) {

        document.getElementById('fullName').classList.add('border-red-500')
        toast.error('Full Name size should be at least 3.', {
          position: 'top-right',
          className: 'font-bold text-xl',
          autoClose: 3000,
        });
        return
      }
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (!emailRegex.test(employeeinfo.emailAddress)) {
        document.getElementById('emailAddress').classList.add('border-red-500')
        toast.error('enter valid emailAddress', {
          position: 'top-right',
          className: 'font-bold text-xl',
          autoClose: 3000,
        });
        return
      }

      const today = new Date();
      const selectedDate = new Date(employeeinfo.dateOfBirth);
      if (selectedDate >= today) {
        document.getElementById('dateOfBirth').classList.add('border-red-500')
        toast.error('enter valid date', {
          position: 'top-right',
          className: 'font-bold text-xl',
          autoClose: 3000,
        });
        return
      }
      setStage({ ...stage, stage1: false, stage2: true })
    }
    console.log(stage)
  }

   //to validate stage 2

  const updatestage2 = () => {
    const mandatoryFields = [
      "streetAddress",
      "city",
      "state",
      "zipCode",
    ]
    if (FormValidator({ formData: employeeinfo, mandatoryFields })) {
      if (
        isNaN(employeeinfo.zipCode) ||
        employeeinfo.zipCode.length !== 6
      ) {
        toast.error('Zip should be a 6-digit number.', {
          className: 'font-bold text-xl',
        })
        document.getElementById('zip').classList.add('border-red-500')
        return
      }
      if (employeeinfo.streetAddress.length < 5) {

        document.getElementById('streetAddress').classList.add('border-red-500')
        toast.error('Street Address size must be atleast 5', {
          position: 'top-right',
          className: 'font-bold text-xl',
          autoClose: 3000,
        });
        return
      }
      if (employeeinfo.city.length < 3) {

        document.getElementById('city').classList.add('border-red-500')
        toast.error('city size must be atleast 3', {
          position: 'top-right',
          className: 'font-bold text-xl',
          autoClose: 3000,
        });
        return
      }
      setStage({ ...stage, stage2: false, stage3: true })
    }
  }

   //to validate stage 3

  const updatestage3 = () => {
    const mandatoryFields = [
      'userName',
      'password',
      'confirmPassword'
    ]
    if (FormValidator({ formData: employeeinfo, mandatoryFields })) {

      if (employeeinfo.password.length < 6) {
        document.getElementById('password').classList.add('border-red-500')
        toast.error('password size should be atleast 6', {
          position: 'top-right',
          className: 'font-bold text-xl',
          autoClose: 3000,
        });
        return
      }
      if (employeeinfo.password !== employeeinfo.confirmPassword) {
        document.getElementById('password').classList.add('border-red-500')
        document.getElementById('confirmPassword').classList.add('border-red-500')

        toast.error('password size should be atleast 6', {
          position: 'top-right',
          className: 'font-bold text-xl',
          autoClose: 3000,
        });
        return
      }
      console.log(employeeinfo);
      setStage({ ...stage, stage1: true, stage3: false })
      setEmployeeinfo(initialState)
    }
  }
  //change handler onChange
  const handlonchange = (e) => {
    const { name, value } = e.target
    console.log(name);
    setEmployeeinfo({ ...employeeinfo, [name]: value })
    document.getElementById(name)?.classList.remove('border-red-500')

  }
   //event handler to bring label outside input box
  function handleLabelUp(id, id2) {
    const element = document.getElementById(id);
    if (element.classList.contains('text-2xl', 'top-[3.3rem]', 'left-4',)) {
      element.classList.add('text-violet-600');
      element.classList.replace('text-2xl', 'text-xl');
      element.classList.replace('top-[3.3rem]', 'top-3');
      element.classList.replace('left-4', 'left-3');
    }
    const element2 = document.getElementById(id2);
    if (element2.classList.contains('caret-transparent')) {

      element2.classList.replace('caret-transparent', 'caret-black');
    }

  }

  //event handler to bring label into input box
  function handleLabelDown(id, id2) {
    const element = document.getElementById(id);
    console.log("handledown")
    if (element.classList.contains('text-violet-600', 'text-xl', 'top-3', 'left-3')) {
      element.classList.remove('text-violet-600');
      element.classList.replace('text-xl', 'text-2xl');
      element.classList.replace('top-3', 'top-[3.3rem]');
      element.classList.replace('left-3', 'left-4');
    }
    const element2 = document.getElementById(id2);
    if (element2.classList.contains('caret-black')) {

      element2.classList.replace('caret-black', 'caret-transparent');
    }

  }
  return (
    <>
      <ToastContainer />

      <div
        className='
              
         relative bg-white
        rounded-xl py-5 border border-gray-400 shadow-lg  duration-500 h-[85vh] w-[100%] sm:w-[65%] flex flex-col justify-center item-center p-5 sm:p-10'
      >
        <div className="rounded-2xl bg-gradient-to-l from-blue-500 to-violet-700 text-white shadow-xl py-5 w-[100%] flex justify-center">
          <p className="font-bold   text-3xl md:text-5xl text-center">
            TraxSmart SignUp
          </p>

        </div>
        <div
          className='flex w-full  h-[4rem] gap-5 bgpgray-200
             relative items-center mt-[3rem] mb-[2rem]'
        >
          <div className={`transition-all h-[4rem] bg-gradient-to-l from-blue-500 to-violet-700 w-1/3 rounded-lg absolute ${stage.stage1 === true ? "left-[0%]" : ""} ${stage.stage2 === true ? "left-[33%]" : ""} ${stage.stage3 === true ? "left-[66.66%]" : ""}`}>
          </div>
          <p className={`z-10 cursor-pointer font-semibold h-[3.5rem] flex  items-center justify-center w-1/3 text-xl md:text-2xl text-center ${stage.stage1 === true ? "text-white" : "text-gray-500 border border-black rounded-lg"} transition-all `}>
            Personal info
          </p>
          <p className={`z-10 cursor-pointer font-semibold h-[3.5rem] flex items-center justify-center w-1/3 text-xl md:text-2xl text-center ${stage.stage2 === true ? "text-white" : "text-gray-500 border border-black rounded"} transition-all `}>
            Address Info
          </p>
          <p className={`z-10 cursor-pointer font-semibold h-[3.5rem] flex items-center justify-center w-1/3 text-xl md:text-2xl text-center ${stage.stage3 === true ? "text-white" : "text-gray-500 border border-black rounded"} transition-all`}>
            Account Setup
          </p>
        </div>
        {stage.stage1 === true && (
          <>
            <PersonalInfo handleLabelDown={handleLabelDown} handleLabelUp={handleLabelUp} handlonchange={handlonchange} stage={stage} employeeinfo={employeeinfo} updatestage1={updatestage1}  />
          </>
        )}
        {stage.stage2 === true && (
          <>
            <AddressInfo handleLabelDown={handleLabelDown} handleLabelUp={handleLabelUp} handlonchange={handlonchange} stage={stage} employeeinfo={employeeinfo} updatestage2={updatestage2}  handleButtonClick={handleButtonClick} />
          </>
        )}
        {stage.stage3 === true && (
          <>
            <Account handleLabelDown={handleLabelDown} handleLabelUp={handleLabelUp} handlonchange={handlonchange} stage={stage} employeeinfo={employeeinfo} updatestage3={updatestage3}  setStage={setStage} />

          </>
        )}
      </div>
    </>
  );
}
export default ProgressiveForm































