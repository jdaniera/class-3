import Link from "next/link"

export default function Header() {
    return(
        <header>
            <h1>Header Here</h1>
            <Link href='/'>Home</Link>
        </header>
    )
}