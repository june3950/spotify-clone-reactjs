import styled from 'styled-components';
import LibraryItem from '../LibraryItem/LibraryItem';

export const TopResultContainer = styled.div`
  grid-column: 1 / 3;
`;
export const TopResultItem = styled(LibraryItem)``;

export const SongsContainer = styled.div`
  grid-column: 3 / -1;

  @media screen and (max-width: 1080px) {
    grid-column: 1 / -1;
  }
`;

export const ArtistsContainer = styled.div`
  grid-column: 1 / -1;
`;
export const AlbumsContainer = styled.div`
  grid-column: 1 / -1;
`;
