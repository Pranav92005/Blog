import Appbar from "../components/Appbar";
import Blogcard from "../components/Blogcard";
import Blogskeleton from "../components/Blogskeleton";
import useBlogs from "../hooks/useBlogs";


export default function Blogs() {
  const {loading,blogs}=useBlogs();
  if(loading){
    return <div  className="flex justify-center mt-20">
      <div className="max-w-screen-2xl" >
      <Blogskeleton/>
      <Blogskeleton/>
      <Blogskeleton/>
      <Blogskeleton/>
      <Blogskeleton/>
      <Blogskeleton/>
      <Blogskeleton/>
      </div>
      
    </div>

  }

  return (
    <div> <Appbar name={"Anonymous"}/>
    <div className="flex justify-center">

    <div className=" max-w-xl">
{blogs.map(blog=><Blogcard authorname={blog.author.name || "Anonymous"} title={blog.title} content={blog.content} date={"5 august"} id={blog.id} />)}
        

       

       
    </div>
    </div>
    </div>
  )
}


