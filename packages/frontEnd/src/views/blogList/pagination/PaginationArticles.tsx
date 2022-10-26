import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";
export const PaginationArticles = () => {
  return (
    // to tylko wygląda, wymaga zrobienia funkcjonalności!
    <div className="w-full flex justify-center items-center gap-2 pt-8">
      <FaLongArrowAltLeft className="text-gray-dark" />

      <p className="bg-dark-blue rounded-full py-2 px-5 text-white font-bold text-lg">
        1
      </p>
      <p className="hover:bg-dark-blue hover:text-white rounded-full py-2 px-5 text-gray-dark font-bold text-lg">
        2
      </p>
      <p className="hover:bg-dark-blue hover:text-white rounded-full py-2 px-5 text-gray-dark font-bold text-lg">
        3
      </p>
      <p>...</p>
      <p className="hover:bg-dark-blue hover:text-white rounded-full py-2 px-5 text-gray-dark font-bold text-lg">
        67
      </p>
      <FaLongArrowAltRight className="text-gray-dark" />
    </div>
  );
};
