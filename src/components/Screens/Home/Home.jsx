import styles from './Home.module.css';
import ModalContent from './Modal/Modal';
import ButtonOpenModale from './../UI/Button/ButtonOpenModale';
import {ModalProvider} from '../../../Context/Context';

function Home() {
  return (
    <div>
      <ModalProvider>
        <div className={styles.home}>
          <h1>Exemple title Modal</h1>
          <ButtonOpenModale/>
          <ModalContent/>
        </div>
      </ModalProvider>
    </div>

  );
}

export default Home;
