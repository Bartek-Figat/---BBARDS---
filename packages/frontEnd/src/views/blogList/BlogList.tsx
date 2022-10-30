import { Header } from "./header";
import { BlogSearch } from "./search/BlogSearch";
import { ArticleCard } from "./articles/ArticleCard";
import { articlesMap } from "./articles/Articles";
import { tagsMap } from "./bestTags/Tags";
import { categoriesMap } from "./topCategories/Categories";
import { PopularPostCard } from "./popularPost/PopularPostCard";
import { TopCategories } from "./topCategories/TopCategories";
import { BestTags } from "./bestTags/BestTags";
import { FollowUs } from "./followUs/FollowUs";
import { PaginationArticles } from "./pagination/PaginationArticles";

export const BlogList = () => {
  return (
    <div>
      <Header />

      <div className="flex container pt-20 px-4 pb-16 ">
        <div className="flex xl:flex-row-reverse flex-col gap-6">
          <div className="flex flex-col items-center ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
              {articlesMap.map(
                ({ img, title, date, category, author, avatar, content }) => {
                  return (
                    <ArticleCard
                      avatar={avatar}
                      key={title}
                      img={img}
                      title={title}
                      date={date}
                      category={category}
                      author={author}
                      content={content}
                    />
                  );
                }
              )}
            </div>
            <PaginationArticles />
          </div>

          <div className="flex flex-col items-center max-w-none xl:max-w-md px-4 lg:px-0 ">
            <BlogSearch />

            <div className="bg-gray-chalk rounded-lg border p-3.5 mb-6">
              <div className="border-b mb-4 pb-3.5">
                <p className="text-lg  font-bold ">POPULAR POST</p>
              </div>
              {articlesMap.slice(0, 3).map(({ img, date, title, comments }) => {
                return (
                  <PopularPostCard
                    key={title}
                    img={img}
                    title={title}
                    date={date}
                    comments={comments}
                  />
                );
              })}
            </div>
            <div className="w-full md:max-w-xl bg-gray-chalk rounded-lg border p-3.5 mb-6 ">
              <div className="border-b  pb-3.5 ">
                <p className="text-lg  font-bold ">TOP CATEGORIES</p>
              </div>
              {categoriesMap.map(({ title, value }) => {
                return (
                  <TopCategories key={title} title={title} value={value} />
                );
              })}
            </div>
            <div className="bg-gray-chalk md:max-w-xl rounded-lg border p-3.5 mb-6">
              <div className="w-full  border-b mb-4 pb-3.5">
                <p className="text-lg  font-bold ">BEST TAGS</p>
              </div>
              <div className="flex flex-wrap gap-3">
                {tagsMap.map(({ title }) => {
                  return <BestTags key={title} title={title} />;
                })}
              </div>
            </div>
            <div className="w-full md:max-w-xl  bg-gray-chalk rounded-lg border p-3.5 mb-6">
              <div className="w-full border-b mb-4 pb-3.5">
                <p className="text-lg  font-bold ">FOLLOW US</p>
              </div>
              <FollowUs />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
