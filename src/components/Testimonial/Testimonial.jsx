import React from 'react'
import { Avatar,Blockquote } from 'flowbite-react';


const Testimonial = () => {
  return (
    <div>
      <figure className="mx-auto max-w-screen-md text-center flex flex-col items-center">
        <svg
          className="mx-auto mb-3 h-10 w-10 text-gray-400 dark:text-gray-600"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 18 14"
        >
          <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
        </svg>
        <Blockquote>
          <p className="lg:text-2xl text-lg max-w-screen-sm lg:max-w-screen-xl px-4 font-medium italic text-gray-900 dark:text-white">
            We have had the pleasure of working with Karibu Tech, a
            leading web development agency based in Africa, and our experience
            has been nothing short of exceptional. From the initial consultation
            to the final delivery, their team demonstrated unparalleled
            professionalism, expertise, and dedication.
          </p>
        </Blockquote>
        <figcaption className="mt-6 flex items-center justify-center space-x-3">
          <Avatar rounded size="xs" alt="profile picture" />
          <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
            <cite className="pr-3 font-medium text-gray-900 dark:text-white">
              Gatake Sabin
            </cite>
            <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">
              MD at Blue-Channel Logistics
            </cite>
          </div>
        </figcaption>
      </figure>
    </div>
  );
}

export default Testimonial