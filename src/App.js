import useSearch from './hooks/useSearch';
import SectionApp, { WrapperInput, Input, Title } from './components/Styles';
import { UilTimes } from '@iconscout/react-unicons';
import { useEffect, useState } from 'react';

function App() {
  const [isIcon, setIsIcon] = useState(false);
  const [isInput, setIsInput] = useState('');
  const search = useSearch(isInput);
  // console.log(search);

  const handlerReset = () => {
    setIsIcon(false);
    setIsInput('');
  };
  const handlerInput = (e) => setIsInput(e.target.value);
  useEffect(() => {
    if (isInput.length !== 0) return setIsIcon(true);
    return setIsIcon(false);
  }, [isInput]);

  return (
    <SectionApp>
      <Title>Search Engine 🤣</Title>
      <WrapperInput>
        <Input placeholder="Search .." onChange={(e) => handlerInput(e)} value={isInput} />
        {isIcon ? <UilTimes className="icon" onClick={handlerReset} /> : null}
      </WrapperInput>
      <button>Search</button>
      {search?.map((item, idx) => (
        <p key={idx}>{item}</p>
      ))}
    </SectionApp>
  );
}

export default App;
