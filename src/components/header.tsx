import { Navbar } from 'flowbite-react';
import { DarkThemeToggle, Flowbite } from 'flowbite-react';

export function PageHeader () {

  return(
    <Flowbite>
    <Navbar fluid rounded className="rounded-none bg-zinc-600">
      <DarkThemeToggle className="text-white"/>
      <Navbar.Toggle />
      <Navbar.Collapse id="text-container__page-header">
        <Navbar.Link href="#" className="text-white">Home</Navbar.Link>
        <Navbar.Link href="#" className="text-white">Install</Navbar.Link>
        <Navbar.Link href="#" className="text-white">Github</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
    </Flowbite>
  )
}