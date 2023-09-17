import Header from "./Header";
import Hero from "./Hero";

export default function Mainbar() {
    return (
        <div className='flex flex-col  flex-1 '>
            <Header />
            <Hero />
        </div>
    )
}