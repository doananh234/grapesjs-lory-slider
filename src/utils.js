const elHasClass = (el, toFind) => {
  let cls = el.classNames;
  cls = cls && cls.toString();
  if (cls && cls.split(' ').indexOf(toFind) >= 0) return 1;
}

export {
  elHasClass
}
