import { useState, useEffect } from "react"
import Header from '@/components/Header'
import Footer from "@/components/Footer"

export default function ExampleFive() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(count + 1)
        }, 1000)

        return () => clearInterval(interval);
    }, [count])

    return(
        <>
            <Header/>
            <main>
                <div style={{
                    display: "flex",
                    margin: "auto",
                    textAlign: "center"
                }}>
                    <h1>Example 5 - Number Counter</h1>
                    <h3>Example using setInterval</h3>
                    <div>{count}</div>
                </div>
            </main>
            <Footer/>
        </>
    )
}