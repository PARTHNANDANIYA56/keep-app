import React from 'react'

function Footer() {
    const year = new Date().getFullYear()
    return (
        <>
            <footer style={{ textAlign: 'center', position: 'fixed', bottom: 0, width:"100%" }} className='bg-dark text-light p-1'>
                <p>Copyright © {year} </p>
            </footer>
        </>
    )
}

export default Footer