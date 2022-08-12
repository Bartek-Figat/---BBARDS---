import { Box, Header, Content, Wrapper } from "./list.props";

export const SummaryList: React.FunctionComponent = () => {
  return (
    <Wrapper>
      <Header>
        <Box className="bg-gradient-to-r from-rose-700 to-pink-600">
          <Content>
            <h2 className="text-white text-5xl">2433</h2>
            <p className="text-white text-xl">Listing Ads</p>
          </Content>
        </Box>
        <Box className="bg-gradient-to-r from-emerald-500 to-lime-600">
          <Content>
            <h2 className="text-white text-5xl">2433</h2>
            <p className="text-white text-xl">Total Followers</p>
          </Content>
        </Box>
        <Box className="bg-gradient-to-b from-orange-500 to-yellow-300">
          <Content>
            <h2 className="text-white text-5xl">2433</h2>
            <p className="text-white text-xl">Total Followers</p>
          </Content>
        </Box>
      </Header>
    </Wrapper>
  );
};
