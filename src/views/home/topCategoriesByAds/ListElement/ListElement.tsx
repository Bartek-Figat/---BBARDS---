type Props = {
  category: string;
  amount: number;
  link: string;
};

const ListElement: React.FC<Props> = ({ category, amount, link }) => {
  return (
    <li className='border-gray-mercury border-b-[1px] last:border-b-0 text-black-heading group'>
      <a
        className='py-2 flex justify-between'
        href={link}
      >
        <h5 className='text-base font-medium group-hover:text-dark-blue'>{category}</h5>
        <p className='text-sm'>({amount})</p>
      </a>
    </li>
  );
};

export default ListElement;
