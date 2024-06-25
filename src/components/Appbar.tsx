import { Avatar } from "./Blogcard"
import { Link } from "react-router-dom"

export default function Appbar({name}:{name:string}) {
  return (
    <div className="border-b flex justify-between py-4 px-4 cursor-pointer">
  
<div className="flex flex-col justify-center"> <Link to={"/blogs"}>Medium</Link></div>
      <div>
        <Link to={'/publish'}><button className="bg-blue-500 mr-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
  New
</button></Link>
      
<Avatar name={name}size={"big"} />
      </div>

    </div>
  )
}
