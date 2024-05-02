import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function BlogCard() {
  return (
    <div className="container px-6 py-10 mx-auto">
      <div class="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3">
        <div className="pb-10">
          <div class="relative">
            <Image
              width={500}
              height={500}
              class="object-cover object-center w-full h-64 rounded-lg lg:h-80"
              src={"/sunglass.jpg"}
              alt="all"
            />

            <div class="absolute bottom-0 flex p-3 bg-white dark:bg-gray-900 ">
              <Image
                width={500}
                height={500}
                class="object-cover object-center w-10 h-10 rounded-full"
                src={"/sunglass.jpg"}
                alt="all"
              />

              <div class="mx-4">
                <h1 class="text-sm text-gray-700 dark:text-gray-200">
                  Tom Hank
                </h1>
                <p class="text-sm text-gray-500 dark:text-gray-400">
                  Creative Director
                </p>
              </div>
            </div>
          </div>

          <h1 class="mt-6 text-xl font-semibold text-gray-800 dark:text-white">
            What do you want to know about UI
          </h1>

          <hr class="w-32 my-6 text-blue-500" />

          <p class="text-sm text-gray-500 dark:text-gray-400">
          At its core, fashion serves as a form of self-expression, allowing individuals to convey their identity, personality,
           and mood through the clothes they wear. Whether it's a bold statement piece, a timeless classic, or an avant-garde ensemble.
          </p>

          <Link
            href="#"
            class="inline-block mt-4 text-blue-500 underline hover:text-blue-400"
          >
            Read more
          </Link>
        </div>

        <div>
          <div class="relative">
            <Image
              width={500}
              height={500}
              class="object-cover object-center w-full h-64 rounded-lg lg:h-80"
              src={"/girl.jpg"}
              alt="all"
            />

            <div class="absolute bottom-0 flex p-3 bg-white dark:bg-gray-900 ">
              <Image
                width={500}
                height={500}
                class="object-cover object-center w-10 h-10 rounded-full"
                src={"/girl.jpg"}
                alt="all"
              />

              <div class="mx-4">
                <h1 class="text-sm text-gray-700 dark:text-gray-200">
                  Bella Imal
                </h1>
                <p class="text-sm text-gray-500 dark:text-gray-400">CEO</p>
              </div>
            </div>
          </div>

          <h1 class="mt-6 text-xl font-semibold text-gray-800 dark:text-white">
            diversity of Unique Lifestyle
          </h1>

          <hr class="w-32 my-6 text-blue-500" />

          <p class="text-sm text-gray-500 dark:text-gray-400">
            Fashion is more than just clothing; it's a reflection of cultural
            influences, societal trends, and personal expression. From haute
            couture runways to everyday street style, fashion encompasses a vast
            spectrum of styles, aesthetics, and interpretations.
          </p>

          <Link
            href="#"
            class="inline-block mt-4 text-blue-500 underline hover:text-blue-400"
          >
            Read more
          </Link>
        </div>

        <div>
          <div class="relative">
            <Image
              width={500}
              height={500}
              class="object-cover object-center w-full h-64 rounded-lg lg:h-80"
              src={"/baby.jpg"}
              alt="all"
            />

            <div class="absolute bottom-0 flex p-3 bg-white dark:bg-gray-900 ">
              <Image
                width={500}
                height={500}
                class="object-cover object-center w-10 h-10 rounded-full"
                src={"/baby.jpg"}
                alt="all"
              />

              <div class="mx-4">
                <h1 class="text-sm text-gray-700 dark:text-gray-200">
                  Tom Hank
                </h1>
                <p class="text-sm text-gray-500 dark:text-gray-400">
                  Creative Director
                </p>
              </div>
            </div>
          </div>

          <h1 class="mt-6 text-xl font-semibold text-gray-800 dark:text-white">
            Personality of Fashion
          </h1>

          <hr class="w-32 my-6 text-blue-500" />

          <p class="text-sm text-gray-500 dark:text-gray-400">
          fashion empowers individuals to showcase their creativity and individuality. 
          It transcends age, gender, and cultural boundaries, offering a universal language 
          through which people can connect and communicate.
          </p>

          <Link
            href="#"
            class="inline-block mt-4 text-blue-500 underline hover:text-blue-400"
          >
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
}
