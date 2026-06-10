import { getJobs, addJob, deleteJob, updateJob } from '../services/api';
import { useState, useEffect } from 'react';

function Dashboard() {
  const [jobs, setJobs] = useState([])
  const [newJob, setNewJob] = useState({ company: '', role: '', status: 'Applied' })
  
  useEffect(() => {
    getJobs().then((res) => setJobs(res.data))
  }, [])

  const handleAddJob = async (e) => {
    e.preventDefault()
    const res = await addJob(newJob)
    setJobs([...jobs, res.data.job])
    setNewJob({ company: '', role: '', status: 'Applied' })
  }

  const handleDelete = async (id) => {
    await deleteJob(id)
    setJobs(jobs.filter((job) => job._id !== id))
  }

  const handleUpdate = async (id, status) => {
    const res = await updateJob(id, { status })
    setJobs(jobs.map((job) => job._id === id ? res.data.job : job))
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Job Tracker 🚀</h1>
        <button
          onClick={() => { localStorage.removeItem('token'); window.location.href = '/' }}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-semibold"
        >
          Logout
        </button>
      </div>

      <form onSubmit={handleAddJob} className="bg-white p-6 rounded-xl shadow mb-8 flex flex-col md:flex-row gap-4">
        <input
          placeholder="Company"
          value={newJob.company}
          onChange={(e) => setNewJob({...newJob, company: e.target.value})}
          className="border border-gray-300 rounded-lg px-4 py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          placeholder="Role"
          value={newJob.role}
          onChange={(e) => setNewJob({...newJob, role: e.target.value})}
          className="border border-gray-300 rounded-lg px-4 py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold">
          Add Job
        </button>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <div key={job._id} className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-bold text-gray-800">{job.company}</h3>
              <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                job.status === 'Applied' ? 'bg-blue-100 text-blue-600' :
                job.status === 'Interview' ? 'bg-yellow-100 text-yellow-600' :
                job.status === 'Offer' ? 'bg-green-100 text-green-600' :
                'bg-red-100 text-red-600'
              }`}>
                {job.status}
              </span>
            </div>
            <p className="text-gray-500 mb-4">{job.role}</p>
            <select
              value={job.status}
              onChange={(e) => handleUpdate(job._id, e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-1 text-sm mb-4 w-full"
            >
              <option>Applied</option>
              <option>Interview</option>
              <option>Offer</option>
              <option>Rejected</option>
            </select>
            <button
              onClick={() => handleDelete(job._id)}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-lg text-sm w-full"
            >
              Delete
            </button>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Dashboard