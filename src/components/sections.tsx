import "../styles/sections.css";
import { Carousel } from 'flowbite-react';

export function Section01 () {

  return (
    <section className="w-full flex justify-center">
    <section className="max-w-[1500px] w-full h-[620px] bg-zinc-400 flex justify-center" id="container__section01">
      <main className="max-w-[850px] lg:w-11/12 w-11/12 h-auto flex justify-center md:justify-between mt-16">
        <div className="m-3 h-72 w-72 bg-gray-200 rounded hidden md:block">
        </div>
        <div className="text-right max-w-[550px] w-auto md:w-3/4">
          <h1 className="text-[48px] font-bold leading-none mb-5">Learn vocabulary with custom flashcards</h1>
          <span className="text-2xl font-light">Create your own flashcards and practice vocabulary in any of your target languages in any moment.  </span>
        </div>
      </main>
    </section>
    </section>
  )
}

export function Section02 () {
  return (
    <section className="flex justify-center">
      <main className="max-w-[1080px] w-11/12 lg:w-10/12 min-h-52 h-auto flex justify-between items-center border rounded-lg shadow-md flex-col md:flex-row dark:border-gray-700">
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 w-full">
          <Carousel slideInterval={2000}>
            <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
            <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
            <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
          </Carousel>
        </div>
        <div className="font-normal text-gray-700 dark:text-gray-400 p-4 box-border">
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Title</h3>
          <p>This app comes from the need to practice new vocabulary when I'm using the web browser.</p><br />
          <p>The Extension divides in two sections:</p><br />
          <p>The list of words stored, helpful when we want to just look up a word and try to remember it, and the flashcards section, where we can challenge the acknowledgment we have in a particular section.</p>
        </div>
      </main>
    </section>
  )
}

export function Section03 () {
  return (
    <section className="flex justify-center mt-44" id="container__section03">
      <main className="max-w-[1080px] w-11/12 lg:w-10/12 min-h-52 h-auto m-28 gap-5 grid place-content-center">
        <Section03Box
          img={"https://flowbite.com/docs/images/carousel/carousel-3.svg"}
          alt={"Meaningful alt text for an image that is not purely decorative"}
          title={"Download it in the webstore"}
        >
          Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
        </Section03Box>
        <Section03Box
          img={"https://flowbite.com/docs/images/carousel/carousel-3.svg"}
          alt={"Meaningful alt text for an image that is not purely decorative"}
          title={"Install in your divice"}
        >
          Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
        </Section03Box>
        <Section03Box
          img={"https://flowbite.com/docs/images/carousel/carousel-3.svg"}
          alt={"Meaningful alt text for an image that is not purely decorative"}
          title={"Noteworthy technology acquisitions 2021"}
        >
          Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
        </Section03Box>
      </main>
    </section>
  )
}

interface SectionBox {
  img: string;
  alt: string;
  title: string;
  children: string;
}
export function Section03Box ({img, alt, title, children}: SectionBox) {
  return (
    <div className="max-w-sm dark:border rounded-lg shadow bg-white dark:bg-gray-800 dark:border-gray-700">
      <img className="rounded-t-lg" src={img} alt={alt} />
      <div className="p-4"> 
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>     
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {children}
        </p>
      </div>
    </div>
  )
}

export function Section04 () {
  return (
    <section className="flex justify-center mt-32">
      <main className="max-w-[1080px] w-11/12 lg:w-10/12 items-center shadow-md text-black text-center border dark:border-gray-700 dark:bg-gray-800 rounded-lg overflow-hidden">
        <div className="p-5 text-gray-700 dark:text-gray-400">

          <h2 className="font-bold text-2xl text-gray-900 dark:text-white">OPEN SOURCE</h2>
          <h3 className="italic">The project is open source in Github</h3>
          <br />
          <h4 className="underline">Any contribution will be appreciated</h4>
        </div>
        <div className="min-h-[450px] bg-gray-300">
        
        </div>
      </main>
    </section>
  )
}