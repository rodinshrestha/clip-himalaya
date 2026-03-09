export const goToSection = (id: string, offset = 0) => {
  const section = document.getElementById(id);
  if (!section) return;

  const top = section.getBoundingClientRect().top + window.scrollY - offset;

  window.scrollTo({ top, behavior: 'smooth' });
};
