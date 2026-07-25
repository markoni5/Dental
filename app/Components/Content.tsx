import Image from "next/image";
import Link from "next/link";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import DiscountIcon from "@mui/icons-material/Discount";
import ShieldIcon from "@mui/icons-material/Shield";
import QuizIcon from "@mui/icons-material/Quiz";
function Content() {
  return (
    <div className="py-6 px-8 ">
      {/* MAIN CONTENT */}
      <div className="flex justify-between px-5 py-3 rounded">
        <div>
          <h1 className="font-bold text-5xl leading-[1.2]">
            Everything You Need <br /> For Your
            <span className="text-blue-500"> Dental Journey</span>
          </h1>
          <p className="mt-4">
            High-quality tools & materials for dental <br /> students -- All in
            one place.
          </p>
          <Link href="/shop">
            <button className=" cursor-pointer mt-6 px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors">
              Shop Now <ArrowRightAltIcon className="ml-1" />
            </button>
          </Link>
        </div>

        <div>
          <Image src="/dentalBaner.png" alt="" width={500} height={300} />
        </div>
      </div>

      <div className="flex justify-between px-6 py-3 mt-3">
        <div className="flex space-x-4  bg-zinc-100 px-8 py-4 rounded-2xl">
          <div className="flex items-center">
            <DeliveryDiningIcon fontSize="large" color="primary" />
          </div>
          <div className="flex flex-col justify-center  ">
            <p className="font-bold text-slate-900 ">Fast Delivrey</p>
            <p className="text-gray-500">Across Your University</p>
          </div>
        </div>

        <div className="flex space-x-4  bg-zinc-100 px-6 py-3 rounded-2xl">
          <div className="flex items-center">
            <DiscountIcon fontSize="large" color="primary" />
          </div>
          <div className="flex flex-col justify-center  ">
            <p className="font-bold text-slate-900 ">Students Discount</p>
            <p className="text-gray-500">Up to 25% Off</p>
          </div>
        </div>

        <div className="flex space-x-4  bg-zinc-100 px-6 py-3 rounded-2xl">
          <div className="flex items-center">
            <ShieldIcon fontSize="large" color="primary" />
          </div>
          <div className="flex flex-col justify-center  ">
            <p className="font-bold text-slate-900 ">Secure Payment</p>
          </div>
        </div>

        <div className="flex space-x-4  bg-zinc-100 px-6 py-3 rounded-2xl">
          <div className="flex items-center">
            <QuizIcon fontSize="large" color="primary" />
          </div>
          <div className="flex flex-col justify-center  ">
            <p className="font-bold text-slate-900 ">24/7 Support</p>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <div className="flex justify-between items-center">
          <h1 className="font-semibold text-2xl">Shop By Category</h1>
          <p className="text-blue-500 cursor-pointer hover:underline flex items-center">
            View All <ArrowRightAltIcon className="ml-1" />
          </p>
        </div>

        <div className="flex justify-between mt-6">
          <div className="flex flex-col items-center cursor-pointer duration-200 hover:text-blue-500 hover:underline hover:transition-bg rounded-lg">
            <Image src="/71JnB3Ni6cL.jpg" alt="" width={140} height={50} />
            <p className="px-2 py-2">Dental Insturments</p>
          </div>

          <div className="flex flex-col items-center cursor-pointer duration-200 hover:text-blue-500 hover:underline hover:transition-bg rounded-lg">
            <Image src="/tooth.png" alt="" width={140} height={50} />
            <p className="px-2 py-2">Study Materials</p>
          </div>

          <div className="flex flex-col items-center cursor-pointer duration-200 hover:text-blue-500 hover:underline hover:transition-bg rounded-lg">
            <Image src="/tym.png" alt="" width={140} height={50} />
            <p className="px-2 py-2">Models & Typodonts</p>
          </div>

          <div className="flex flex-col items-center cursor-pointer duration-200 hover:text-blue-500 hover:underline hover:transition-bg rounded-lg">
            <Image src="/handpi.png" alt="" width={140} height={50} />
            <p className="px-2 py-2">Handpieces</p>
          </div>

          <div className="flex flex-col items-center cursor-pointer duration-200 hover:text-blue-500 hover:underline hover:transition-bg rounded-lg">
            <Image src="/glov.png" alt="" width={140} height={50} />
            <p className="px-2 py-2">Consumables</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
