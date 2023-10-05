import Card from "../Card/Card";
import LinkSection from "../LinkSection/LinkSection";
import { data } from "../data";

export const TopCategoriesByAds = () => {
  return (
    <section className="max-w-7xl mx-auto text-center  mt-32">
      <h2 className="text-4xl font-bold mb-4">
        Top Categories by<span className="text-dark-blue"> Ads</span>
      </h2>
      <p className="w-full sm:w-[600px] mx-auto mb-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit aspernatur illum
        vel sunt libero voluptatum repudiandae veniam maxime tenetur.
      </p>
      <ul className="grid gap-6 place-items-center min-h-screen p-4 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        {data.map(({ category, amount, products }) => {
          return (
            <Card
              key={category}
              category={category}
              amount={amount}
              products={products}
            />
          );
        })}
      </ul>
      <LinkSection to="/">view all categories</LinkSection>
    </section>
  );
};
