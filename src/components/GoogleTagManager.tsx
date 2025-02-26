"use client"

import Script from "next/script"
import { useEffect } from "react"

export function GoogleTagManager() {
  useEffect(() => {
    // Create and insert noscript iframe after component mounts
    const iframe = document.createElement("iframe")
    iframe.src = "https://www.googletagmanager.com/ns.html?id=GTM-TRPSDP69"
    iframe.height = "0"
    iframe.width = "0"
    iframe.style.display = "none"
    iframe.style.visibility = "hidden"

    const noscript = document.createElement("noscript")
    noscript.appendChild(iframe)

    // Insert at the beginning of body
    if (document.body.firstChild) {
      document.body.insertBefore(noscript, document.body.firstChild)
    } else {
      document.body.appendChild(noscript)
    }
  }, [])

  return (
    <>
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TRPSDP69');
          `,
        }}
      />
    </>
  )
}

