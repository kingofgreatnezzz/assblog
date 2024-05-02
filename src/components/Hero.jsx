import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Hero() {
  return (
    <div>
    <header class="bg-white dark:bg-gray-900">

    <div class="container px-6 py-16 mx-auto">
        <div class="items-center lg:flex">
            <div class="w-full lg:w-1/2">
                <div class="lg:max-w-lg">
                    <h1 class="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">Best place to choose <br/> your <span class="text-blue-500 ">clothes</span></h1>
                    
                    <p class="mt-3 text-gray-600 dark:text-gray-400">
                    Each season brings new collections, colors, and silhouettes, showcasing the dynamic nature of the industry and its ability to constantly reinvent itself. Here is were frankly lifestyle comes in, we are glad to have you.</p>
                    <button class="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Shop Now</button>
                </div>
            </div>

            <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                <Image src={"https://merakiui.com/images/components/Catalogue-pana.svg"} width={500} height={500} class="w-full h-full lg:max-w-3xl"  alt="Catalogue-pana.svg"/>
            </div>
        </div>
    </div>
</header>
    </div>
  )
}
