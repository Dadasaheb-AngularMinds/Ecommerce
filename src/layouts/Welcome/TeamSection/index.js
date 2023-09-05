import React from 'react';

const TeamSection = () => {
  const team = [
    {
      name: 'Leslie Alexander',
      role: 'Co-Founder / CEO',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
      location: 'Toronto, Canada',
    },
    // More people...
  ];
  return (
    <div className="px-6 mx-auto mt-32 max-w-7xl sm:mt-40 lg:px-8">
      <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
        <img
          src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2894&q=80"
          alt=""
          className="aspect-[9/4] w-full object-cover xl:rounded-3xl"
        />
      </div>
      <div className="max-w-2xl mx-auto lg:mx-0">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Our team
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-300">
          Excepturi repudiandae alias ut. Totam aut facilis. Praesentium in
          neque vel omnis. Eos error odio. Qui fugit voluptatibus eum culpa.
        </p>
      </div>
      <ul
        role="list"
        className="grid max-w-2xl grid-cols-1 mx-auto mt-20 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
      >
        {team.map((person) => (
          <li key={person.name}>
            <img
              className="aspect-[14/13] w-full rounded-2xl object-cover"
              src={person.imageUrl}
              alt=""
            />
            <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-white">
              {person.name}
            </h3>
            <p className="text-base leading-7 text-gray-300">{person.role}</p>
            <p className="text-sm leading-6 text-gray-500">{person.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeamSection;
