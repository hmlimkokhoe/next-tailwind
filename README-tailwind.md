# Introduction
Tailwind allows you to apply pre-existing classes in HTML, similarly to using inline-styling. This allows us to create custom styles without having to write any CSS classes. That way, you're "working exclusively in HTML".

* A problem with this approach is reusability, that is reusing the same line of Tailwind classes for multiple components. To solve this, we need to create a JavaScript component: https://tailwindcss.com/docs/reusing-styles#extracting-components-and-partials

* If you want to group multiple Tailwind CSS classes into a single CSS class, you can extract them using the `@apply` keyword: https://tailwindcss.com/docs/reusing-styles#extracting-classes-with-apply
** Tailwind documentation recommends only using this approach for minor but often used items such as buttons. Otherwise, we're actually not using Tailwind as intended.