import MediaLists from '../components/MediaLists/MediaLists';
import SplashScreen from '../components/SplashScreen/SplashScreen';
import VideoPlayer from '../components/VideoPlayer/VideoPlayer';
import Layout from '../containers/Layout/Layout';
import useLogin from '../hooks/useLogin';
import useMediaLists from '../hooks/useMediaLists';
import BackDrop from '../elements/BackDrop';

function Home() {
  const { loading, login } = useLogin();
  const { mediaLists, isMediaListsLoading } = useMediaLists({ login });

  if (loading || (!loading && isMediaListsLoading)) {
    return (
      <Layout>
        <SplashScreen
          loading={loading}
          login={login}
          isMediaListLoading={isMediaListsLoading}
        />
      </Layout>
    );
  }

  return (
    <Layout>
      <BackDrop />
      <VideoPlayer />
      {!!mediaLists && <MediaLists mediaLists={mediaLists} />}
    </Layout>
  );
}

export default Home;
