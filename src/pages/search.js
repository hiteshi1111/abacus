import React, { useContext, useEffect } from 'react'
import { UIContext } from '../context';
import GetServices from '../utils/getServices';
import GetPageData from '../utils/getPageData';
import GetBlogs from '../utils/getBlogs';
import homeData from "../data/searchPages.json";
import { Link } from 'gatsby';
import { MdClose, MdSearch } from 'react-icons/md';
import Seo from '../components/shared/seo';

const Search = () => {
    const { searchKey, setSearchKey, searchedData, setSearchedData } = useContext(UIContext);
    const allBlogs = GetBlogs();
    const allServices = GetServices();
    const allPageData = GetPageData();

    useEffect(() => {
        if (searchKey.length > 0){
            const key = searchKey?.toLowerCase();
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
            setSearchedData(filtered);
        }else{
            setSearchedData([]);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[searchKey, allBlogs, allServices, allPageData]);

    return (
        <>
        <Seo
            title="Search"
            description="Abacus Cloud"
            noIndex
        />
        <section className="container !max-w-[1000px]">
            <div className='w-full gap-[10px] flex relative max-w-[600px] mx-auto'>
                <MdSearch size={25} className='absolute inset-y-[10px] left-[10px]'/>
                <input
                    placeholder='Search...'
                    value={searchKey}
                    onChange={(e) => setSearchKey(e.target.value)}
                    className='h-[45px] px-[50px] border focus:border-[#1E40AF] focus:shadow-[0_0_2px_#3c62e9] outline-none w-full'
                />
                {searchKey.length > 0 && (
                    <MdClose 
                        size={25} 
                        className='absolute inset-y-[10px] right-[10px] cursor-pointer'
                        onClick={() => {
                            setSearchKey("");
                            setSearchedData([]);
                        }}
                    />
                )}
            </div>
            <div className='mt-[50px]'>
                {searchedData.length !== 0 ? (
                    <div className='grid grid-cols-1 gap-[20px] 2xl:gap-[30px]'>
                        <p className='text-[16px] text-black text-center'>Showing {searchedData.length} Results</p>
                        {searchedData.map((item, i) => (
                            <Link
                                key={i}
                                to={item.handle === "home" ? "/" : `${item.path + item.handle}`} 
                                className='border p-[30px] shadow-md'>
                                <h4>{item.title}</h4>
                                {item.shortDescription && (
                                    <p className='text-[16px]'>{item.shortDescription}</p>
                                )}
                                {!item.shortDescription && item.metaDescription && (
                                    <p className='text-[16px]'>{item.metaDescription.metaDescription}</p>
                                )}
                                <span className='uppercase text-[14px]'>{item.path.replaceAll("/","")}</span>
                            </Link>
                        ))}
                    </div>
                ):(
                    searchKey.length > 0 && (
                        <div className='w-full text-center text-[20px]'>No Searched Results</div>
                    )
                )}
            </div>
        </section>
        </>
    )
}

export default Search;