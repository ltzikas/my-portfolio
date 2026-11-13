export const useSectionBackground = () => {
  const backgrounds = {
    hero:       'bg-white dark:bg-slate-900',
    about:      'bg-slate-50 dark:bg-slate-800',
    skills:     'bg-white dark:bg-slate-900',
    experience: 'bg-slate-50 dark:bg-slate-800',
    projects:   'bg-white dark:bg-slate-900',
    services:   'bg-sky-50/60 dark:bg-sky-950/20',
    contact:    'bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900',
  } as const

  const sectionClasses = 'py-24 border-t border-slate-200/60 dark:border-white/5 transition-colors duration-300'

  return {
    backgrounds,
    sectionClasses,
  }
}
