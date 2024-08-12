import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-use";

const Seo = ({title="", description="", keywords="", schema="", script="", otherScript="", noIndex=false}) => {
    const { pathname } =useLocation();
    return(
        <Helmet>
            <meta charSet="utf-8" />
            {/* <link rel="alternate" href="https://www.theabacus.in/" hreflang="en"/> */}
            <title>{title || "TheAbacus"}</title>
            <meta name="description" content={description || ""} />
            <meta property="og:title" content={title || "TheAbacus"} />
            <meta property="og:description" content={description} />
            {noIndex && (
                <meta name="robots" content="noindex, nofollow"/>
            )}
            <link rel="canonical" href={`https://www.theabacus.in${pathname}`} />
            {keywords && (
                <meta name="keywords" content={keywords}></meta>
            )}
            {schema && (
                <script defer type="application/ld+json">
                    {schema}
                </script>
            )}
            {script && (
                <script defer type="application/ld+json">
                    {script}
                </script>
            )}
            {otherScript && (
                <script defer type="application/ld+json">
                    {otherScript}
                </script>
            )}
        </Helmet>
    )
}

export default Seo;