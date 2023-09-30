'use client'
import React from 'react'
import MaxWidthWrapper from '../maxWidthWrapper/MaxWidthWrapper'
import { Footer } from 'flowbite-react'

const FooterComp = () => {
  return (
      <div className='mt-10 '>
          <MaxWidthWrapper>
      <Footer container className='bg-transparent'>
      <Footer.Copyright
        by="MOXOK™"
        href="#"
        year={2023}
      />
      <Footer.LinkGroup>
        <Footer.Link href="#">
          About
        </Footer.Link>
        <Footer.Link href="#">
          Privacy Policy
        </Footer.Link>
        <Footer.Link href="#">
          Licensing
        </Footer.Link>
        <Footer.Link href="#">
          Contact
        </Footer.Link>
      </Footer.LinkGroup>
    </Footer>
    </MaxWidthWrapper>
      </div>
  )
}

export default FooterComp