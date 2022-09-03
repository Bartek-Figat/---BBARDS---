import Card from '../Card/Card';
import { data } from '../data';
import { FaEye } from 'react-icons/fa';

export const Wrapper = () => {
  return (
    <section className='max-w-6xl mx-auto text-center px-4 mt-32'>
      <h2 className='text-4xl font-bold mb-4'>
        Top Categories by<span className='text-dark-blue'> Ads</span>
      </h2>
      <p className='w-full sm:w-[600px] mx-auto mb-10'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit aspernatur illum vel sunt libero voluptatum repudiandae
        veniam maxime tenetur.
      </p>
      <ul className='flex flex-wrap justify-center gap-8'>
        {data.map(({ category, amount, link, products }) => {
          return (
            <Card
              category={category}
              link={link}
              amount={amount}
              products={products}
            />
          );
        })}
      </ul>
      <button className='mx-auto bg-[#0044bb] border-2 border-[#0044bb] hover:bg-[#0044bb] text-white px-5 py-3 rounded-md uppercase font-medium flex justify-center items-center mt-11'>
        <FaEye className='text-xl mr-2' />
        view all categories
      </button>
    </section>
  );
};
