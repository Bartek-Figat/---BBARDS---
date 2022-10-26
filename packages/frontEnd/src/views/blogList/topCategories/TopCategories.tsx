interface CategoriesPropCard {
  key: string;
  title: string;
  value: string;
}

export const TopCategories = ({ key, title, value }: CategoriesPropCard) => {
  return (
    <div className="flex justify-between items-center border-b group">
      <div className="text-gray-dark text-lg font-medium group-hover:text-dark-blue hover:underline group-hover:underline-offset-1 transition duration-300">
        {title}
      </div>
      <div className="flex justify-center items-center text-dark-blue bg-white rounded-full my-2 font-medium w-[35px] h-[35px] group-hover:bg-dark-blue group-hover:text-white">
        <p className="text-sm ">{value}</p>
      </div>
    </div>
  );
};
