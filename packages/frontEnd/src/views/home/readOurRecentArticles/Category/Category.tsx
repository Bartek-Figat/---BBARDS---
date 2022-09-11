const colors = {
  marketing: "bg-green-500",
  security: "bg-orange-300",
  advertise: "bg-violet-600",
  safe: "bg-red-600",
};

type Props = {
  category: "marketing" | "security" | "advertise" | "safe";
};

const Category: React.FC<Props> = ({ category }) => {
  const categoryColors = colors[category];
  return (
    <div
      className={`text-sm py-1 px-2 ${categoryColors} absolute top-5 left-5 text-white rounded-sm capitalize`}
    >
      {category}
    </div>
  );
};

export default Category;
