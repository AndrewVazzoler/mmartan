export const range = (from: number, to: number, step: number = 1) => {
  let i = from;
  const range = [];

  while (i <= to) {
    range.push(i);
    i += step;
  }

  return range;
};

export const fetchPageNumbers = (
  totalPages: number,
  currentPage: number,
  pageNeighbours: number
) => {
  const totalBlocks = pageNeighbours * 3;

  if (totalPages > totalBlocks) {
    let pages = [];

    const leftBound = currentPage - pageNeighbours;
    const rightBound = currentPage + pageNeighbours;

    const beforeLastPage = totalPages;

    const test = totalPages - currentPage;

    let startPage = leftBound >= 2 ? leftBound : 1;
    let endPage = rightBound < beforeLastPage ? rightBound : beforeLastPage;

    startPage =
      test <= pageNeighbours - 1
        ? startPage - pageNeighbours + test
        : startPage;
    endPage = startPage <= 2 ? startPage + pageNeighbours * 2 : endPage;

    pages = range(startPage, endPage);
    return [...pages];
  }
  return range(1, totalPages);
};
