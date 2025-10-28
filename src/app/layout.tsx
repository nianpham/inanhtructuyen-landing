import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ProductProvider } from "@/modules/san-pham/components/product-context";
import { ReduxProvider } from "@/providers/ReduxProvider";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.inanhhathu.com"),
  title: "In Ảnh Hạ Thu",
  description:
    "Chỉnh sửa ảnh miễn phí và in ảnh Hạ Thu dễ dàng. Tải lên những tấm ảnh yêu thích và bắt đầu chỉnh sửa ngay!",
  openGraph: {
    title: "In Ảnh Hạ Thu",
    description:
      "Chỉnh sửa ảnh hoàn toàn miễn phí và in ảnh Hạ Thu dễ dàng. Chọn ảnh yêu thích và tải lên để chỉnh sửa!",
    url: "https://www.inanhhathu.com/",
    siteName: "In Ảnh Hạ Thu",
    images: [
      {
        url: "https://res.cloudinary.com/farmcode/image/upload/v1757376935/iatt/bg-full_hahqqi.png",
        width: 1200,
        height: 630,
        alt: "In Ảnh Hạ Thu",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org JSON-LD giúp Google hiểu tên thương hiệu & domain
  const siteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: "https://www.inanhhathu.com/",
    name: "In Ảnh Hạ Thu",
    alternateName: ["In Anh Ha Thu", "In Ảnh Hạ Thu - In ảnh & khung ảnh"],
    publisher: {
      "@type": "Organization",
      name: "In Ảnh Hạ Thu",
      url: "https://www.inanhhathu.com/",
      logo: {
        "@type": "ImageObject",
        url: "https://res.cloudinary.com/farmcode/image/upload/v1757376935/iatt/bg-full_hahqqi.png",
      },
    },
  };

  return (
    <html lang="vi">
      <head>
        <title>In Ảnh Hạ Thu</title>
        <meta
          name="description"
          content="Chỉnh sửa ảnh miễn phí và in ảnh Hạ Thu dễ dàng. Tải lên những tấm ảnh yêu thích và bắt đầu chỉnh sửa ngay!"
        />
        <meta property="og:site_name" content="In Ảnh Hạ Thu" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="vi_VN" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="In Ảnh Hạ Thu" />
        <meta
          property="twitter:description"
          content="In Ảnh Hạ Thu - In ảnh, chỉnh sửa ảnh và lưu giữ kỷ niệm dễ dàng!"
        />
        <meta
          property="twitter:image"
          content="https://res.cloudinary.com/farmcode/image/upload/v1757376935/iatt/bg-full_hahqqi.png"
        />
      </head>
      <body suppressHydrationWarning={true}>
        <GoogleAnalytics gaId="G-ZS4CC8H5VQ" />
        <ReduxProvider>
          <ProductProvider>
            {children}
            <Toaster />
          </ProductProvider>
        </ReduxProvider>
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
        />
      </body>
    </html>
  );
}
