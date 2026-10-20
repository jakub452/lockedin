export const createDraggable = (ref) => {
  let offsetX, offsetY;
  // ref.current.style.position = `fixed`;

  const cursorMove = (e) => {
    ref.current.style.left = `${e.clientX - offsetX}px`;
    ref.current.style.top = `${e.clientY - offsetY}px`;
  };

  ref.current.addEventListener("mousedown", (e) => {
    offsetX = e.clientX - ref.current.getBoundingClientRect().left;
    offsetY = e.clientY - ref.current.getBoundingClientRect().top;
    window.addEventListener("mousemove", cursorMove);
  });
  window.addEventListener("mouseup", (e) => {
    window.removeEventListener("mousemove", cursorMove);
  });
};
