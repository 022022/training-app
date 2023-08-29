export default function ActionsBar(){
  function submitSolution(){}
  return <div className='absolute bottom-0 right-0 w-full  bg-white'>
          <button className='absolute bottom-0 right-0 border border-gray-600 px-5 py-2.5 rounded-lg' onClick={submitSolution}>
            Submit
          </button>
      </div>
}