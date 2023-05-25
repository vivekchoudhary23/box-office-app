import { useState } from 'react';
import { searchForShow } from '../api/ApiData';
const Home = () => {
  const [inputValue, setinputValue] = useState('');
  const [apiData, setApiData] = useState(null);
  const [apiDataError, setApiDataError] = useState(null);

  const onClickChange = ev => {
    setinputValue(ev.target.value);
  };
  const submitForm = async ev => {
    ev.preventDefault();

    try {
      setApiDataError(null);
      const result = await searchForShow(inputValue);
      setApiData(result);
    } catch (error) {
      setApiDataError(error);
    }
  };
  const renderData = () => {
    if (apiDataError) {
      return <div>Error occured {apiDataError.message}</div>;
    }
    if (apiData) {
      return apiData.map(data => (
        <div key={data.show.id}>{data.show.name}</div>
      ));
    } else return null;
  };
  return (
    <div>
      <form onSubmit={submitForm}>
        <input type="text" value={inputValue} onChange={onClickChange} />
        <button type="button"> Submit </button>
      </form>
      <div>{renderData()}</div>
    </div>
  );
};
export default Home;
