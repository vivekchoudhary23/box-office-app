const AppTitle = props => {
  const { title = 'BOX OFFICE APP', subtitle = 'Searching for Movie' } = props;
  return (
    <div>
      <h1>{title}</h1>
      <h3>{subtitle}</h3>
    </div>
  );
};
export default AppTitle;
