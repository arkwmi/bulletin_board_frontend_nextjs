"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import style from "./SearchBar.module.css";

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/search?query=${query}`);
  };

  return (
    <div className={style.searchForm}>
      <form onSubmit={handleSearch}>
        <input className={style.searchInput}
          type="text"
          name="query"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="検索ワード"
        />
        <button className={style.searchButton} type="submit">検索</button>
      </form>
    </div>
  );
};

export default SearchBar;