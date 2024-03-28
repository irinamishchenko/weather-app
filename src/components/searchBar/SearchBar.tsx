import { ChangeEvent } from "react";
import { Input, Button } from "@mui/material";
import "./searchBar.css";

interface SearchBarProps {
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onButtonClick: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  onInputChange,
  onButtonClick,
}) => {
  return (
    <div className="search-bar-container">
      <Input type="text" onChange={onInputChange} />
      <Button onClick={onButtonClick} variant="contained">
        Show the weather
      </Button>
    </div>
  );
};

export default SearchBar;
