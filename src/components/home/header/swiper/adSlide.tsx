export const AdSlide: React.FC<{
  img: string;
  title: string;
}> = ({ img, title }) => {
  return (
    <div className="bg-[#dffbff] flex flex-col justify-center items-center rounded-lg border-b-[2px] border-[#0044bb] py-7">
      <img className="h-[50px]" src={img} alt="" />
      <p className="text-base mt-5 font-medium">{title}</p>
      <p className="text-[#0044bb] text-sm mt-1 font-medium">(4,521) ads</p>
    </div>
  );
};
