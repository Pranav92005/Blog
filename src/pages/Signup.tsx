import Quote from "../components/Quote"
import Auth from "../components/Auth"
export default function Signup() {
  return (
    <>
    <div className=" md:grid grid-cols-2">
        <div>
            <Auth type="signup"  />
        </div>
      <div className="invisible md:visible ">  
        <Quote />
      </div>
      </div>
        
    </>
  )
}
