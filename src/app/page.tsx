import MaxWidthWrapper from '@/Components/maxWidthWrapper/MaxWidthWrapper'
import Feature from '@/Sections/Feautre'
import Header from '@/Sections/Header'


export default function Home() {
 
  
  return (
    <>
      {/*  Here Start  Header part  */}
      <MaxWidthWrapper>
        <div>
          <Header />
          <Feature />
   </div>
    </MaxWidthWrapper>
      {/*  Here Start  Header part  */}
    </>
  )
}
