interface Iprops{
    title: string
}
function Banner({title}: Iprops) {
  return (
    <div className="flex items-center justify-center bg-[url('https://images.pexels.com/photos/6214383/pexels-photo-6214383.jpeg?_gl=1*n5k5j7*_ga*NjcxNjAzMzgxLjE3NTkxNDg4NzY.*_ga_8JE65Q40S6*czE3NjIxODg4MjMkbzEzJGcxJHQxNzYyMTg4ODM2JGo0NyRsMCRoMA..')] bg-cover bg-bottom w-full h-90">
        <h3 className="text-orange-400 text-shadow-md text-shadow-orange-900  text-7xl font-semibold">{title}</h3>
    </div>
  )
}

export default Banner;
