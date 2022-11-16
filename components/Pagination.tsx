import { useState } from 'react';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';
import { v4 } from 'uuid';
import { usePage } from '../context/pageContext';

const MAX_PAGE = 20;
const OFFSET = 5;
const MAX_INDEX = MAX_PAGE / OFFSET - 1;

const Pagination = () => {
  const [index, setIndex] = useState(0);
  const { handlePage } = usePage();

  const handlePreviewIndex = () => {
    index === 0 ? index : setIndex((prev) => prev - 1);
  };

  const handleNextIndex = () => {
    index === MAX_INDEX ? MAX_INDEX : setIndex((prev) => prev + 1);
  };

  return (
    <div className="flex space-x-4 mt-2 ml-4">
      <button onClick={handlePreviewIndex}>
        <AiFillCaretLeft />
      </button>
      <div className="flex space-x-2">
        {pages.slice(index * OFFSET, OFFSET + index * OFFSET).map((page) => (
          <div
            key={v4()}
            onClick={() => handlePage && handlePage(page)}
            className="flex justify-center items-center w-6 h-6 bg-sky-600 p-1 text-white hover:bg-sky-400 transition-all cursor-pointer rounded-md"
          >
            <span className="text-sm">{page}</span>
          </div>
        ))}
      </div>
      <button onClick={handleNextIndex}>
        <AiFillCaretRight />
      </button>
    </div>
  );
};
export default Pagination;

const pages: number[] = [];

let i = 1;
for (i; i < MAX_PAGE; i++) {
  pages.push(i);
}
