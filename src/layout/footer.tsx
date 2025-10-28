import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import FacebookPageEmbed from "./facebook";
import { ROUTES, SOCIAL_LINKS } from "@/utils/route";
import { toast } from "@/hooks/use-toast";
import { IMAGES } from "@/utils/image";

const Footer: React.FC = () => {
  const [toggle1, setToggle1] = useState(true);
  const [toggle2, setToggle2] = useState(true);
  const [toggle3, setToggle3] = useState(true);

  return (
    <>
      <footer
        className="w-full pt-12 pb-7 flex justify-center items-center"
        style={{ backgroundColor: "rgba(var(--primary-rgb), 0.65)" }}
      >
        <div className="max-w-7xl container !px-5 lg:!px-0 !mx-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
            <div className="space-y-4">
              <h3 className="text-md font-semibold text-gray-900">
                KẾT NỐI & CHIA SẺ
              </h3>
              <ul className="space-y-2 w-5/6">
                <li>
                  <Link href="/" className="text-gray-600 hover:text-gray-900">
                    Hãy đăng ký nhận bản tin & LIKE trên Facebook để xem tại sao
                    mọi người lại yêu thích & lựa chọn{" "}
                    <strong className="text-[rgb(var(--fifteenth-rgb))]">
                      In Ảnh Hạ Thu
                    </strong>{" "}
                    là nhà in tin cậy của Photographer.
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col space-y-4">
              <div className="space-y-4">
                <h3 className="text-md font-semibold text-gray-900">
                  THEO DÕI CHÚNG TÔI
                </h3>
                <div className="flex space-x-4">
                  <Link
                    href={SOCIAL_LINKS.FACEBOOK}
                    target="_blank"
                    className="text-blue-600 hover:text-blue-700"
                  >
                    <Image
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/768px-Facebook_Logo_%282019%29.png"
                      alt="alt"
                      width={1000}
                      height={1000}
                      className="w-7 h-7 lg:w-9 lg:h-9"
                    />
                  </Link>
                  <Link
                    href={SOCIAL_LINKS.ZALO}
                    target="_blank"
                    className="text-gray-900 hover:text-gray-700"
                  >
                    <Image
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Icon_of_Zalo.svg/2048px-Icon_of_Zalo.svg.png"
                      alt="alt"
                      width={1000}
                      height={1000}
                      className="w-7 h-7 lg:w-9 lg:h-9"
                    />
                  </Link>
                  <Link href={SOCIAL_LINKS.TIKTOK} target="_blank">
                    <Image
                      src="https://banner2.cleanpng.com/20231123/xjc/transparent-tiktok-logo-black-and-white-logo-tiktok-app-minima-minimalist-black-and-white-tiktok-app-1711004158896.webp"
                      alt="alt"
                      width={1000}
                      height={1000}
                      className="w-7 h-7 lg:w-9 lg:h-9 rounded-full"
                    />
                  </Link>
                  <Link href={SOCIAL_LINKS.SHOPPE} target="_blank">
                    <Image
                      src="https://tiemquatiko.com/wp-content/uploads/2022/08/shopee-circle-logo-design-shopping-bag-13.png"
                      alt="alt"
                      width={1000}
                      height={1000}
                      className="w-7 h-7 lg:w-9 lg:h-9"
                    />
                  </Link>
                </div>
              </div>
              <div className="w-full">
                <FacebookPageEmbed />
              </div>
            </div>
            <div className="space-y-4">
              <h3
                onClick={() => setToggle1(!toggle1)}
                className="cursor-pointer text-md font-semibold text-gray-900 flex"
              >
                THÔNG TIN CHUNG{" "}
                <ChevronDown
                  className={`w-5 h-5 ml-2 transition-transform ${
                    toggle1 ? "rotate-180" : ""
                  }`}
                />
              </h3>
              {toggle1 && (
                <ul className="space-y-2">
                  <li>
                    <Link
                      href={`${ROUTES.ABOUT}`}
                      className="text-gray-600 hover:text-[rgb(var(--fifteenth-rgb))]"
                    >
                      Giới thiệu
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`${ROUTES.POLICY}?scrollTo=dt`}
                      className="text-gray-600 hover:text-[rgb(var(--fifteenth-rgb))]"
                    >
                      Chính sách đổi trả
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`${ROUTES.POLICY}?scrollTo=gh`}
                      className="text-gray-600 hover:text-[rgb(var(--fifteenth-rgb))]"
                    >
                      Điều khoản giao hàng
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`${ROUTES.POLICY}?scrollTo=bm`}
                      className="text-gray-600 hover:text-[rgb(var(--fifteenth-rgb))]"
                    >
                      Chính sách bảo mật
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`${ROUTES.POLICY}?scrollTo=tt`}
                      className="text-gray-600 hover:text-[rgb(var(--fifteenth-rgb))]"
                    >
                      Chính sách thanh toán
                    </Link>
                  </li>
                </ul>
              )}
            </div>
            <div className="space-y-4">
              <h3
                onClick={() => setToggle2(!toggle2)}
                className="cursor-pointer text-md font-semibold text-gray-900 flex"
              >
                IN ẢNH HẠ THU{" "}
                <ChevronDown
                  className={`w-5 h-5 ml-2 transition-transform ${
                    toggle2 ? "rotate-180" : ""
                  }`}
                />
              </h3>
              {toggle2 && (
                <ul className="space-y-2">
                  <li>
                    <Link
                      href={`${ROUTES.HOME}`}
                      className="text-gray-600 hover:text-[rgb(var(--fifteenth-rgb))]"
                    >
                      Trang chủ
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`${ROUTES.ABOUT}`}
                      className="text-gray-600 hover:text-[rgb(var(--fifteenth-rgb))]"
                    >
                      Giới thiệu
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`${ROUTES.PRODUCT}`}
                      className="text-gray-600 hover:text-[rgb(var(--fifteenth-rgb))]"
                    >
                      Sản phẩm
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`${ROUTES.PRICING}`}
                      className="text-gray-600 hover:text-[rgb(var(--fifteenth-rgb))]"
                    >
                      Bảng giá
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`${ROUTES.BLOG}`}
                      className="text-gray-600 hover:text-[rgb(var(--fifteenth-rgb))]"
                    >
                      Blog
                    </Link>
                  </li>

                  {/* <li>
                  <Link href="/" className="text-gray-600 hover:text-gray-900">
                    Liên hệ với chúng tôi
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-gray-600 hover:text-gray-900">
                    Vị trí cửa hàng
                  </Link>
                </li> */}
                </ul>
              )}
            </div>
            <div className="space-y-4">
              <h3
                onClick={() => setToggle3(!toggle3)}
                className="cursor-pointer text-md font-semibold text-gray-900 flex"
              >
                CÁC TỈNH THÀNH{" "}
                <ChevronDown
                  className={`w-5 h-5 ml-2 transition-transform ${
                    toggle3 ? "rotate-180" : ""
                  }`}
                />
              </h3>
              {toggle3 && (
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      TP. Hồ Chí Minh
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      Cần Thơ
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      Cà Mau
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      Đà Nẵng
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      Hải Phòng
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      Nha Trang
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      Vĩnh Long
                    </Link>
                  </li>
                </ul>
              )}
            </div>
            <div className="space-y-4">
              <h3 className="text-md font-semibold text-gray-900">
                PHƯƠNG THỨC THANH TOÁN
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <Image
                    src="https://cdn-icons-png.flaticon.com/128/7630/7630510.png"
                    alt="Tiền mặt"
                    width={24}
                    height={24}
                  />
                  <span className="text-gray-600">Tiền mặt</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Image
                    src="https://cdn-icons-png.flaticon.com/128/15953/15953021.png"
                    alt="Chuyển khoản"
                    width={24}
                    height={24}
                  />
                  <span className="text-gray-600">Chuyển khoản</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Image
                    src={IMAGES.MOMO || ""}
                    alt="Momo"
                    width={24}
                    height={24}
                  />
                  <span className="text-gray-600">Momo</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Image
                    src={IMAGES.VNPAY || ""}
                    alt="VNPay"
                    width={24}
                    height={24}
                  />
                  <span className="text-gray-600">VNPay</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-md font-semibold text-gray-900">
                CHỨNG CHỈ UY TÍN
              </h3>
              <div className="flex flex-row lg:flex-col justify-start items-center lg:items-start gap-4 mt-3">
                <Link
                  href="http://online.gov.vn/Home/WebDetails/137014"
                  target="_blank"
                >
                  <Image
                    src="https://webmedia.com.vn/images/2021/09/logo-da-thong-bao-bo-cong-thuong-mau-xanh.png"
                    alt="Đã thông báo Bộ Công Thương"
                    width={128}
                    height={0}
                  />
                </Link>{" "}
                <Link
                  href="https://www.dmca.com/site-report/www.inanhhathu.com"
                  target="_blank"
                >
                  {" "}
                  <Image
                    src="https://images.dmca.com/Badges/dmca_protected_sml_120m.png"
                    alt="DMCA Protected"
                    width={1000}
                    height={1000}
                    className="w-32 h-14 object-contain"
                  />{" "}
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-md font-semibold text-gray-900">TẢI APP</h3>
              <div className="flex flex-row lg:flex-col justify-start items-start gap-4">
                <Link href={SOCIAL_LINKS.DOWNLOAD_IOS} target="_blank">
                  <Image
                    src={IMAGES.FOOTER_IOS || ""}
                    alt="ios"
                    width={140}
                    height={0}
                  />
                </Link>
                {/* <div
                  onClick={() => {
                    toast({
                      variant: "default",
                      title: "Thông báo",
                      description: "Chức năng này đang được phát triển.",
                    });
                  }}
                  className="cursor-pointer"
                >
                  <Image
                    src={IMAGES.FOOTER_ANDROID || ""}
                    alt="chplay"
                    width={140}
                    height={0}
                  />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="w-full text-center py-5 bg-[rgb(var(--primary-rgb))]">
        <div className="text-gray-600 text-sm">
          <p>Copyright © 2025 IN ẢNH HẠ THU.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
