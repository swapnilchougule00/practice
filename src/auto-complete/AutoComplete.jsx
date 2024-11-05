/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import SuggestionsList from "./SuggestionsList";

export const AutoComplete = ({
  placeholder,
  CustomLoading,
  fetchSuggestions,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const onChangeInput = (event) => {
    setInputValue(event.target.value);
  };
  const getSuggestions = async (query) => {
    setLoading(true);
    if (query.length > 0) {
      try {
        const res = await fetchSuggestions(query);
        setSuggestions(res);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
  };

  const onSelect = (value) => {
    setInputValue(value.name);
  };

  useEffect(() => {
    let timeout;

    if (inputValue.length > 0) {
      timeout = setTimeout(() => {
        getSuggestions(inputValue);
      }, 400);
    } else {
      setSuggestions([]);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [inputValue]);
  return (
    <div className="w-[500px]">
      <input
        className="border-2 w-full p-2 rounded-md"
        type="text"
        placeholder={placeholder}
        value={inputValue}
        onChange={onChangeInput}
      />
      {loading && <p>{CustomLoading}</p>}
      {inputValue.length > 0 && suggestions.length > 0 && !loading && (
        <SuggestionsList onSelectItem={onSelect} suggestions={suggestions} />
      )}
    </div>
  );
};
