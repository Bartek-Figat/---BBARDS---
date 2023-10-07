import { Listbox, RadioGroup } from "@headlessui/react";
import React, { useState } from "react";
import Autosuggest, {
  ChangeEvent,
  SuggestionsFetchRequestedParams,
} from "react-autosuggest";

interface Props {
  words: string[];
}

const WordSuggestions: React.FC<Props> = ({ words }) => {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const getSuggestions = (inputValue: string) => {
    const inputValueLowerCase = inputValue.toLowerCase();
    const filteredWords = words.filter((word) =>
      word.toLowerCase().startsWith(inputValueLowerCase)
    );
    return filteredWords.slice(0, 5); // Limit the suggestions to 5
  };

  const onSuggestionsFetchRequested = (
    params: SuggestionsFetchRequestedParams
  ) => {
    const { value } = params;
    setSuggestions(getSuggestions(value));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const getSuggestionValue = (suggestion: string) => suggestion;

  const renderSuggestion = (suggestion: string) => (
    <Listbox>
      <Listbox.Option key={suggestion} value={suggestion}>
        {({ active }) => (
          <div
            className={`${
              active ? "bg-blue-500 text-white" : "text-gray-900"
            } cursor-default select-none relative py-2 pl-3 pr-9`}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <span className="block truncate">{suggestion}</span>
          </div>
        )}
      </Listbox.Option>
    </Listbox>
  );

  const rendeuggestion = (suggestion: string) => (
    <RadioGroup key={suggestion} value={suggestion}>
      <RadioGroup.Option
        key={suggestion}
        value={suggestion}
        className={({ active, checked }) =>
          `${
            active
              ? "ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300"
              : ""
          }
                  ${
                    checked ? "bg-sky-900 bg-opacity-75 text-white" : "bg-white"
                  }
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
        }
      >
        {({ active, checked }) => (
          <>
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center">
                <div className="text-sm">
                  <RadioGroup.Label
                    as="p"
                    className={`font-medium  ${
                      checked ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {suggestion}
                  </RadioGroup.Label>
                </div>
              </div>
            </div>
          </>
        )}
      </RadioGroup.Option>
    </RadioGroup>
  );

  return (
    <Autosuggest
      suggestions={suggestions}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={rendeuggestion}
      inputProps={{
        placeholder: "Enter text...",
        value,
        onChange: (event, { newValue }: ChangeEvent) => {
          setValue(newValue);
        },
        // onKeyDown: (event) => {
        //   const target = event.target as HTMLElement; // Typecast event.target as HTMLElement
        //   if (event.key === "ArrowDown") {
        //     target.classList.add("bg-blue-500"); // Apply Tailwind CSS class for ArrowDown event
        //   } else if (event.key === "ArrowUp") {
        //     target.classList.add("bg-green-500"); // Apply Tailwind CSS class for ArrowUp event
        //   } else if (event.key === "Enter") {
        //     target.classList.add("bg-red-500"); // Apply Tailwind CSS class for Enter event
        //   }
        // },
      }}
    />
  );
};

export default WordSuggestions;
