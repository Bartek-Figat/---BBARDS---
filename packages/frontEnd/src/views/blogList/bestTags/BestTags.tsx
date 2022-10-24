interface TagsProp {
  key: string;
  title: string;
}

export const BestTags = ({ key, title }: TagsProp) => {
  return (
    <div className="flex  border rounded-3xl px-4 py-2 items-center text-gray-dark hover:bg-dark-blue hover:text-white">
      {title}
    </div>
  );
};
