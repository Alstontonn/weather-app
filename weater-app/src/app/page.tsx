

interface Current{
  temperature: number;
  weather_icons: string[];
  weather_descriptions: string[];
}

interface Post{
  current: Current
}

export default async function Home() {
  const data = await fetch('https://api.weatherstack.com/current?access_key=d5ad870235bdcffb457cd4aee6a11701&query=Jakarta');
  const post:Post = await data.json();
  return (

     <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 flex items-center justify-center p-6">
      <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden max-w-md w-full">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 text-white relative">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <div className="flex items-center mb-2">
              <span className="text-2xl mr-2">📍</span>
              <h1 className="text-xl font-bold">
                Jakarta, Indonesia
              </h1>
            </div>
            <p className="text-white/80 text-sm">Current Weather: {post.current.weather_descriptions[0]}</p>
          </div>
        </div>

        {/* Main Weather Content */}
        <div className="p-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex flex-col">
              <div className="text-7xl font-bold text-gray-800 leading-none">{post.current.temperature}℃</div>
            </div>

            <div>
              <img src={post.current.weather_icons[0]} alt="" className="w-24 h-24 object-contain"/>
            </div>
            
          </div>

          {/* Decorative Elements */}
          <div className="flex justify-center space-x-2 mt-8">
            <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
            <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
