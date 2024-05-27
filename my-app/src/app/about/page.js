import Image from "next/image";
import Background from '../../../public/Background.jpg'
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight : '100',
  subsets : ['latin'],
  display :'swap'
})

const About = () =>{
    return(
        <h1 className={roboto.className}>
            About us
            <Image src={Background}
            width={200} height={200}/>
        </h1>
    )
}

export default About;