export default function Welcome() {
  return (
    <div className="welcome h-screen flex items-center justify-between">
      <div className="w-3/5 bg-gray-50 h-full flex items-center">
        <div className="w-11/12 mx-auto text-gray-500">
          <div className="font-serif text-left text-6xl">
            <span>Welcome to</span>
            <h1 className="pl-4 font-black text-8xl text-yellow-600 my-8">
              Kapangan, Benguet
            </h1>
          </div>
          <p className="text-5xl text-yellow-500 font-light text-center mt-2">
            "Grandmarch Capital of the Philippines"
          </p>
        </div>
      </div>
      <div className="w-2/5 m-4 bg-white p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-black tracking-wide text-gray-600">
            COVID-19 Cases
          </h3>
          <p className="text-gray-500">{new Date().toDateString()}</p>
        </div>
        <div className="my-6 px-4 grid grid-cols-3 w-full gap-4">
          <div className="text-center py-4 shadow-lg bg-red-500 text-white">
            <h1 className="font-serif text-8xl font-black text-gray-100">12</h1>
            <h2 className="text-xl mt-4">Confirmed</h2>
          </div>
          <div className="text-center py-4 shadow-lg bg-green-500 text-white">
            <h1 className="font-serif text-8xl font-black text-gray-100">50</h1>
            <h2 className="text-xl mt-4">Recovered</h2>
          </div>
          <div className="text-center py-4 shadow-lg bg-black text-white">
            <h1 className="font-serif text-8xl font-black text-gray-100">1</h1>
            <h2 className="text-xl mt-4">Death</h2>
          </div>
        </div>
      </div>
    </div>
  )
}
