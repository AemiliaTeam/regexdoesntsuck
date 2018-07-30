const strings = ['First Item', 'Second_item', 'thirdItem', '4th item'];

export default strings.map(string => {
  return {
    text: string,
    match: false
  };
});
