export const scrollToSection = (href: string) => {
  const hash = href;
  const target = document.querySelector(hash);
  if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
  }
};