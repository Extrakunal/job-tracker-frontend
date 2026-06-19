import { useState } from 'react'

function Landing() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Navbar */}
      <nav className="bg-white shadow-sm relative">
        <div className="flex justify-between items-center px-6 md:px-8 py-5">
          <h2 className="text-2xl font-bold text-gray-800">Job Tracker 🚀</h2>

          {/* Desktop links */}
          <div className="hidden md:flex gap-4 items-center">
            <a href="/login" className="text-gray-600 font-semibold hover:text-blue-500">Login</a>
            <a href="/register" className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold">Sign Up</a>
          </div>

          {/* Hamburger button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-700 text-3xl"
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile dropdown menu */}
        {menuOpen && (
          <div className="md:hidden flex flex-col gap-3 px-6 pb-5">
            <a href="/login" className="text-gray-600 font-semibold py-2 border-t border-gray-100 pt-3">Login</a>
            <a href="/register" className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold text-center">Sign Up</a>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="text-center py-16 md:py-20 px-6 md:px-8 bg-gradient-to-br from-blue-50 to-gray-100">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
          Track every job application <br /> in one place
        </h1>
        <p className="text-lg md:text-xl text-gray-500 mb-8 max-w-2xl mx-auto">
          No more spreadsheets, no more sticky notes. Organize your job search with a clean dashboard built for job seekers.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <a href="/register" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold text-lg">
            Get Started Free
          </a>
          <a href="/login" className="border border-gray-300 hover:bg-gray-50 text-gray-700 px-8 py-3 rounded-xl font-semibold text-lg bg-white">
            Login
          </a>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-20 px-6 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-12">Everything you need to stay organized</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="bg-white p-8 rounded-2xl shadow text-center">
            <div className="text-4xl mb-4">📋</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Track Applications</h3>
            <p className="text-gray-500">Add company, role, and status for every job you apply to — all in one dashboard.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow text-center">
            <div className="text-4xl mb-4">🔄</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Update Status Instantly</h3>
            <p className="text-gray-500">Move from Applied to Interview to Offer with a single click — no more confusion.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow text-center">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Secure & Private</h3>
            <p className="text-gray-500">Your data is protected with secure authentication — only you can see your applications.</p>
          </div>

        </div>
      </section>

      {/* How it works */}
      <section className="py-16 md:py-20 px-6 md:px-8 bg-white">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-12">How it works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto text-center">

          <div>
            <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
            <h3 className="font-bold text-gray-800 mb-2">Create an account</h3>
            <p className="text-gray-500 text-sm">Sign up in seconds with just your name, email, and password.</p>
          </div>

          <div>
            <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
            <h3 className="font-bold text-gray-800 mb-2">Add your applications</h3>
            <p className="text-gray-500 text-sm">Log every job you apply to with company and role details.</p>
          </div>

          <div>
            <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
            <h3 className="font-bold text-gray-800 mb-2">Stay on top of it</h3>
            <p className="text-gray-500 text-sm">Update statuses as you go and never lose track again.</p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 px-6 md:px-8 text-center bg-gradient-to-br from-blue-50 to-gray-100">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Ready to organize your job search?</h2>
        <p className="text-gray-500 mb-8">Join now and take control of your applications today.</p>
        <a href="/register" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold text-lg">
          Get Started Free
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-gray-400 text-sm px-6">
        Built by Kunal Raghav · Job Tracker © 2026
      </footer>

    </div>
  )
}

export default Landing
