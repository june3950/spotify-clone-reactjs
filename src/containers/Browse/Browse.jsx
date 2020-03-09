import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBrowseStart, getReleasesStart } from './browseActions';
import LibraryItem from '../../components/LibraryItem/LibraryItem';
import {
  LibraryItemsContainer,
  SectionTitleContainer,
  SectionTitle
} from '../../components/LibraryItem/playlistItemStyles';
import { BrowseContainer } from './browseStyles';

const Browse = () => {
  const dispatch = useDispatch();

  const { list, releases, loading } = useSelector(({ browse }) => browse);

  React.useEffect(() => {
    dispatch(getBrowseStart());
    dispatch(getReleasesStart());
  }, [dispatch]);

  if (loading) return <h1>loading</h1>;

  return (
    <BrowseContainer>
      <SectionTitleContainer>
        <SectionTitle>New Releases</SectionTitle>
      </SectionTitleContainer>

      <LibraryItemsContainer>
        {releases?.map(({ id, name, images }) => (
          <LibraryItem
            key={name}
            id={id}
            name={name}
            cover={images[0].url}
            type='album'
          />
        ))}
      </LibraryItemsContainer>
      <SectionTitleContainer>
        <SectionTitle>Your top genres</SectionTitle>
      </SectionTitleContainer>

      <LibraryItemsContainer>
        {list?.map(({ name, icons }) => (
          <LibraryItem
            key={name}
            name={name}
            cover={icons[0]?.url}
            isPlayable={false}
          />
        ))}
      </LibraryItemsContainer>
    </BrowseContainer>
  );
};

export default React.memo(Browse);
