
export default function NewsLetter() {
  return (
    <div className="pb-20">
        <div className="flex flex-col  w-full items-center justify-center h-[50vh] bg-slate-100 my-10 rounded-xl ">
             <div className="text-5xl pb-3 text-slate-950">
                    <h1 className="">Subscribe to our offer on email</h1>   
             </div>

             <div className="text-1xl pb-3 text-slate-950">
             <p className="">Get notification about new arrivals in your inbox.</p>
             </div>

             <div className="flex items-center relative right-[6%] pt-3">
               <div className="bordering">
               <input type="text" id="text" className="" placeholder="Your Email here..."/>
               </div>

                <div className=" bg-black text-white  p-3 rounded-2xl text-sm flex justify-end relative left-[30%]">
                    <button className="text-center flex justify-center items-center">Subscribe</button>
                </div>

             </div>
        </div>
    </div>
  )
}
