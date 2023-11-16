import React from 'react'
import '../../styles/components.css'


const Container = props => {

    const { children } = props;

    return (
        <main className="app-container">
            {children}
        </main>
    )
}
export default Container