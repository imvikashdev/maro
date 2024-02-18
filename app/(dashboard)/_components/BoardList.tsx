'use client';

import EmptyBoards from './EmptyBoard';
import EmptyFavorites from './EmptyFavorites';
import EmptySearch from './EmptySearch';

interface BoardListProps {
  orgId: string;
  query: {
    search?: string;
    favorites?: string;
  };
}

const BoardList = ({ orgId, query }: BoardListProps) => {
  const data = []; //TODO: fetch data

  if (!data.length && query.search) return <EmptySearch />;

  if (!data.length && query.favorites) return <EmptyFavorites />;

  if (!data.length) return <EmptyBoards />;

  return (
    <div>
      <h1>BoardList</h1>
    </div>
  );
};

export default BoardList;
