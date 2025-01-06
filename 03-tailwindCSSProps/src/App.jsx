
import './App.css'
import Card from './components/Card'

function App() {
  const andaman={
    imgSrc:"https://images.pexels.com/photos/29175703/pexels-photo-29175703/free-photo-of-pristine-beach-in-andaman-and-nicobar-islands.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:"Welcome to andaman"
  }
  const manali={
    imgSrc:"https://images.pexels.com/photos/5205097/pexels-photo-5205097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:"lorem500, Haha !!"
  }
  return (
    <>
    <h1 className='bg-green-400 rounded-xl text-black p-3 font-medium mb-4'  >TailWind CSS Tourism</h1>
    <div className='flex space-x-4'>

    <Card tourismPlace="Manali" details={manali}/>
    <Card tourismPlace="Andaman Nikobar" btnText="Read more" details={andaman}/>
    </div>
    </>
  )
}

export default App
