import ListElement from '../ListElement/ListElement';

type Props = {
  category: string;
  amount: number;
  link: string;
  products: {
    product: string;
    amount: number;
    link: string;
  }[];
};

const Card: React.FC<Props> = ({ category, amount, products, link }) => {
  return (
    <div className='w-11/12 sm:w-64 bg-gray-chalk hover:bg-white hover:shadow-gray-400 hover:shadow-xl ease-in duration-300 rounded-lg overflow-hidden'>
      <a href={link}>
        <div className='relative'>
          <img
            className='h-32 w-full object-cover'
            src={require(`../../../../assets/images/category/${category}.jpg`)}
            alt={category}
          />
          <div className='absolute w-full h-full bg-dark-blue opacity-40 top-0 left-0'></div>
          <div className='absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <h3 className='text-xl font-bold capitalize'>{category}</h3>
            <p className='text-sm'>({amount})</p>
          </div>
        </div>
      </a>
      <ul className='px-5 py-3 '>
        {products.map(({ amount, product }) => (
          <ListElement
            amount={amount}
            category={product}
            link={link}
          />
        ))}
      </ul>
    </div>
  );
};

export default Card;
