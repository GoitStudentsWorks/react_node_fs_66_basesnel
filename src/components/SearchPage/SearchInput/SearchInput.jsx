import ButtonMUI from 'components/Search/ButtonMui';
import InputMUI from 'components/Search/InputMUI';
import { SearchForm } from 'components/Search/Search.styled';

import { useSearchParams } from 'react-router-dom';

export const SearchInput = ({ ver, getCards }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q');
  const handleSubmit = e => {
    e.preventDefault();
    getCards(query);
  };

  return (
    <SearchForm $ver={ver} onSubmit={handleSubmit}>
      <InputMUI
        type="text"
        value={query ?? ''}
        onChange={e => setSearchParams({ q: e.target.value.trim() })}
      />
      <ButtonMUI type="submit">Search</ButtonMUI>
      {/* <SearchBtn type="submit">Search</SearchBtn> */}
    </SearchForm>
  );
};
