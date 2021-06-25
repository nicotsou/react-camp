const AppHeader = () => {
  const isLoggedIn = false;

  return (
    <>
      <h1>Todo</h1>
      { isLoggedIn ? <span>logged in</span> : <span>Guest</span> }
    </>
  );
}

export default AppHeader;
