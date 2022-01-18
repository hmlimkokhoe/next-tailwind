import React from 'react'

function Breadcrumb () {
    return (
        <nav class="flex" aria-label="Breadcrumb">
            <ol class="inline-flex items-center space-x-1 md:space-x-3">
                <li class="inline-flex items-center">
                    <a class="text-gray-700 hover:text-gray-900 inline-flex items-center" href="#">Home</a>
                </li>
                <li class="inline-flex items-center">
                    <a class="text-gray-700 hover:text-gray-900 ml-1 md:ml-2 text-sm font-medium" href="#">Projects</a>
                </li>
                <li class="inline-flex items-center" aria-current="page">FlowBite</li>
            </ol>
        </nav>
    )
}

export default Breadcrumb;