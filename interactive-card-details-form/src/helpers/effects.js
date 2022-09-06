const { width, height } = wrapper.getBoundingClientRect();
const halfWidth = width / 2;
const halfHeight = height / 2;

element.addEventListener("mousemove", (e) => {
  const { offsetX, offsetY } = e;
  const rotationX = ((offsetX - halfWidth) / halfWidth) * 10;
  const rotationY = ((offsetY - halfHeight) / halfHeight) * 10;
  element.style.transform = `rotateX(${rotationX}deg) rotateY${rotationY}deg))`;
});
