"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { AccountService } from "@/services/account";
import { Loader } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import "@/styles/hide-scroll.css";

export interface Province {
  code: string;
  codename: string;
  districts: District[];
  division_type: string;
  name: string;
  phone_code: number;
}

export interface District {
  code: string;
  codename: string;
  division_type: string;
  name: string;
  short_codename: string;
  wards: Ward[];
}

export interface Ward {
  code: string;
  codename: string;
  division_type: string;
  name: string;
  short_codename: string;
}

export interface UserData {
  name: string;
  email: string;
  avatar: string;
  phone: string;
  address: string;
  ward?: string;
  district?: string;
  province?: string;
}

export interface FormData extends UserData {
  ward: string;
  district: string;
  province: string;
}

const ProfileModal = () =>
  // { user }: { user: any }
  {
    const { toast } = useToast();

    const [provinces, setProvinces] = React.useState<Province[]>([]);
    const [districts, setDistricts] = React.useState<District[]>([]);
    const [wards, setWards] = React.useState<Ward[]>([]);
    const [loading, setLoading] = React.useState(false);
    const [formData, setFormData] = React.useState<FormData>({
      name: "Phạm Thanh Nghiêm",
      email: "nghiempt.dev@gmail.com",
      avatar: "",
      phone: "0911558539",
      address: "744/2 Nguyễn Kiệm",
      ward: "",
      district: "",
      province: "",
    });

    React.useEffect(() => {
      const fetchProvinces = async () => {
        try {
          setLoading(true);
          const response = await fetch(
            "https://provinces.open-api.vn/api/?depth=3"
          );
          const data = await response.json();
          const formattedData = data.map((province: any) => ({
            ...province,
            code: province.code.toString(),
            districts: province.districts.map((district: any) => ({
              ...district,
              code: district.code.toString(),
              wards: district.wards.map((ward: any) => ({
                ...ward,
                code: ward.code.toString(),
              })),
            })),
          }));
          setProvinces(formattedData);
        } catch (error) {
          console.error("Error fetching provinces:", error);
        } finally {
          setLoading(false);
        }
      };
      fetchProvinces();
    }, []);

    React.useEffect(() => {
      if (formData.province) {
        const selectedProvince = provinces.find(
          (p) => p.code === formData.province
        );
        if (selectedProvince) {
          setDistricts(selectedProvince.districts);

          const selectedDistrict = selectedProvince.districts.find(
            (d) => d.code === formData.district
          );
          if (selectedDistrict) {
            setWards(selectedDistrict.wards);
          }
        }
      }
    }, [formData.province, formData.district, provinces]);

    const handleProvinceChange = (provinceCode: string) => {
      const selectedProvince = provinces.find((p) => p.code === provinceCode);
      if (selectedProvince) {
        setDistricts(selectedProvince.districts);
        setWards([]);
        setFormData((prev) => ({
          ...prev,
          province: provinceCode,
          district: "",
          ward: "",
        }));
      } else {
        setDistricts([]);
        setWards([]);
      }
    };

    const handleDistrictChange = (districtCode: string) => {
      const selectedDistrict = districts.find((d) => d.code === districtCode);
      if (selectedDistrict) {
        setWards(selectedDistrict.wards || []);
        setFormData((prev) => ({
          ...prev,
          district: districtCode,
          ward: "",
        }));
      } else {
        setWards([]);
      }
    };

    const handleWardChange = (wardCode: string) => {
      setFormData((prev) => ({
        ...prev,
        ward: wardCode,
      }));
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    };

    const validateForm = () => {
      if (!formData?.name) {
        toast({
          title: "",
          description: "Vui lòng nhập tên!",
          variant: "destructive",
        });
        return false;
      }

      if (!formData?.address) {
        toast({
          title: "",
          description: "Vui lòng nhập địa chỉ giao hàng!",
          variant: "destructive",
        });
        return false;
      }
      if (!formData?.ward) {
        toast({
          title: "",
          description:
            "Vui lòng chọn đầy đủ Tỉnh/Thành phố, Quận/Huyện, Phường/Xã.",
          variant: "destructive",
        });
        return false;
      }
      if (!formData?.phone) {
        toast({
          title: "",
          description: "Vui lòng nhập số điện thoại!",
          variant: "destructive",
        });
        return false;
      }
      const phoneRegex = /^\d{10,11}$/;
      if (!phoneRegex.test(formData.phone)) {
        toast({
          title: "",
          description:
            "Số điện thoại phải là một dãy số hợp lệ (10 đến 11 chữ số)! ",
          variant: "destructive",
        });
        return false;
      }
      return true;
    };

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setLoading(true);
      const selectedProvince = provinces.find(
        (p) => p.code === formData.province
      );
      const selectedDistrict = districts.find(
        (d) => d.code === formData.district
      );
      const selectedWard = wards.find((w) => w.code === formData.ward);
      const formattedData = {
        ...formData,
        provinceName: selectedProvince?.name,
        districtName: selectedDistrict?.name,
        wardName: selectedWard?.name,
      };
      const response = await AccountService.updateAccount(
        // user?._id,
        "123", // Replace with actual user ID
        formattedData
      );
      if (response === false) {
        toast({
          title: "",
          description: "Số điện thoại đã được sử dụng!",
          variant: "destructive",
        });
        setLoading(false);
      } else {
        setLoading(false);
        // window.location.href = "/tai-khoan?tab=profile";
      }
    };

    const updateDOM = () => {
      //   if (user) {
      //     setFormData({
      //       name: user?.name || "",
      //       email: user?.email || "",
      //       avatar: user?.avatar || "",
      //       phone: user?.phone || "",
      //       address: user?.address || "",
      //       ward: user?.ward || "",
      //       district: user?.district || "",
      //       province: user?.province || "",
      //     });
      //   }
    };

    return (
      <Dialog>
        <DialogTrigger asChild onClick={updateDOM}>
          <button className="bg-[rgb(var(--fifteenth-rgb))] text-white hover:opacity-80 px-4 py-2 rounded text-[16px] font-medium transition-colors">
            Cập nhật thông tin
          </button>
        </DialogTrigger>
        <DialogContent
          className="sm:max-w-[425px] max-h-[90vh] z-[70]"
          onOpenAutoFocus={(e) => e.preventDefault()}
        >
          <DialogHeader className="px-1 ">
            <DialogTitle className="!text-[20px]">
              Chỉnh sửa thông tin
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 max-h-[80vh] overflow-y-auto z-[70] scroll-bar-style px-1">
            <div className="grid gap-2.5">
              <div className="w-full flex justify-center mt-3">
                <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
                  <svg
                    className="w-10 h-10 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="name" className="text-[16px]">
                  Họ và tên
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="focus:border-none focus:!ring-2 focus:!ring-[rgb(var(--fifteenth-rgb))] outline-none"
                  style={{ fontSize: "16px" }}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email" className="text-[16px]">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  // onChange={handleInputChange}
                  disabled={true}
                  style={{ fontSize: "16px" }}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone" className="text-[16px]">
                  Số điện thoại
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="focus:border-none focus:!ring-2 focus:!ring-[rgb(var(--fifteenth-rgb))] outline-none"
                  style={{ fontSize: "16px" }}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="province" className="text-[16px]">
                  Tỉnh/Thành phố
                </Label>
                <Select
                  value={formData.province}
                  onValueChange={handleProvinceChange}
                  disabled={loading}
                >
                  <SelectTrigger className="text-[16px] focus:border-none focus:!ring-2 focus:!ring-[rgb(var(--fifteenth-rgb))] outline-none">
                    <SelectValue placeholder="Chọn tỉnh/thành phố" />
                  </SelectTrigger>
                  <SelectContent className="z-[80]">
                    {provinces.map((province) => (
                      <SelectItem key={province.code} value={province.code}>
                        {province.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="district" className="text-[16px]">
                  Quận/Huyện
                </Label>
                <Select
                  value={formData.district}
                  onValueChange={handleDistrictChange}
                  disabled={!formData.province || loading}
                >
                  <SelectTrigger className="text-[16px] focus:border-none focus:!ring-2 focus:!ring-[rgb(var(--fifteenth-rgb))] outline-none">
                    <SelectValue placeholder="Chọn quận/huyện" />
                  </SelectTrigger>
                  <SelectContent className="z-[80]">
                    {districts.map((district) => (
                      <SelectItem key={district.code} value={district.code}>
                        {district.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="ward" className="text-[16px]">
                  Phường/Xã
                </Label>
                <Select
                  value={formData.ward}
                  onValueChange={handleWardChange}
                  disabled={!formData.district || loading}
                >
                  <SelectTrigger className="text-[16px] focus:border-none focus:!ring-2 focus:!ring-[rgb(var(--fifteenth-rgb))] outline-none">
                    <SelectValue placeholder="Chọn phường/xã" />
                  </SelectTrigger>
                  <SelectContent className="z-[80]">
                    {wards.map((ward) => (
                      <SelectItem key={ward.code} value={ward.code}>
                        {ward.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="address" className="text-[16px]">
                  Số nhà, tên đường
                </Label>
                <Input
                  id="address"
                  name="address"
                  placeholder="Ví dụ: 123 Đường ABC"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="focus:border-none focus:!ring-2 focus:!ring-[rgb(var(--fifteenth-rgb))] outline-none"
                  style={{ fontSize: "16px" }}
                />
              </div>
            </div>
            <Button
              type="submit"
              // onSubmit={handleSubmit}
              className="text-[16px] w-full bg-[rgb(var(--fifteenth-rgb))] hover:bg-[rgb(var(--fifteenth-rgb))] hover:opacity-80 text-white flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed rounded"
            >
              Lưu thay đổi
              {loading && <Loader className="animate-spin" size={48} />}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  };

export default ProfileModal;
