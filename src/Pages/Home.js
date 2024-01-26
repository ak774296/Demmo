import Navbar from "../Components/Navbar";


function Home(){
    return (
        <div className="flex flex-col">
      <Navbar/>
            <div>
            <p className="text-3xl text-center">
            Home
            </p>
            </div>
      </div>
    )
}

export default Home;