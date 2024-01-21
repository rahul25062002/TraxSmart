import React from 'react'

export function Backbutton({ onclickfunc, disptext,}) {
  return (
    <button
      className=' bg-gray-400 border-2 border-gray-400 rounded-lg transition-all text-white   text-2xl h-14 font-bold
     hover:bg-gray-500 hover:border-gray-500 active:scale-90 shadow-lg hover:shadow-xl w-[8rem] sm:w-[12rem] '
      onClick={onclickfunc}
    >
      {disptext}
    </button>
  )
}





 export function NextButton({ onclickfunc, disptext, Icons }) {
    
    return (
      <button
        className='bg-gradient-to-l from-blue-500 to-violet-700 rounded-lg transition-all text-white  text-2xl h-14 font-bold hover:from-white hover:to-white hover:text-violet-400 hover:border-violet-400 hover:border-2  active:scale-90 shadow-lg hover:shadow-xl w-[8rem] md:w-[12rem]'
        onClick={onclickfunc}
      >
        {Icons && Icons} {disptext}
      </button>
    )
  }