interface Iprops{
    title: string
}
function Banner({title}: Iprops) {
  return (
    <div className="flex items-center justify-center bg-[url('/banner1.webp')] bg-cover bg-center w-full h-90">
        <h3 className="text-orange-400 text-shadow-md text-shadow-orange-950  text-7xl font-semibold">{title}</h3>
    </div>
  )
}

export default Banner;
