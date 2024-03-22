import { PageHeader } from "./components/header";
import { PageFooter } from "./components/footer";
import { Section01, Section02, Section03, Section04 } from "./components/sections";
// import { useState } from 'react';

export function App() {

  return (
    <>
      <PageHeader/>
      <Section01/>
      <Section02/>
      <Section03/>
      <Section04/>
      <PageFooter/>
    </>
  )
}

