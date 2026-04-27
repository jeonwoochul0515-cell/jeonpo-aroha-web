import { useT } from '../i18n/I18nContext';

export default function Footer() {
  const t = useT();
  return (
    <footer>
      <div className="container">
        <div className="foot-grid">
          <div>
            <div className="foot-brand">
              JEONPO ALOHA
              <span className="sub">{t('foot.brand.sub')}</span>
            </div>
            <p>{t('foot.p')}</p>
          </div>

          <div className="foot-col">
            <h4>{t('foot.col1.h')}</h4>
            <ul>
              <li>{t('foot.col1.li1')}</li>
              <li>{t('foot.col1.li2')}</li>
              <li>{t('foot.col1.li3')}</li>
            </ul>
          </div>

          <div className="foot-col">
            <h4>{t('foot.col2.h')}</h4>
            <ul>
              <li>{t('foot.col2.li1')}</li>
              <li>{t('foot.col2.li2')}</li>
              <li>{t('foot.col2.li3')}</li>
            </ul>
          </div>

          <div className="foot-col">
            <h4>{t('foot.col3.h')}</h4>
            <ul>
              <li>
                <a href="https://catchtable.co.kr/jeonpoah" target="_blank" rel="noopener noreferrer">
                  {t('foot.col3.catch')}
                </a>
              </li>
              <li>
                <a
                  href="https://map.naver.com/p/search/%EC%A0%84%ED%8F%AC%20%EC%95%84%EB%A1%9C%ED%95%98"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('foot.col3.naver')}
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/explore/tags/%EC%A0%84%ED%8F%AC%EC%95%84%EB%A1%9C%ED%95%98/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('foot.col3.insta')}
                </a>
              </li>
              <li>
                <a href="tel:010-7334-1272">010-7334-1272</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="foot-bottom">
          <span>{t('foot.copy')}</span>
          <span>{t('foot.tag')}</span>
        </div>
      </div>
    </footer>
  );
}
