import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { LANGS, messages, type Lang } from './messages';

interface I18nValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
  langs: typeof LANGS;
}

const STORAGE_KEY = 'aroha.lang';

function detect(): Lang {
  if (typeof window === 'undefined') return 'ko';
  const stored = window.localStorage.getItem(STORAGE_KEY) as Lang | null;
  if (stored && stored in messages) return stored;
  const nav = (window.navigator.language || 'ko').slice(0, 2).toLowerCase();
  if (nav === 'en') return 'en';
  if (nav === 'ja') return 'ja';
  return 'ko';
}

const I18nContext = createContext<I18nValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => detect());

  useEffect(() => {
    document.documentElement.lang = lang;
    window.localStorage.setItem(STORAGE_KEY, lang);
  }, [lang]);

  const setLang = useCallback((l: Lang) => setLangState(l), []);

  const t = useCallback(
    (key: string) => {
      const dict = messages[lang];
      return dict[key] ?? messages.ko[key] ?? key;
    },
    [lang],
  );

  const value = useMemo<I18nValue>(() => ({ lang, setLang, t, langs: LANGS }), [lang, setLang, t]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
}

export function useT(): I18nValue['t'] {
  return useI18n().t;
}
