import React from 'react'

const ContentSection = () => {
    const stats = [
        { label: 'Business was founded', value: '2012' },
        { label: 'People on the team', value: '120+' },
        { label: 'Users on the platform', value: '250k' },
        { label: 'Paid out to creators', value: '$70M' },
      ];
  return (
    <div className="px-6 py-10 mt-20 container-fluid lg:px-8 bg-slate-100">
          <div className="max-w-2xl mx-auto lg:mx-0 lg:max-w-none">
            <dl className="grid grid-cols-1 mt-16 gap-x-8 gap-y-12 sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mt-28 lg:grid-cols-4">
              {stats.map((stat, statIdx) => (
                <div
                  key={statIdx}
                  className="flex flex-col-reverse pl-6 border-l gap-y-3 border-white/20"
                >
                  <dt className="text-base leading-7 text-gray-300">
                    {stat.label}
                  </dt>
                  <dd className="text-3xl font-semibold tracking-tight text-white">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
  )
}

export default ContentSection
