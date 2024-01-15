import ImgJordan from '../../img/air-jordan-4-retro-se-craft.png'

export default function Hero() {
  return (
    <div>

        <div className="flex items-center justify-between">

            <div className="flex flex-col">
                <h1 className="font-bold text-slate-900 text-3xl">Welcom to shopify</h1>
                <h1 className="font-bold text-slate-900 text-lg">We sell great things</h1>
                <div className="text-sm font-normal text-gray-900 my-5">
                <h1 className="">Welcom to the shoppify quality we sell good things</h1>
                <h2 className="">Find more product with less price and good currency statement...</h2>
                </div>
                <p className="text-xs text-red-950 font-medium">Let&apos;us made shopping</p>
            </div>

            <div className="">
                <div className="">
                    <img className="object-fill -rotate-12 dropObject" src={ImgJordan} alt="" />
                </div>
            </div>

        </div>

    </div>
  )
}
