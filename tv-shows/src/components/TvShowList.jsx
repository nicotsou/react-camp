const TvShowList = ({ children }) => {
  return (
    <>
      <h1>TV Shows</h1>
      <ul style={{ listStyle: 'none' }}>{children}</ul>
    </>
  );
};

export default TvShowList;
