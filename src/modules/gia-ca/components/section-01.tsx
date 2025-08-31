"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { IMAGES } from "@/utils/image";
import Link from "next/link";
import { ROUTES } from "@/utils/route";
import { ProductService } from "@/services/product";
import { DATA } from "@/utils/data";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { HELPER } from "@/utils/helper";
import "../../../styles/helper.css";

interface SizeOption {
  id: string;
  label: string;
  dimensions: {
    width: number;
    height: number;
  };
}

const Section01 = () => {
  const [products, setProducts] = useState([] as any);
  const [selectedProduct, setSelectedProduct] =
    React.useState<any>("Chon san pham");
  const [selectedSize, setSelectedSize] =
    React.useState<any>("Chon kich thuoc");
  const [selectedMaterial, setSelectedMaterial] =
    React.useState<any>("Gỗ composite");
  const renderProduct = async () => {
    const res = await ProductService.getAll();
    if (res && res.data.length > 0) {
      setProducts(res.data);
      const uniqueSizes = Array.from(
        new Set(
          res.data.flatMap((product: any) =>
            product.product_option.map((option: any) => option.size)
          )
        )
      ) as string[];
      console.log("Unique Sizes:", uniqueSizes);

      setSize(uniqueSizes);
    }
  };

  const [size, setSize] = useState<string[]>([]);

  useEffect(() => {
    renderProduct();
  }, []);
  const priceData = DATA.priceData;

  return (
    <section className="w-[100%] h-full mx-auto pt-10 lg:pt-20 pb-20 relative overflow-hidden">
      <div className="space-y-4 max-w-7xl mx-auto px-4 lg:px-0">
        <div className="space-y-10 mb-5 lg:mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full">
            <div className="flex flex-col justify-start items-start gap-4 lg:gap-6">
              <div className="relative z-20">
                <div
                  className={`absolute bottom-[33%] lg:bottom-[11%] -right-[7%] lg:left-[54%] h-2 w-32 lg:w-[122px] bg-[rgb(var(--fifteenth-rgb))] opacity-45 z-10`}
                ></div>
                <h3
                  className={`text-2xl font-bold text-gray-900 pb-3 lg:pb-0 z-20 relative`}
                >
                  Tìm nhanh sản phẩm
                </h3>
              </div>
              <div className="w-full pb-3 lg:pb-0">
                <div>
                  <Label
                    htmlFor="name"
                    className="text-black font-base text-[16px]"
                  >
                    Tên sản phẩm
                  </Label>
                  <div className="bg-gray-50 border border-gray-100 text-gray-900 rounded-lg block w-full my-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <div className="text-[16px] cursor-pointer flex flex-row justify-between items-center gap-4 p-2 bg-white rounded-md border border-gray-200">
                          {selectedProduct &&
                          selectedProduct !== "Chon san pham" ? (
                            products?.find(
                              (item: any) =>
                                String(item?._id) === selectedProduct
                            ) ? (
                              <div className="cursor-pointer flex flex-row items-center gap-2">
                                <Image
                                  src={
                                    products?.find(
                                      (item: any) =>
                                        String(item?._id) === selectedProduct
                                    )?.thumbnail
                                  }
                                  alt=""
                                  width={1000}
                                  height={1000}
                                  className="object-cover w-10 h-10 shrink-0 border border-gray-200"
                                />
                                <p className="text-[16px] line-clamp-2">
                                  {
                                    products?.find(
                                      (item: any) =>
                                        String(item?._id) === selectedProduct
                                    )?.name
                                  }
                                </p>
                              </div>
                            ) : (
                              "Chọn sản phẩm"
                            )
                          ) : (
                            "Chọn sản phẩm"
                          )}
                        </div>
                      </DialogTrigger>
                      <DialogContent className="z-[70]">
                        <DialogHeader>
                          <DialogTitle className="mb-3 !text-[20px]">
                            Vui lòng chọn sản phẩm
                          </DialogTitle>
                          <DialogDescription className="max-h-96 overflow-y-auto scroll-bar-style text-[16px]">
                            <div className="">
                              {products?.length > 0 ? (
                                products.map((item: any) => (
                                  <DialogClose asChild key={item._id}>
                                    <div
                                      className="mb-0 cursor-pointer hover:bg-gray-100 py-2 rounded-md"
                                      onClick={() =>
                                        setSelectedProduct(item._id)
                                      }
                                    >
                                      <div className="flex flex-row items-start gap-4">
                                        <Image
                                          src={item.thumbnail}
                                          alt={item.name}
                                          width={1000}
                                          height={1000}
                                          className="object-cover border border-gray-200 w-14 h-14 shrink-0"
                                        />
                                        <p className="text-left w-full !text-[16px] line-clamp-2 leading-6 text-black">
                                          {item.name}
                                        </p>
                                      </div>
                                    </div>
                                  </DialogClose>
                                ))
                              ) : (
                                <p className="text-black">
                                  Không có sản phẩm nào để chọn.
                                </p>
                              )}
                            </div>
                          </DialogDescription>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
                <div className="pt-1">
                  <Label
                    htmlFor="name"
                    className="text-black font-base text-[16px]"
                  >
                    Kích thước sản phẩm
                  </Label>
                  <div className="bg-gray-50 border border-gray-100 text-gray-900 rounded-lg block w-full my-2 text-[16px]">
                    <Select
                      value={selectedSize}
                      onValueChange={setSelectedSize}
                    >
                      <SelectTrigger className="text-[16px]">
                        {selectedSize === "Chon kich thuoc"
                          ? "Chọn kích thước"
                          : ""}
                        <SelectValue placeholder="Chọn kích thước" />
                      </SelectTrigger>
                      <SelectContent className="">
                        {size?.map((item: any, index: any) => (
                          <SelectItem
                            className="text-xs"
                            key={index}
                            value={String(item?.id)}
                          >
                            {item}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-end items-end gap-2">
                <span className="text-base">Giá sản phẩm:</span>
                <span className="font-semibold">
                  {selectedProduct === "Chon san pham"
                    ? HELPER.formatVND("0")
                    : HELPER.formatVND(
                        products.find(
                          (pro: any) => pro._id.toString() === selectedProduct
                        )?.product_option[0]?.price
                      )}
                </span>
              </div>
            </div>
            <div>
              <Image
                src={IMAGES.BANNER_10}
                alt="price-banner"
                className="hidden lg:flex mx-auto w-full h-full object-contain rounded-md"
                width={1000}
                height={1000}
              />
            </div>
          </div>
          <div className="space-y-4 !mt-8">
            <div className="relative z-20">
              <div
                className={`absolute bottom-[33%] lg:bottom-[12%] left-[29%] lg:left-[8.3%] h-2 w-24 lg:w-24 bg-[rgb(var(--fifteenth-rgb))] opacity-45 z-10`}
              ></div>
              <h3
                className={`text-2xl font-bold text-gray-900 pb-3 lg:pb-0 z-20 relative`}
              >
                Bảng giá chi tiết
              </h3>
            </div>
            <Card className="border-none shadow-none">
              <CardContent className="p-0">
                <Table>
                  <TableHeader className="bg-[rgb(var(--primary-rgb))] !hover:bg-[rgb(var(--primary-rgb))] text-[16px]">
                    <TableRow>
                      <TableHead className="text-black px-1 lg:px-2 text-center">
                        Kích thước
                      </TableHead>
                      <TableHead className="text-black px-1 lg:px-2 text-center">
                        In Ảnh
                      </TableHead>
                      <TableHead className="text-black px-1 lg:px-2 text-center">
                        Phủ UV hoặc lụa mờ
                      </TableHead>
                      <TableHead className="text-black px-1 lg:px-2 text-center">
                        Ép Plastic
                      </TableHead>
                      <TableHead className="text-black px-1 lg:px-2 text-center">
                        Ảnh gỗ Composite
                      </TableHead>
                      <TableHead className="text-black px-1 lg:px-2 text-center">
                        Ảnh gỗ Meka
                      </TableHead>
                      <TableHead className="text-black px-1 lg:px-2 text-center">
                        Bóc cạnh ghép nhựa
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {priceData.map((item) => (
                      <TableRow key={item.size} className="text-[16px]">
                        <TableCell className="text-center">
                          {item.size}
                        </TableCell>
                        <TableCell className="text-center">
                          {item.inAnh.toLocaleString()}
                        </TableCell>
                        <TableCell className="text-center">
                          {item["Phủ UV hoặc lụa mờ"].toLocaleString()}
                        </TableCell>
                        <TableCell className="text-center">
                          {item.inAnh.toLocaleString()}
                        </TableCell>
                        <TableCell className="text-center">
                          {item["Ảnh gỗ Composite"].toLocaleString()}
                        </TableCell>
                        <TableCell className="text-center">
                          {item["Ảnh gỗ Meka"].toLocaleString()}
                        </TableCell>
                        <TableCell className="text-center">
                          {item["Bóc cạnh ghép nhựa"].toLocaleString()}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section01;
