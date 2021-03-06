import { useContext } from 'react';

import { PageContext } from './PageContext';

import UiHeaderMobile from '../Body/UiHeaderMobile';

import About from './About';
import Chat from '../Chat/Chat';
import FeedBack from './FeedBack';
import NewsFeed from './NewsFeed';
import SearchPage from './SearchPage';
import Settings from './Settings';
import Trending from './Trending';
import PostPage from './PostPage';
import FollowedList from './FollowedList';


export default function PageContainer() {
    const { activePage } = useContext(PageContext);

    return (
        <div className='newsfeeds'>
            {window.innerWidth < 800 && <UiHeaderMobile />}
              {
                activePage == 'HOME' ? <NewsFeed /> :
                activePage == 'TRENDING' ? <Trending /> : 
                activePage == 'CHAT' ? <Chat /> :
                activePage == 'ABOUT' ? <About /> :
                activePage == 'SETTINGS' ? <Settings /> :
                activePage == 'FOLLOWED LIST' ? <FollowedList />  : 
                activePage == 'GIVE FEEDBACK' ? <FeedBack /> :
                activePage == 'SEARCH' ? <SearchPage /> :
                activePage == 'POST' ? <PostPage /> :
                ''
              }
        </div>
    )
}