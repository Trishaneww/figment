import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { GiCheckMark } from 'react-icons/gi';

const ContactHero = () => {
  return (
    <div className="flex justify-center gap-8 mt-48 w-4/5 p-8">
        <div className="flex flex-col  w-full">
            <Image
                width={1000}
                height={1000}
                alt="contact image banner"
                src="/assets/images/contact.png"
                className="-ml-14"
            />

            <p className="text-3xl">Accelerate your business with Figment Studios</p>
            <p>Get the free, personalized insights you need to boost your site's conversion rate and elevate your brand.</p>
            <ul>
              <li>
                <GiCheckMark />
                <p>Fully designed, custom mobile and desktop mockups</p>
              </li>

              <li>
                <GiCheckMark />
                <p>Fully designed, custom mobile and desktop mockups</p>
              </li>

              <li>
                <GiCheckMark />
                <p>Fully designed, custom mobile and desktop mockups</p>
              </li>


            </ul>

        </div>

        <form className="w-3/6 h-[600px] shadow-lg bg-white rounded-lg flex flex-col items-center">

          <input type="email" />

          <Button className="w-5/6 shadow">Submit</Button>

        </form>

    </div>
  )
}

export default ContactHero