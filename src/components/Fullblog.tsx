import Appbar from "./Appbar"
import { Avatar } from "./Blogcard"


export default function Fullblog({blog}:{blog:{title:string,content:string,author:{name:string}}}) {
  return (<div>
    <Appbar name={"Anonymous"}/>
    <div className="grid grid-cols-12 w-full px-10 pt-200  max-w-screen-2xl font">
      <div className="col-span-8 ">
        
        
      <div className="text-3xl font-extrabold pt-4">{blog.title}</div>  
<div className="text-slate-400 pt-2">Posted on 5 August</div>
     <div className="pt-4"> {blog.content}</div>
     
      
      </div>
      <div className="col-span-4 ">
        Author
        <div className="flex">
        <div className="pr-2 mt-1"> <Avatar name={blog.author.name||"Anonymous"} size={"small"}/></div> 
        <div><div className="text-xl font-bold">{blog.author.name||"Anonymous"}</div> 
      <div className="pt-2 text-slate-500">Random catch phrase about the author's ability to grab the users attention
        </div> </div>
      
        </div>

      

      </div>
      
    </div>
    </div>
  )
}
