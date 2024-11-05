/* eslint-disable react/prop-types */
const SuggestionsList = ({ suggestions, onSelectItem }) => {
  return (
    <div className="border w-[500px] *:p-2 *:cursor-pointer">
      {suggestions?.map((item, index) => (
        <p onClick={() => onSelectItem(item)} key={index}>
          {item.name}
        </p>
      ))}
    </div>
  );
};

export default SuggestionsList;
