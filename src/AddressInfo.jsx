

import { Backbutton, NextButton } from './Button.js'

function AddressInfo({handleLabelDown,handleLabelUp,handlonchange,stage,employeeinfo,updatestage2,handleButtonClick}){

    const indianStatesAndUTs = [
        "Andhra Pradesh",
        "Arunachal Pradesh",
        "Assam",
        "Bihar",
        "Chhattisgarh",
        "Delhi",
        "Goa",
        "Gujarat",
        "Haryana",
        "Himachal Pradesh",
        "Jharkhand",
        "Karnataka",
        "Kerala",
        "Lakshadweep",
        "Madhya Pradesh",
        "Maharashtra",
        "Manipur",
        "Meghalaya",
        "Mizoram",
        "Nagaland",
        "Odisha",
        "Puducherry",
        "Punjab",
        "Rajasthan",
        "Sikkim",
        "Tamil Nadu",
        "Telangana",
        "Tripura",
        "Uttar Pradesh",
        "Uttarakhand",
        "West Bengal"
      ];

    return (
        <>
        <form
          className='flex flex-col  text-2xl  text-gray-500
           h-[50vh] overflow-y-auto '
        >
          <div className="flex flex-col">
            <div className=" flex flex-col lg:flex-row lg:gap-10 justify-center w-[100%]">
              <div className="relative pt-10 lg:w-[100%]">
                <div
                  className=" flex flex-col w-full"
                  onMouseEnter={() => handleLabelUp("s_address", "streetAddress")}
                  onMouseLeave={
                    employeeinfo.streetAddress === ""
                      ? () => { handleLabelDown("s_address", "streetAddress"); }
                      : null
                  }
                >
                  <input
                    type="text"
                    name="streetAddress"
                    id="streetAddress"
                    required
                    value={employeeinfo.streetAddress}
                    onChange={handlonchange}
                    autoComplete="off"
                    className=' text-3xl h-14   bg-gray-50
                     rounded-xl  pt-2 pr-4 pb-1 pl-5 border-2 border-gray-300 caret-transparent cursor-pointer  shadow-md focus:shadow-lg focus:border-violet-400'
                  />
                  <label
                    id="s_address"
                    name="s_address"
                    className={
                      employeeinfo.streetAddress.length === 0
                        ? " absolute pointer-events-none origin-top-left text-2xl font-semibold left-4 top-[3.3rem] transition-all duration-200 ease-in-out "
                        : " absolute pointer-events-none origin-top-left text-violet-600 text-xl font-semibold left-3 top-3 transition-all duration-200 ease-in-out "
                    }
                  >
                    Street Address
                  </label>
                </div>
              </div>
            </div>
            <div className=" flex flex-col lg:flex-row lg:gap-10 justify-center w-[100%]">
              <div className="relative pt-10 lg:w-[100%]">
                <div
                  className=" flex flex-col w-full"
                  onMouseEnter={() => handleLabelUp("cityLabel", "city")}
                  onMouseLeave={
                    employeeinfo.city === ""
                      ? () => handleLabelDown("cityLabel", "city")
                      : null
                  }
                >
                  <input
                    type="text"
                    name="city"
                    id="city"
                    required
                    value={employeeinfo.city}
                    onChange={handlonchange}
                    autoComplete="off"
                    className=' text-3xl h-14   bg-gray-50
                     rounded-xl  pt-2 pr-4 pb-1 pl-5 border-2 border-gray-300 caret-transparent cursor-pointer  shadow-md focus:shadow-lg focus:border-violet-400'
                  />
                  <label
                    id="cityLabel"
                    name="cityLabel"
                    className={
                      employeeinfo.city?.length === 0
                        ? " absolute pointer-events-none origin-top-left text-2xl font-semibold left-4 top-[3.3rem] transition-all duration-200 ease-in-out "
                        : " absolute pointer-events-none origin-top-left text-violet-600 text-xl font-semibold left-3 top-3 transition-all duration-200 ease-in-out "
                    }
                  >
                    City
                  </label>
                </div>
              </div>
            </div>
            <div className=" flex flex-col lg:flex-row lg:gap-10 justify-center w-[100%]">
              <div className="relative pt-10 lg:w-[100%]">
                <div className="flex flex-col w-full  ">
                  <select
                    name="state"
                    id="state"
                    value={employeeinfo.state}
                    onChange={handlonchange}
                    className='text-2xl h-14  
                       bg-gray-50
                     rounded-xl outline-none  pt-2 pr-4 pb-1 pl-4 border-2 border-gray-300 cursor-pointer shadow-md focus:shadow-lg focus:border-violet-400'
                  > 

                    <option value={``} >Select State</option>
                    {indianStatesAndUTs.map((stat) => (
                      <option className="" key={stat} value={stat}>
                        <div className="text-2xl w-fit !py-2 hover:bg-cyan-100 ">
                          {stat}
                        </div>
                      </option>
                  
                    ))}
                  </select>
                  <label
                    id="estate"
                    name="estate"
                    className={
                      " absolute pointer-events-none origin-top-left transform -translate-y-4 scale-80 text-violet-600 text-xl font-semibold left-3 top-8 transition-all duration-200 ease-in-out "
                    }
                  >
                    State
                  </label>
                </div>
              </div>
            </div>
            <div className=" flex flex-col lg:flex-row lg:gap-10 justify-center w-[100%]">
              <div className="relative pt-10 lg:w-[100%]">
                <div
                  className=" flex flex-col w-full"
                  onMouseEnter={() => handleLabelUp("zipLabel", "zip")}
                  onMouseLeave={
                    employeeinfo.zipCode === ""
                      ? () => handleLabelDown("zipLabel", "zip")
                      : null
                  }
                >
                  <input
                    type="number"
                    name="zipCode"
                    id="zip"
                    required
                    value={employeeinfo.zipCode}
                    onChange={handlonchange}
                    autoComplete="off"
                    className=' text-3xl h-14   bg-gray-50
                     rounded-xl  pt-2 pr-4 pb-1 pl-5 border-2 border-gray-300 caret-transparent cursor-pointer  shadow-md focus:shadow-lg focus:border-violet-400'
                  />
                  <label
                    id="zipLabel"
                    name="zipLabel"
                    className={
                      employeeinfo.zipCode?.length === 0
                        ? " absolute pointer-events-none origin-top-left text-2xl font-semibold left-4 top-[3.3rem] transition-all duration-200 ease-in-out "
                        : " absolute pointer-events-none origin-top-left text-violet-600 text-xl font-semibold left-3 top-3 transition-all duration-200 ease-in-out "
                    }
                  >
                    Zip Code
                  </label>
                </div>
              </div>
            </div>
          </div>
        </form>
        <div
          className={`flex ${stage.stage1 === false ? "justify-between" : "justify-end"
            }  w-[90%]  py-6 mx-auto absolute bottom-0  pb-10`}
        >
          {stage.stage1 === false && (
            <Backbutton
              disptext={"Previous"}
              onclickfunc={handleButtonClick}
            />
          )}
          <NextButton disptext={"Next"} onclickfunc={updatestage2} />
        </div>
      </>
    )
}

export default AddressInfo