import LocalGallery from "../components/LocalGallery";
import MenuGallery from "../components/MenuGallery";

export default function AboutBertha() {
  return (
    <div
      className="flex flex-col xl:flex-row gap-4 xl:gap-6 2xl:gap-8 py-6 xl:py-8 2xl:py-12 px-2 sm:px-6 xl:px-4 2xl:px-0 justify-center items-center xl:items-start w-full"
    >
      <LocalGallery />
      <div className="flex flex-col gap-4 xl:gap-5 2xl:gap-6 w-full xl:w-auto">
        <MenuGallery />
        <MenuGallery />
      </div>
    </div>
  )
}