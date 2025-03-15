import PointsSVG from "@/components/PointsSVG";
import Timer from "@/components/Timer";
import Button from "@/components/ui/Button";
import Line from "@/components/ui/Line";
import { Semicircle } from "@/components/ui/SemicircleHidden";
import Image from "next/image";

export default function Home() {
  return (
    <main className="container mx-auto">
      <div className="flex justify-center items-center h-screen">
        {/* Card */}
        <div className="card">
          <Semicircle position="top" />
          <Semicircle position="bottom" />
          <Line />

          <div className="flex justify-between gap-20">
            <div className="space-y-1">
              <h2 className="mainTitle">تنظيف صحي يعني حياة أفضل</h2>
              <p className="text">هذا النص هو مثال لنص يستبدل</p>
            </div>

            <div className="flex items-center gap-2">
              <Timer number={30} text="يوم" />
              <PointsSVG />
              <Timer number={25} text="ساعة" />
              <PointsSVG />
              <Timer number={20} text="دقيقة" />
              <PointsSVG />
              <Timer number={15} text="ثانية" />
            </div>
          </div>

          <div className="flex justify-between">
            <div className="flex items-center gap-4">
              <Image
                src="/Images/Rectangle 29338.png"
                width={45}
                height={45}
                alt="square"
              />

              <div>
                <h3 className="text font-bold">موقع الورشة</h3>
                <h4 className="text">يتم عمل الورشة عبر موقع الزوم</h4>
              </div>
            </div>

            <div className="mx-10">
              <Image
                src="/Icons/BarCode.svg"
                width={65}
                height={65}
                alt="points"
              />
            </div>
          </div>

          <div className="flex justify-between">
            <div>
              <h3 className="text">✅ كيفية عمل مزيل عرق منزلي</h3>
              <h3 className="text">✅ وصفات طبيعية سهلة وفعّالة</h3>
            </div>

            <Button text="احجز تذكرتك" />
          </div>
        </div>
      </div>
    </main>
  );
}
