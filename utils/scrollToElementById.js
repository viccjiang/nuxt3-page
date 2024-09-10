export const scrollToElementById = (id, headerHeight) => {
  const targetElement = document.getElementById(id);
  const pageContainer = document.getElementById('page-container');

  if (targetElement && pageContainer) {
    const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY;

    const scrollTopPosition = offsetTop - headerHeight;

    // 確保目標元素渲染好後進行滾動
    setTimeout(() => {
      window.scrollTo({
        top: scrollTopPosition,
        behavior: 'smooth'
      });
    }, 100);
  }
};
