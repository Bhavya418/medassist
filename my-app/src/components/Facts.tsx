import {Users,Hospital, History} from 'lucide-react'
const Facts = () => {
  return (
    <div className='flex flex-row justify-around items-center text-white bg-purple-700 h-48 w-full'>
        <div className='flex flex-col items-center justify-center '>
            <div><Hospital size={48}/></div>
            <div className='text-center mt-4'>
                <h1 className='text-2xl font-bold mb-2'>5+</h1> 
            <p className='text-1xl text'>Providers</p></div>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <div><Users size={48}/></div>
            <div className='text-center mt-4 '><h1
            className='text-2xl font-bold mb-2'>20+</h1> 
            <p >Employees</p></div>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <div><History size={48}/></div>
            <div className='text-center mt-4'><h1 className='text-2xl font-bold mb-2'>5+</h1> 
            <p>Years of Experience</p></div>
        </div>
        
    </div>
  )
}

export default Facts
