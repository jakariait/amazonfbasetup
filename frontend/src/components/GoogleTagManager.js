// "use client";
//
// import Script from "next/script";
// import { usePathname } from "next/navigation";
// import { useEffect } from "react";
//
// export default function GoogleTagManager() {
//   const pathname = usePathname();
//
//   // Route change push to GTM
//   useEffect(() => {
//     window.dataLayer = window.dataLayer || [];
//     window.dataLayer.push({
//       event: "pageview",
//       page: pathname,
//     });
//   }, [pathname]);
//
//   return (
//     <>
//       {/* GTM script */}
//       <Script id="gtm-script" strategy="afterInteractive">
//         {`
//           (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
//           new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
//           j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
//           'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
//           })(window,document,'script','dataLayer','GTM-KK3QPLML');
//         `}
//       </Script>
//
//       {/* Noscript fallback */}
//       <noscript>
//         <iframe
//           src="https://www.googletagmanager.com/ns.html?id=GTM-KK3QPLML"
//           height="0"
//           width="0"
//           style={{ display: "none", visibility: "hidden" }}
//         />
//       </noscript>
//     </>
//   );
// }
//
"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function GoogleTagManager() {
  const pathname = usePathname();

  useEffect(() => {
    window.dataLayer = window.dataLayer || [];

    // Pageview event
    window.dataLayer.push({
      event: "pageview",
      page: pathname,
    });

    // Custom view_content event
    window.dataLayer.push({
      event: "view_content",
      content_type: "landing_page",
      page: pathname,
      // add other relevant data here as needed
    });
  }, [pathname]);

  return (
    <>
      {/* GTM script */}
      <Script id="gtm-script" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-KK3QPLML');
        `}
      </Script>

      {/* Noscript fallback */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-KK3QPLML"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>
    </>
  );
}