import { useEffect, useState } from 'react';
import { useT } from '../i18n/I18nContext';

const STORAGE_KEY = 'aroha.promoSeen';

export default function Promo() {
  const t = useT();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const seen = window.sessionStorage.getItem(STORAGE_KEY);
    if (seen) return;
    const id = window.setTimeout(() => setOpen(true), 700);
    return () => window.clearTimeout(id);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      const onKey = (e: KeyboardEvent) => {
        if (e.key === 'Escape') close();
      };
      window.addEventListener('keydown', onKey);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', onKey);
      };
    }
  }, [open]);

  const close = () => {
    window.sessionStorage.setItem(STORAGE_KEY, '1');
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="promo-backdrop" onClick={close} role="dialog" aria-modal="true">
      <div className="promo-modal" onClick={(e) => e.stopPropagation()}>
        <button className="promo-close" onClick={close} aria-label={t('promo.close')}>
          ✕
        </button>
        <div className="promo-img">
          <img src="/images/promo-feet.jpg" alt={t('promo.alt')} />
        </div>
        <div className="promo-body">
          <span className="promo-tag">{t('promo.tag')}</span>
          <h3 style={{ whiteSpace: 'pre-line' }}>{t('promo.title')}</h3>
          <p>{t('promo.body')}</p>
          <div className="promo-actions">
            <a href="#menu" onClick={close} className="btn-primary">
              {t('promo.cta')}
            </a>
            <button onClick={close} className="btn-ghost btn-ghost-dark">
              {t('promo.close')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
