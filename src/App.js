import useSearch from './hooks/useSearch';
import SectionApp, {
  WrapperInput,
  Input,
  Title,
  WrapperSuggest,
  Button
} from './components/Styles';
import { UilTimes } from '@iconscout/react-unicons';
import { useEffect, useState } from 'react';

function App() {
  const [isIcon, setIsIcon] = useState(false);
  const [isInput, setIsInput] = useState('');
  const [result, setResult] = useState('');
  const [search, setSearch] = useState([]);
  let searchInput = useSearch(isInput);

  const handlerReset = () => {
    setIsIcon(false);
    setIsInput('');
    setResult('');
  };
  const handlerInput = (e) => setIsInput(e.target.value);

  const handlerSubmit = (e) => {
    e.preventDefault();
    setResult(e.target[0].value);
    setSearch([]);
  };

  useEffect(() => {
    if (isInput.length !== 0) return setIsIcon(true);
    return setIsIcon(false);
  }, [isInput]);

  useEffect(() => {
    setSearch(searchInput);
    if (isInput.length === 0) return setResult('');
  }, [searchInput, isInput]);

  return (
    <SectionApp>
      <Title>Search Engine 🤣</Title>

      <WrapperInput onSubmit={handlerSubmit}>
        <Input placeholder="Search .." onChange={(e) => handlerInput(e)} value={isInput} />
        {isIcon ? <UilTimes className="icon" onClick={handlerReset} /> : null}
        <WrapperSuggest data={search}>
          {search?.map((item, idx) => (
            <p key={idx}>{item}</p>
          ))}
        </WrapperSuggest>
      </WrapperInput>
      <Button type="submit">SEARCH</Button>

      <div className="wrapperResult">
        <p>Output : {result.length !== 0 ? result : '-'}</p>
      </div>
    </SectionApp>
  );
}

export default App;
