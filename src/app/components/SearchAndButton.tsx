import React from "react";
import { BsSearch } from "react-icons/bs";

type Props = {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
};

const SearchAndButton = (props: Props) => {
  return (
    <form
      onSubmit={props.onSubmit}
      className="flex items-center gap-2 w-full shadow-md focus-within:ring-2  dark:focus-within:ring-gray-200 focus-within:ring-slate-800  p-2 rounded-lg  dark:bg-slate-800 bg-white my-5"
    >
      <section className="flex items-center w-full h-full gap-2 ">
        <BsSearch className="text-blue-500 text-2xl ml-1" />
        <input
          value={props.value}
          onChange={props.onChange}
          type="text"
          placeholder="Search github username..."
          className="px-1 w-full bg-inherit h-[40px] outline-none text-sm rounded"
        />
        <button className="bg-blue-500 py-2 px-5 text-white rounded-md">
          Search
        </button>
      </section>
    </form>
  );
};

export default SearchAndButton;
