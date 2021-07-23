const classes = (...classNames: (string | undefined)[]) => {
  return classNames.filter(Boolean).join(' ');
};

export default classes;