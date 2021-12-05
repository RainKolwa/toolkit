/**
 * 移除HTML标签
 * @param {String} content html
 */
export const removeTag = (content) => {
  return typeof content === "string"
    ? content.replace(/<\/?[a-zA-Z].*?>+/gm, "")
    : "";
};

/**
 * 移除内联样式表
 * @param {String} content html
 */
export const removeStyle = (content) => {
  return typeof content === "string"
    ? content.replace(/<style.*?>.*?<\/style>/gm, "")
    : "";
};
