import React from 'react'

function Breadcrumb () {
    return (
        <nav className="mb-5 before:content" aria-label="Breadcrumb">
            <ul class="breadcrumb-container">
                <li id="first-step" class="active"><p>Goals To Define</p></li>
                <li id="second-step" class=""><p>Metrics</p></li>
                <li id="third-step" class=""><p>Theory & Intervention</p></li>
                <li id="third-step" class=""><p>Variants List</p></li>
                <li id="third-step" class=""><p>Exp Set-Up Checklist</p></li>
                <li id="third-step" class=""><p>Preview</p></li>
            </ul>
        </nav>
    )
}

export default Breadcrumb;