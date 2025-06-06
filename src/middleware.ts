import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { OrderService } from "./services/order";

export async function middleware(request: NextRequest) {
  const { pathname, searchParams } = new URL(request.url);

  if (pathname === "/tao-don-hang" && searchParams.get("type") === "album") {
    const orderAlbumID = searchParams.get("orderAlbumID");

    if (!orderAlbumID) {
      return NextResponse.redirect(new URL("/", request.url));
    }

    try {
      const order = await OrderService.getOrderById(orderAlbumID);
      if (!order) {
        return NextResponse.redirect(new URL("/", request.url));
      }
    } catch (error) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/tao-don-hang",
};
