(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[2273],{376:function(n,e,r){"use strict";r.r(e),r.d(e,{_frontmatter:function(){return i},default:function(){return p}});var t=r(22122),a=r(19756),m=(r(15007),r(64983)),o=r(99536),s=r(17015),i={},u={_frontmatter:i},c=o.Z;function p(n){var e=n.components,r=(0,a.Z)(n,["components"]);return(0,m.mdx)(c,(0,t.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,m.mdx)("h1",{id:"pricesummary"},"PriceSummary"),(0,m.mdx)(s.Z,{mdxType:"Component"}),(0,m.mdx)("h2",{id:"examples"},"Examples"),(0,m.mdx)("h3",{id:"usepricesummary"},"usePriceSummary()"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react'\nimport { usePriceSummary } from '@magento/peregrine/lib/talons/CartPage/PriceSummary/usePriceSummary';\n\nimport { GET_PRICE_SUMMARY } from './myPriceSummary.gql';\n\n\nconst MyPriceSummary = props => {\n    const { isUpdating } = props;\n\n    const talonProps = usePriceSummary({\n        queries: {\n            getPriceSummary: GET_PRICE_SUMMARY\n        }\n    });\n\n    const {\n        handleProceedToCheckout,\n        hasError,\n        hasItems,\n        isCheckout,\n        isLoading,\n        flatData\n    } = talonProps;\n\n    if (hasError) {\n        return (\n            <div>\n                Something went wrong. Please refresh and try again.\n            </div>\n        );\n    } else if (!hasItems || isLoading) {\n        return null;\n    }\n\n    const { subtotal, total, discounts, giftCards, taxes, shipping } = flatData;\n\n    return (\n        // JSX that renders a price summary component using data from the talon\n    )\n}\n\nexport default MyPriceSummary\n")))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-api-peregrine-talons-cart-page-price-summary-index-md-bc7e6201983cf1897e6d.js.map