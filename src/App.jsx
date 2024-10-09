function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold text-purple-600">Workcation</span>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-700 hover:text-purple-600">Home</a>
              <a href="#" className="text-gray-700 hover:text-purple-600">Contact</a>
              <a href="#" className="text-gray-700 hover:text-purple-600">About</a>
            </div>
          </div>
        </div>
      </nav>
  
      <div className="flex items-center justify-center py-12">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-md">
          <img
            src="https://static.toiimg.com/thumb/width-600,height-400,msid-53891743.cms"
            className="w-full h-48 object-cover"
          />
          <div className="p-6 text-center">
            <h1 className="text-xl font-bold text-gray-800">
              You can work from anywhere.{' '}
              <span className="text-purple-600">Take advantage of it.</span>
            </h1>
            <p className="mt-4 text-gray-600">
              Workcation helps you find work-friendly rentals in beautiful
              locations so you can enjoy some nice weather even when you're not on
              vacation.
            </p>
            <button className="mt-6 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition duration-300">
              BOOK YOUR ESCAPE
            </button>
          </div>
        </div>
      </div>
    </div>
  )  
}

export default App
