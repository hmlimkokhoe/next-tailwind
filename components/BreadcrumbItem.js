import React from 'react'

function BreadcrumbItem (props) {
    let name = '';
    (props.name) ? name = props.name : 'unknown';

    const setActive = () => {
        return (props.isActive) ? "active" : '';
    }

    const setDone = () => {
        return (props.isDone) ? "before:bg-green" : '';
    }

    /*
     * Normal CSS for circles:
     * breadcrumb-container li:before {
         content: '';
         width: 20px;
         height: 20px;
         display: block;
         border-radius: 3px;
         margin: 0 auto 5px auto;
         border-radius:20px;
         background: #c4c4c4;
       } 

       Normal CSS for edges:
       .breadcrumb-container li:after {
         content: '';
         width: 100%;
         height: 3px;
         position: absolute;
         left: -50%;
         top: 10px;
         z-index:-1;
         background: #c4c4c4;
       }
     */
    return (
        <li className={`${setActive()} ${setDone()} inline-block relative basis-2/12
        before:content-[''] before:w-20 before:h-20 before:block before:rounded-[20px] before:bg-gray
          before:mt-0 before:mr-auto before:mb-[5px] before:ml-auto
          active:before:bg-red
        after:content-[''] after:w-[100%] after:h-[3px] after:absolute after:-left-2/4 after:top-[10px] after:-z-[1]
          after:bg-gray`
        }>
            <p className="text-center text-[14px]">{props.name}</p>
        </li>
    )
}

export default BreadcrumbItem;