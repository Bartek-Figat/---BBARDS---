interface CategoriesPropCard {
  key: string;
  title: string;
  value: string;
}

export const TopCategories = ({ key, title, value }: CategoriesPropCard) => {
  return (
    <div className="flex justify-between items-center border-b ">
      <div className="text-gray-dark text-lg font-medium">{title}</div>
      <div className="flex justify-center items-center text-dark-blue bg-white rounded-full my-2 font-medium w-[35px] h-[35px] hover:bg-dark-blue hover:text-white">
        <p className="text-sm ">{value}</p>
      </div>
    </div>
  );
};
