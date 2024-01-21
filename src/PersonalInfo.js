
 
 import { Backbutton, NextButton } from './Button.js'
 
function PersonalInfo({handleLabelDown,handleLabelUp,handlonchange,stage,employeeinfo,updatestage1}){

    return(
        <>
        <form
          className='flex flex-col  text-2xl  text-gray-500
           h-[50vh] overflow-y-auto  '
        >
          <div className="flex flex-col">
            <div className=" flex flex-col lg:flex-row lg:gap-10 justify-center w-[100%]">
              <div className="relative pt-10 lg:w-[100%]">
                <div
                  className=" flex flex-col w-full"
                  onMouseEnter={() => handleLabelUp("fname", "fullName")}
                  onMouseLeave={
                    employeeinfo.fullName === ""
                      ? () => handleLabelDown("fname", "fullName")
                      : null
                  }
                >
                  <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    required
                    value={employeeinfo.fullName}
                    onChange={handlonchange}
                    autoComplete="off"
                    className=' text-3xl h-14   bg-gray-50
                     rounded-xl  pt-2 pr-4 pb-1 pl-5 border-2 border-gray-300 caret-transparent cursor-pointer  shadow-md focus:shadow-lg focus:border-violet-400'
                  />
                  <label
                    id="fname"
                    name="fname"
                    className={
                      employeeinfo.fullName.length === 0
                        ? " absolute pointer-events-none origin-top-left text-2xl font-semibold left-4 top-[3.3rem] transition-all duration-200 ease-in-out "
                        : " absolute pointer-events-none origin-top-left text-violet-600 text-xl font-semibold left-3 top-3 transition-all duration-200 ease-in-out "
                    }
                  >
                    Full Name
                  </label>
                </div>
              </div>

            </div>
            <div className=" flex flex-col lg:flex-row lg:gap-10 justify-center w-[100%]" >
              <div className="relative pt-10 lg:w-[100%]">
                <div
                  className=" flex flex-col w-full"
                  onMouseEnter={() => handleLabelUp("emailLabel", "emailAddress")}
                  onMouseLeave={
                    employeeinfo.emailAddress === ""
                      ? () => handleLabelDown("emailLabel", "emailAddress")
                      : null
                  }
                >
                  <input
                    type="text"
                    name="emailAddress"
                    id="emailAddress"
                    required
                    value={employeeinfo.emailAddress}
                    onChange={handlonchange}
                    autoComplete="off"
                    className=' text-3xl h-14   bg-gray-50
                     rounded-xl  pt-2 pr-4 pb-1 pl-5 border-2 border-gray-300 caret-transparent cursor-pointer  shadow-md focus:shadow-lg focus:border-violet-400'
                  />
                  <label
                    id="emailLabel"
                    name="emailLabel"
                    className={
                      employeeinfo.emailAddress?.length === 0
                        ? " absolute pointer-events-none origin-top-left text-2xl font-semibold left-4 top-[3.3rem] transition-all duration-200 ease-in-out "
                        : " absolute pointer-events-none origin-top-left text-violet-600 text-xl font-semibold left-3 top-3 transition-all duration-200 ease-in-out "
                    }
                  >
                    Email
                  </label>
                </div>
              </div>

            </div>
            <div className="flex flex-col lg:flex-row  lg:gap-10 justify-center w-[100%]">
              <div className="relative pt-10 lg:w-[100%]">
                <div className="flex flex-col w-full">
                  <input
                    className='text-2xl  text-bold h-14 w-full bg-gray-50 text-gray-500 rounded-xl  pt-2 pr-4 pb-1 pl-5 border-2 border-gray-300 cursor-pointer shadow-md focus:shadow-lg focus:border-violet-400 '
                    type="date"
                    name="dateOfBirth"
                    id="dateOfBirth"
                    value={employeeinfo.dateOfBirth}
                    onChange={handlonchange}
                  />
                  <label
                    id="edob"
                    name="edob"
                    className=
                    " absolute pointer-events-none origin-top-left transform -translate-y-4 scale-80 text-violet-600 text-xl font-semibold left-3 top-8 transition-all duration-200 ease-in-out "
                  >
                    Date of Birth
                  </label>
                </div>
              </div>
            </div>
          </div>
        </form>
        <div
          className={`flex ${stage.stage1 === false ? "justify-between" : "justify-end"
            } w-[90%] py-6 mx-auto absolute bottom-0 pb-10 `}
        >
          {stage.stage1 === false && (
            <Backbutton disptext={"Previous"} />
          )}
          <NextButton disptext={"Next"} onclickfunc={updatestage1} />
        </div>
      </>

    )

}

export default PersonalInfo;