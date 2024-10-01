"use client";


import { type Module, getModules } from '@/lib/services';
import React, { useState, useEffect, useDeferredValue } from 'react';

export function ModuleList() {
  const [modules, setModules] = useState<Module[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const deferredSearchQuery = useDeferredValue(searchQuery);

  useEffect(() => {
    fetchModules();
  }, [page, deferredSearchQuery, sortOrder]);

  const fetchModules = async () => {
    setLoading(true);
    const fetchedModules = await getModules(page, deferredSearchQuery);

    const sortedModules = [...fetchedModules].sort((a, b) =>
      sortOrder === 'asc' ? a.stars - b.stars : b.stars - a.stars
    );

    setModules(sortedModules);
    setLoading(false);
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(event.target.value as 'asc' | 'desc');
  };

  return (
    <div className="p-4">
      <div className='flex gap-4'>
        <input
          type="text"
          className="mb-4 p-2 border border-gray-300 rounded w-full"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <div className="flex justify-end mb-4">
          <select
            value={sortOrder}
            onChange={handleSortChange}
            className="px-4 py-2 border border-gray-300 rounded hover:border-blue-500"
          >
            <option value="asc">Sort by Stars (Ascending)</option>
            <option value="desc">Sort by Stars (Descending)</option>
          </select>
        </div>
      </div>

      <div className='border p-2'>
        <div className="grid grid-cols-1 sm:grid-cols-4 p-4 font-semibold">
          <div className="col-span-2 text-[#00acee] font-bold text-base">Name</div>
          <div className="col-span-1 text-[#00acee] font-bold text-base hidden sm:block">Owner</div>
          <div className="col-span-1 text-[#00acee] font-bold text-base hidden sm:block">Stars</div>
        </div>

        {loading ? (
          <p className="text-center p-4">Loading search results...</p>
        ) : modules.length === 0 ? (
          <p className='p-4 text-center'> No results, please try different query</p>
        ) : (
          <>
            <div className="divide-y divide-gray-200">
              {modules.map((mod) => (
                <div
                  key={mod.name}
                  className="grid grid-cols-1 sm:grid-cols-4 p-4 hover:bg-gray-100"
                >
                  <div className="col-span-2 space-y-4 flex flex-col">
                    <span>{mod.name}</span>

                    <p className="flex gap-2 sm:hidden">
                      <span className="bg-[#cecece] text-[#543729] text-xs">Owner: <span>mzabriskie</span></span>
                      <span className="bg-[#cecece] text-[#543729] text-xs">Stars: <span>105299</span></span>
                    </p>
                  </div>
                  <div className="col-span-1 hidden sm:block">{mod.owner}</div>
                  <div className="col-span-1 hidden sm:block">{mod.stars}</div>
                </div>
              ))}
            </div>

            <div className="flex gap-4 mt-4 p-4">
              <button
                onClick={() => setPage(page - 1)}
                disabled={page === 1}
                className={`${page === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}

              >
                Previous
              </button>
              <button
                onClick={() => setPage(page + 1)}
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

