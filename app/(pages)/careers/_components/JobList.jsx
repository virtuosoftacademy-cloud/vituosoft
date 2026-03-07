import React from 'react'
import JobCard from './JobCard'
import { jobListings, openApp, careersHeader } from '@/app/_constant'

function JobList() {
  return (
    <section className="bg-white pt-40 md:pt-60">
      
      {/* Clean Heading without the border box */}
      <div className="flex justify-center items-center flex-col mb-24 text-center">
        <div className="relative inline-block">
          <h4 className="font-light capitalize text-4xl md:text-5xl text-black">
            {careersHeader.title}
          </h4>
          
          <h4 className="text-5xl lg:text-[64px] xl:text-7xl capitalize font-black text-black -mt-2">
            <strong>
              <em>{careersHeader.company}</em>
            </strong>
          </h4>
          
          {/* Orange Dot Positioning */}
          <div className="bg-chart-1 rounded-full size-3 lg:size-4 absolute bottom-2 lg:bottom-4 -right-4 lg:-right-6" />
        </div>
      </div>

      {/* Job Cards Container */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 pb-20 space-y-8">
        {jobListings.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}

        {/* The Open Application Card with its specific logic */}
        <JobCard job={openApp} isOpenApp={true} />
      </div>
    </section>
  )
}

export default JobList