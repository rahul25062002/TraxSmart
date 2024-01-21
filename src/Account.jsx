
import { Backbutton, NextButton } from './Button.js'  
function Account({handleLabelDown,handleLabelUp,handlonchange,stage,employeeinfo,updatestage3 ,setStage}){



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
                  onMouseEnter={() => handleLabelUp("user", "userName")}
                  onMouseLeave={
                    employeeinfo.userName === ""
                      ? () => handleLabelDown("user", "userName")
                      : null}
                >
                  <input
                    type="text"
                    name="userName"
                    id="userName"
                    required
                    value={employeeinfo.userName}
                    onChange={handlonchange}
                    autoComplete="off"
                    className=' text-3xl h-14   bg-gray-50
                     rounded-xl  pt-2 pr-4 pb-1 pl-5 border-2 border-gray-300 caret-transparent cursor-pointer  shadow-md focus:shadow-lg focus:border-violet-400'
                  />
                  <label
                    id="user"
                    name="user"
                    className={
                      employeeinfo.userName?.length === 0
                        ? " absolute pointer-events-none origin-top-left text-2xl font-semibold left-4 top-[3.3rem] transition-all duration-200 ease-in-out "
                        : " absolute pointer-events-none origin-top-left text-violet-600 text-xl font-semibold left-3 top-3 transition-all duration-200 ease-in-out "
                    }
                  >
                    User Name
                  </label>
                </div>
              </div>
            </div>
            <div className=" flex flex-col lg:flex-row lg:gap-10 justify-center w-[100%]">
              <div className="relative pt-10 lg:w-[100%]">
                <div
                  className=" flex flex-col w-full"
                  onMouseEnter={() => handleLabelUp("passwordLabel", "password")}
                  onMouseLeave={
                    employeeinfo.password === ""
                      ? () => handleLabelDown("passwordLabel", "password")
                      : null
                  }
                >
                  <input
                    type="password"
                    name="password"
                    id="password"
                    required
                    value={employeeinfo.password}
                    onChange={handlonchange}
                    autoComplete="off"
                    className=' text-3xl h-14   bg-gray-50
                     rounded-xl  pt-2 pr-4 pb-1 pl-5 border-2 border-gray-300 caret-transparent cursor-pointer  shadow-md focus:shadow-lg focus:border-violet-400'
                  />
                  <label
                    id="passwordLabel"
                    name="passwordLabel"
                    className={
                      employeeinfo.password?.length === 0
                        ? " absolute pointer-events-none origin-top-left text-2xl font-semibold left-4 top-[3.3rem] transition-all duration-200 ease-in-out "
                        : " absolute pointer-events-none origin-top-left text-violet-600 text-xl font-semibold left-3 top-3 transition-all duration-200 ease-in-out "
                    }
                  >
                    Password
                  </label>
                </div>
              </div>
            </div>
            <div className=" flex flex-col lg:flex-row lg:gap-10 justify-center w-[100%]">
              <div className="relative pt-10 lg:w-[100%]">
                <div
                  className=" flex flex-col w-full"
                  onMouseEnter={() => handleLabelUp("cpasswordLabel", "confirmPassword")}
                  onMouseLeave={
                    employeeinfo.password === ""
                      ? () => handleLabelDown("cpasswordLabel", "confirmPassword")
                      : null
                  }
                >
                  <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    required
                    value={employeeinfo.confirmPassword}
                    onChange={handlonchange}
                    autoComplete="off"
                    className=' text-3xl h-14   bg-gray-50
                     rounded-xl  pt-2 pr-4 pb-1 pl-5 border-2 border-gray-300 caret-transparent cursor-pointer  shadow-md focus:shadow-lg focus:border-violet-400'
                  />
                  <label
                    id="cpasswordLabel"
                    name="cpasswordLabel"
                    className={
                      employeeinfo.password?.length === 0
                        ? " absolute pointer-events-none origin-top-left text-2xl font-semibold left-4 top-[3.3rem] transition-all duration-200 ease-in-out "
                        : " absolute pointer-events-none origin-top-left text-violet-600 text-xl font-semibold left-3 top-3 transition-all duration-200 ease-in-out "
                    }
                  >
                    Confirm Password
                  </label>
                </div>
              </div>
            </div>
          </div>

        </form>
        <div
          className={`flex ${stage.stage1 === false ? "justify-between" : "justify-end"
            }  w-[90%]  py-6 mx-auto absolute bottom-0 pb-10`}
        >
          {stage.stage1 === false && (
            <Backbutton
              disptext={"Previous"}
              onclickfunc={() => {
                setStage({ ...stage, stage2: true, stage3: false });
              }}
            />
          )}
          <NextButton disptext={"Submit"} onclickfunc={updatestage3} />
        </div>

      </>

    )
}

export default Account