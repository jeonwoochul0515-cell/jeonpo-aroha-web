import { useI18n } from '../i18n/I18nContext';

export default function LangSwitcher() {
  const { lang, setLang, langs, t } = useI18n();
  return (
    <div className="lang-switcher" role="group" aria-label={t('lang.aria')}>
      {langs.map((l) => (
        <button
          key={l.code}
          type="button"
          className={lang === l.code ? 'active' : ''}
          onClick={() => setLang(l.code)}
          aria-label={l.full}
          aria-current={lang === l.code ? 'true' : undefined}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}
