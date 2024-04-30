import { Footer } from 'flowbite-react';
import { BsGithub } from 'react-icons/bs';
export function PageFooter () {
  
  return(
    <Footer container className="rounded-none mt-20 bg-zinc-600 dark:border-gray-700">
      <Footer.LinkGroup>
        <Footer.Link className="text-white" href="#">Home</Footer.Link>
        <Footer.Link className="text-white" href="#">Install</Footer.Link>
        <Footer.Icon className="text-white" href="#" icon={BsGithub}/>
      </Footer.LinkGroup>
    </Footer>
  )
}