import * as React from "react"
import { Link } from "gatsby"

const Layout = ({pageTitle, children}) => {
    return (
        <>
            <nav></nav> // replace with header template later
            <main className="container mx-auto">
                <h1>{pageTitle}</h1>
                {children}
            </main>
        </>
    )
}

export default Layout