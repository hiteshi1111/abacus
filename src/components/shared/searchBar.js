import React, { useContext, useEffect, useRef, useState } from 'react';
import homeData from "../../data/searchPages.json";
import { MdSearch, MdSearchOff } from "react-icons/md";
import { Link, navigate } from 'gatsby';
import GetBlogs from '../../utils/getBlogs';
import GetServices from '../../utils/getServices';
import GetPageData from '../../utils/getPageData';
import { UIContext } from '../../context';

const SearchBar = () => {
  const searchRef = useRef(null);
  const allBlogs = GetBlogs();
  const allServices = GetServices();
  const allPageData = GetPageData();
  const { setSearchKey, setSearchedData } = useContext(UIContext);
  const [ searchKey, setSearchKeyword ] = useState("");
  const [ searchedData, setSearchedContent ] = useState([]);
  
  useEffect(() => {
    const key = searchKey.toLowerCase();
    if (searchKey.length > 0){
      let blogFiltered = allBlogs.filter(({ node }) => {
        return node.title.toLowerCase().includes(key) || node.shortDescription.toLowerCase().includes(key) || node.content?.raw.includes(key);
      }).map(({ node }) => ({ ...node, path: `/blog/`, title: node.title }));

      let serviceFiltered = allServices.filter(({ node }) => {
        return node.title.toLowerCase().includes(key) || node.content?.raw.toLowerCase().includes(key) || node.keywords?.keywords.toLowerCase().includes(key);
      }).map(({ node }) => ({ ...node, path: `/service/`, title: node.title }));

      let pagesFiltered = allPageData.filter(({ node }) => {
        return node.title.toLowerCase().includes(key) || node.content?.raw.toLowerCase().includes(key) || node.keywords?.keywords.toLowerCase().includes(key);
      }).map(({ node }) => ({ ...node, path: `/`, title: node.title }));

      let homeFiltered = homeData.filter(index => {
        return index.title.toLowerCase().includes(key) || index.content?.toLowerCase().includes(key);
      }).map((index) => ({ ...index, path: `/` }));

      let filtered = [...blogFiltered, ...serviceFiltered, ...pagesFiltered, ...homeFiltered];
      setSearchedContent(filtered);
    }else{
      setSearchedContent([]);
    }
  },[searchKey, allBlogs, allServices, allPageData]);

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
        if (searchedData.length > 0){
          setSearchedData(searchedData);
          setSearchKey(searchKey)
          setSearchedContent([]);
          setSearchKeyword("")
          navigate("/search");
        }
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchKeyword("");
        setSearchedContent([])
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [searchKey]);

  function resetHandler(){
    setSearchKeyword("");
    setSearchedContent([]);
  }

  return (
    <>
      <div ref={searchRef} className='relative bg-[#262860] h-[33px] w-full max-w-[250px] flex items-center rounded-[3px] px-[10px]'>
        <MdSearch size="20px" color='#fff'/>
        <input
          placeholder="Search…"
          aria-label='search'
          value={searchKey}
          onChange={(e) => setSearchKeyword(e.target.value)}
          onKeyPress={handleKeyPress}
          className='border-0 bg-[#262860] ml-[10px] outline-none caret-white text-white w-[70px] focus:w-[200px] transition-all duration-500'
        />
        {searchedData.length > 0 && (
          <div className='absolute top-[35px] left-0 right-0 grid z-[10] bg-white shadow-lg'>
            {searchedData.map((item, i) => (
              <Link 
                key={i}
                to={item.handle === "home" ? "/" : `${item.path + item.handle}`}
                aria-label='contact us' 
                onClick={resetHandler} 
                className='px-[10px] py-[5px] border-b text-[14px] last:border-0 hover:bg-[#aaa]'
              >{item.title?.length > 30 ? `${item.title.slice(0, 30)}...` : item.title}</Link>
            ))}
          </div>
        )}
        {searchKey.length > 0 && searchedData.length === 0 && (
          <div className='absolute top-[35px] left-0 right-0 flex items-center z-[10] px-[10px] py-[10px] text-[14px] !rounded-none bg-white'>
            <MdSearchOff size="20px" className='mr-[5px]'/> No results
          </div>
        )}
      </div>
    </>
  );
};

export default SearchBar;