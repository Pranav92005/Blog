import { Link } from "react-router-dom"


interface BlogsProps {
    authorname: string,
    title: string,
    content:string,
    date: string,
    id:string
    
}

export default function Blogcard({authorname,title,content,date,id}:BlogsProps) {
  
    
    return (
    <Link to={`/blog/${id}`}>
    <div className="border-b-2 p-4 border-slate-400 pb-2 cursor-pointer">
        <div className="flex gap-2">
            <div className="flex justify-center flex-col">
          <Avatar name={authorname} size={"small"}/> </div>
          
            <div className="font-medium">{authorname}</div>
            <div>&#9830;</div>
          <div className="font-extralight text-slate-500">{date}</div>
          
        </div>
        <div className="text-xl font-semibold pt-2">
            {title}
        </div>
        <div className="text-md font-thin">
            {content.slice(0,200)+"..."}
        </div>
        <div className="font-thin text-sm pt-2 text-slate-500">
            {`${Math.ceil(content.length/100)} min read`}
        </div>
        
      
    </div>
    </Link>
    )
}


export function   Avatar({name,size='small'}:{name:string ,size:"small"|"big"}){
    
    return <div className={`relative inline-flex items-center justify-center ${size==="small"?"w-5 h-5":"w-10 h-10"} overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}>
        <span className={`  ${size==="small"?"text-xs":"text-md"}text-gray-600  dark:text-gray-300`}>{name[0]}</span>
    </div>
    
  }
 