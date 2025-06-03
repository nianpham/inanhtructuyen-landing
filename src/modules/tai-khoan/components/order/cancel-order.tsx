import React, { useEffect, useState } from "react";
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
import { Button } from "@/components/ui/button";
import { OrderService } from "@/services/order";
import { ROUTES } from "@/utils/route";
import { ProductService } from "@/services/product";
interface Product {
  _id: string;
  name: string;
  description: string;
  introduction: string;
  price: string;
  thumbnail: string;
  category: string;
  sold: number;
  color: Array<string>;
  images: Array<string>;
  created_at: Date;
}

const CancelOrderModal = ({ order, customerAccount }: any) => {
  const [productPrice, setProductPrice] = useState<Number | 0>(0);
  const shippingFee = 30000;
  const total = Number(productPrice) + shippingFee;
  const [product, setProduct] = useState<Product | null>(null);

  const init = async () => {
    const fetchProduct = async () => {
      try {
        const data = await ProductService.getProductById(order?.product_id);
        setProduct(data.data);
        setProductPrice(data.data.price);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  };

  useEffect(() => {
    init();
  }, []);

  const handleUpdateStatus = async (id: string, status: string) => {
    const body = {
      status: status,
    };

    await OrderService.updateOrder(id, body);
    // window.location.href = `${ROUTES.ACCOUNT}?tab=history`;
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="text-red-600 hover:text-white hover:bg-red-600 text-base font-medium px-3 py-2 border border-red-600 hover:border-red-600 rounded transition-colors">
          Hủy đơn hàng
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] z-[70]">
        <DialogHeader>
          <DialogTitle className="!text-[20px]">
            Hủy đơn hàng #{order?._id?.slice(-6)}
          </DialogTitle>
        </DialogHeader>
        <DialogDescription className="text-center lg:!text-left">
          <span className="!text-[16px]">
            Để hủy đơn hàng #{order?._id?.slice(-6)} vui lòng bấm{" "}
            <strong className="!text-red-600">Xác nhận</strong> để hủy.
          </span>
        </DialogDescription>
        <DialogFooter className="flex flex-row justify-between">
          <DialogClose>
            <Button
              type="button"
              variant="secondary"
              className="!px-10 !text-[16px] w-32 !rounded"
            >
              Hủy
            </Button>
          </DialogClose>
          <Button
            type="button"
            variant="destructive"
            className="!px-10 !text-[16px] !bg-red-600 hover:opacity-80 w-32 !rounded"
            onClick={() => handleUpdateStatus(order?._id, "cancelled")}
          >
            Xác nhận
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CancelOrderModal;
