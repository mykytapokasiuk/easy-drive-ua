import css from './HomePage.module.css';
import HomePageTitle from '../../components/HomePageTitle/HomePageTitle.jsx';

const HomePage = () => {
  return (
    <section className={css.sectionContainer}>
      <HomePageTitle />
    </section>
  );
};

export default HomePage;
