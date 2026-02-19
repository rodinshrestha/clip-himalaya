export const goToSection = (id: string) => {
  const section = document.getElementById(id);
  console.log(section);
  if (!section) return;

  section.scrollIntoView({ behavior: 'smooth', block: 'start' });
};
