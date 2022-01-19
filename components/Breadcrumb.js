import React from 'react'
import BreadcrumbItem from './BreadcrumbItem'

function Breadcrumb () {
    return (
        <nav className="mb-5 before:content" aria-label="Breadcrumb">
            <ul className="breadcrumb-container flex w-100 p-0 m-0 first:after:content-[none]">
                <BreadcrumbItem name={"Goals to define"} isDone={true}/>
                <BreadcrumbItem name={"Metrics"} isDone={true}/>
                <BreadcrumbItem name={"Theory & Intervention"} isActive={true}/>
                <BreadcrumbItem name={"Variants List"}/>
                <BreadcrumbItem name={"Exp Set-Up Checklist"}/>
                <BreadcrumbItem name={"Preview"}/>
            </ul>
        </nav>
    )
}

export default Breadcrumb;