import type { Metadata } from "next";
// import { Manrope } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ProductProvider } from "@/modules/san-pham/components/product-context";
import { ReduxProvider } from "@/providers/ReduxProvider";

// const font = Manrope({ subsets: ["latin"] });
// const font = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "In Ảnh Trực Tuyến",
  description:
    "Chỉnh sửa ảnh miễn phí và in ảnh trực tuyến dễ dàng. Tải lên những tấm ảnh yêu thích và bắt đầu chỉnh sửa ngay!",
  openGraph: {
    title: "In Ảnh Trực Tuyến",
    description:
      "Chỉnh sửa ảnh hoàn toàn miễn phí và in ảnh trực tuyến dễ dàng. Chọn ảnh yêu thích và tải lên để chỉnh sửa!",
    url: "https://premium.inanhtructuyen.com",
    images: [
      {
        url: "https://res.cloudinary.com/farmcode/image/upload/v1738686742/iatt/IMG_1117_tg6fkb.jpg",
        width: 1200,
        height: 630,
        alt: "In Ảnh Trực Tuyến",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "In Ảnh Trực Tuyến",
    description:
      "Chỉnh sửa ảnh miễn phí và in ảnh trực tuyến dễ dàng. Tải lên ảnh yêu thích và chỉnh sửa ngay!",
    images: [
      "https://res.cloudinary.com/farmcode/image/upload/v1738686742/iatt/IMG_1117_tg6fkb.jpg",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // className={font.className}
        suppressHydrationWarning={true}
      >
        <ReduxProvider>
          <ProductProvider>
            {children}
            <Toaster />
          </ProductProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
