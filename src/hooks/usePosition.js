const usePosition = () => {
  const getCenterOfDiv = (navItemRef) => {
    const x = navItemRef.current.getBoundingClientRect().x;
    const width = navItemRef.current.getBoundingClientRect().width;
    const y = navItemRef.current.getBoundingClientRect().y;
    const height = navItemRef.current.getBoundingClientRect().height;

    return [x + width / 2, y + height / 2];
  };

  return { getCenterOfDiv };
};

export default usePosition;
