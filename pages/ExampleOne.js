import { useEffect, useState } from "react"
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ExampleOne() {
    const [number, setNumber] = useState(0);

    // DONT do this, this will usually create infinite loop
    useEffect(() => {
        console.log(number);
    })

    return(
        <>
            <Header/>
            <main>
                <h1>Example 1</h1>
                <div>Infinite Loop</div>
                {number}
            </main>
            <Footer/>
        </>
    )
}