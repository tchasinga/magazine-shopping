
export default function NewsLetter() {
  return (
    <div>
        <div className="flex flex-col  w-full items-center justify-center h-[50vh] bg-slate-100 my-10 rounded-xl">
             <div className="text-5xl pb-3 text-slate-950">
                    <h1 className="">Subscribe to our offer on email</h1>   
             </div>

             <div className="text-1xl pb-3 text-slate-950">
             <p className="">Get notification about new arrivals in your inbox.</p>
             </div>

             <div className="">
               <div className="bordering">
               <input type="text" id="text" className=""/>
               </div>

                <div className="">
                    <button className="">Subscribe</button>
                </div>

             </div>
        </div>
    </div>
  )
}
